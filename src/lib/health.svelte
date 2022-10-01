<!-- SCRIPT ------------------------------------------------------------------------------------- -->
<script lang="ts">
    import { onMount } from 'svelte';
    let health="unknown"
    onMount(async function getExample()  {
        const response = await fetch('/api/health', {
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
        health = JSON.stringify(resjson.data)
    })

</script>

<!-- HTML ------------------------------------------------------------------------------------- -->

    <p>API Health: { health }</p>

<!-- STYLE ------------------------------------------------------------------------------------ -->
