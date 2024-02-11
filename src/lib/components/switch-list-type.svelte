<script>
	import { Switch, Label } from 'bits-ui';

	export let changeListType;
	export let type;
</script>

<div class="flex items-center space-x-3 rounded-md border border-zinc-500 bg-zinc-600 px-1">
	<Switch.Root
		id="type"
		class="focus-visible:ring-foreground focus-visible:ring-offset-background data-[state=checked]:bg-foreground data-[state=unchecked]:bg-dark-10 data-[state=unchecked]:shadow-mini-inset peer inline-flex h-[26px] min-h-[26px] w-[52px] shrink-0 cursor-pointer items-center rounded-full bg-zinc-700 px-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
		onCheckedChange={changeListType}
		checked={type !== 'unarchived' ? true : false}
	>
		<Switch.Thumb
			class="bg-background data-[state=unchecked]:shadow-mini dark:border-border-input dark:shadow-mini pointer-events-none block size-[22px] shrink-0 rounded-full transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 dark:data-[state=unchecked]:border"
		/>
	</Switch.Root>
	<Label.Root for="type" class="text-sm font-medium">Канали з авто-постингом</Label.Root>
</div>
