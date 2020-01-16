/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log('Item created successfully');
  }
}

/*
Called when the item has been removed.
We'll just log success here.
*/
function onRemoved() {
  console.log('Item removed successfully');
}

/*
Called when there was an error.
We'll just log the error here.
*/
function onError(error) {
  console.log(`Error: ${error}`);
}

/*
Create all the context menu items.
*/

browser.menus.create({
  id: 'image-scale-fit-width',
  title: browser.i18n.getMessage('menuItemScaleFitWidth'),
  contexts: ['image'],
}, onCreated);

browser.menus.create({
  id: 'image-scale-fit-height',
  title: browser.i18n.getMessage('menuItemScaleFitheight'),
  contexts: ['image'],
}, onCreated);

browser.menus.create({
  id: 'separator-1',
  type: 'separator',
  contexts: ['image']
}, onCreated);

browser.menus.create({
  id: 'image-flip-horizontally',
  title: browser.i18n.getMessage('menuItemFlipHorizontally'),
  contexts: ['image']
}, onCreated);

browser.menus.create({
  id: 'image-flip-vertically',
  title: browser.i18n.getMessage('menuItemFlipVertically'),
  contexts: ['image']
}, onCreated);

browser.menus.create({
  id: 'separator-2',
  type: 'separator',
  contexts: ['image']
}, onCreated);

browser.menus.create({
  id: 'image-rotate-0',
  title: browser.i18n.getMessage('menuItemRotate0'),
  contexts: ['image']
}, onCreated);

browser.menus.create({
  id: 'image-rotate-90',
  title: browser.i18n.getMessage('menuItemRotate90'),
  contexts: ['image']
}, onCreated);

browser.menus.create({
  id: 'image-rotate-180',
  title: browser.i18n.getMessage('menuItemRotate180'),
  contexts: ['image']
}, onCreated);

browser.menus.create({
  id: 'image-rotate-270',
  title: browser.i18n.getMessage('menuItemRotate270'),
  contexts: ['image']
}, onCreated);

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/

let rotate = 0;
let scaleX = 1;
let scaleY = 1;

browser.menus.onClicked.addListener((info, tab) => {

  switch (info.menuItemId) {
    case 'image-scale-fit-width':
      setCss(info, tab, 'width', '100%');
    break;
    case 'image-scale-fit-height':
      setCss(info, tab, 'height', '100%');
    break;
    case 'image-flip-horizontally':
      scaleX = -1;
    break;
    case 'image-flip-vertically':
      scaleY = -1;
    break;
    case 'image-rotate-0':
      rotate = 0;
    break;
    case 'image-rotate-90':
      rotate = 90;
    break;
    case 'image-rotate-180':
      rotate = 180;
    break;
    case 'image-rotate-270':
      rotate = 270;
    break;
  }

  updateRotateScale(info, tab);

});

function updateRotateScale(info, tab) {
  setCss(info, tab, 'transform', `rotate(${rotate}deg) scaleX(${scaleX}) scaleY(${scaleY})`);
}

function setCss(info, tab, property, value) {
  browser.tabs.executeScript(tab.id, {
    frameId: info.frameId,
    code: `browser.menus.getTargetElement(${info.targetElementId}).style.${property} = '${value}';`,
  });
}
