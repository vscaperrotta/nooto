import logger from '../../utils/logger.js';
import utils from '../../utils/utils.js';

const apiGenerator = {
  description: logger.custom('ddffdd', 'Add an api for project.'),
  prompts: [
    {
      type: 'input',
      name: 'selectorName',
      message: 'What\'s the name of the selector?'
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
        path: `${utils.getPath()}/store/selectors/index.js`,
        pattern: /(\/\/ @generator selector:method)/gm,
        templateFile: './selector/templates/method.js.hbs',
        abortOnFail: true,
        skipIfExists: true,
      },
    ]

    return actions
  }
}

export default apiGenerator;
