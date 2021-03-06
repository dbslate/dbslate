# dbslate

> [a blank slate](https://dbslate.github.io/dbslate)


## Motivation

We're building *dbslate* because we want better tools for interacting with data.
The initial use case is high level database admin in a collaborative
environment, enhanced with visualizations and other goodies.
The user runs a dbslate server, locally or in the cloud or wherever,
and then connects to it and interacts with their databases via a web app.
Future development will aim to empower both technical and non-technical users
with web development and information management capabilities,
leveraging dbslate as a library/framework/boilerplate/cli/platform.


## Usage

```bash
npm install
npm start
npm run server

# after editing `src/_userProject/app.def.json` or the writers used in `src/tasks/gen.ts`:
npm run gen
```


## App features

> **v0.1 pre-alpha**, work in progress

- [ ] create queries and run them against your dbs, and save/edit/share/compare them and their results
- [ ] connect to multiple SQL and NoSQL data sources
- [ ] manipulate your queries with 2017-era UI interactions, like placeholder forms for SQL expressions
- [ ] collaborate with others in a shared workspace
- [ ] edit database tables with a UI
- [ ] create data visualizations and other reporty things
- [ ] connect to other data sources like REST APIs, your server's file system, etc
- [ ] extend with plugins
- [ ] more


## Technical features

- backend agnostic (v0.3 will support Node (JavaScript/TypeScript/Flow) and Go server backends)
- 2017ish web ui (React, Redux, TypeScript) that can be opened from your file system,
  or statically hosted (see [`gh-pages`](https://dbslate.github.io/dbslate))
- Uses [code gen](src/gen/README.md) from plain JSON Schema definitions
  to automatically generate the same code you might write by hand.
  JSON's simple and flexible nature promises a bright future for diverse and deep tool development.
  See [`src/gen`](src/gen/README.md), [`npm run gen`](src/tasks/gen.ts),
  and[`src/_userProject/app.def.json`](src/_userProject/app.def.json) for more.


## Philosophy
- Developers must be given full control and privacy.
  Using dbslate never means sharing data with a 2nd party,
  and all source code is permissively licensed.
- We want our tools to be powerful, robust, fast, simple, extensible, and easy to use.
  They should help us focus on the things that matter.
  Power and low level control do not need to be traded away for convenience and approachability.
  Tools should be awesome and make us feel awesome.
- Community is the backbone of open source,
  and we welcome all good faith contributions of any kind from everyone, including you. :eyes:
  Please open issues for everything you'd like to discuss.
  Being nice is worth the effort. Let's have nice things. :]


## License

MIT
