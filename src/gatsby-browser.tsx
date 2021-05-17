import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { WrapPageElementBrowserArgs, WrapRootElementBrowserArgs } from 'gatsby';
import { OptionsProps } from './types';

export const wrapPageElement = (
  { element }: WrapPageElementBrowserArgs,
  { helmet }: OptionsProps
): JSX.Element => (
  <>
    <Helmet {...helmet} />
    {element}
  </>
);

export const wrapRootElement = ({
  element,
}: WrapRootElementBrowserArgs): JSX.Element => (
  <HelmetProvider>{element}</HelmetProvider>
);
