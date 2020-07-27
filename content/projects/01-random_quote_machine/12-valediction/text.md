---
title: Valediction
component: RightPanel.svelte
fold: ["script"]
---

This is going to be very similar to the salutation.

Down in the markup, add `<p>from:</p>` to `<pc-valediction>`.

```html
<pc-valediction>
  <p>from:</p>
  <p id="author">{currentAuthor}</p>
</pc-valediction>
```

And then we'll style it.

```css
pc-valediction > p:nth-of-type(1) {
  font-family: 'Great Vibes';
  margin: 0;
  padding: 0;
}

pc-valediction > p:nth-of-type(2) {
  margin: 0 0 0 0.25em;
  font-family: 'La Belle Aurore';
  font-size: 1.3em;  
	transform: rotate(-1deg);
}
```

