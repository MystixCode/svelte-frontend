<script lang="ts">
// Todo: do it the typescript way with test and tests type etc
import { onMount } from 'svelte';

let resjson : any = [];
let tests : any = [];

onMount(async () => {
		const res = await fetch(`/api/tests`);
		resjson = await res.json();
        if (resjson.data != "") {
            tests = resjson.data.data;
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
        {#each tests as test}
            <div class="box2">
                <span>Name: {test.testname} </span><br>
                <span>Description: {test.testvalue}</span>
            </div>
        {/each} 
    </div>
</div>