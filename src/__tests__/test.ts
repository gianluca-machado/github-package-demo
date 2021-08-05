import { GithubPackageDemoConfiguration } from '../index';

test('confguration', () => {
  expect(GithubPackageDemoConfiguration()).toBe(process.env.NODE_ENV);
});
