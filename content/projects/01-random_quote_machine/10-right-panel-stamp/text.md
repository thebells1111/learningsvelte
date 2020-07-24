---
title: Style Stamp
component: RightPanel.svelte
fold: ["script"]
---

This is just more styling. We'll add some more CSS to `pc-stamp`. We're making it a flex element with a direction of `row-reverse` so we can get the stamp on the right hand side of the postcard. We're also giving it a position of `relative` so we can later use `absolute` to position the stamp.

```css
pc-stamp {
  flex: 0 1 auto;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
}
```

Inside of the markup, we'll add `p` tag with the text `Place Stamp Here`.

```html
<pc-stamp>
  <p>Place Stamp Here</p>    
</pc-stamp>
```

Then we'll style the `p` to make it look more like a stamp box.

```css
pc-stamp > p {
  width: 50px;
  height: 50px;
  margin: 0;
  border: 1px solid black;
  font-size: 0.8em;
  display: grid;
  place-items: center;
  text-align: center;
}
```

We used `display:grid` to allow us to use `place-items: center`, to make centering everything easier.

Ok, this is starting to look more and more like a postcard. Next, let's add an actual stamp. We'll just add an `img` of a stamp to the markup. You can use this URL as your `src`.

`https://res.cloudinary.com/learningsvelte/image/upload/c_thumb,w_60,g_face/v1595559461/learningsvelte/projects/random_quote_machine/Marcus.png`

```html
<pc-stamp>
  <p>Place Stamp Here</p>  
  <img
    alt="Stamp of Marcus Aurelius"
    src="https://res.cloudinary.com/learningsvelte/image/upload/c_thumb,w_60,g_face/v1595559461/learningsvelte/projects/random_quote_machine/Marcus.png"
  />  
</pc-stamp>
```

Now that we have a stamp, we can style it to place it over the stamp box. First, we'll position it using `absolute`. We're going to bring in another `img` of a cancellation mark, so we'll also target just this `img` so we can move it around some, then we'll rotate it slightly to make it look more natural.

```css
pc-stamp > img {
  position: absolute;
}

pc-stamp > img:nth-of-type(1) {
  top: -5px;
  transform: rotate(3deg);
}
```

Next, we'll add the cancellation mark. The URL for that `img` is

`https://res.cloudinary.com/learningsvelte/image/upload/v1595561153/learningsvelte/projects/random_quote_machine/cancel.png`

```html
<pc-stamp>
  <p>Place Stamp Here</p>
  <img
    alt="Stamp of Marcus Aurelius"
    src="https://res.cloudinary.com/learningsvelte/image/upload/c_thumb,w_60,g_face/v1595559461/learningsvelte/projects/random_quote_machine/Marcus.png"
  />
  <img
    alt="Stamp Cancelation Mark"
    src="https://res.cloudinary.com/learningsvelte/image/upload/v1595561153/learningsvelte/projects/random_quote_machine/cancel.png"
  />
</pc-stamp>
```

Now it's just a simple matter of applying some more CSS to adjust the location of the cancellation mark.

```css
pc-stamp > img:nth-of-type(2) {
  top: 25px;
  right: 25px;
}
```

Awesome!!! This is really starting to look like a postcard. Let's move on to styling the salutation.