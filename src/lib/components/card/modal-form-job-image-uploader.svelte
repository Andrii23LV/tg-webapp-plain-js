<script>
	import { Input } from '$lib/components/ui/input';

	export let handleImageChange;
</script>

<div class="mb-2">
	<label class="mb-2 block text-sm" for="image">Завантажити фото:</label>
	<Input type="file" id="image" accept=".jpg, .jpeg, .png, .mp4" on:change={handleImageChange} />
	<p class="mt-2 text-xs text-zinc-300">Дозволені типи - MP4, PNG, JPG, JPEG.</p>
</div>
