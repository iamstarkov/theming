export default {
  cache: true,
  concurrency: 5,
  failFast: true,
  failWithoutAssertions: true,
  verbose: true,
  files: [
    'src/*.test.*',
  ],
  extensions: [
    'ts',
    'tsx',
  ],
  require: [
    'ts-node/register',
  ],
  environmentVariables: {
    'TS_NODE_PROJECT': './tsconfig.test.json',
  }
};
