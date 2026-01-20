module.exports = ({ env }) => ({
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::home.home",
          draft: {
            url: "http://localhost:3000/home/{locale}",
          },
          published: {
            url: "http://localhost:3000/home/vi",
            query: {
              locale: "{locale}",
            },
          },
        },
      ],
    },
  },
  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5,
    },
  },
  "qrcode-generator": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::exploration.exploration",
          targetField: "url",
        },
      ],
    },
  },
  // upload: {
  //   config: {
  //     provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
  //     providerOptions: {
  //       bucketName: env("GCS_BUCKET_NAME"),
  //       basePath: env("GCS_BASE_PATH"),
  //       publicFiles: true,
  //       uniform: false,
  //     },
  //   },
  // },
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 500 * 1024 * 1024,
      },
      baseUrl: env('APP_URL', 'http://localhost:1337'),    
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
