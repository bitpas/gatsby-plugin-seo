import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  GatsbyBrowser,
  WrapPageElementBrowserArgs,
  WrapRootElementBrowserArgs,
} from 'gatsby';
import { SeoPluginOptions } from './types';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = (
  { element }: WrapPageElementBrowserArgs,
  { helmet }: SeoPluginOptions
) => (
  <>
    <Helmet {...helmet} />
    {element}
  </>
);

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}: WrapRootElementBrowserArgs) => <HelmetProvider>{element}</HelmetProvider>;
