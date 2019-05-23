// @flow strict

import path from 'path';

import testExportedPaths from './testExportedPaths';

testExportedPaths(path.join(__dirname, '..', 'monorepo-utils.js'), [
  ['src/packages/monorepo/package.json', 'package.json'],
  ['src/packages/monorepo/src/index.js', 'src/index.js'],
  ['src/packages/monorepo-utils/package.json', 'package.json'],
  ['src/packages/monorepo-utils/src/index.js', 'src/index.js'],

  // invalid cases:
  ['src/packages/xyz/outsideScope.js', undefined], // correctly deleted
  ['package.json', undefined], // correctly deleted
]);
