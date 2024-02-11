<script>
	import Button from '../../shared/button.svelte';
	import { Input } from '$lib/components/ui/input';

	export let handleAddContact;
	export let handleContactValueChange;
	export let selectedContact;
	export let contactValue;
</script>

<form class="flex min-w-[300px] flex-1 flex-row gap-2" on:submit={handleAddContact}>
	{#if selectedContact !== null}
		{#if selectedContact === 'phone'}
			<Input
				id="tel"
				type="tel"
				required
				bind:value={contactValue}
				on:input={handleContactValueChange}
				placeholder="Введіть номер телефону"
				class="w-full rounded border p-2 text-sm"
			/>
		{/if}
		{#if selectedContact === 'email'}
			<Input
				type="email"
				id="email"
				required
				bind:value={contactValue}
				on:input={handleContactValueChange}
				placeholder="Введіть пошту"
				class="w-full rounded border p-2 text-sm"
			/>
		{/if}
		{#if selectedContact === 'viber' || selectedContact === 'whatsapp' || selectedContact === 'telegram' || selectedContact === 'link'}
			<Input
				id="url"
				type="url"
				required
				bind:value={contactValue}
				on:input={handleContactValueChange}
				placeholder="Введіть посилання"
				class="w-full rounded border p-2 text-sm"
			/>
		{/if}
	{/if}
	<Button type="submit" disabled={false} title="Додати" style="submit" handler={handleAddContact} />
</form>
