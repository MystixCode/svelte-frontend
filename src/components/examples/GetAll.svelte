<script lang="ts">
// Todo: do it the typescript way with example and examples type etc
import { onMount } from 'svelte';

let resjson : any = [];
let examples : any = [];

onMount(async () => {
		const res = await fetch(`/api/examples`);
		resjson = await res.json();
        if (resjson.data != "") {
            examples = resjson.data.data;
        }
        else {
            console.log("error");
        }
	});

</script>

<div>
    <!-- {JSON.stringify(resjson)} -->
    <h2>GetAll Component</h2>
    <div class="box">
        {#each examples as example}
            <div class="box2">
                <span>Name: {example.examplename} </span><br>
                <span>Description: {example.examplevalue}</span>
            </div>
        {/each} 
    </div>
</div>