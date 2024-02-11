<script>
	import * as AlertDialog from '$lib/components/ui/alert-dialog';

	export let title;
	export let message;
	export let onSubmit;
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger><slot /></AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>{title}</AlertDialog.Title>
			<AlertDialog.Description>
				{message}
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Відмінити</AlertDialog.Cancel>
			<AlertDialog.Action on:click={onSubmit}>Підтвердити</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
