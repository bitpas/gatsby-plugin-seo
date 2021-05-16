# @bitpas/gatsby-plugin-seo

Provides drop-in support for [react-helmet-async](https://www.npmjs.com/package/react-helmet-async) with global configuration via `gatsby-config.js`.

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

`@bitpas/gatsby-gatsby-plugin-seo` exposes the [react-helmet props api](https://github.com/nfl/react-helmet#features) for use as global defaults. Types definitions are available at [@types/react-helmet](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/db7577cf9190a6a615c2d00c0c5fcadb4f88b2e2/types/react-helmet/index.d.ts#L37).

```js:title=gatsby-config.js
// in gatsby-config.js
const site = require('./config');

module.exports = {
  plugins: [
    {
      resolve: '@bitpas/gatsby-plugin-seo',
      options: {
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
  ],
};
```

Options behave as fallbacks that can be overridden by redefining their values in a component.
