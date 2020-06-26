---
title: Let's style!!
---
We know the test are working, so let's remove that from our code. In `App.svelte`, go ahead and remove the whole `svelte:head` tag. 

We'll also make the styling on this super simple. You can make it whatever you want, because the style is for the most part independent of the functionality. There will be one extra prop we'll have to pass to make the style work with the key press, but we'll get to that in a minute. 

To start, we'll put all of the pads in a grid.

Inside of `App.svelte`, create a `<style>` tag below the script tag. Inside of that tag, type the following:

```html
<style>
  .drum-pads {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 320px;
    height: 320px;
    border: 1px solid black;		
    box-sizing: border-box;
  }
</style>
```

This will put of the pads in a 3x3 grid, set the over all width and height to a fixed height, then add a border around the whole div. The box-sizing we'll keep everything contained inside of the `320px` with set in the height and width. 

It still looks kind of goofy, so we'll also style each of the individual buttons. Inside the `Drumpad.svelte` component, add a `style` tag. Inside of that tag add the following:

```html
<style>
	button {
			width: 100%;
			height: 100%;  
			border: solid black 2px;  
		}
</style>
```

Okay, that looks better. We'll come back to it, but for now, there's that annoying jump whenever the display shows. Let's change that.

Inside of the 'Display.svelte' component, create a 'style' tag and add this:

```html
<style>
	p {
    width: 320px;
    height: 40px;
    border: 3px solid black;
  }
</style>
```

So that gets rid of the annoying jump, but it still looks incomplete. Let's remove the margin, the thick bottom line that comes from removing the margin, and change the width to match the width of the drumpads.

```html
<style>
	p {
    width: 320px;
    height: 40px;
    border: 3px solid black;
		margin: 0;
		border-bottom: none;
    box-sizing: border-box;
  }
</style>
```

We can now center everything by using the cool new `CSS grid` styles, then thicken up the text some with `font-weight`.

```html
<style>
	p {
    width: 320px;
    height: 40px;
    border: 3px solid black;
		margin: 0;
		border-bottom: none;
    box-sizing: border-box;
		display: grid;
  	place-items: center center;
		font-weight: 700;
  }
</style>

The `display` is looking good, so let's polish up the buttons and finish this project. 

Back in 'Drumpad.svelte', go back to the `button` styles, and let's change that background color. Let's also get rid of the annoying little dots at the intersection of each button border, which is caused by the radius of each button. We'll also thicken up the text here with `font-weight`.

```html
<style>
	button {
			width: 100%;
			height: 100%;  
			border: solid black 2px; 			
			background-color: white;
			border-radius: 0; 
    	font-weight: 700;
		}
</style>
```

That's working, but it turns gray when the button is clicked. Let's make it turn black with white text.

```html
<style>
	button {
			width: 100%;
			height: 100%;  
			border: solid black 2px; 			
			background-color: white;
			border-radius: 0; 
    	font-weight: 700;
		}

	
  button:active {
    background-color: black;
    color: white;
  }
</style>
```

We are just about wrapped up. However, there is one little design tweak that would make this even better. Notice when you hit the key on your keyboard that the button doesn't change color the same way it does when you click the button with your mouse. Let's do something about that. Down in your `button` tag in the markup, add `class:active={key === pad.id}`. 

```html
<button
    id={pad.displayText}
    class="drum-pad"
    on:click={() => playSound(pad)}
    class:active={key === pad.id}
	>
```

This will add a class of active to the button if the `key` prop is equal to the `pad.id`. Now, we don't have a key prop, so go back to your script and add `export let key`.

```html
<script>
  export let pad;
  export let playSound;
  export let key;
</script>
```

Then, go back to the styles and add the `active` class to the `button:active` styles.

```css
.active,
  button:active {
    background-color: black;
    color: white;
  }
```

Now, go to `App.svelte`, and create a new variable called `key`.

```html
<script>
  import Drumpad from './Drumpad.svelte';
  import Display from './Display.svelte';
  let displayText = '';
  let key;
```

Because we did that, we can now go into the `handleKeyDown` function, and remove the `const` from `const key = e.key.toUpperCase();`. Now, whenever the key is pressed, it will change the global `key` variable. 

On last problem though. Now, whenever the key is pressed, it changes color, but it stays that color even after the key is released. We need a way to reset the `key` variable whenever the key is released. Super easy.

Go down to the `svelte:window` tag, and add `on:keyup={() => (key = '')}` below the `on:keydown` event binder. This just calls an annonymous function to set the key to a empty string whenever the key is released. 

```html
<svelte:window
  on:keydown={handleKeydown}
  on:keyup={() => (key = '')}
/>
```

Now clicking the key on the keyboard works as expected. Awesome!!! You just completed building a Drum Machine with Svelte. Now go build other cool things!!!
