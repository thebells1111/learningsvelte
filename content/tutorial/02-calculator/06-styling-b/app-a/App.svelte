<script>
  import Display from './Display.svelte'
  let total = 0;
  let totalArr = [];

  let buttons = [
    {
      value: "ac",
      func: handleAC,
      id: "ac",
    },
    {
      value: "c",
      func: handleClear,
      id: "clear",
    },
    {
      value: "+/-",
      func: handleNegative,
      id: "neg",
    },
    {
      value: "/",
      func: handleOperand,
      id: "divide",
    },
    {
      value: "x",
      func: handleOperand,
      id: "multiply",
    },
    {
      value: "-",
      func: handleOperand,
      id: "minus",
    },
    {
      value: "7",
      func: handleNumber,
      id: "seven",
    },
    {
      value: "8",
      func: handleNumber,
      id: "eight",
    },
    {
      value: "9",
      func: handleNumber,
      id: "nine",
    },
    {
      value: "+",
      func: handleOperand,
      id: "add",
    },
    {
      value: "4",
      func: handleNumber,
      id: "four",
    },
    {
      value: "5",
      func: handleNumber,
      id: "five",
    },
    {
      value: "6",
      func: handleNumber,
      id: "six",
    },
    {
      value: "1",
      func: handleNumber,
      id: "one",
    },
    {
      value: "2",
      func: handleNumber,
      id: "two",
    },
    {
      value: "3",
      func: handleNumber,
      id: "three",
    },
    {
      value: "=",
      func: handleEqual,
      id: "equal",
    },
    {
      value: "0",
      func: handleNumber,
      id: "zero",
    },
    {
      value: ".",
      func: handleDecimal,
      id: "decimal",
    },
  ];

  function handleNumber(e) {
    console.log(e.target.innerText);
  }

  function handleOperand(e) {
    console.log(e.target.innerText);
  }

  function handleEqual(e) {
    console.log(e.target.innerText);
  }

  function handleDecimal(e) {
    console.log(e.target.innerText);
  }

  function handleAC(e) {
    console.log(e.target.innerText);
  }

  function handleNegative(e) {
    console.log(e.target.innerText);
  }

  function handleClear(e) {
    console.log(e.target.innerText);
  }
</script>

<Display {total} {buttons} {totalArr} />