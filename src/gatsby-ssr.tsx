import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import type {
  GatsbySSR,
  RenderBodyArgs,
  WrapRootElementNodeArgs,
} from 'gatsby';
import type { Context } from './types';

const context: Context = {};

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}: RenderBodyArgs) => {
  const { helmet } = context;

  if (!helmet) {
    return;
  }

  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.base.toComponent(),
    helmet.title.toComponent(),
    helmet.meta.toComponent(),
    helmet.link.toComponent(),
    helmet.style.toComponent(),
    helmet.script.toComponent(),
    helmet.noscript.toComponent(),
  ]);
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({
  element,
}: WrapRootElementNodeArgs) => (
  <HelmetProvider context={context}>{element}</HelmetProvider>
);
