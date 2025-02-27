// config-overrides.js
module.exports = {
    webpack: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
        process: require.resolve('process/browser'),
        vm: require.resolve('vm-browserify'), // Add this line for vm
      };
      return config;
    },
  };
  