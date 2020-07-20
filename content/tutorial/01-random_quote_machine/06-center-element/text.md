---
title: Center #quote-box and test
foldLine: ["script", 19]
---
**User Story #11:** The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

Now it's time to start styling this. 

To start, let's wrap the `#qoute-box` div inside another div and give that div a class of `container`.

```html
<div class="container">	
  <div id="quote-box">
    <p id="text">{currentText}</p>
    <p id="author">{currentAuthor}</p>
    <button id="new-quote" on:click={newQuote}>New Quote</button>
    <a id="tweet-quote" href={twitterUrl}>Tweet Quote</a>
  </div>	
</div>
```

Now we can add a `style` tag after our closing `script` tag. Inside of the style tag, let's create some styling for our container.

```html
<style>
.container {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center center;
  background-color: rgba(96, 149, 159, 0.4);
  }
</style>
```

We're just setting the `height` and `width` to take up all of the available space, then doing a `display` of `grid` which will allow us to use the `place-items` style. Setting `place-items` to `center center`, automatically centers everything inside of .container for us. Super simple. We also added a nice background color to make things a little prettier.

Next, we'll style the `#quote-box` some, just to make it stand out some more.

```html
<style>
.container {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center center;
  background-color: rgba(96, 149, 159, 0.4);
  }

  #quote-box {
    box-sizing: border-box;
    width: 500px;
    height: 350px;
    background-color: white;
    padding: 12px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>
```

We set the `box-sizing` to `border-box` in order to make sure everything stays inside of our defined `width` and `height`. I find `border-box` to be a little more intuitive than the default of `content-box`.

Next, we set the `width` and `height`. Eventually, the styling will make this look like a postcard, so we're just setting hard values instead of more responsive values. We set the `background-color` to `white` to set it a part from the `.container`, and give it some padding to move the text away from the edges. Finall, we create a little `box-shadow` to make it look like it's hovering slightly over the 
`.container`.

Everything actually looks pretty good. There's some more styling we can do to polish it up, but that's just lipstick and rouge. Let's test the functionality of everything to see where we stand in relation to our User Stories.

In the markup, add a `<svelte:head>` tag, with a reference to the `fCC Test Suite.`

``` html
<svelte:head>
  <script
    src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js">

  </script>
</svelte:head>

<div class="container">	
  <div id="quote-box">
    <p id="text">{currentText}</p>
    <p id="author">{currentAuthor}</p>
    <button id="new-quote" on:click={newQuote}>New Quote</button>
    <a id="tweet-quote" href={twitterUrl}>Tweet Quote</a>
  </div>	
</div>
```

`<svelte:head>` is Svelte's way to tell the compiler to add some stuff to the head tag. Any thing you put in there will be inserted into the head tag, which is nice, because each page or component can have something in the head that is reactively added or removed based the needs of your app. In this case, we're inserting that link to `fCC Test Suite` so we can test our `Random Quote Machine`. Click on the hamburger menu, then select `Random Quote Machine` and run the test. You'll probably get a fail, with `Tests 11/12`. If that's the case, expand the panel with your `quote-box` so the panel is larger than the `quote-box`, then run the test again. Now you should get `Tests 12/12`. With the `.container` smaller than the `quote-box` User Story #11 was failing, so we just needed to expand the `.container`.

Since we just passed all of the test, technically, this project is complete. But let's go above and beyond and do a little bit more styling to make it really interesting.