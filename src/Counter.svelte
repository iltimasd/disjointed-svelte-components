<script>
  import Value from "./Value.svelte";

  export let value = 0;
</script>

<button
  on:click={() => {
    value--;
  }}
>
  -
</button>
<button
  on:click={() => {
    value++;
  }}
>
  +
</button>
{value}

pass: <Value {value}><slot>unit</slot></Value>
