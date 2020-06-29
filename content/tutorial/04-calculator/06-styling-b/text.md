---
title: Styling-b
component: Display.svelte
---

Now, to further refine this, lets adjust our grids.

In our `Display.svelte` componenent, inside of our `style` tag, we'll add some more `css`.

We'll start with the display at the top of the calculator. Since we were required to give it an id by the fCC user story, we'll access it with the id selector.

```css
#display {
}
```

Next, let's tell it to start in the first column and span 4 columns, so it will take up the whole width of the first row.

```css
#display {
  grid-column: 1 / span 4;
}
```

Ok, looking a little better. Let's add some more styling so the display stand out a little better.

```css
#display {
  grid-column: 1 / span 4;
  border: solid 1px black;
  background-color: #ddd;
  border-radius: 2px;
}
```

It's a little too short, so let's give it a height of 60px.

```css
#display {
  grid-column: 1 / span 4;
  border: solid 1px black;
  background-color: #ddd;
  border-radius: 2px;
  height: 60px;
}
```

We'll gussy this thing up a little with some linear-gradient to make the display look like it has a little reflection.

```css
#display {
  grid-column: 1 / span 4;
  border: solid 1px black;
  background-color: #ddd;
  border-radius: 2px;
  height: 60px;
  background: linear-gradient(
    135deg,
    #fefefe 0%,
    #d1d1d1 37%,
    #dbdbdb 58%,
    #e2e2e2 100%
  );
}
```

Oooh, that's nice...

We'll add some margin on the bottom to separate the buttons from the screen.

```css
#display {
  grid-column: 1 / span 4;
  border: solid 1px black;
  background-color: #ddd;
  border-radius: 2px;
  height: 60px;
  background: linear-gradient(
    135deg,
    #fefefe 0%,
    #d1d1d1 37%,
    #dbdbdb 58%,
    #e2e2e2 100%
  );
  margin-bottom: 2.5px;
}
```

And because the display isn't a button, let's ensure there isn't the hand when we hover over it by setting `cursor: default`.

```css
#display {
  grid-column: 1 / span 4;
  border: solid 1px black;
  background-color: #ddd;
  border-radius: 2px;
  height: 60px;
  background: linear-gradient(
    135deg,
    #fefefe 0%,
    #d1d1d1 37%,
    #dbdbdb 58%,
    #e2e2e2 100%
  );
  margin-bottom: 2.5px;
  cursor: default;
}
```

Great, now that is some display. But... our buttons are kind of wonky, so let's fix that.
