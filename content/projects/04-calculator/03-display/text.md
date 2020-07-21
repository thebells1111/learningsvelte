---
title: Create Display
---

Let's make a new component and call it `Display.svelte` by clicking on the `+` sign in the REPL.

Inside of our `Display.svelte` file, we'll create a script tag and set it up for the props from the Calculator.svelte component by using `export let variableName`.

```js
<script>
  export let total = 0; export let totalArr = []; export let buttons = [];
</script>
```

This is Sveltes method of passing props. Any child component will need export in front of the variable declaration in order to receive the prop from it's parent.

We'll also setup the HTML to display the calculator.

Below your script tag, create a `div` elements with a `class` of `calculator`.

```html
<div class="calculator"> </div>
```

Inside that `div`, create another `div` with an `id` of `display`.

```html
<div class="calculator">
  <div id="display"> </div>
</div>
```

Because we'll want to keep track of our inputted values, as well as our running total, we'll also create two more divs inside the `#display` div. For styling purposes later, let's give the first one a `class` of `display-top` and the second one a `class` of `display-bottom`

```html
<div class="calculator">
  <div id="display">
    <div class="display-top">{totalArr}</div>
    <div class="display-bottom">{total}</div>
  </div>
</div>
```

Once we have that done, let's create each of our buttons. To do that, we'll use a `#each` loop. Svelte has a built in function that will loop through an array and use the value of each array index. The format will look like this.

```html
{#each buttons as button}
<button id="{button.id}" on:click="{button.func}">
  {button.value}
</button>
{/each}
```

The function is opened with `{#each}`, then the array we're looping through is declared `{#each buttons}`, then each indexed value will be used `{#each buttons as button}`.

Now we can create an HTML template that will be repeated for each array index.

Ours will create a series of buttons from the `buttons` variable, which is an array containing objects, each of which has an `id` key, a `func` key, and a `value` key.

Svelte also allows event binding by using `on:click="{functionToBeCalled}"`.
Whenever Svelte encounters the handlebars in the HTML, it will use the JS variable within the handlbars. There are several other event handlers one can use with `on:`, such as `on:focus`, `on:blur`, `on:change`, and several others that will come up in other tutorials.

Our final HTML should look like this.

```html
<div class="calculator">
  <div id="display">
    <div class="display-top">{totalArr}</div>
    <div class="display-bottom">{total}</div>
  </div>
  {#each buttons as button}
  <button id="{button.id}" on:click="{button.func}">
    {button.value}
  </button>
  {/each}
</div>
```

What we have here is a main div with the class="calculator". Inside of that div with an id="display for displaying the calculator output. Finally, we have a Svelte {#each} loop that will take the value of each item in the buttons array, and loop through it creating the HTML for each button, which will consist of the id of the button(which we're providing for the freeCodeCamp project), the on:click handler to call a function when the button is clicked, and the display value of the button.

In our App.svelte, inside of our `script` tag, let's add the following. This allows us to use the Display component inside of our App.

```js
<script>
  import Display from './Display.svelte' let total = 0; let totalArr = []; ...
</script>
```

With the Display Component import, we can add it to our HTML. Since it's the only thing we have for HTML, we'll put it at the bottom, below our script tag.

If you click on the arrow next to the `<script>`, you'll fold the whole script tag, then you can enter your `Display` component in the HTML section.

<!-- prettier-ignore -->
```html
<script>...</script>

<Display 
  {total} 
  {buttons} 
  {totalArr} 
/>
```

The curly braces around each of the variables is how we pass props from the parent down to the child. Another way to pass the prop would be something like

<!-- prettier-ignore -->
```html
<Display 
  total="{total}" 
  buttons="{buttons}" 
  totalArr="{totalArr}" 
/>
```

The value not in curly braces is the name of the prop being sent to the child component, and would also be the name of the variable in the child component with `export` in front of it. The value in the curly braces is the variable from the parent being sent to the child. If the prop name and the parent variable name are the same, Svelte allows putting the name in curly braces as a short hand method. So. `{total}` is equivalent to `total={total}`

Try changing the `total` variable in `App.svelte` to `foo`. In order to pass it to `Display`, you'll need to change

```html
<Display {total} {buttons} {totalArr} />
```

to

```html
<Display total="{foo}" {buttons} {totalArr} />
```

In `Display.svelte`, change `export let total = 0` to `export let bar = 100`. This will set the variable bar with an initial value of 100. Then change

```html
<div class="display-bottom">{total}</div>
```

in your HTML to

```html
<div class="display-bottom">{bar}</div>
```

and you should see 100 displayed in the results.

Now go back to `App.svelte` and change

```html
<Display total="{foo}" {buttons} {totalArr} />
```

to

```html
<Display bar="{foo}" {buttons} {totalArr} />
```

You'll see 0 displayed in the results now, because the variable `bar` in `Display.svelte` gets it's data from `foo` in `App.svelte`. If you change the `foo` variable to 1000 in `App.svelte`, you'll see it updated in the results.

Finally, change

```html
<Display bar="{foo}" {buttons} {totalArr} />
```

back to

```html
<Display {total} {buttons} {totalArr} />
```

or click the `Auto Complete Code` button to restore our App to it's current state.

Without any styling, the calculator will look and act like this. You can click on the buttons and check the console.log to verify your button is working.

You may notice the buttons are in a seemingly random order. This is because we're going to lay the calculator out using CSS Grid later, using a four column layout, and the buttons in this order will fall into the places we need them for the layout.
