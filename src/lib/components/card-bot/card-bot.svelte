<script>
	import CardBotInfo from './card-bot-info.svelte';
	import Bucket from '$lib/shared/assets/bucket.svelte';
	import AlertDialog from '$lib/shared/alert-dialog.svelte';

	export let item;
	export let onDelete;
</script>

<div class="channelCard">
	<div class="flex flex-row items-center justify-between gap-4 p-2">
		<CardBotInfo {item} />
		<div class="flex flex-row justify-center gap-2">
			<AlertDialog
				title={'Видалити канал?'}
				message={`Підтверджуючи Ви видаляєте бота ${item.username}`}
				onSubmit={() => onDelete(item.id)}
			>
				<div class="delete">
					<Bucket />
				</div>
			</AlertDialog>
		</div>
	</div>
</div>
