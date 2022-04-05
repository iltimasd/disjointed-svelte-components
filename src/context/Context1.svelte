<script context="module">
  import { get, writable } from "svelte/store";
</script>

<script>
  import { getAllContexts, getContext, setContext } from "svelte";
  import Counter from "../Counter.svelte";
  import Value from "../Value.svelte";
  let name = "world";
  let value;
  let store = getContext("store1");
  console.log($store);
</script>

<h1>This is Svelte component one!</h1>

<Counter bind:value>inches</Counter>
<br />
<Value value={$store}>cm</Value>
