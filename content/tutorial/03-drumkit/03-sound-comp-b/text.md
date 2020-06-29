---
title: Refining Drumpad Component
---
Now that we have a functional component, let's refine it to match some of the criteria required in our User Story.

**User Story #3:** Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

**User Story #4:** Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).


First, let's create an object that we can use to store some info about each drumpad. We'll eventually create an array of these objects, for for now, we'll just create on for this component.

Inside of your `script` tag, create an object called `pad`. Inside the object, we'll also assign the following properties.

```js
let pad = {
  id: "Q",
  soundUrl: "/tutorial/drumkit/sounds/ride.wav",
  displayText: "ride",
  audioElement: undefined,
};
```

The `id` property be the inner text of the `button`, as well as the id of each `audio` element

The `soundUrl` will be the `src` attribute of the `audio` element.

`displayText` will be the `id` of each button, and the text that is displayed when each audio clip is played.

`audioElement` will hold the reference to each audio element, removing the need for the `sound` variable.

Now that we have a data structure, let's update our HTML.

First, let's give our `button` an 'id' equal to `pad.displayText` and a `class` of `"drum-pad"`. We'll also changer the `button` inner text to `pad.id`. This should have us set up to complete User Story #3.

```html
<button 
  id={pad.displayText}
  class="drum-pad"
  on:click={playSound}
>
  <audio
    bind:this={sound}
    src="tutorial\drumkit\sounds\ride.wav"
  />
  {pad.id}
</button>
```

Let's also add an `id` and `class` to our `audio` element. The `id` will be equal `pad.id` and we can set the `class` equal `"clip"`. Now we're setup to complete User Story #4.

```html
<audio
  id={pad.id}
  class="clip"
  bind:this={sound}
  src="tutorial\drumkit\sounds\ride.wav"
/>
```

We can change `bind:this` from `sound` to `pad.audioElement`. We'll also change the `src` to `pad.soundUrl`. 

```html
  <audio 
    id={pad.id}
    class="clip"
    bind:this={pad.audioElement} 
    src="tutorial\drumkit\sounds\ride.wav" 
  />
```


And to set us up for future styling, let's wrap all of this up in a `div`. 

```html
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

Since, we are now binding the audio element to pad.audioElement, we can delete the `let sound` declaration. When we do this, the `playSound` function won't work anymore, so we'll have to modify that a little bit by creating `const sound = pad.audioElement` inside of the `playSound` function.

```html
<script>
  let pad = {
      id: 'Q', 
      soundUrl: 'tutorial/drumkit/sounds/ride.wav', 
      displayText: 'ride', 
      audioElement: undefined,
    }

  function playSound() {
    const sound = pad.audioElement
    sound.currentTime = 0;
    sound.play();
  }
</script>

<div>
```

Our final code should look like this, and we are setup to turn this into a stand alone component.

```html
<script>
  let pad = {
      id: 'Q', 
      soundUrl: 'tutorial/drumkit/sounds/ride.wav', 
      displayText: 'ride', 
      audioElement: undefined,
    }

  function playSound() {
    sound.currentTime = 0;
    sound.play();
  }
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
</div>
```



