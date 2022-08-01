<script lang="ts">
// Todo: do it the typescript way with test and tests type etc
import { onMount } from 'svelte';

let resjson : any = [];
let test : any = [];
let id : number;

async function GetById() {
		const res = await fetch(`/api/tests/` + id);
		resjson = await res.json();
        if (resjson.data != "") {
            test = resjson.data.data;
        } 
        else {
            console.log("error");
        }
	};
</script>

<div>
    <!-- {JSON.stringify(resjson)} -->
    <h2>GetByID Component</h2>
    <div class="box">
        <br>
        <input
            class="x"
            type="number"
            placeholder="Type id here"
            on:change={GetById}
            bind:value={id}
            >
        <br>
        <div class="box2">
            <span>Id: {test.id} </span><br>
            <span>Name: {test.testname} </span><br>
            <span>Description: {test.testvalue}</span>
        </div>
    </div>
</div>

<style>
.x {
    display: block;
    margin-right: auto;
    margin-left: auto;
}
</style>