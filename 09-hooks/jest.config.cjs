const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./jsconfig')

/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['jest-extended/all', './jest.setup.js'],
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
}
