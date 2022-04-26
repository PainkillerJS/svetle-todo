<script>
    import TodoForm from './TodoForm.svelte';
    import TodoItem from './UI/TodoItem.svelte';
    import TodoPanel from './TodoPanel.svelte'
    import lists from '../store/todoLists';

</script>

<h1 class="title">
    TODO
</h1>

<div class="panel">
    <TodoForm />
<TodoPanel />
</div>

{#each $lists as task}
    <TodoItem {task} />
{/each}

<style lang="scss">
  .title{
    font-size: 100px;
    margin: 0;
  }

  .panel{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>