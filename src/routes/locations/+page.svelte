<script>
	import toast, { Toaster } from 'svelte-french-toast';
	import { locationGroupsStore } from '$lib/stores.js';

	import Navbar from '$lib/shared/navbar.svelte';
	import Combox from '$lib/components/combobox/combox.svelte';
	import PageTitle from '$lib/shared/page-title.svelte';
	import SheetInputs from '$lib/components/sheet-inputs/sheet-inputs.svelte';
	import Button from '$lib/shared/button.svelte';
	import { addLocationByGroupId, getAllLocationGroups } from '$lib/API';
	import { onMount } from 'svelte';

	let isAddingLocation = false;

	let currentLocation = {
		location_group_id: 0,
		parsing_id: 0,
		region: '',
		city: ''
	};

	const newLocationInputList = [
		{ key: 'parsing_id', label: 'ID міста для парсингу', value: 0 },
		{ key: 'region', label: 'Регіон', value: '' },
		{ key: 'city', label: 'Місто', value: '' }
	];

	const updateInputListLocation = (
		value,
		type
	) => {
		currentLocation = {
			...currentLocation,
			[type]: value
		};
	};

	const submitNewLocation = async () => {
		if (
			currentLocation.location_group_id &&
			currentLocation.city &&
			currentLocation.region &&
			currentLocation.parsing_id
		) {
			try {
				const response = await addLocationByGroupId(currentLocation);
				if (response.success) {
					toast.success(`Нову локацію додано!`);
				} else {
					toast.error('Перевірте вхідні дані нової локації');
				}
			} catch (error) {
				toast.error(`Виникла помилка під час локації`);
			}
		}
	};

	onMount(async () => {
		if (!$locationGroupsStore.length) {
			const response = await getAllLocationGroups();

			if (response.success) {
				const location_groups = response.message;

				// @ts-ignore
				locationGroupsStore.setLocationGroups(location_groups);
			} else if (response.status === 204) {
				return { location_groups: [] };
			}
		}
	});
</script>

<Toaster />
<div class="flex flex-col items-center justify-center gap-2">
	<Navbar type="bots" />
	<div class="flex flex-row gap-2">
		<PageTitle title="Керування локаціями" />
		<Button
			title={!isAddingLocation ? '+' : '-'}
			type={'button'}
			disabled={false}
			style={'rounded-submit'}
			handler={() => (isAddingLocation = !isAddingLocation)}
		/>
	</div>
	{#if $locationGroupsStore && isAddingLocation}
		<Combox
			list={$locationGroupsStore}
			key={'location_group_id'}
			labelKey={'parsing_domain'}
			title="Домен для парсингу"
			addItem={(value) => updateInputListLocation(value, 'location_group_id')}
		/>

		{#if currentLocation.location_group_id}
			<SheetInputs
				buttonText="Додати опис локації"
				title="Нова локація"
				description="Заповніть поля стосовно нової локації"
				inputList={newLocationInputList}
				originalData={currentLocation}
				onSubmit={submitNewLocation}
			/>
		{/if}
	{/if}
</div>
