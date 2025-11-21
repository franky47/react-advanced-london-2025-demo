# React Advanced London 2025 Demo app

This is the demo app showcased in my React Advanced London 2025 talk: "Type-Safe URL State in Next.js with nuqs".

Slides & useful links (shown at the end): https://nuqs.dev/react-advanced-london-25

## Installation

It requires a Node.js version capable of running TypeScript natively.

Run `fnm use` (or whichever Node.js version manager you use) to switch to the correct version, then install the dependencies with pnpm:

```
pnpm install
pnpm dev
```

It will run the demo app on http://localhost:3000.

## Albums demo

A prerequisite for the albums demo is to download the cover images
to the public folders for each framework (to avoid fetching from the
Spotify CDN at runtime, which requires a network connection).

You can do so by running:

```
cd packages/db
pnpm db:dl-images
```

## Final state

The final state of the demo app can be found on the [`post-demo-state` branch](https://github.com/franky47/react-advanced-london-25-demo/tree/post-demo-state) of this repository.
