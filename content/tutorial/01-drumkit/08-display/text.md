---
title: Adding Display
---
The last thing we'll need to do to complete our functionality is add our display and contain everything in a Drum Machine container. This will complete User Stories #1, #2 and #7.

**User Story #1:** I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

**User Story #2:** Within #drum-machine I can see an element with a corresponding id="display".

**User Story #7:** When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

To start, click on the `+` tab in the REPL, and name the new file `Display.svelte`.

Inside of `Display.svelte`, add the following:

```html
<script>
  export let displayText;
</script>

<p id="display">{displayText}</p>
```

This will setup this component to receive the `displayText` prop and display it in the `p` tag. 



Inside of `App.svelte`, `import Display from './Display.svelte'` and create a new variable `let displayText = ''`.


```html
<script>
  import Drumpad from './Drumpad.svelte';
  import Display from './Display.svelte';

  let displayText = '';
  const drumPads = [...
```

Then, in the markup, add the `Display` component with the the `displayText` prop passed. Then wrap everything in a `div` with an id of `drum-machine`.

```html
<svelte:window on:keydown={handleKeydown} />
<div id="drum-machine">
  <Display {displayText} />
  <div class="drum-pads">
    {#each drumPads as pad, index}
      <Drumpad {pad} {playSound} />
    {/each}
  </div>
</div>
```

We'll need a way to update `displayText` whenever a sound is played. Since we already have a `playSound` function, we can easily change `displayText`. Since the `pad` object is sent to the `playSound` function as an argument, we have access to the `pad.displayText` for every `pad`. We simply have to set `1`displayText = pad.displayText` anytime the function is called.

```js
 function playSound(pad) {
    const sound = pad.audioElement;
    sound.currentTime = 0;
    sound.play();
		displayText = pad.displayText;
  }
```

Now, we can hit our button, or key, and the display should show the sound played.

It seems like we've now accomplished all of the user stories, so let's bring in the fCC test to see if we've passed them all.

We'll use the `svelte:head` tag to add some things to the header of this particular page. We'll be adding a script reference to the fCC test. In your markup, add the following at the top above `svelte:window`

```html
<svelte:head>
  <script
    src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js">

  </script>
</svelte:head>
```

Select Drum Machine from the Test Suite, and run the test!

Hmm... we passed 7/8. 

When we click `Tests` button again, it brings up an error on User Story #7. Let's look at that one again.

**User Story #7:** When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

Ok, but that's happening when we trigger a pad. What's up with that? It must be something related to fCC's test program. Let's see if we can create a work around. It mentions inner text.  We can use our `document.getElementById('display')` to access the innerText of our display element. Let's try that. 

Inside of the `playSound` function replace `displayText = pad.displayText` with 
`document.getElementById('display').innerText = pad.displayText`. It's not quite as elegant, but it is cool that Svelte allows us to use vanilla JS with no problems. Rerun the test, and we get 8/8. Awesome!!! We're complete with the task.

But, it does look ugly, so let's add a little bit of styling, and change the behavior a little so the display only shows the sound as long as the sound is playing. Let's do the sound real quick, then move on to styling. 

Inside of `playSound`, we have access to each `audioElement` through the `pad` argument. Because it's a reference to an audio tag, we also have access to the duration of each clip. Audio duration is returned in seconds, so we can convert that to milliseconds by multiplying by 1000, then set a timeout to clear the `document.getElementById('display').innerText` string whenever the clip is complete or updated. Normally we would update the `displayText` varibable, but we have to do it this way because of our work around. 

Update the `playSound` function to look like this:

```js
function playSound(pad) {
	const sound = pad.audioElement;
	sound.currentTime = 0;
	sound.play();
	document.getElementById('display').innerText = pad.displayText;

	setTimeout(
		() => (document.getElementById('display').innerText = ''),
		sound.duration * 1000
	);
}
```

Now play around with the sounds, and notice how the `display` disappears when the audio clip is done.

Run the test, and everything is still passing. It looks like we're good to go.

On to styling.