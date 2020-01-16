# Firefox image manipulation extension

**This add-on injects JavaScript into web pages. The `addons.mozilla.org` domain disallows this operation, so this add-on will not work properly when it's run on pages in the `addons.mozilla.org` domain.**

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
Right-click on any image and select "Image manipulation" from the context menu.

## Screenshot
![add-on screenshot](./artwork/screenshot.png "screenshot")

# Development
This project uses [Web-ext](https://github.com/mozilla/web-ext), a command line tool to help build, run, and test WebExtensions

Run `web-ext` with `src` as the source folder
```
npx web-ext -s src run
```

This will open a new Firefox instance with the plugin loaded.