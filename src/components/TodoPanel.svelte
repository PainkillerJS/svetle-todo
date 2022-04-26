<script>
    import Button from './UI/common/Button.svelte'
    import lists from '../store/todoLists'
    import selectedLists from '../store/selectedLists'

    const removeSelected = () => $selectedLists.forEach(lists.remove)

</script>

{#if $lists.length}
  <div class="header">
    <div>
      <Button 
        disabled={!$selectedLists.length}
        type="danger"
        on:click={removeSelected}
      >
        Remove 

        {#if $selectedLists.length}
          ({$selectedLists.length})
        {/if}
      </Button>
      <Button 
        on:click={lists.removeAll}
        type="danger"
      >
        Remove All ({$lists.length})
      </Button>
    </div>
  </div>
{/if}

