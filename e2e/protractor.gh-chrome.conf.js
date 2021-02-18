// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
// Used to run E2E tests with Chrome (in headless mode)

protractorBaseConfig = require('./protractor.base.conf');
const config = protractorBaseConfig.config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ["--headless", "--no-sandbox", "--disable-gpu"]
  }
};

exports.config = config;