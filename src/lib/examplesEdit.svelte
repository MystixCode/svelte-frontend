<!-- SCRIPT ------------------------------------------------------------------------------------- -->
<script lang="ts">

    import { onMount } from 'svelte';
    import { examples, alert } from '../stores'
    import type { Example } from "../stores";

    let id: number
	let name = '';
    let value = '';

    //onMount load data into form
    onMount(async function getExample()  {
        // get id from url
        const url = window.location.pathname
        const strs = url.split('/');
        id = Number(strs.at(-1))
        //console.log(id)
        
      const response = await fetch('/api/examples/'+id, {
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
      let example : Example = resjson.data
        name=example.examplename
        value=example.examplevalue
  })

    function editExampleInStore(item : Example ) {
        // remove item by id from store
        var index = $examples.map(x => {
            return x.id;
        }).indexOf(item.id);
        $examples.splice(index, 1);

        // add new item to store
        $examples = [...$examples, item];
        $alert = 'Example '+item.id+' - '+item.examplename+' has been updated'
    }

    async function edit()  {
        const response = await fetch(`/api/examples/` + id, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                "examplename": name,
                "examplevalue": value
                })
        })
        // Todo: We need to handle errors, such as endpoint not found.
        if (response.ok === false) {
            console.log("error")
            return
        }
        let resjson = await response.json()
        let example : Example = resjson.data
        editExampleInStore(example)
    }
</script>

<!-- HTML ------------------------------------------------------------------------------------- -->

<form on:submit|preventDefault={edit}>
    <input disabled type="number" bind:value={id} placeholder="id">
    <input type="text" bind:value={name} placeholder="example name">
    <input type="text" bind:value={value} placeholder="example value">
    <button>Edit example</button>
</form>

<!-- STYLE ------------------------------------------------------------------------------------ -->
