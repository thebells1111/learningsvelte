---
title: Styling-c
component: Display.svelte
---

First, let's style the buttons some. We'll add a button selector in our `style` tag.

```css
button {
}
```

We'll want the cursor to be a pointer when we hover over it, so we'll set `cursor: pointer`.

```css
button {
  cursor: pointer;
}
```

The margins from a global button style are making it look off, so let's reset our margins and padding.

```css
button {
  cursor: pointer;
  padding: 0;
  margin: 0;
}
```

The numbers aren't popping enough, so let's make them a little bigger, a little bolder, and give them some border styling.

```css
button {
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 1.2em;
  font-weight: 700;
  border-style: outset;
  border-radius: 3px;
}
```

And the buttons look too short, so let's give them a height.

```css
button {
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 1.2em;
  font-weight: 700;
  border-style: outset;
  border-radius: 3px;
  height: 2.1em;
}
```

Finally, let's space those buttons out a little from each other.

```css
button {
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 1.2em;
  font-weight: 700;
  border-style: outset;
  border-radius: 3px;
  height: 2.1em;
  margin: 1px;
}
```

Ok, our buttons are looking better, but we need to move them around a little look more like a calculator.

Starting with the `AC` and `C` buttons, we'll tell them to span 2 columns. Since the fCC story had us assign an `id` to each element, we'll use the `id` css selector to style each button. So, in the `style` tag, add this css.

```css
#ac {
  grid-column: span 2;
}

#clear {
  grid-column: span 2;
}
```

Let's have the `+` button span two rows.

```css
#add {
  grid-row: span 2;
}
```

Wait a minute, why isn't it spanning the two rows like we want. It is, but the css for `button` is setting the `height` to `2.1em`. We'll have to override that.

```css
#add {
  grid-row: span 2;
  height: initial;
}
```

Okay, and we'll expand the `=` button to take up two rows.

```css
#equal {
  grid-row: span 2;
  height: initial;
}
```

We have an open spot on the last row, third column, which we can fill up by telling the `0` to span two rows.

```css
#zero {
  grid-column: span 2;
}
```

Right now, the calculator width is set to 100% of its parent.
Next up, we'll create a prop we can pass to the calculator that let's us set the width of the calculator component.
