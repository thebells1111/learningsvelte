---
title: Styling-a
component: Display.svelte
---

Okay, let's start styling this guy.

Underneath the `script` tag, create a new `style` tag. It'll look like

```html
<style></style>
```

Inside of that that tag, create a style for the `.calculator` class.

```html
<style>
  .calculator {
  }
</style>
```

Now we can start styling.

We don't want the user to be able to highlight things, so we'll set `user-select: none`. We'll make the cursor into a pointer so it looks like a hand, which seems appropriate for a calculator app. `cursor: pointer`. And let's make the background sort of grayish, so `background-color: #bbb`, and the text to be darker gray so `color: #444`

```css
.calculator {
  user-select: none;
  cursor: pointer;
  color: #444;
  background-color: #bbb;
}
```

Next, a calculator is laid out in a grid, so `css grid` will serve us well. Let's set the display to grid by typing in `display: grid`

```css
.calculator {
  user-select: none;
  cursor: pointer;
  color: #444;
  background-color: #bbb;
  display: grid;
}
```

And we'll split the calculator into four columns, so we'll let's add `grid-template-columns: 25% 25% 25% 25%`.

```css
.calculator {
  user-select: none;
  cursor: pointer;
  color: #444;
  background-color: #bbb;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
```

And we'll refine the style a little by giving the calculator a solid black border and some padding.

```css
.calculator {
  user-select: none;
  cursor: pointer;
  color: #444;
  background-color: #bbb;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  border: solid 1px black;
  padding: 5px;
}
```

Alright, it's starting to look more like a calculator already.
