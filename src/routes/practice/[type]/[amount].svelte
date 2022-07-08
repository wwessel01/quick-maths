<script lang="ts">
    import type Expression from '../../../models/Expression';
    import type { ExpressionType } from '$lib/enums/ExpressionType';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import MathService from '$lib/services/MathService';

    let type: ExpressionType = $page.params.type as ExpressionType;
    let amount: number = +$page.params.amount;
    let expressions: Expression[] | undefined;

    let ready: boolean = false;

    const toggleReady = () => {
        ready = !ready;
    };

    onMount(async () => {
        expressions = await MathService.getExpressions(amount, type);
    });
</script>

<section>
    {#if expressions}
        {#if ready}
            {JSON.stringify(expressions)}
        {:else}
            <h3>Are you ready to start?</h3>
            <button on:click={toggleReady}>Ready</button>
        {/if}
    {:else}
        <img src="/three-dots.svg" alt="loader"/>
    {/if}
</section>