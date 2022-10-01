<script lang="ts">
    import { website } from "$lib/variables"
	import Health from "$lib/health.svelte"
	import Examples from "$lib/examples.svelte"
</script>

<svelte:head>
	<title>Examples | { website }</title>
</svelte:head>

<h1>Examples</h1>
<div class="box2">
	<Examples/>
</div>
<br>
<div class="box2">
	<Health/>
</div>
<br>
