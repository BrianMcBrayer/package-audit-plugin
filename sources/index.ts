import {Plugin} from '@yarnpkg/core';
import {URL} from 'url';

// change this when yarn is released
// import {WrapNetworkRequestInfo} from "@yarnpkg/core";

async function wrapNetworkRequest(executor: () => Promise<any>, {target}: { target: string | URL }) {
  const url = typeof target === `string` ? new URL(target) : target;

  console.log(`YNX000: Making network request to ${url.href}`)

  return await executor();
};

const plugin: Plugin = {
  hooks: {
    wrapNetworkRequest
  }
};

export default plugin;
