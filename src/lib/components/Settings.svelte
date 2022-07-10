<script lang="ts">
    import { max } from "../stores";

    export let toggleVisible: () => void;
</script>

<div class="settings-back">
    <div class="settings-front">
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
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .settings-front {
        background-color: white;
        padding: 1em;
        padding-inline: 2em;
        border-radius: 0.5em;
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
