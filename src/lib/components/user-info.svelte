<script>
	export let userData;
</script>

<div class="flex flex-col gap-2">
	<h2 class="text-center text-lg">Особистий кабінет</h2>
	<p>
		<span class="text-zinc-400">Username: </span>@{userData?.user.username
			? userData?.user.username
			: 'Недоступно'}
	</p>
	<p>
		<span class="text-zinc-400">ID: </span>{userData?.user.user_id
			? userData?.user.user_id
			: 'Недоступно'}
	</p>
</div>
