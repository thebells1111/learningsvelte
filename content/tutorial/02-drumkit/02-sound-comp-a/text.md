---
title: Initial Drumpad Component
---
Okay, let's start off by building a super simple component that will only play one sound. Eventually, we'll use this as a template to play all of the sounds.

Inside of `App.svelte`, create a `script` tag.

```html
<script></script>
```

Below the `script` tag, create an html button element, and give it a text of "button".

```html
<script></script>

<button>
  button
</button>
```

We'll also create an `audio` element with it's `src` linked to one of the sound files we're hosting. Learning Svelte has some sound files in it's static directory that we'll be using, but you can use whatever sounds you're able to provide a `src` link to. 

```html
<button on:click={playSound}>
  <audio 
    bind:this={sound} 
    src="tutorial\drumkit\sounds\ride.wav"
  /> 
  button
</button>
```

We'll also want a way to reference the `audio` tag. For this, we're going to use a Svelte binding, and bind it to a variable we declare in the `script` tag.

```html
<script>
  let sound;
</script>

<button on:click={playSound}>
  <audio 
    bind:this={sound} 
    src="tutorial\drumkit\sounds\ride.wav"
  /> 
  button
</button>
```

What this is doing is creating an `undefined` `sound` variable, and when the `audio` element is created, creating a reference to the `audio` element via the `sound` variable.

Next, we'll want something to happen when we click the button. We'll create a `click` event handler on our button to call a function when our button is clicked.

```html
<button on:click={playSound}>
  button
</button>
```

Svelte has several event handlers, which are called by using `on:` followed by the event handler. For this instance, we're using `click`, which will call the `playSound` function. Next, we'll define the playSound function to remove the `playsound is not defined` error. Inside the script tag, create a `playSound` function that `console.log`'s the `sound` variable.

```html
<script>
  let sound;
  function playSound() {
    console.log(sound);
  }
</script>
```

Now, when you click the `button`, the `sound` variable will display in the console. It's too big for the built in console, so you'll have open your inspector by pressing 'F12', then clicking the console tab. You'll notice the `sound` variable is indeed referencing the `audio` tag.

However, we want to hear this thing, not see, it. Since sound is referencing an `audio` element, we have some methods open up to us. Notably, the `play` method. Inside of `playSound`, remove the `console.log`, and add `sound.play()`.

```html
<script>
  let sound;
  function playSound() {
    sound.play();
  }
</script>
```

Click the button, and it plays the sound. Cool. There's a problem though. If you hit the button multiple times, the audio plays all the way to the end before it replays. That's not exactly how a drum works, so we want the audio to replay from the beginning each time we hit the button. We can easily accomplish this by setting the audio's `currentTime` to zero each time the button is clicked.

```html
<script>
  let sound;
  function playSound() {
    sound.currentTime = 0;
    sound.play();
  }
</script>
```

Okay, so the completed code should look like this.

```html
<script>
  let sound;

  function playSound() {
    sound.currentTime = 0;
    sound.play();
  }
</script>

<button on:click={playSound}>
  <audio 
    bind:this={sound} 
    src="tutorial\drumkit\sounds\ride.wav"
  /> 
  button
</button>
```
