<script>
    import Button from './UI/common/Button.svelte'
    import Input from './UI/common/Input.svelte'
    import lists from '../store/todoLists'

    let title = '';

    const addTask = () => {
      lists.add({
        title, 
        id: Date.now(), 
        created: new Date() 
      });
      
      title = '';
    };
</script>


<form>
    <Input 
      bind:value={title} 
      on:enter={addTask}
    />

    <Button 
      on:click={addTask}
      disabled={!title}
    >
      Добавить задачу
    </Button>    
</form>

<style lang="scss">
  form{
    :global(input){
      width: 300px;
    }
  }    
</style>