import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: './schema.json',
  apiFile: './src/store/blankApi.ts',
  apiImport: 'blankSplitApi',
  outputFiles: {
    './src/store/gen/user.ts': {
      filterEndpoints: [/user/i, /transaction/i],
      lazyQueries: true,
    },
  },
  hooks: { queries: true, lazyQueries: true, mutations: true },
}

export default config
