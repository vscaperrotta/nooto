
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import ora from 'ora';

const utils = {
  /**
   * Return base path
   *
   */
  getPath: () => path.join(process.cwd(), `/src/`),
  /**
   * List every Route
   *
   */
  readDir: srcPath => fs.readdirSync(srcPath),
  /**
   * Return true if is a dir
   *
   * @param  {string} The string to validate
   */
  isDirectory: string => fs.lstatSync(string).isDirectory(),
  /**
   * Trim template
   *
   */
  getAuthor: () => execSync('git config --get user.name').toString().replace(/\n/, ''),
  getDate: () => new Date().toGMTString().slice(5, 16).replace(/\s/g, '-'),
  getSpinner: conf => ora(conf),
};

export default utils;
