<script lang="ts">
let id : string

async function handleSubmit() {
    const submit = await fetch(`/api/examples/` + id, {
        method: "DELETE"
    })
}

</script>

<div>
    <h2>Delete Component</h2>
    
    <form class="box" on:submit|preventDefault={handleSubmit}>
        
        <br>
        <input class="x" type="number" placeholder="Type id here" bind:value={id}>
        <br>
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
