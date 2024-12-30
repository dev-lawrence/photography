/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
  readonly SANITY_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
