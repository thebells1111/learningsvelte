<script>
  export let total = 0;
  export let totalArr = [];
  export let buttons = [];
</script>

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
