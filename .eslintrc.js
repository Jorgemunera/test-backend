module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
  },
  ignorePatterns: ['package.json', 'package-lock.json', 'node_modules', 'mongo_data', 'docker-compose.yml'],
};
