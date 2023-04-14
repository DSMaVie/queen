<script>
	import AddEventButton from '$lib/components/add_event_button.svelte';
	import { CHANNELS } from '$lib/db_definitions';
	import { Button, Input, Label, Textarea, Toggle } from 'flowbite-svelte';

</script>

<div class="flex flex-row justify-center">
	<AddEventButton />
</div>
<form action="/?/add_event" method="post" class="{$$props.class}">
	<Label for="title">Title</Label>
	<Input name="title" id="title" placeholder="please enter title ..." />

	<Label for="description" class="pt-3">description</Label>
	<Textarea
		id="description"
		name="description"
		placeholder="Please enter a description for the event ..."
		rows="6"
	/>

	<!-- <div class="flex-row, justify-between">
		<Datepicker name="start" datepickerButtons datepickerTitle="start" />
        <Datepicker name="end"  datepickerButtons datepickerTitle="end" />
	</div> -->
	<div class="flex flex-row justify-between">
		{#each Object.values(CHANNELS) as channel}
			<Toggle name={channel} checked size="small" class="p-3">{channel}</Toggle>
		{/each}
	</div>
	<div class="flex flex-row-reverse">
		<Button class="basis-1/2">Submit</Button>
	</div>
</form>
