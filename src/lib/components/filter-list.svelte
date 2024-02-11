<script>
	import { onMount } from 'svelte';
	import * as Popover from '$lib/components/ui/popover';
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import FilterIcon from '../shared/assets/filter.svelte';

	export let filterText;
	export let filterType;
	export let changeFilterText;
	export let changeFilterType;

	const types = [
		{ value: 'title', label: 'Назва каналу' },
		{ value: 'region', label: 'Регіон' },
		{ value: 'city', label: 'Місто' }
	];
</script>

<Popover.Root portal={null}>
	<Popover.Trigger
		class="cursor-pointer rounded-lg border border-zinc-500 bg-zinc-600 p-1 hover:bg-zinc-500"
	>
		<FilterIcon />
	</Popover.Trigger>
	<Popover.Content class="flex w-[360px] flex-col items-center gap-2">
		<Select.Root portal={null} onSelectedChange={(event) => changeFilterType(event.value)}>
			<Select.Trigger>
				<Select.Value placeholder="Фільтр за типом..." />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					{#each types as type}
						<Select.Item
							value={type.value}
							label={type.label}
							isSelected={type.value === filterType ? true : false}>{type.label}</Select.Item
						>
					{/each}
				</Select.Group>
			</Select.Content>
		</Select.Root>
		{#if filterType}
			<Input
				placeholder="Пошук за типом фільтру"
				on:input={(event) => changeFilterText(event.target.value)}
			/>
		{/if}
	</Popover.Content>
</Popover.Root>
