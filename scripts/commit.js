import _ from 'lodash';
import inquirer from 'inquirer';
import { exec, spawn } from 'child_process';
import logger from '../utils/logger.js';
import utils from '../utils/utils.js';

const spinner = utils.getSpinner({ color: 'green', spinner: 'aesthetic', frame: 120 });
const execute = commands => spawn(commands, { stdio: 'inherit', shell: true });
const resetStage = () => exec('git reset');

function killProcess() {
  logger.warn(`It's seems to be like, you don't have any files to stage. Please edit some files before proceed.`);
  process.exit(0);
}

console.clear();

resetStage();

logger.debug('#############################################################\n');
logger.debug('\t\t*** Commit Bash Flow ***\n');
logger.debug('#############################################################\n');

/**
 * *Create Flow Process
 * @returns {Promise<any>}
 */
function commit() {
  return new Promise(() => {
    exec(`git status --short`, (err, data) => {
      setTimeout(() => {
        spinner.succeed('All files retrieved');
        logger.divider();
        let choiches = [];

        _.forEach(data.split('\n'), (val) => {
          if (val.length > 0) {
            choiches.push({ name: val, value: val.replace(/[??]+|A|MM|M|D/, '').trim() });
          }
        });

        if (choiches.length === 0) killProcess();

        setTimeout(() => {
          spinner.start = 'Preparing files to choice';
          setTimeout(() => {
            spinner.succeed('Process completed');
            logger.divider();
            inquirer
              .prompt({
                name: 'options',
                type: 'checkbox',
                message: 'Choose the files to commit:',
                choices: choiches,
                pageSize: 10
              })
              .then((answers) => {
                exec(`git add ${answers.options.join(' ')}`, (error, data) => {
                  if (error) {
                    spinner.fail('Something goes wrong');
                    logger.error(`Error: ${error}`);
                    resetStage();
                    return;
                  }
                  const git_cz = execute('npm run git-cz');
                  git_cz.on('close', (code) => {
                    console.log(`child process exited with message\n ${code}`);
                  });
                });
              })
          }, 300);
        }, 300);
      }, 300);
    });
  });
}

/**
 * *Run
 */
(async () => {
  await commit();
})();
