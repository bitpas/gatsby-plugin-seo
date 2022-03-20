import type { HelmetServerState, HelmetProps } from 'react-helmet-async';
import type { PluginOptions } from 'gatsby';

export interface SeoPluginOptions extends PluginOptions {
  helmet?: HelmetProps;
}

export interface Context {
  helmet?: HelmetServerState;
}
