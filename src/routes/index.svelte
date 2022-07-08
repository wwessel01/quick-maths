<script lang="ts">
    //@ts-ignore
    import type Expression from "src/models/Expression";
    import MathService from "$lib/services/MathService";
    import { onMount } from "svelte";
    import { ExpressionType } from "$lib/enums/ExpressionType";

    let expressions: Expression[] | undefined;

    onMount(async () => {
        expressions = await MathService.getExpressions(20, ExpressionType.multiplication);
    });

    const reloadExpressions = async () => {
        expressions = undefined;
        expressions = await MathService.getExpressions(20, ExpressionType.multiplication);
    };
</script>

<section>
    <button on:click={reloadExpressions}>Reload expressions</button>
    {#if expressions}
    {JSON.stringify(expressions)}
    {:else}
    <img src="/three-dots.svg" alt="loader"/>
    {/if}
</section>

<style>
</style>