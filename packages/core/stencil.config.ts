import { Config } from '@stencil/core';

import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: "dist-hydrate-script",
    },
    reactOutputTarget({
      componentCorePackage: '@stencil-ui/core',
      proxiesFile: '../react/src/components/index.ts',
    }),
  ],
};
