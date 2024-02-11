<script>
	import * as Dialog from '$lib/components/ui/dialog';
</script>

<Dialog.Root>
	<Dialog.Trigger
		class="h-[16px] w-[16px] rounded-full border border-zinc-500 text-xs text-zinc-500"
		>?</Dialog.Trigger
	>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Description>
				<slot />
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
