# @bitpas/gatsby-plugin-seo

**Unstable until v1. Updates may include breaking changes. Use at your own risk.**

Provides drop-in support for [react-helmet-async](https://github.com/staylor/react-helmet-async) with server-side rendering and global configuration via `gatsby-config`.

## Installation

Install `@bitpas/gatsby-plugin-seo` with npm.

```shell
npm install @bitpas/gatsby-plugin-seo react-helmet-async
```

## Usage

Add the plugin to the plugins array in `gatsby-config.js`:

```js:title=gatsby-config.js
module.exports = {
  plugins: ['@bitpas/gatsby-plugin-seo'],
};
```

You can now use the `<Helmet>` component in your app as outlined in the [react-helmet docs](https://github.com/nfl/react-helmet#readme).

```jsx:title=HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, Home } from '../components';

const HomePage = () => (
  <Layout>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <Home />
  </Layout>
);

export default HomePage;
```

## Options

`@bitpas/gatsby-gatsby-plugin-seo` exposes the [react-helmet props api](https://github.com/nfl/react-helmet#features) in `gatsby-config.js` to set global defaults in `gatsby-config.js`.

```js:title=gatsby-config.js
const site = require('./config');

module.exports = {
  plugins: [
    {
      resolve: '@bitpas/gatsby-plugin-seo',
      options: {
        helmet: {
          title: site.shortDescription,
          titleTemplate: `%s – ${site.title}`,
          meta: [
            { name: 'description', content: site.description },
            { name: 'author', content: site.author },
            { name: 'og:image', content: `${site.image}` },
          ],
        },
      },
    },
  ],
};
```

Global options can be overridden by redeclaring their values in a component.

For example, the following renders "SEO - Foo Title" for `FooPage.jsx` and "Global Title - SEO" for all other pages.

In `gatsby-config.js`:

```js:title=gatsby-config.js
...
options: {
  helmet: {
    title: 'Global Title',
    titleTemplate: '%s – SEO',
  },
},
...
```

In `FooPage.jsx`:

```jsx:title=FooPage.jsx
...
<Helmet title="Foo Title" titleTemplate="SEO - %s" />
...
```
