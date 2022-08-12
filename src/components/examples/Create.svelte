<script lang="ts">

// import {exampleName,exampleValue} from '../../stores.js'
import ExampleStore from '../../stores.js'

let cname: string = ""
let cvalue: string = ""

async function create() {
    const submit = await fetch(`/api/examples`, {
        method: "POST",
        body: JSON.stringify({
            "examplename": cname,
            "examplevalue": cvalue
            })

    });

    // get response body
    let data : any = [];
    data = await submit.json();
    console.log(data.data.data.id);

    //todo if result ok
    //add values to store
    $ExampleStore = [
        {id: data.data.data.id, examplename: data.data.data.examplename, examplevalue: data.data.data.examplevalue}
    ]
    //Todo: is it possible to do it wthout that many data.data.data.data.data ? xD parse response into custom type?
}

</script>

<div>
    <h2>Create Component</h2>
    
    <form class="box" on:submit|preventDefault={create}>
        <input type="text" placeholder="ExampleName" bind:value={cname} />
        <input type="text" placeholder="ExampleValue" bind:value={cvalue} />
        <input type="submit" />
    </form>
    StoreTest: {$ExampleStore[0].id}
    <br>
    StoreTest: {$ExampleStore[0].examplename}
    <br>
    StoreTest: {$ExampleStore[0].examplevalue}
</div>
