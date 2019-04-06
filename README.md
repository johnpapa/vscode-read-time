# Read Time for Visual Studio Code

[![Badge for version for Visual Studio Code extension johnpapa.vscode-read-time](https://vsmarketplacebadge.apphb.com/version/johnpapa.vscode-read-time.svg?color=blue&style=?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-read-time&wt.mc_id=vscodepeacock-github-jopapa) [![Installs](https://vsmarketplacebadge.apphb.com/installs-short/johnpapa.vscode-read-time.svg?color=blue&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-read-time)
[![Rating](https://vsmarketplacebadge.apphb.com/rating/johnpapa.vscode-read-time.svg?color=blue&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-read-time) [![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?color=blue&style=flat-square)](http://opensource.org/licenses/MIT) [![Greenkeeper badge](https://badges.greenkeeper.io/johnpapa/vscode-read-time.svg)](https://greenkeeper.io/)

[![Build Status](https://johnpapa.visualstudio.com/vscode-read-time/_apis/build/status/VS%20Code%20Peacock%20Extension?branchName=master)](https://johnpapa.visualstudio.com/vscode-read-time/_build/latest?definitionId=3&branchName=master)

![Read Time Icon](./resources/readtime-icon-small.png 'Read Time') A Visual Studio Code extension that subtly changes the workspace color of your workspace. Ideal when you have multiple VS Code instances and you want to quickly identify which is which.

## Install

1. Open **Extensions** sidebar panel in Visual Studio Code. `View → Extensions`
1. Search for `Reda Time`
1. Click **Install**
1. Click **Reload**, if required

## Features

Commands can be found in the command palette. Look for commands beginning with `Peacock:`

- Display the estimated minutes to read your document in the status bar

## Settings

| Property          | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| read-time.enabled | Specifies whether it is enabled                             |
| read-time.delay   | Specifies how long Read Time will wait before re-estimating |

## Commands

| Command                          | Description                   |
| -------------------------------- | ----------------------------- |
| Read Time: Estimate Read Time    | Estimates the read time       |
| Read Time: Toggle Enable/Disable | Enables or disables read time |

## Roadmap

There are many features in the roadmap. Please refer to the [issues list and feel free to grab one and contribute](https://github.com/johnpapa/vscode-read-time/issues)!

## Changes

See the [CHANGELOG](CHANGELOG.md) for the latest changes.

## Credits

Inspiration comes in many forms. These folks and teams have contributed either through ideas, issues, pull requests, or guidance. Thank you!

- The VS Code team and their incredibly [helpful guide for creating extensions](https://code.visualstudio.com/api/get-started/your-first-extension?wt.mc_id=vscodepeacock-github-jopapa)

- Here are some great [examples for extensions](https://github.com/Microsoft/vscode-extension-samples) from the VS Code team

## Try the Code

If you want to try the extension out start by cloning this repo, `cd` into the folder, and then run `npm install`.

Then you can run the debugger for the launch configuration `Run Extension`. Set breakpoints, step through the code, and enjoy!

## Resources

- [Get VS Code](https://code.visualstudio.com/?wt.mc_id=readtime-github-jopapa)
- [Create your first VS Code extension](https://code.visualstudio.com/api/get-started/your-first-extension?wt.mc_id=readtime-github-jopapa)
- [VS Code Extension API](https://code.visualstudio.com/api/references/vscode-api?wt.mc_id=readtime-github-jopapa)
- [Learn how to add WebPack bundles to your favorite extensions](https://code.visualstudio.com/updates/v1_32#_bundling-extensions-with-webpack?wt.mc_id=readtime-github-jopapa)
