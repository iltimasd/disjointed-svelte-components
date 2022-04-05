<script>
	import Counter from "./Counter.svelte"
		import Value from "./Value.svelte"

	let name = 'world';
</script>

<h1>Hello {name}!</h1>

<Counter>inches</Counter>
<br>
<Value value={42}>cm</Value>