const target = (process.env.TARGET || 'local');

const environments = {
  local: {
    NODE_ENV: 'development',
    namingScheme: '',
    uglify: false,
    AWS_KEY: 'AKIAJOUH7OI7VHE2TEWQ',
    API_URL: 'https://vpip-api-staging.herokuapp.com/api/',
  },
  production: {
    NODE_ENV: 'production',
    namingScheme: '-[hash]',
    uglify: true,
    AWS_KEY: 'AKIAJOUH7OI7VHE2TEWQ',
    API_URL: 'https://vpip-api.herokuapp.com/api/',
  },
};

module.exports = environments[target];