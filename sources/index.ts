import {Descriptor, Locator, Plugin, Project, Report, ResolveOptions, Resolver} from '@yarnpkg/core';
import {URL} from 'url';

// change this when yarn is released
// import {WrapNetworkRequestInfo} from "@yarnpkg/core";

class YarnPluginPackageAudit {
  #report: Report | null;

  async reduceDependency(
    _dependency: Descriptor,
    _project: Project,
    _locator: Locator,
    _initialDependency: Descriptor,
    extra: { resolver: Resolver; resolveOptions: ResolveOptions }
  ) {
    this.#report = extra.resolveOptions.report;
  }

  async wrapNetworkRequest(
    executor: () => Promise<any>,
    { target }: { target: string | URL }
  ) {
    const url = typeof target === `string` ? new URL(target) : target;

    this.#report.reportInfo(null, `YNX000: fetching from ${url.href}`);

    return await executor();
  }
}

const audit = new YarnPluginPackageAudit();

const plugin: Plugin = {
  hooks: {
    wrapNetworkRequest: audit.wrapNetworkRequest,
    reduceDependency: audit.reduceDependency
  },
};

export default plugin;
