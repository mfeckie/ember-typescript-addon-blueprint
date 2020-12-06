'use strict';

module.exports = {
  description: "Generate an ember-cli addon using TypeScript",
  name: "ember-typescript-addon-blueprint",
  locals(options) {
    return {
      name: options.entity.name
    }
  }
}