<script lang='ts'>
    export let message: string;
</script>

<div class="flex w-full flex-row items-center justify-center gap-2 bg-zinc-800 py-2 bg-gradient-to-r from-primary to-green-700 bg-clip-text text-transparent text-[20px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
    <p>{message}</p>
</div>