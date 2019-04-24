<script>
	function handleClick() {
		alert('clicked')
	}
</script>

<button on:click|once={handleClick}>
	Click me
</button>

preventDefault — calls event.preventDefault() before running the handler. Useful for e.g. client-side form handling
stopPropagation — calls event.stopPropagation(), preventing the event reaching the next element
passive — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)
capture — fires the handler during the capture phase instead of the bubbling phase ()
once — remove the handler after the first time it runs