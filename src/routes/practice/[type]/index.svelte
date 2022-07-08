<script lang="ts">
    import { page } from '$app/stores';
    let type = $page.params.type;
    let amount: number = 1;
</script>

<h2>
    {type}
</h2>

<h3>Standard amount:</h3>
<a href="/practice/{type}/5">5</a>
<a href="/practice/{type}/10">10</a>
<a href="/practice/{type}/15">15</a>
<a href="/practice/{type}/20">20</a>

<h3>Custom amount:</h3>
<input type="number" bind:value={amount}>
<a href="/practice/{type}/{amount}">Go</a>