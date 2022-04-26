<script>
    import TodoList from '../components/TodoList.svelte'
</script>

<div class="todo">
    <TodoList />
</div>

<style>
  :global(*){
    box-sizing: border-box;
  }

  :global(body){
    margin: 0;
    font-size: 16px;
    font: 400 16px/1.5 sans-serif;
    color: #333;
  }

  .todo{
    padding: 50px 15px;
    max-width: 80%;
    margin: 0 auto;
  }
</style>