<script lang="ts">
	import { Button, Modal } from 'flowbite-svelte';
	import NewEventForm from './new_event_form.svelte';

	let openModal = false;
</script>

<Button on:click={() => (openModal = !openModal)}>Add Event</Button>
<Modal title="Add Event" bind:open={openModal} autoclose size="lg">
	<NewEventForm class="container mx-auto" />
</Modal>
