/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},

    's3-index': {
      accessKeyId:      process.env['AWS_ACCESS_KEY_ID'],
      secretAccessKey:  process.env['AWS_SECRET_ACCESS_KEY'],
      bucket:           process.env['AWS_BUCKET'],
      region:           process.env['AWS_REGION'],
      activateOnDeploy: process.env['TRAVIS_BRANCH'] === 'master'
    },

    s3: {
      accessKeyId:     process.env['AWS_ACCESS_KEY_ID'],
      secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
      bucket:          process.env['AWS_BUCKET'],
      region:          process.env['AWS_REGION']
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
  }

  return ENV;
};
