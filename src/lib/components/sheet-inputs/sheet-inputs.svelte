<script>
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	import toast, { Toaster } from 'svelte-french-toast';

	const side = 'top';

	export let buttonText;
	export let title;
	export let description;
	export let inputList;
	export let originalData;
	export let onSubmit;

	let isFormValid = false;

	const isNotEmpty = (value) => {
		return value !== undefined && value !== null && value !== '';
	};

	const handleSubmit = () => {
		if (!isFormValid) {
			toast.error('Заповніть всі поля');
			return;
		}

		onSubmit();
	};

	$: isFormValid = inputList.every((item) => isNotEmpty(originalData[item.key]));
</script>

<Toaster />
<Sheet.Root class="relative">
	<Sheet.Trigger class="rounded-submit absolute bottom-4 right-5 shadow-2xl"
		>{buttonText}</Sheet.Trigger
	>
	<Sheet.Content {side}>
		<Sheet.Header>
			<Sheet.Title>{title}</Sheet.Title>
			<Sheet.Description>{description}</Sheet.Description>
		</Sheet.Header>
		<div class="grid gap-4 py-4">
			{#each inputList as { key, label, value }, index}
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for={key} class="text-right">{label}</Label>
					<Input id={key} bind:value={originalData[key]} class="col-span-3" />
				</div>
			{/each}
		</div>
		<Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} on:click={handleSubmit} type="submit" disabled={!isFormValid}>
					Зберегти зміни
				</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
