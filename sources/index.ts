import {
  Plugin,
  Project,
  MessageName,
} from "@yarnpkg/core";
import { InstallOptions } from "@yarnpkg/core/lib/Project";
import { URL } from "url";

class YarnPluginPackageAudit {
  private networkRequests: string[] = [];

  constructor() {
    this.afterAllInstalled = this.afterAllInstalled.bind(this);
    this.wrapNetworkRequest = this.wrapNetworkRequest.bind(this);
  }

  afterAllInstalled(_: Project, options: InstallOptions) {
    for (const downloadedPackage of this.networkRequests) {
      options.report.reportInfo(
        MessageName.FETCH_NOT_CACHED,
        `fetched from ${downloadedPackage}`
      );
    }
  }

  async wrapNetworkRequest(
    executor: () => Promise<any>,
    extra: any
  ) {
    return async () => {
      const url =
        typeof extra.target === `string` ? new URL(extra.target) : extra.target;

      this.networkRequests.push(url.href);

      return await executor();
    };
  }
}

const audit = new YarnPluginPackageAudit();

const plugin: Plugin = {
  hooks: {
    wrapNetworkRequest: audit.wrapNetworkRequest,
    afterAllInstalled: audit.afterAllInstalled
  },
};

export default plugin;
