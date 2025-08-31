<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import JoinSpectatorBackground from '$lib/components/JoinSpectatorBackground.svelte';
	import JoinSpectatorList from '$lib/components/JoinSpectatorList.svelte';
	import JoinSpectatorDescription from '$lib/components/JoinSpectatorDescription.svelte';
</script>

<div>
	<Header />
	<JoinSpectatorBackground />
	<JoinSpectatorDescription />
	<JoinSpectatorList />
	<Footer/>
</div>