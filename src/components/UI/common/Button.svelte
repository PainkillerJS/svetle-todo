<script>
    export let disabled = null;
    export let type = null;
</script>

<button 
    class="button" 
    on:click|preventDefault
    {disabled}
    {type}
  >
    <slot />
</button>

<style lang="scss">
  .button {
    cursor: pointer;
    background-color: #0072ff;
    color: #fff;
    padding: 10px 20px;
    border: 0;
    border-radius: 5px;
    outline: none;

    &[type='danger']{
      background-color: #da4444;
    }

    &[disabled]{
      cursor: default;
      opacity: 0.7;
    }
  }
</style>