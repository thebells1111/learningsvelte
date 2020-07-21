---
title: Make Drumpad Component reusable
---
Now, let's make this bad boy reusuable.

Click on the `+` tab to create a new component, and name it `Drumpad.svelte`

Copy everything from `App.svelte` over to `Drumpad.svelte`

Delete everything in `App.svelte, because we're starting fresh.

Create a `script` tag in `App.svelte`, and inside it, import Drum pad.

Then below that, add the `Drumpad` component to the markup.

```html
<script>
	import Drumpad from './Drumpad.svelte'
</script>

<Drumpad />
```

Look, there's our `button` again!!!

Since we want this component to be reusable, let's move the `pad` object and `playSound` function to `App.svelte`.

App.svelte will look like this:
```html
<script>
	import Drumpad from './Drumpad.svelte'
	let pad = {
		id: 'Q',
		soundUrl: 'tutorial/drumkit/sounds/ride.wav',
		displayText: 'ride',
		audioElement: undefined,
	}

	function playSound() {
		const sound = pad.audioElement;
		sound.currentTime = 0;
		sound.play();
	}
</script>

<Drumpad />
```

Since we removed them from `Drumpad.svelte`, we'll pass them as props to `Drumpad.svelte`.

```html
<script>
	import Drumpad from './Drumpad.svelte'
	let pad = {
		id: 'Q',
		soundUrl: 'tutorial/drumkit/sounds/ride.wav',
		displayText: 'ride',
		audioElement: undefined,
	}

	function playSound() {
		const sound = pad.audioElement;
		sound.currentTime = 0;
		sound.play();
	}
</script>

<Drumpad {pad} {playSound} />
```

Looking at our console.log, we'll see an error that `<Drumpad>` was created with unknown props. To correct this, go into `Drumpad.svelte`, and add `export let pad` and `export let playSound` inside the `script` tag.

`Drumpad.svelte will look like this:
```html
<script>
  export let pad;
  export let playSound;
</script>

<div>
  <button
    id={pad.displayText}
    class="drum-pad"
    on:click={playSound}
  >
    <audio
      bind:this={pad.audioElement}
      id={pad.id}
      class="clip"
      src={pad.soundUrl}
    />
    {pad.id}
  </button>
  <p>{pad.displayText}</p>
</div>
```

Click the `Q` button, and you'll find everything is still working. 

Now we're ready to add more sounds and buttons.