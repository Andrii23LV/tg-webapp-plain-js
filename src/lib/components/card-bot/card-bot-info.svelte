<!-- CardInfo.svelte -->

<script>
	export let item;
</script>

<div class="flex-1">
	<p class="text-sm leading-relaxed text-zinc-800">Username: @{item.username}</p>
	<p class="text-sm leading-relaxed text-zinc-800">ID: #{item.id}</p>
</div>
