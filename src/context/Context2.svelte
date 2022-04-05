<script>
  import Counter from "../Counter.svelte";
  import Value from "../Value.svelte";
  import { getAllContexts, getContext } from "svelte";

  let name = "context2";
  let value;
  //   console.log(getContext("answer"));
  console.log(getAllContexts());
  let store = getContext("store1");
  console.log($store);
</script>

<h1>This is Svelte component two!</h1>

<Counter bind:value>inches</Counter>
<br />
<Value value={$store}>cm</Value>
<button on:click={() => ($store = 3333)}>change all to 3333</button>
