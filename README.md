![ExRx Net Crawler Feature Graphics](https://raw.githubusercontent.com/johnnymillergh/MaterialLibrary/master/muscle-and-fitness/muscle-and-fitness-admin-social-image.png)

[![GitHub release](https://img.shields.io/github/release/johnnymillerghmuscle-and-fitness-admin.svg)](https://github.com/johnnymillergh/muscle-and-fitness-admin/releases)
[![Build Status](https://travis-ci.com/johnnymillergh/muscle-and-fitness-admin.svg?branch=master)](https://travis-ci.com/johnnymillergh/muscle-and-fitness-admin)
[![GitHub issues](https://img.shields.io/github/issues/johnnymillergh/muscle-and-fitness-admin)](https://github.com/johnnymillergh/muscle-and-fitness-admin/issues)
[![GitHub forks](https://img.shields.io/github/forks/johnnymillergh/muscle-and-fitness-admin)](https://github.com/johnnymillergh/muscle-and-fitness-admin/network)
[![GitHub stars](https://img.shields.io/github/stars/johnnymillergh/muscle-and-fitness-admin)](https://github.com/johnnymillergh/muscle-and-fitness-admin/stargazers)
[![GitHub license](https://img.shields.io/github/license/johnnymillergh/muscle-and-fitness-admin)](https://github.com/johnnymillergh/muscle-and-fitness-admin/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/johnnymillergh/muscle-and-fitness-admin=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fjohnnymillergh%2Fmuscle-and-fitness-admin)

# Muscle and Fitness Admin

**Muscle and Fitness Admin (M&F Admin)** is a GUI admin of muscle-and-fitness-server.

[Official Docker Image](https://hub.docker.com/r/ijohnnymiller/muscle-and-fitness-admin-prod)

## Features

Here is the highlights of **Muscle and Fitness Admin (M&F Admin)**:

1. Communicate with back-end server.

2. Based on the most modern and latest frameworks and dependencies:

   [Vue.js](https://github.com/vuejs/vue) - [![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=2.6.11&x2=0)](https://www.npmjs.com/package/vue)

   [**Type**Script](https://github.com/microsoft/TypeScript) - [![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=3.8.3&x2=0)](https://www.npmjs.com/package/typescript)

3. Docker support.

4. Multi-environment support, multi-lingual (internationalisation).

5. NGINX Gzip support.

6. Support `Dark` / `Light` color scheme. Self-adaptive color scheme change.

7. Lazy router.

## Roadmap

- [ ] Under heavy construction

## Usage

### Project Setup

Recommended IDE is the latest version JetBrains WebStorm.

1. Clone or download this project.

   ```shell
   $ git clone https://github.com/johnnymillergh/muscle-and-fitness-admin.git
   ```

2. Project setup.

   ```shell
   npm install
   ```

### Compiles and Hot-reloads for Development

   ```shell
npm run serve
   ```

### Compiles and Minifies for Production

```shell
npm run build
```

### Run Your Unit Tests

```sh
npm run test:unit
```

### Lints and fixes files

```shell
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker Integration

Docker deployment can defer by environment. Here is the list of environments:

| #    | Environment Name   | Environment Alias Name | Description |
| ---- | ------------------ | ---------------------- | ----------- |
| 1    | development_docker | dev_dkr                |             |
| 2    | test               | test                   |             |
| 3    | stage              | stage                  |             |
| 4    | production         | prod                   |             |

### The Procedures of Docker Deployment

1. Compile and minify source (can be deferred by environment, if it’s `development_docker`, then the command could be `npm run build:dev_dkr`)

   ```shell
   npm run build
   ```

2. Build Docker image and run by Docker Compose. Available Docker Compose:

   - development_docker
   - test
   - stage
   - production

## Maintainers

[@johnnymillergh](https://github.com/johnnymillergh).

## Contributing

Feel free to dive in! [Open an issue](https://github.com/johnnymillergh/exrx-net-crawler/issues/new).

### Contributors

This project exists thanks to all the people who contribute. 

- Johnny Miller [[@johnnymillergh](https://github.com/johnnymillergh)]
- …


### Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://github.com/johnnymillergh)]

## License

[Apache License](https://github.com/johnnymillergh/muscle-and-fitness-admin/blob/master/LICENSE) © Johnny Miller

2020 - Present




