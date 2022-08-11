<script lang="ts">

import { exampleStore } from '../../stores.js'

let examplename: string = ""
let examplevalue: string = ""

async function handleSubmit() {
    const submit = await fetch(`/api/examples`, {
        method: "POST",
        body: JSON.stringify({
            "examplename": examplename,
            "examplevalue": examplevalue
            })
    })

//todo if result ok
//{$exampleStore}
$exampleStore = examplevalue


}




</script>

<div>
    <h2>Create Component</h2>
    
    <form class="box" on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="ExampleName" bind:value={examplename} />
        <input type="text" placeholder="ExampleValue" bind:value={examplevalue} />
        <input type="submit" />
    </form>
    {$exampleStore}

</div>
