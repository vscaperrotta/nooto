import logger from '../../utils/logger.js';
import utils from '../../utils/utils.js';

const apiGenerator = {
  description: logger.custom('ddffdd', 'Add an api for project.'),
  prompts: [
    {
      type: 'list',
      name: 'whichSaga',
      message: 'On which Route want to add a saga?',
      pageSize: 12,
      choices: () => {
        const myChoiches = utils.readDir(`${utils.getPath()}store/sagas/`);
        const list = [];
        myChoiches.forEach((m) => {
          if (utils.isDirectory(`${utils.getPath()}store/sagas/${m}`)) {
            list.push(m);
          }
        });
        return list;
      },
    },
    {
      type: 'input',
      name: 'sagaName',
      message: 'What\'s the name of the saga?',
      pageSize: 10,
    },
  ],
  actions: (data) => {
    data.username = utils.getAuthor();
    data.date = utils.getDate();

    const actions = [
      logger.delayLog('Collect all answers'),
      logger.delayLog('Configure all templates'),
      logger.delayLog('Converting hbs template'),
      logger.delayLog('Adding component'),
      {
        type: 'modify',
        path: `${utils.getPath()}/store/sagas/{{whichSaga}}/{{whichSaga}}.js`,
        pattern: /(\/\/ @generator saga:method)/gm,
        templateFile: './saga/templates/method.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: 'modify',
        path: `${utils.getPath()}/store/sagas/{{whichSaga}}/{{whichSaga}}.js`,
        pattern: /(\/\/ @generator saga:watch)/gm,
        templateFile: './saga/templates/watcher.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: 'modify',
        path: `${utils.getPath()}/store/sagas/{{whichSaga}}/{{whichSaga}}.js`,
        pattern: /(\/\/ @generator saga:fork)/gm,
        templateFile: './saga/templates/fork.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
    ]

    return actions
  }
}

export default apiGenerator;
