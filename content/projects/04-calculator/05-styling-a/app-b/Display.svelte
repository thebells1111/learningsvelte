<script>
  export let total = 0;
  export let totalArr = [];
  export let buttons = [];
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
  }
</style>

<div class="calculator">
  <div id="display">
    <div>
      <div class="top">{totalArr}</div>
    </div>
    <div>
      <div class="display-bottom">{total}</div>
    </div>
  </div>
  {#each buttons as button}
  <button id="{button.id}" on:click="{button.func}">{button.value}</button>
  {/each}
</div>
