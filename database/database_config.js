module.exports = {
  prod: {
    uri: 'mongodb://examscheduler.documents.azure.com:10255/admin?ssl=true',
    options: {
      auth: {
        user: 'examscheduler',
        password: '7ls6FfIEPsREaxQZHfaIu5xTKlPubw0QgmFwvKS0WRhNsUQBQtCZGGpSu3Fz07mYKmsRWjsuo6AvbzMAhvMYqw=='
      }
    }
  },
  test: {
    uri: 'mongodb://examscheduler.documents.azure.com:10255/admin_test?ssl=true',
    options: {
      auth: {
        user: 'examscheduler',
        password: '7ls6FfIEPsREaxQZHfaIu5xTKlPubw0QgmFwvKS0WRhNsUQBQtCZGGpSu3Fz07mYKmsRWjsuo6AvbzMAhvMYqw=='
      }
    }
  }
};