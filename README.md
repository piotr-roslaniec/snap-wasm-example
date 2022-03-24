# MetaMask Snaps WASM example

This repository shows how to use `wasm-pack` WASM modules in MetaMask Snaps.

## Usage

First, build your Rust project used as a `./snap` dependency:

```bash
cd rust-lib
wasm-pack build --target no-modules
```

Then, you can build and run your snap:

```bash
cd snap
yarn install
yarn build
yarn serve
```

## Demo

[Snap demo](https://snap-wasm-example.netlify.app)

### Demo Instructions

In order to run this demo, we need to install a specific MetaMask Flask version:
*   Pull down this [branch](https://github.com/MetaMask/metamask-extension/tree/eth-denver-2022)
*   Build the extension locally: `yarn setup && yarn dist --build-type flask`
*   Load the unpacked extension (see "custom build" instructions) from [here](https://github.com/MetaMask/metamask-extension/tree/eth-denver-2022#other-docs)

</details>