/* eslint-disable no-console */

import chalk from 'chalk';
// import ip from 'ip';

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {
  // Called whenever there's an error on the server we want to print
  info: info => console.log(chalk.blue(`ℹ ${info}`)),
  error: err => console.log(chalk.red(`✖ ${err}`)),
  success: success => console.log(chalk.green(`✔ ${success}`)),
  warn: warn => console.log(chalk.yellow(`⚠ ${warn}`)),
  fail: fail => console.log(chalk.hex('#f44336').bold(fail)),
  debug: txt => console.log(chalk.green(txt)),
  datainfo: info => console.log(chalk.cyan(`DATA => ${JSON.stringify(info, null, '  ')}`)),
  log: log => chalk.blueBright(log),
  message: message => console.log(chalk.hex('#2196f3').underline(message)),
  custom: (hex, txt) => console.log(chalk.hex(`#${hex}`)(txt)),
  process: (txt, hex = null) => console.log(`${hex ? chalk.hex(`#${hex}`)(txt) : txt}`),
  customProcess: (txt, hex = null, clText) => console.log(`${txt} ${hex ? chalk.hex(`#${hex}`)(clText) : ''}\n`),
  delayLog: msg => () => new Promise((resolve) => {
    setTimeout(() => resolve(msg), 1000);
  }),
  divider: () => console.log(chalk.gray('\n-----------------------------------')),
};

export default logger;
