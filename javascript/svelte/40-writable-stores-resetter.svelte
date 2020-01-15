<script>
	import { count } from './stores.js';

	function reset() {
		count.update(n => 0);
	}
</script>

<button on:click={reset}>
	reset
</button>