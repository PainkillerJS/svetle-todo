<script>
  import {createEventDispatcher} from 'svelte'

  export let value = '';
  export let placeholder = '';

  const dispatch = createEventDispatcher();

  const handleChange = (e) => value = e.target.value;

  const handleKeyDown = (e) => e.key === "Enter" &&  dispatch('enter');
</script>

<input
  type="text"
  class="input"
  {value}
  {placeholder}
  on:input={handleChange}
  on:keydown={handleKeyDown}
/>

<style lang="scss">
  .input {
    padding:10px 20px;
    border: 1px solid rgba(#000, 0.1);
    border-radius: 5px;
    outline: none;
  }
</style>