<script lang="ts">

import {exampleName,exampleValue} from '../../stores.js'

let name: string = ""
let value: string = ""

async function create() {
    const submit = await fetch(`/api/examples`, {
        method: "POST",
        body: JSON.stringify({
            "examplename": name,
            "examplevalue": value
            })
    })

    //todo if result ok
    //add values to stores
    $exampleName = name
    $exampleValue = value

}

</script>

<div>
    <h2>Create Component</h2>
    
    <form class="box" on:submit|preventDefault={create}>
        <input type="text" placeholder="ExampleName" bind:value={name} />
        <input type="text" placeholder="ExampleValue" bind:value={value} />
        <input type="submit" />
    </form>
    StoreTest: {$exampleName}
    <br>
    StoreTest: {$exampleValue}

</div>
