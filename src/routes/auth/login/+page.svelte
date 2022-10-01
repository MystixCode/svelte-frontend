<script lang="ts">
    import { website } from "$lib/variables"
</script>

<svelte:head>
	<title>Login | { website }</title>
</svelte:head>

<h1>Login</h1>

<div class="box2">
    <form method="POST">
        <input name="email" type="email">
        <input name="password" type="password">
        <button>Log in</button>
    </form>
</div>
<br>
