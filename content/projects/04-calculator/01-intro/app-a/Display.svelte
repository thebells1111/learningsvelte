<script>
  export let total;
  export let totalArr;
  export let buttons;   
	export let width = '250px';
</script>

<style>
  .calculator {
    user-select: none;
    cursor: pointer;
    color: #444;
    background-color: #bbb;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    border: solid 1px black;
    padding: 5px;
    width: var(--width);
  }

  #display {
    grid-column: 1 / span 4;
    border: solid 1px black;
    background-color: #ddd;
    border-radius: 2px;
    height: 60px;
    background: linear-gradient(
      135deg,
      #fefefe 0%,
      #d1d1d1 37%,
      #dbdbdb 58%,
      #e2e2e2 100%
    );
    margin-bottom: 2.5px;
    cursor: default;
  }

  #display > div {
    text-align: right;
    box-sizing: border-box;
    height: 50%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
  }

  #display > div > div {
    float: right;
  }

  .top {
    font-size: 0.8em;
    line-height: 200%;
  }

  .bottom {
    font-size: 1.2em;
    line-height: 100%;
  }

  button {
    cursor: pointer;
    padding: 0;
    margin: 0;
    font-size: 1.2em;
    font-weight: 700;
    border-style: outset;
    border-radius: 3px;
    height: 2.1em;
    margin: 1px;
  }

  #ac {
    grid-column: span 2;
  }

  #clear {
    grid-column: span 2;
  }

  #add {
    grid-row: span 2;
    height: initial;
  }

  #equal {
    grid-row: span 2;
    height: initial;
  }

  #zero {
    grid-column: span 2;
  }
</style>

<div class="calculator" style="--width: {`${width}`}">
  <div id="display">
    {#if (total!=='err')}
    <div>
      <div class="top">{totalArr.join(' ')}</div>
    </div>
    <div>
      <div class="bottom">{total}</div>
    </div>
    {:else}
    <div>{total}</div>
    {/if}
  </div>
  {#each buttons as button}
  <button id="{button.id}" on:click="{button.func}">{button.value}</button>
  {/each}
</div>
