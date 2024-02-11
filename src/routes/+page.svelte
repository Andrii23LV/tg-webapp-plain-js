<script>
	import { onMount } from 'svelte';
	import { initializeTelegramUser, getChannelsFilteredBy } from '$lib/API/index';

	import toast, { Toaster } from 'svelte-french-toast';

	import UserInfo from '$lib/components/user-info.svelte';
	import Navbar from '$lib/shared/navbar.svelte';
	import ErrorContainer from '$lib/shared/error-container.svelte';
	import { userStore } from '$lib/stores';
	import { locationGroupsStore } from '$lib/stores';
	import { goto } from '$app/navigation';

	let userData = null;

	// export let userData = {
	// 	user: {
	// 		id: 1,
	// 		user_id: 822685700,
	// 		username: 'apple_time_ua',
	// 		first_name: 'O',
	// 		last_name: '',
	// 		language_code: 'uk'
	// 	},
	// 	location_groups: [
	// 		{
	// 			location_group_id: 1,
	// 			parsing_domain: 'work.ua',
	// 			country: 'UA'
	// 		},
	// 		{
	// 			location_group_id: 2,
	// 			parsing_domain: 'avito.ru',
	// 			country: 'RU'
	// 		}
	// 	]
	// };

	onMount(async () => {
		const { WebApp } = window.Telegram || {};

		if (WebApp?.initDataUnsafe?.start_param) {
			let startParam = WebApp.initDataUnsafe.start_param;
			goto(`/contacts/?id=${startParam}`);
		} else {
			try {
				const response = await initializeTelegramUser(WebApp);
				if (response.success) {
					userData = response.message;

					userStore.setUser(userData.user);
					locationGroupsStore.setLocationGroups(userData.location_groups);
				}
			} catch (error) {
				toast.error(`Виникла помилка під час ініціалізації користувача`);
				console.error('Error:', error);
			}
		}
	});
</script>

<Toaster />
<div class="flex w-full flex-col items-center justify-center gap-2">
	{#if userData?.user.user_id}
		<div class="flex w-full flex-row items-center justify-center gap-2">
			<Navbar type="home" />
		</div>
		<div class="flex flex-col gap-1 rounded bg-zinc-600 p-2 text-sm text-zinc-50">
			<UserInfo {userData} />
		</div>
	{:else}
		<ErrorContainer message="User not found" />
	{/if}
</div>
