import logger from '../../utils/logger.js';
import utils from '../../utils/utils.js';

const componentGenerator = {
  description: logger.custom('ddffdd', 'Add a route for project.'),
  prompts: [
    {
      type: 'input',
      name: 'routeName',
      message: 'What\'s the name of the route?'
    }
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
        path: '../src/routes/{{properCase routeName}}/{{properCase routeName}}.jsx',
        templateFile: './route/templates/component.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/routes/{{properCase routeName}}/{{properCase routeName}}Container.js',
        templateFile: './route/templates/container.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/routes/{{properCase routeName}}/{{properCase routeName}}.module.scss',
        templateFile: './route/templates/style.module.scss.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/routes/{{properCase routeName}}/index.js',
        templateFile: './route/templates/index.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/api/{{camelCase routeName}}/{{camelCase routeName}}.js',
        templateFile: './route/templates/api.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/store/actions/{{camelCase routeName}}/{{camelCase routeName}}.js',
        templateFile: './route/templates/action.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/store/reducers/{{camelCase routeName}}/{{camelCase routeName}}.js',
        templateFile: './route/templates/reducer.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/store/sagas/{{camelCase routeName}}/{{camelCase routeName}}.js',
        templateFile: './route/templates/saga.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
    ]

    // MODIFY
    // Routes
    actions.push({
      type: 'modify',
      path: `${utils.getPath()}routes/routes.jsx`,
      pattern: /(\/\/ @generator routes:define:auth)/gm,
      templateFile: './route/templates/route.js.hbs',
    });
    actions.push({
      type: 'modify',
      path: `${utils.getPath()}routes/routes.jsx`,
      pattern: /(\/\/ @generator routes:import)/gm,
      templateFile: './route/templates/import.js.hbs',
    });
    // Reducer
    actions.push({
      type: 'modify',
      path: `${utils.getPath()}store/reducers/index.js`,
      pattern: /(\/\/ @generator reducer:import)/gm,
      templateFile: './route/templates/reducer-import.js.hbs',
    });
    actions.push({
      type: 'modify',
      path: `${utils.getPath()}store/reducers/index.js`,
      pattern: /(\/\/ @generator reducer:export)/gm,
      templateFile: './route/templates/reducer-export.js.hbs',
    });
    // Sagas
    actions.push({
      type: 'modify',
      path: `${utils.getPath()}store/sagas/index.js`,
      pattern: /(\/\/ @generator sagas:import)/gm,
      templateFile: './route/templates/sagas-import.js.hbs',
    });
    actions.push({
      type: 'modify',
      path: `${utils.getPath()}store/sagas/index.js`,
      pattern: /(\/\/ @generator sagas:export)/gm,
      templateFile: './route/templates/sagas-export.js.hbs',
    });

    return actions
  }
}

export default componentGenerator;
