<script lang="ts">

// import {exampleName,exampleValue} from '../../stores.js'
import ExampleStore from '../../stores.js'

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
    // $exampleName = name
    // $exampleValue = value
    $ExampleStore = [
        {id: 'unknowntodogetfromresponse', name: name, value: value}
    ]

    let data : any = [];
    // console.log(submit.json())
    data = await submit.json();
    
    console.log(data.data);

}

</script>

<div>
    <h2>Create Component</h2>
    
    <form class="box" on:submit|preventDefault={create}>
        <input type="text" placeholder="ExampleName" bind:value={name} />
        <input type="text" placeholder="ExampleValue" bind:value={value} />
        <input type="submit" />
    </form>
    StoreTest: {$ExampleStore[0].id}
    <br>
    StoreTest: {$ExampleStore[0].name}
    <br>
    StoreTest: {$ExampleStore[0].value}
    <!-- StoreTest: {$exampleName}
    <br>
    StoreTest: {$exampleValue} -->

    

</div>
