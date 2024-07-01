import { fileURLToPath } from 'node:url';
import { describe, test, expect } from 'vitest';
import { setup, $fetch } from '@nuxt/test-utils/e2e';

await setup({
  rootDir: fileURLToPath(new URL('../..', import.meta.url)),
  server: true,
  browser: false,
  dev: false,
  build: false,
  setupTimeout: 600 * 10000,
  port: 3000
});

describe('My test', async () => {
  test('my test', async () => {
    await $fetch('/hello', {
      onResponse: ({ response }) => {
        expect(response._data).toEqual('Hello World!');
      },
    });
  });
});
