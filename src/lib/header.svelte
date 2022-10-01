<script lang="ts">
    // export let user:any;
	import { website } from '$lib/variables';


	let navOpen = false;

	function toggleBurger() {
		let x = document.getElementById("links");
		if (x != null) {
			if (x.style.display === "block") {
				navOpen = false;
				x.style.display = "none";
	  		} else {
				navOpen=true;
				x.style.display = "block";
	  		}
		}
	}
</script>

<div class="header">
	<div class="mainnav">
		<a id="logo" href="/">{ website }</a>
		<div class="burger" class:change={navOpen} on:click="{toggleBurger}">
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
		</div>
		<div id="links">
		  	<a href="/examples"><img alt="examples" src="/feather/database.svg"> Examples</a>
		  	<a href="/about"><img alt="about" src="/feather/book-open.svg"> About</a>
			<!-- {#if user}
			<a href="/profile">Profile</a>
			<a href="/auth/logout">Logout</a>
			{:else} -->
			<a href="/auth/login"><img alt="login" src="/feather/log-in.svg"> Login</a>
			<!-- {/if} -->
		</div>
	</div>
</div>


<style>
	img {
  		vertical-align:text-bottom;
	}
	.mainnav{
		background-color: #3b4252;
	}
	#logo{
		 color: #d8dee9;
		 background-color: #5e81ac;
	}
	#logo:hover{
		background-color: #5e81ac;
	}
	.mainnav #links {
		display: none;
	}
	.mainnav a {
		color: #d8dee9;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 17px;
		display: block;
	}
	.mainnav a:hover{
		background-color: #81a1c1;
	}
	.burger {
        caret-color: transparent;
		cursor: pointer;
		display: block;
		position: absolute;
		right: 14px;
		top: 4px;
	}
	.bar1, .bar2, .bar3 {
		width: 35px;
		height: 5px;
		background-color: #d8dee9;
		margin: 6px 0;
		transition: 0.4s;
	}
	.change .bar1 {
		-webkit-transform: rotate(-45deg) translate(-9px, 6px);
		transform: rotate(-45deg) translate(-9px, 6px);
	}
	.change .bar2 {opacity: 0;}
	.change .bar3 {
		-webkit-transform: rotate(45deg) translate(-8px, -8px);
		transform: rotate(45deg) translate(-8px, -8px);
	}
</style>
