<!-- SCRIPT ------------------------------------------------------------------------------------- -->
<script lang="ts">
    import { onDestroy } from 'svelte'
    import { alert } from '../stores.js'

    export let ms = 7000
    let visible : any
    let timeout : any

    const onMessageChange = (message:any, ms:any) => {
      clearTimeout(timeout)
      if (!message) {               // hide Alert if message is empty
        visible = false
      } else {
        visible = true                                              // show alert
        if (ms > 0) timeout = setTimeout(() => visible = false, ms) // and hide it after ms milliseconds
      }
    }
    $: onMessageChange($alert, ms)      // whenever the alert store or the ms props changes run onMessageChange

    onDestroy(() => clearTimeout(timeout))           // make sure we clean-up the timeout
</script>

<!-- HTML ------------------------------------------------------------------------------------- -->
{#if visible}
<div on:click={() => visible = false}>
    <p><img alt="info" src="/feather/info.svg"> { $alert }</p>
</div>
{/if}

<!-- STYLE ------------------------------------------------------------------------------------ -->
<style>
    img {
        vertical-align:text-bottom;
    }
    p {
        padding:8px;
        text-align: left;
        background-color: #434c5e;
    }
</style>
