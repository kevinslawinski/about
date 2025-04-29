
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/about',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/components/about/about.component.ts": [
    {
      "path": "chunk-4WHMIWJJ.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/contact/contact.component.ts": [
    {
      "path": "chunk-Z4YD6ANS.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/experience/experience.component.ts": [
    {
      "path": "chunk-YVHXR6A5.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/projects/projects.component.ts": [
    {
      "path": "chunk-77AGJMHR.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/not-found/not-found.component.ts": [
    {
      "path": "chunk-6UZYOZAP.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 6197, hash: '2c439e59afeccb37ec0f8cedb552c66c94fcb7670d0aff2b035acd48e48abf5c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6331, hash: '3739cd88d714c015897c712ec1cd1d4f01c19a1f80a337ebd19880b3a8e49d20', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GIR7YECJ.css': {size: 8357, hash: 'DPR0quwJbxs', text: () => import('./assets-chunks/styles-GIR7YECJ_css.mjs').then(m => m.default)}
  },
};
