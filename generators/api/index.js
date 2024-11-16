import logger from '../../utils/logger.js';
import utils from '../../utils/utils.js';

const apiGenerator = {
  description: logger.custom('ddffdd', 'Add an api for project.'),
  prompts: [
    {
      type: 'list',
      name: 'whichApi',
      message: 'On which API want to add a method?',
      pageSize: 12,
      choices: () => {
        const myChoiches = utils.readDir(`${utils.getPath()}api/`);
        const list = [];
        myChoiches.forEach((m) => {
          if (utils.isDirectory(`${utils.getPath()}api/${m}`)) {
            list.push(m);
          }
        });
        return list;
      },
    },
    {
      type: 'input',
      name: 'methodName',
      message: 'What\'s the name of the method?',
      pageSize: 10,
    },
    {
      type: 'input',
      name: 'url',
      message: 'What\'s the url of the method (if you know it)',
      filter: (input) => {
        if (input !== undefined) {
          if (input.substr(-1) === '/' && input.substr(input.length - 1) === '/') {
            input = input.substr(1, (input.length - 2));
          }
          return input.replace(/\s/g, '');
        }
        return '';
      },
      when: a => a.methodName !== '',
    },
    {
      type: 'list',
      name: 'type',
      message: 'Select the method type',
      choices: [
        'get',
        'post',
        'put',
        'delete'
      ],
      default: 'post',
      when: a => a.url !== '',
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
        path: '../src/api/{{whichApi}}/{{whichApi}}.js',
        pattern: /(\/\/ @generator api:method)/gm,
        templateFile: './api/templates/api.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      }
    ]

    return actions
  }
}

export default apiGenerator;
