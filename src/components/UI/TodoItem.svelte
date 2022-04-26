<script>
  import dayjs from 'dayjs'
  import selectedLists from '../../store/selectedLists'

  export let task;  

  $: isSelectedTask = $selectedLists.includes(task.id);

  const handleToggleCheckbox = () => selectedLists[isSelectedTask ? 'remove' : 'add'](task.id);
</script>

<div
  class="todo-task"
  class:todo-task--selected={isSelectedTask}
  on:click={handleToggleCheckbox}
>
  <input 
    class="todo-task__checkbox"
    type="checkbox"
    checked={isSelectedTask}
  />

  <h2 class="todo-task__title">{task.title}</h2>

  <div class="todo-task__date">
      {dayjs(task.created).format('DD.MM.YYYY HH:mm:ss')}
  </div>
</div>

<style lang="scss">
  .todo-task{
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid rgba(#000, 0.1);

    &--selected {
      background-color: #d2d0d0;
    }

    &__checkbox{
      flex: 0 0 40px;
    }

    &__title{
      flex: 1;
      font-size: 20px;
      font-weight: 400;
    }

    &__date{
      flex: 0 0 150px;
      font-size: 12px;
      color: #bbb;
      text-align: right;
    }
  }
</style>