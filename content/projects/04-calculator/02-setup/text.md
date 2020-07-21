---
title: Setup
---

First things first, let's create a `script` tag in `App.svelte`.

```js
<script></script>
```

Since we know we're going to need to keep a total, let's first create a `total` variable and set it to `0`.

We'll also create an array to hold our inputs as they come in called `totalArr`.

For this calculator, we'll want the following buttons:

- numbers
- operands
  - addition
  - subtraction
  - multiplication
  - division
- equals
- decimal
- negative
- all clear
- clear

In order to complete the freeCodeCamp challenge, each of the buttons will require an `id`, and we'll want to assign a function to each button that will get triggered when the button is pressed. We'll also want a value for that button to determine what is displayed on the button.

We'll create an array of button objects with the following structure:

```js
let buttons = [{
  value: 'button1', //This is what will be displayed on each button
  func: handleButton1,
  id: 'button1' //This is the id required by fCC
},
{
  value: 'button1', //This is what will be displayed on each button
  func: handleButton1,
  id: 'button1' //This is the id required by fCC
},
...
]
```

We'll want to create an object for each button on the calculator.

We'll also want to create functions for each of our buttons that for now will have this format.

```js
function handleButton1(e) {
  console.log(e.target.innerText);
}
```

We'll create the following functions using the above format.

- handleNumber
- handleOperand
- handleEqual
- handleDecimal
- handleAC
- handleNegative
- handleClear

You can type all of this in, or hit the `Auto Complete Code` button below.
