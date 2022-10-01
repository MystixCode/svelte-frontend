<!-- SCRIPT ------------------------------------------------------------------------------------- -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { examples, alert } from '../stores'
    import type { Example, Examples } from "../stores";

    let resjson : any = [];

    function addExamplesToStore(items : Examples ) {
        items.forEach( example=> {
            //if not already exists in store add to store
            if ($examples.find(x => x.id == example.id)==undefined)
            {
                $examples = [...$examples, example]
            }
        })
        $alert = 'Browsing all examples'
    }

    function deleteExampleFromStore(id: number ) {
        $examples = $examples.filter((t:any) => t.id !== id)
        $alert = 'Example '+id+' has been deleted'
    }

    onMount(async function getExamples()  {
        const response = await fetch('/api/examples', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        // Todo: We need to handle errors, such as endpoint not found.
        if (response.ok === false) {
            console.log("error")
            return
        }
        let resjson = await response.json()
        let examples : Array<Example> = resjson.data
        // sort array by id
        examples.sort(function(a :any, b:any) { 
            return a.id - b.id;
        });
        addExamplesToStore(examples)
    })

    async function del(id:number)  {
        const response = await fetch(`/api/examples/` + id, {
            method: "DELETE"
        })
        // Todo: We need to handle errors, such as endpoint not found.
        if (response.ok === false) {
            console.log("error")
            return
        }
        let resjson = await response.json()
        deleteExampleFromStore(id)
    }
</script>

<!-- HTML ------------------------------------------------------------------------------------- -->

<a href="/examples/add"><p><img alt="add" src="feather/plus.svg"/> Add new example</p></a>

<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">value</th>
        <th scope="col">action</th>
      </tr>
    </thead>
    {#each $examples as example}
    <tr>
        <td class="small">{example.id}</td>
        <td>{example.examplename}</td>
        <td>{example.examplevalue}</td>
        <td class="small">
            <a href="/examples/edit/{example.id}">
                <img alt="edit" src="feather/edit.svg">
            </a> <a href="/examples" on:click|preventDefault={() => del(Number(example.id))} >
                <img alt="delete" src="feather/delete.svg">
            </a>
        </td>
    </tr>
    {/each}
</table>

<!-- STYLE ------------------------------------------------------------------------------------ -->

<style>
    img {
        vertical-align:text-bottom;
    }
    table {
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #434c5e;
        padding: 8px;
    }

    tr:nth-child(even){background-color: #434c5e;}
    tr:hover {background-color: #4c566a;}
    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #5e81ac;
        color: #d8dee9;
    }
    tr{
        text-align: left;
    }
    .small {
        white-space: nowrap;
        width: 1px;
        text-align: center;
    }
</style>
