---
title: Salutations
component: RightPanel.svelte
fold: ["script"]
---

Salutations, and greetings!!!

Down in the markup, change 
```html
<pc-salutation />
```
to

```html
<pc-salutation>
  <p>to:</p>
  <input placeholder="Enter Your Name Here" />
</pc-salutation>
```

Ok, let's style it. 

```css
pc-salutation > p {
    font-family: 'Great Vibes';
    margin: 0;
    padding: 2em 0 0 0;
  }

pc-salutation > input {
  padding: 0;
  border: none;
  margin-left: 0.5em;
  width: 196px;
  font-family: 'La Belle Aurore';
  font-size: 1.3em;  
	transform: rotate(-.5deg);
}

pc-salutation > ::placeholder {
  color: black;
  opacity: 1;
}
```

And then, we can move on to the valediction. 