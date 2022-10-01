<script lang="ts">
    import { website } from "$lib/variables"
	import AddExample from "$lib/examplesAdd.svelte"
</script>

<svelte:head>
	<title>Add example | { website }</title>
</svelte:head>

<h1>Add example</h1>
<div class="box2">
	<AddExample/>
	<p><a alt="back" href="/examples">go to examples</a></p>
</div>
<br>
