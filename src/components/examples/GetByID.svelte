<script lang="ts">
// Todo: do it the typescript way with example and examples type etc
import { onMount } from 'svelte';
import type { JSONValue } from '@sveltejs/kit/types/private';

type Example = {
    id: string
    examplename: string
    examplevalue: string
}

let resjson : any = [];

let example : Example = {} as Example
let id : string;

async function GetById() {
		const res = await fetch(`/api/examples/` + id);
		resjson = await res.json();
        if (resjson.data != "") {
            example = resjson.data.data;
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
            <span>id: {example.id} </span><br>
            <span>examplename: {example.examplename} </span><br>
            <span>examplevalue: {example.examplevalue}</span>
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
