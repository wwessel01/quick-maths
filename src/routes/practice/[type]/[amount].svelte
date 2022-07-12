<script lang="ts">
    import type Expression from '../../../models/Expression';
    import type { ExpressionType } from '$lib/enums/ExpressionType';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import MathService from '$lib/services/MathService';
    import Progress from '$lib/components/Progress.svelte';
    import ExpressionView from '$lib/components/Expression.svelte';
    import FinishView from '$lib/components/Finish.svelte';


    let type: ExpressionType = $page.params.type as ExpressionType;
    let amount: number = +$page.params.amount;
    let currentIndex: number = 0;
    let expressions: Expression[] | undefined;

    let intervalDate: Date;

    let ready: boolean = false;
    let complete: boolean = false;

    const toggleReady = () => {
        ready = !ready;

        if(ready) intervalDate = new Date();
    };

    const addAnswerToExpression = (expressionId: number, answer: number) => {
        if(!expressions) return;
        expressions[expressionId].userAnswer = answer;
        expressions[expressionId].userTime = new Date().getTime() - intervalDate.getTime();
        intervalDate = new Date();

        if(!expressions[expressionId].userAnswer && expressions[expressionId].userAnswer !== 0) return;

        if(currentIndex == expressions.length - 1) {
            complete = true;
        } 
        currentIndex++;
    }

    onMount(async () => {
        expressions = await MathService.getExpressions(amount, type);
    });
</script>

<section>
    {#if expressions}
        {#if ready}
            {#if complete}
                <Progress value={currentIndex} max={amount} />
                <FinishView expressions={expressions} />
            {:else}
                {#key currentIndex}
                    <Progress value={currentIndex} max={amount} />
                    <ExpressionView id={currentIndex} expression={expressions[currentIndex]} answerFunction={addAnswerToExpression}/>
                {/key}
            {/if}
        {:else}
            <h2>Are you ready to start?</h2>
            <button on:click={toggleReady}>Start</button>
            <p>
                Pressing start will start the timer
                <br>
                Fill in an answer and press enter, you will go to the next expression immediatly
                <br>
                At the end you will see your results
            </p>
        {/if}
    {:else}
        <img src="/three-dots.svg" alt="loader"/>
    {/if}
</section>

<style>
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button{
        border: 3px solid #06283D;
        border-radius: 0.5em;
        background-color: #47B5FF;
        font-size: 1.5em;
        min-width: 5em;
        min-height: 5em;
        color: #DFF6FF;
        cursor: pointer;

        transition: transform 0.2s ease-in-out;
    }

    button:hover{
        transform: scale(1.2);
    }

    p{
        text-align: center;
        margin: 1em;
    }
</style>