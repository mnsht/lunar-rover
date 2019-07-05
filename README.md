# Lunar Rover

[![Build Status](https://travis-ci.org/mnsht/lunar-rover.svg?branch=master)](https://travis-ci.org/mnsht/lunar-rover)

A small template for easily creating microlibraries and React components.

**Comes with the following features:**

- Storybook (with knobs addon) for easy, isolated component development
- Github pages deployment of Storybook static build
- Automated release and changelog generation (via `np` and `auto-changelog`)
- Rollup for bundling code (in CommonJS, ESM, and UMD formats)
- Babel code transpiling (ES6+ and React)
- Jest testing (feel free to add other testing libraries to fit your needs)
- Travis CI for continuous integration support
- Prettier code formatting
- MIT license (open-source, baby!)

[Play around with it in Storybook](https://mnsht.github.io/lunar-rover/)

### A note from the author

> A lot of tutorials out there for building a Javascript library are bloated with technologies I didn't use (or want to use). I end up ripping out a lot of what other developers consider as "necessary" to the build process (Typescript, SASS, CSS-in-JS, etc.). What I wanted was a barebones library template from which I could build all other projects. Whether it's a React component or a Javascript microlibrary, I wanted some way to compile and deploy these projects to NPM without fuss and without a lot of extras.

> I'll admit, there are some opinions here (Storybook, Github Pages, Rollup, Babel, and Prettier), but that's about it. There's nothing wrong with adding other technologies to the build process, but this should be a good starting place for any Javascript developer. **Take this template, and add to it what you need - rather than remove what you don't need.**

### A note about React

> React is not a requirement in this project. However, when developing any Javascript library (of any framework, or lack thereof), it's important to see your changes visually. For this, the choice of using Storybook was obvious. Since it's not possible to run Javascript code in the HTML version of Storybook, I opted for React. You may choose whatever version you like, but for me, this was easiest and targets the greatest number of developers.

## Installation

`yarn add lunar-rover`

## Usage

You'll want to fill this in.

## Development

1. `yarn install` - installs all dev dependencies
2. `yarn storybook` - your storybook preview
3. _Optional:_ `yarn test:watch` - run this in a separate terminal window to live-reload your test suite on save

### Building

`yarn build`

This will compile your code into the `dist`. **You should never need to run this manually as the whole build process is taken care of for you in other scripts.**

### Testing

`yarn test` - one-time run through of your tests, also generates your coverage report. **You won't likely need to run this yourself.**

`yarn test:watch` - live-reloading your test suite upon file save, good for development

### Releasing a new version

`npm run release` ([do not use Yarn](https://github.com/sindresorhus/np/issues/416))

This will run `np` and `auto-changelog` to ensure that an updated CHANGELOG.md file is generated and the package is properly semver bumped, tested, built, tagged, and pushed. Everything is taken care of for you in this single command. You'll be asked to draft your release notes on Github after it's finished.

### Deploying Storybook

`yarn deploy`

This will generate a new static build of your Storybook and deploy it automatically to gh-pages. No configuration is required on Github for this to happen.

## Contributing

You'll want to fill this in.

## Acknowledgements

You'll want to fill this in.
