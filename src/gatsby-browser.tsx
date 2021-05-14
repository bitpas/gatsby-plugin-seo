import React from 'react';
import { Helmet, HelmetProvider, HelmetProps } from 'react-helmet-async';
import { WrapPageElementBrowserArgs, WrapRootElementBrowserArgs } from 'gatsby';

export const wrapPageElement = (
  { element }: WrapPageElementBrowserArgs,
  options: HelmetProps
): JSX.Element => (
  <>
    <Helmet {...options} />
    {element}
  </>
);

export const wrapRootElement = ({
  element,
}: WrapRootElementBrowserArgs): JSX.Element => (
  <HelmetProvider>{element}</HelmetProvider>
);
