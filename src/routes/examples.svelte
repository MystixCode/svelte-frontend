<svelte:head>
	<title>Examples | svelte-frontend</title>
</svelte:head>

<script context="module" lang="ts">



</script>

<script lang="ts">

import GetAll from '../components/examples/GetAll.svelte';
import GetByID from '../components/examples/GetByID.svelte';
import Create from '../components/examples/Create.svelte';
import Update from '../components/examples/Update.svelte';
import Delete from '../components/examples/Delete.svelte';

</script>

<main>

  <h1>Examples</h1>
  <GetByID />
  <GetAll />
  <Create />
  <Update />
  <Delete />
  

</main>
