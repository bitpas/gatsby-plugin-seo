import { HelmetData, HelmetProps } from 'react-helmet-async';
import { PluginOptions } from 'gatsby';

export interface SeoPluginOptions extends PluginOptions {
  helmet?: HelmetProps;
}

export interface Context {
  helmet?: HelmetData;
}
