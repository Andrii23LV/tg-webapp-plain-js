<script>
	import ModalFormJobTips from './modal-form-job-tips.svelte';
	import ModalTips from '$lib/components/card/modal-tips.svelte';
	import { Textarea } from "$lib/components/ui/textarea";

	export let text;
	export let handleTextChange;
</script>

<div class="mb-2 flex flex-row items-center gap-2">
	<label class="block text-sm" for="text">Опис вакансії:</label>
	<ModalTips><ModalFormJobTips /></ModalTips>
</div>
<Textarea  
	id="text"
	bind:value={text}
	on:input={handleTextChange}
	class="h-full max-h-[350px] min-h-[300px] w-full resize-none rounded border p-2 text-xs"
></Textarea>
