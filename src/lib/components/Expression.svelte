<script lang="ts">
    import type Expression from "src/models/Expression";
    import parseOperation from "$lib/helpers/OperationParser";
    import { onMount } from "svelte";

    export let id: number;
    export let expression: Expression;
    export let answerFunction: (id: number, answer: number) => void;

    let answer: number;
    let inputField: any;

    const handleKeyPress = (event: any) => {
        if (event.key === "Enter") {
            answerFunction(id, answer);
        }
    };

    const renderExpression = () => {
        return `${expression.first} ${parseOperation(expression.operation)} ${expression.second} = `;
    }

    onMount(() => {
        inputField.focus();
        inputField.select();
    });
</script>

<section>
    <h2>
        {renderExpression()}
        <input type="number" bind:this={inputField} bind:value={answer} on:keypress={(e) => handleKeyPress(e)}>
    </h2>
</section>

<style>
    section{
        text-align: center;
    }
    input{
        border: none;
        font-size: 1.2em;
        width: 3em;
        text-align: center;
        border-bottom: 2px solid #06283D;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    input:focus{
        outline: none;
    }
</style>