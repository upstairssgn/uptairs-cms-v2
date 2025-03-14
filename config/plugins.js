module.exports = ({ env }) => ({
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
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: env("GCS_BUCKET_NAME"),
        basePath: env("GCS_BASE_PATH"),
        publicFiles: true,
        uniform: false,
      },
    },
  },
});
