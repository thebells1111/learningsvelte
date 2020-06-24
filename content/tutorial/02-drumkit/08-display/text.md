---
title: Adding Display
---
Okay, now it's time to add our trigger keys so we can complete User Story #6. This will be super easy. Thanks Svelte!!!

Svelte has a way for us to add event listeners to the global window object, which is conveniently called `<svelte:window>`

Inside of `App.svelte`, in the markup, add `<svelte:window on:keydown={handleKeydown} />` above the `each` loop.

```html
<svelte:window on:keydown={handleKeydown} />

{#each drumPads as pad}
  <Drumpad {pad} {playSound} />
{/each}
```

This will attach a `keydown` event listener to the global window object, that whenever triggered will call the `handleKeydown` function. We could call the function whatever we want, but we'll settle for `handleKeydown`.

Let's create the `handleKeydown` function now. Inside of the `script` tag, under the `playSound` function create the `handleKeydown` function.

```js
function handleKeydown(e) {
	const key = e.key.toUpperCase()
	console.log(key)
}
```

Now, start pressing keys, and you'll see in your `console.log` which key you were pressing. We're converting it to upper case so the key will work regardless of caps lock or shift. Ok, but we're only interested in a limited subset of the keys. How can we ensure the key we're pressing falls within that subset. We'll create an array of our subset, then use `indexOf` to see if the key we pressed falls in that subset. We'll put the letters in the same order as the letters in the `drumPads` array created earlier, so we can use the index number returned from `indexOf` to send the proper `drumPads` object to the `playSound` function.


```js
function handleKeydown(e) {
	const key = e.key.toUpperCase()
	const triggerKeys = ['Q', 'W', 'E', 'A', 'S', 
			'D', 'Z', 'X', 'C'];
	const index = triggerKeys.indexOf(key);
    if (index > -1) {
      playSound(drumPads[index]);
    }
}
```

Now you can hit any of the nine trigger keys, and you should hear the corresponding sound, and User Story #6 is now complete.
