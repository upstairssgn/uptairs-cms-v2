module.exports = {
    'qrcode-generator': {
      enabled: true,
      config: {
        contentTypes: [
          {
            uid: 'api::exploration.exploration',
            targetField: 'url',
            // frontend: {
            //   basePath: '',
            // },
          },
        ],
      },
    },
  };