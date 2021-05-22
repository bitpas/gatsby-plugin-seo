# @bitpas/gatsby-plugin-seo

**Unstable until v1. Updates may include breaking changes. Use at your own risk.**

Provides drop-in support for [react-helmet-async](https://www.npmjs.com/package/react-helmet-async) with server-side rendering and global configuration via `gatsby-config.js`.

## Installation

```sh
npm install @bitpas/gatsby-plugin-seo react-helmet-async
```

## Usage

```js:title=gatsby-config.js
// in gatsby-config.js
module.exports = {
  plugins: ['@bitpas/gatsby-plugin-seo'],
};
```

You can now use the `<Helmet>` component in your app as per the [react-helmet docs](https://github.com/nfl/react-helmet#readme).

```js:title=HomePage.jsx
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

`@bitpas/gatsby-gatsby-plugin-seo` exposes the [react-helmet props api](https://github.com/nfl/react-helmet#features) in `gatsby-config.js` to set global defaults.

```js:title=gatsby-config.js
// in gatsby-config.js
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
            { name: 'og:image', content: `${site.origin}/site.jpg` },
            { property: 'og:type', content: 'website' },
          ],
        },
      },
    },
  ],
};
```

Options behave as fallbacks that can be overridden by redeclaring their values in a component.

**Title override example:**

```js:title=gatsby-config.js
// in gatsby-config.js
...
options: {
  helmet: {
    title: 'Global Title',
    titleTemplate: '%s – SEO',
  },
},
...
```

```js:title=FooPage.jsx
// in FooPage.jsx
...
<Helmet title="Foo Title" titleTemplate="SEO - %s" />
...
```

Renders `SEO - Foo Title` for `FooPage` and `Global Title - SEO` for all other pages.
