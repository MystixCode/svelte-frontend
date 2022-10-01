<script lang="ts">
	import Header from '$lib/header.svelte';
    import Footer from '$lib/footer.svelte';
    import Alert  from '$lib/alert.svelte'
</script>

<div class="grid">
    <Header />
    <main>
        <Alert/>
        <slot></slot>
    </main>
    <Footer/>
</div>
