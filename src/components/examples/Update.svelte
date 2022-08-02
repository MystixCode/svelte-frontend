<script lang="ts">
let id : string
let examplename: string = ""
let examplevalue: string = ""

async function handleSubmit() {
    const submit = await fetch(`/api/examples/` + id, {
        method: "PUT",
        body: JSON.stringify({
            "examplename": examplename,
            "examplevalue": examplevalue
            })
    })
}

</script>

<div>
    <h2>Update Component</h2>
    
    <form class="box" on:submit|preventDefault={handleSubmit}>
        
        <br>
        <input class="x" type="number" placeholder="Type id here" bind:value={id}>
        <br>
        <input type="text" placeholder="ExampleName" bind:value={examplename} />
        <input type="text" placeholder="ExampleValue" bind:value={examplevalue} />
        <input type="submit" />
    </form>


</div>

<style>
    .x {
        display: block;
        margin-right: auto;
        margin-left: auto;
    }
</style>
