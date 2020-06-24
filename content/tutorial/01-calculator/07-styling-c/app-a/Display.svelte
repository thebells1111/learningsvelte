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
