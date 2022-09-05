<script lang="ts">
// Todo: do it the typescript way with example and examples type etc
import { onMount } from 'svelte';
import type { JSONValue } from '@sveltejs/kit/types/private';
import ExampleStore from '../../stores.js'

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
            //todo if result ok
            
            //only add if not already in store
            if (!$ExampleStore.find(id => example.id))
            {
                //add values to store
                $ExampleStore = [...$ExampleStore, {
                    id: example.id, examplename: example.examplename, examplevalue: example.examplevalue
                }];
            }
            
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

        <!--- get example by example.id from store -->
        {#each $ExampleStore as entry}
            {#if entry.id === example.id}
                <span>id: {entry.id} </span><br>
                <span>examplename: {entry.examplename} </span><br>
                <span>examplevalue: {entry.examplevalue}</span> 
            {/if}
        {/each}

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
