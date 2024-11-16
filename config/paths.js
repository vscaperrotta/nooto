import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const buildPath = process.env.BUILD_PATH || 'build';

const deployPath = process.env.DEPLOY_PATH || 'dist';

const APP_PATHS = {
  appPath: resolveApp('.'),
  appBuild: resolveApp(buildPath),
  appDist: resolveApp(deployPath),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
  appPackageJson: resolveApp('package.json'),
};

export default APP_PATHS;
