<script lang="ts">
	import { fade } from 'svelte/transition';

	export let text: string;
	let isOverlayOpen = false;

	const change_overlay_state = () => {
		isOverlayOpen = !isOverlayOpen;
	};
</script>

<button class={$$props.class} on:click={change_overlay_state}>{text}</button>
{#if isOverlayOpen}
	<div
		class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-900 opacity-50 z-10"
		on:click={change_overlay_state}
		on:keydown
		transition:fade
	>
		<div on:click|stopPropagation on:keydown|stopPropagation>
			<button
				class="absolute top-2 right-3 text-4xl text-gray-300 hover:-translate-y-0.5 transition-transform"
				on:click={change_overlay_state}>&times;</button
			>
			<slot />
		</div>
	</div>
{/if}
