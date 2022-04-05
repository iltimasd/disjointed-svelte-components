import Context1 from "./context/Context1.svelte";
import Context2 from "./context/Context2.svelte";
import { writable } from "svelte/store";
let context = new Map([["store1", writable(1337)]]);
var app = new Context1({
  target: document.getElementById("t1"),
  context,
});
var app = new Context2({
  target: document.getElementById("t2"),
  context,
});

export default app;
