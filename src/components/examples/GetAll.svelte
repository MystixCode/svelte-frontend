<script lang="ts">
import type { JSONObject } from '@sveltejs/kit/types/private';

// Todo: do it the typescript way with example and examples type etc
import { onMount } from 'svelte';

type Example = {
    id: string
    examplename: string
    examplevalue: string
}

let resjson : any = [];
let examples : Array<Example> = []


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
                <span>id: {example.id} </span><br>
                <span>examplename: {example.examplename} </span><br>
                <span>examplevalue: {example.examplevalue}</span>
            </div>
        {/each} 
    </div>
</div>