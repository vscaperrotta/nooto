import logger from '../../utils/logger.js';
import utils from '../../utils/utils.js';

const componentGenerator = {
  description: logger.custom('ddffdd', 'Add a component for project.'),
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'What\'s the name of the component?'
    },
    {
      type: 'confirm',
      name: 'container',
      message: 'Do you want to include container?',
      default: false,
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
        type: 'add',
        path: `${utils.getPath()}/components/{{properCase componentName}}/{{properCase componentName}}.jsx`,
        templateFile: './component/templates/component.jsx.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: `${utils.getPath()}/components/{{properCase componentName}}/{{properCase componentName}}.module.scss`,
        templateFile: './component/templates/style.module.scss.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: `${utils.getPath()}/components/{{properCase componentName}}/index.js`,
        templateFile: './component/templates/index.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
    ];

    if (data.container) {
      actions.push({
        type: 'add',
        path: `${utils.getPath()}/components/{{properCase componentName}}/{{properCase componentName}}Container.js`,
        templateFile: './component/templates/container.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      });
    }

    return actions
  }
}

export default componentGenerator;
