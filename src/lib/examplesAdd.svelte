<!-- SCRIPT ------------------------------------------------------------------------------------- -->
<script lang="ts">
    import { examples, alert } from '../stores'
    import type { Example } from "../stores";

	let name = '';
    let value = '';

    function addExampleToStore(item : Example ) {
        //TODO if not already exists
        $examples = [...$examples, item];
        $alert = 'Example '+item.examplename+' has been added'
    }

    async function add() {
        const response = await fetch('/api/examples', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "examplename": name,
                "examplevalue": value
            })
        });
        // Todo: We need to handle errors, such as endpoint not found.
        if (response.ok === false) {
            console.log("error")
            return
        }
        let resjson = await response.json()
        let example : Example = resjson.data
        addExampleToStore(example)
    }
</script>

<!-- HTML ------------------------------------------------------------------------------------- -->

<form on:submit|preventDefault={add}>
    <input type="text" bind:value={name} placeholder="example name">
    <input type="text" bind:value={value} placeholder="example value">
    <button>Add example</button>
</form>

<!-- STYLE ------------------------------------------------------------------------------------ -->
