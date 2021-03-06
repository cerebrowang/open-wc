/* eslint-disable max-classes-per-file */
import { TsTestingKarmaMixin } from '../testing-karma-ts/index.js';

export const TsTestingMixin = subclass =>
  class extends TsTestingKarmaMixin(subclass) {
    async execute() {
      await super.execute();

      this.copyTemplateJsonInto(
        `${__dirname}/templates/_package.json`,
        this.destinationPath('package.json'),
      );
    }
  };

export const TsTestingScaffoldMixin = subclass =>
  class extends subclass {
    async execute() {
      await super.execute();

      const { tagName } = this.templateData;
      this.copyTemplate(
        `${__dirname}/templates/_my-el.test.ts`,
        this.destinationPath(`test/${tagName}.test.ts`),
      );
    }
  };
