<script>
    // @ts-nocheck
    // @ts-ignore

    import {JSONEditor} from 'svelte-jsoneditor';

    export let handleChannel;

    let content = {
        text: undefined,
        json: {
            channel: {chat_id: 0, title: '', username: ''},
            location: {
                city: '',
                region: '',
                country: '',
                parsing_id: 0,
                parsing_domain: ''
            },
            bot: {
                username: ''
            },
            
        }
    }

    $: handleChannel(content.json)
</script>

<div class="flex flex-col justify-center items-center gap-2 h-[400px]">
    <JSONEditor bind:content /> 
</div>
