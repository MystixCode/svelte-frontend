<script lang="ts">
    import { website } from "$lib/variables"
	import EditExample from "$lib/examplesEdit.svelte"
</script>

<svelte:head>
	<title>Add example | { website }</title>
</svelte:head>

<h1>Edit example</h1>
<div class="box2">
	<EditExample/>
	<p><a alt="back" href="/examples">go to examples</a></p>
</div>
<br>
