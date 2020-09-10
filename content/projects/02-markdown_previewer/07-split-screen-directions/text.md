---
title: Horizontal/Vertical Split Screen
---
This layout works for a narrow screen, but for a wider screen, it would be nice if the screen split horizontally instead of vertically. Since we used a Svelte action, we can make that happen.  First though, we'll need to know how wide the screen is so we can determine whether to split it horizontally or vertically. So, we'll create a variable to hold the container width.

```js
onMount(handleInput);

let htmlContent;
let containerWidth;

function handleInput()...
```

Then, we can bind the dimension of an element to `containerWidth`. We care about the `s-panel-container`, to we'll bind it's width using Svelte's `bind:clientWdith`. If we put `{clientWidth}` in our markup, we can see it dynamically update as we change the REPL preview panel. 

Inside of the markup, change it to look like this.

```html
{containerWidth}
<s-panel-container
  bind:clientWidth={containerWidth}
  use:splitPane
>
  <textarea...
```

Now that we know we can track the container width, let's remove `{containerWidth}` from the markup. 

With the `containerWidth` variable updating as we resize the container, we can use that to create a CSS variable to change `s-panel-container`'s `flex-direction` base on the width of the screen. We'll add a `style` tag to `s-panel-container` and use it to create an `orientation` variable.

```html
{containerWidth}
<s-panel-container  
  style="--orientation: {containerWidth > 600 ? 'row' : 'column'}"
  bind:clientWidth={containerWidth}
  use:splitPane
>
  <textarea...
```

Now, if the `containerWidth` is greater than 600, then the `orientation` will be `row`, otherwise, it will be column. With that, let's change the `flex-direction` in the `s-panel-container` style to `var(--orientation)`. 

```css
s-panel-container {
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    flex-direction: var(--orientation);
  }
```

Now, when we resize the preview panel, the panels will change how they're split. However, we have a new problem. When the screen is wider than 600, the gutter resizes when the mouse is moved up/down rather than left/right. That's because Split.js is initialized with a `direction` of `vertical`. We need a way to rerun the `Split` function whenever the orientation changes, as well as a way to change the `direction` option for `Split`. 

Svelte actions allow us to re-run `Split` by returning an update function. Inside of the `splitPane`function, below the `Split` function, add the new `return {update(){}}` function. Also, change the value of `direction` from `"vertical"` to `splitDirection`. 

```js
function splitPane() {
      Split(['#editor', '#preview'], {
        direction: splitDirection,
        elementStyle: (dimension, size, gutterSize) => ({
          'flex-basis': `calc(${size}% - ${gutterSize}px)`,
        }),
        gutterStyle: (dimension, gutterSize) => ({
          'flex-basis': `${gutterSize}px`,
          background: 'gray',
          border: 'solid white',
          'border-width': '5px 5px',
        }),
        gutterSize: 2,
      });    

    return {
      update() {       
      },
    };
  }
```

`update` is the function that will run whenever the Svelte action is updated. It's inside here that we can write some code to re-run `Split`.

Right now though, we have an error saying `splitDirection is not defined` so let's correct that. We want `splitDirection` to be either vertical or horizontal, so we'll declare a reactive variable that monitors `containerWidth` and updates accordingly.

```js
onMount(handleInput);

let htmlContent;
let containerWidth;
$: splitDirection = containerWidth > 600 ? 'horizontal' : 'vertical' 

function handleInput()...
```


Since we want to re-run `Split`, let's wrap the 'Split' function in another function, then call that function when `splitPane` is called. We'll also call the function whenever the Svelte action is updated by putting it inside the `update` function.

```js
function splitPane() {
  function split() {
    Split(['#editor', '#preview'], {
      direction: containerWidth > 600 ? 'horizontal' : 'vertical',
      elementStyle: (dimension, size, gutterSize) => ({
        'flex-basis': `calc(${size}% - ${gutterSize}px)`,
      }),
      gutterStyle: (dimension, gutterSize) => ({
        'flex-basis': `${gutterSize}px`,
        background: 'gray',
        border: 'solid white',
        'border-width': '5px 5px',
      }),
      gutterSize: 2,
    }
  }

  split() //notice how this calls the function we just wrapped

  return 
    update() {
      split() //and this will get called whenever update is called.
    },
  };
}
```

Finally, we'll need a way for the Svelte action to recognize an update. To do that, we just set it equal to a variable we want it to monitor. Whenever the value of the variable changes, the `update` function will be called, which in our case will then call the `split` function, which in turn re-runs `Split`. Down in the markup, inside `s-panel-container` change `use:splitPane` to `use:splitPane={splitDirection}`. Now, whenever `splitDirection` changes value, `splitPane` will call it's `update` function. 

However, we now have another problem. It's like Biggie says "Mo' coding, Mo' problems". Whenever we resize our preview window and containerWidth jumps between the 600px threshold, another gutter is being created, then another gutter, then another... We need a way to destroy the previous gutter whenever we create a new gutter. 

Reading through the [Split.js docs](https://github.com/nathancahill/split/tree/master/packages/splitjs#api), there appears to be a way to destroy an instance of Split. Let's try that. It looks like we need to save the instance to a variable, then call `destroy` on that instance. Let's create a new variable called `splitInstance`

```js
onMount(handleInput);

let htmlContent;
let containerWidth;
$: splitDirection = containerWidth > 600 ? 'horizontal' : 'vertical';
let splitInstance;

function handleInput()...
```

Then, inside of our `split` function that's inside of the `splitPane` function, let's set `splitInstance = Split([], ...)` like the docs show us. Now, in our `update` function, we should be able to call `splitInstance.destroy()` prior to calling `split` which will destroy the previous gutter before creating the new one. 

```js
...
  return {
    update() {
      splitInstance.destroy();
      split();
    },
  };
```

Cool. Everything is working as expected with the new functionality. 

Next, let's add the ability to upload a markdown file and have it preview the HTML.