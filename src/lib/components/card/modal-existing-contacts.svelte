<script>
	export let contacts;
	export let handleDeleteContact;
</script>

<div class="flex flex-wrap">
	{#each contacts as contact, index}
		<div
			class="mb-1 flex items-center justify-between gap-2 rounded-full border bg-zinc-500 p-1 px-2 text-xs"
		>
			<p class="font-bold text-zinc-800">
				{contact.name}:
				<span class="ml-[2px] font-normal italic text-zinc-200">{contact.value}</span>
			</p>
			<button
				on:click={() => handleDeleteContact(index)}
				disabled={false}
				type="submit"
				class="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-zinc-200 font-extrabold text-zinc-400"
				>×</button
			>
		</div>
	{/each}
</div>
