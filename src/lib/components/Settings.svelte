<script lang="ts">
    import { max } from "../stores";
    import { fly, fade } from 'svelte/transition';

    export let toggleVisible: () => void;
</script>

<div class="settings-back" transition:fade>
    <div class="settings-front" transition:fly="{{ y: 200, duration: 500 }}">
        <div class="settings-header">
            <h2>Settings</h2>
            <button on:click={toggleVisible}>✖️</button>
        </div>
        <div class="settings-content">
            <div class="row">
                <h3>Maximum value:</h3>
                <input type="number" bind:value={$max} />
            </div>
            <div class="row">
                <p>The maximum value will be used in the expressions.</p>
            </div>
        </div>
    </div>
</div>

<style>
    .settings-back {
        background-color: #06283d80;
        width: 100vw;
        height: 100vh;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9;
    }

    .settings-front {
        background-color: white;
        padding: 1em;
        padding-inline: 2em;
        border-radius: 0.5em;
        z-index: 10;
    }

    .settings-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    button {
        background-color: transparent;
        border: none;
        font-size: 1.5em;
        cursor: pointer;
        padding: 0;

        transition: transform 0.2s ease-in-out;
    }

    button:hover {
        transform: scale(1.2);
    }

    .settings-content > .row {
        display: flex;
        align-items: center;
        max-width: 60vw;
    }

    input {
        border: none;
        font-size: 1.2em;
        width: 3em;
        height: 1.2em;
        margin-left: 1em;
        text-align: center;
        border-bottom: 2px solid #06283d;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }

    input:focus {
        outline: none;
    }
</style>
