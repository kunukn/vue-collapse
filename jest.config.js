export default {
  verbose: true,
  injectGlobals: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)?$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  setupFiles: ['<rootDir>/tests/setup'],
  coverageDirectory: '<rootDir>/tests/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/locale/translations/**/*.js',
  ],
}
