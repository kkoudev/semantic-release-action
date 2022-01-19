const path = require('path');
const core = require('@actions/core');
const execSync = require('child_process').execSync;

/**
 * Pre-install extra dependecies
 * @returns {Promise<void>}
 */
module.exports = async extras => {
  if (!extras) {
    return Promise.resolve();
  }

  const _extras = extras.replace(/['"]/g, '').replace(/[\n\r]/g, ' ');

  const result = execSync(`npm install ${_extras}`, {
    encoding: 'utf-8',
    cwd: path.resolve(__dirname, '..')
  });
  core.debug(JSON.stringify(result));
  core.error(JSON.stringify(result));
};
