---
title: Style LeftPanel.svelte
---

Now we can start styling some more. In `LeftPanel.svelte`, below the `script` tag, we'll add a `style` tag. Inside of the style tag, we'll add the following CSS.

```html
<style>
  div {
    box-sizing: border-box;
    width: 50%;
    border-right: 1px solid black;
  }

  p {
    margin: 0;
    font-size: 1.2em;
    line-height: 1.2em;
    padding: 0.5rem 1rem 0 1rem;
    transform: rotate(-3deg);
    font-family: 'La Belle Aurore';
  }
</style>
```

This is pretty basic css stuff. The width of the `div` is set to `50%` so now the postcard is split in half. A `border-right` is added to visually split the two panels, and make the box look more like a postcard. The `margins` of the `p` are reset to `0`, and we increase the `font-size` and `line-height` to make it a little more readable. We rotate the `p` a little to make it look a little more organic, and add the `font-family`, which uses the Google Font we put in out `svelte:head` in one of the previous steps. Now the left pane has a hand written feel to it. If you click New Quote a few times though, you'll notice a new problem though. If the quote is particularly long, it overflows beyond the postcard. That's not cool. We don't want to have scrollbars in our postcard, so we'll have to decrease the font size if the quote is too long. We'll add a new class to the CSS, which displays a smaller text.

```html
<style>
  div {
    box-sizing: border-box;
    width: 50%;
    border-right: 1px solid black;
  }

  p {
    margin: 0;
    font-size: 1.2em;
    line-height: 1.2em;
    padding: 0.5rem 1rem 0 1rem;
    transform: rotate(-3deg);
    font-family: 'La Belle Aurore';
  }

  .small-text {
    font-size: 1em;
  }
</style>
```

Now we just need a way for our app to apply the class if the quote is too long. Svelte provides a solution. It's called the `class directive` and it's a way to apply a class to a element if a condition is true. `class:active="{current === 'foo'}"` In this case, the class of `active` will be applied to the element if `current === 'foo'` otherwise, the class is not on the element. We want the `small-text` class to be applied to our `p` if the `currentText.length` is too long. Messing around with the different long quotes, I found `currentText.length > 250` accomplished this.


```html
<div>
  <p id="text" class:small-text={currentText.length > 250}>
    {currentText}
  </p>
</div>
```

Now, when we click through the quotes, there's no overflow, and longer quotes have a smaller font. The left panel is working exactly as we'd like it to.