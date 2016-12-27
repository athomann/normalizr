import { compileDirectory } from 'typescript-definition-tester';

describe('TypeScript definitions', () => {
  it('compile against index.d.ts', (done) => {
    compileDirectory(
      __dirname + '/typescript',
      fileName => fileName.match(/\.ts$/),
      done
    );
  });
});
