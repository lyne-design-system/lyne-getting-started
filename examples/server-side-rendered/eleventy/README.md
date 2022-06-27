[![Netlify Status](https://api.netlify.com/api/v1/badges/d06e00b0-5889-4d8e-809b-59a911133e59/deploy-status)](https://lyne-examples-ssr-eleventy.netlify.app/)

# How to use lyne-components with 11ty

## Installation and setup

We encourage you to use server and client side hydration whenever possible. This repo shows how to do it.

1. Install `@sbb-esta/lyne-components` as a dependency.
2. Load the `lyne-components` with script tag. See `layout.njk` for an example.
3. Add a transform to `.eleventy.js`. Use our `hydrate` script to render the page contents to a string.
4. Use the components as usual. See `index.njk` for an example.

## Demo

This example is published here: https://lyne-examples-ssr-eleventy.netlify.app/

## Explanations

Read the startpage on the demo to get further insides about server- and client-side hydration.
