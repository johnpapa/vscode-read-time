# Read Time for Visual Studio Code

[![Badge for version for Visual Studio Code extension johnpapa.read-time](https://vsmarketplacebadge.apphb.com/version/johnpapa.read-time.svg?color=blue&style=?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=johnpapa.read-time&wt.mc_id=vscodereadtime-github-jopapa) [![Installs](https://vsmarketplacebadge.apphb.com/installs-short/johnpapa.read-time.svg?color=blue&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=johnpapa.read-time)
[![Rating](https://vsmarketplacebadge.apphb.com/rating/johnpapa.read-time.svg?color=blue&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=johnpapa.read-time) [![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?color=blue&style=flat-square)](http://opensource.org/licenses/MIT)

<!-- [![Greenkeeper badge](https://badges.greenkeeper.io/johnpapa/vscode-read-time.svg)](https://greenkeeper.io/) -->

<!-- [![Build Status](https://johnpapa.visualstudio.com/vscode-read-time/_apis/build/status/VS%20Code%ReadTime%20Extension?branchName=master)](https://johnpapa.visualstudio.com/vscode-read-time/_build/latest?definitionId=3&branchName=master)
 -->

![Read Time Icon](./resources/icon.png 'Read Time') A Visual Studio Code extension ideal for writers who want an estimate how for long it may take to read your markdown.

## Install

1. Open **Extensions** sidebar panel in Visual Studio Code. `View → Extensions`
1. Search for `Read Time`
1. Click **Install**
1. Click **Reload**, if required

## Features

Commands can be found in the command palette. Look for commands beginning with `Read Time:`

- Display the estimated minutes to read your document in the status bar

## Settings

| Property         | Description                     |
| ---------------- | ------------------------------- |
| readTime.enabled | Specifies whether it is enabled |

## Commands

| Command                          | Description                   |
| -------------------------------- | ----------------------------- |
| Read Time: Toggle Enable/Disable | Enables or disables read time |

### FAQ

## Why Isn't the Icon is Appearing in the Status Bar?

There is only so much room in the status bar and the Read Time status bar icon may have become a casualty and disappeared. You can test this by zooming out of your vs code a few times so the text is very small. This will also zoom out the status bar. If the status bar icon was a casualty, then it would reappear when you zoom out.

The Read Time icon is very slim (just an icon and a number). However if it is not appearing you can try to change your settings for other items in the status bar to make them disappear. In other word, clean up your status bar by hiding things you do not want to see. Here is one example where I hid a few things that were in my status bar.

```json
  "workbench.statusBar.feedback.visible": false,
  "debug.showInStatusBar": "never",
  "azure.showSignedInEmail": false,
  "liveshare.showInStatusBar": "whileCollaborating",
  "spellright.statusBarIndicator": false
```

## Roadmap

There are many features in the roadmap. Please refer to the [issues list and feel free to grab one and contribute](https://github.com/johnpapa/vscode-read-time/issues)!

## Changes

See the [CHANGELOG](CHANGELOG.md) for the latest changes.

## Credits

Inspiration comes in many forms. These folks and teams have contributed either through ideas, issues, pull requests, or guidance. Thank you!

- The VS Code team and their incredibly [helpful guide for creating extensions](https://code.visualstudio.com/api/get-started/your-first-extension?wt.mc_id=vscodereadtime-github-jopapa)

- Here are some great [examples for extensions](https://github.com/Microsoft/vscode-extension-samples) from the VS Code team

## Try the Code

If you want to try the extension out start by cloning this repo, `cd` into the folder, and then run `npm install`.

Then you can run the debugger for the launch configuration `Run Extension`. Set breakpoints, step through the code, and enjoy!

## Resources

- [Get VS Code](https://code.visualstudio.com/?wt.mc_id=vscodereadtime-github-jopapa)
- [Create your first VS Code extension](https://code.visualstudio.com/api/get-started/your-first-extension?wt.mc_id=vscodereadtime-github-jopapa)
- [VS Code Extension API](https://code.visualstudio.com/api/references/vscode-api?wt.mc_id=vscodereadtime-github-jopapa)
- [Learn how to add WebPack bundles to your favorite extensions](https://code.visualstudio.com/updates/v1_32#_bundling-extensions-with-webpack?wt.mc_id=vscodereadtime-github-jopapa)
