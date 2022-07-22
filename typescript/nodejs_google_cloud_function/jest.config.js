/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = async () => {
  return {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig-build.json'
      }
    }
  };
};
