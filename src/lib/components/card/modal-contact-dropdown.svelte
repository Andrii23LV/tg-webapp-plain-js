<script>
	export let handleContactChange;
	export let selectedContact;
</script>

<select
	id="contacts"
	on:change={handleContactChange}
	bind:value={selectedContact}
	class="h-[40px] rounded border bg-zinc-900 p-2"
>
	<option value="" disabled> Виберіть контакт </option>
	<option value="phone">Телефон</option>
	<option value="email">Email</option>
	<option value="viber">Viber</option>
	<option value="whatsapp">WhatsApp</option>
	<option value="telegram">Telegram</option>
	<option value="link">Власне посилання</option>
</select>

<!-- <script>
	import * as Select from '$lib/components/ui/select';

	export let handleContactChange;
	export let selectedContact;
</script>

<Select.Root
	id="contacts"
	on:change={handleContactChange}
	bind:value={selectedContact}
	class="h-[45px] rounded border bg-zinc-500 bg-zinc-600 p-2"
>
	<Select.Trigger><Select.Value placeholder="Theme" /></Select.Trigger>
	<Select.Content>
		<Select.Item value="phone">Телефон</Select.Item>
		<Select.Item value="email">Email</Select.Item>
		<Select.Item value="viber">Viber</Select.Item>
		<Select.Item value="whatsapp">WhatsApp</Select.Item>
		<Select.Item value="telegram">Telegram</Select.Item>
		<Select.Item value="link">Власне посилання</Select.Item>
	</Select.Content>
</Select.Root> -->
