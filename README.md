# Firefox image manipulation extension

**This Firefox context-menu extension scales, rotates and flips images***

## Background
I wanted to know what it took to develop a Firefox extension which could manipulate images. This repo is the result. I was quite surprised how well Mozilla [documented](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) the development process. Another great help is their [repo](https://github.com/mdn/webextensions-examples) full with [example code](https://github.com/mdn/webextensions-examples).

In two hours I had the image flipping working. The hardest part was to figure out how to get access to the image DOM-object so I could manipulate it. At the bottom of this readme you'll find the links I used when developing this extension.

## Features

- Scale to fit width
- Scale to fit height
- Flip horizontally
- Flip vertically
- Rotate 0°
- Rotate 90°
- Rotate 180°
- Rotate 270°

## How to use
Right-click on an image, select "Image manipulation" from the context menu and pick the operation from the sub-menu.

## Screenshot
![add-on screenshot](./artwork/screenshot.png "screenshot")

# Development
First install all the dependencies with:
```bash
$ npm i
```
This project uses [Web-ext](https://github.com/mozilla/web-ext), a command line tool to help build, run, and test WebExtensions

Run `web-ext` with `src` as the source folder
```bash
$ npx web-ext -s src run
```

This will open a new Firefox instance with the plugin loaded.

# Documentation used

These links were very useful when learning to make this Firefox extension:
- [Anatomy of an extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts)
- [Your first extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [Context menu items](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items)
- [menus.getTargetElement()](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement)