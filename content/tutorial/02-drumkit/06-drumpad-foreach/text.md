---
title: Create All Drumpads
---
We now have an error tellings us `'pad' is not defined`. That's because we're now trying to pass a prop to our `Drumpad` component that doesn't exist. It's an easy fix though. Since we want to create multiple `Drumpads`, we can use Svelte's `{#each}` loop, which will loop through an array and create markup for each item in the array. Inside `App.svelte`, go to the markup, and wrap the `Drumpad` component in with `{#each drumPads as pad}`

```html
{#each drumPads as pad}
  <Drumpad {pad} {playSound} />
{/each}
```

This will create a `Drumpad` component for each object in the `drumPad` array, then pass the indexed object to the `Drumpad` component. It's also passing a reference to the `playSound` function to each `Drumpad` component.

The problem we have now, is no sound is being played. This is because `playSound` is using the variable `const sound = pad.audioElement`. Well, pad is no longer in the scope of playSound. To correct this, let's add `pad` as an argument to `playSound`.

```js
	function playSound(pad) {
		const sound = pad.audioElement;
		sound.currentTime = 0;
		sound.play();
	}
```

Then, we'll have to go into `Drumpad.svelte`, and pass `pad` as an argument. We'll change the button tag to match this.

```html
<button
  id={pad.displayText}
  class="drum-pad"
  on:click={()=>playSound(pad)}
>
```

This creates an anonymous function that `on:click` calls, which in turn calls `playSound` with the `pad` argument passed.

Now, click on the various buttons, and you'll find things sound great again.