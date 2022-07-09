<script lang="ts">
    import { page } from '$app/stores';
    let type = $page.params.type;
    let amount: number = 1;
</script>

<section>
    <h2>
        {type.charAt(0).toUpperCase() + type.slice(1)}
    </h2>
    
    <h3>How many expressions would you like to practice?</h3>
    <div class="buttons">
        <a href="/practice/{type}/5">5</a>
        <a href="/practice/{type}/10">10</a>
        <a href="/practice/{type}/15">15</a>
        <a href="/practice/{type}/20">20</a>
    </div>
    
    <h3>Custom amount:</h3>
    <div class="custom-buttons">
        <input type="number" bind:value={amount}>
        <a href="/practice/{type}/{amount}">➡️</a>
    </div>
</section>

<style>
    section {
        text-align: center;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-inline: 2em;
    }
    .buttons > a{
        background-color: #47B5FF;
        color: #DFF6FF;
        text-decoration: none;
        border: 3px solid #06283D;
        border-radius: 0.5em;
        font-size: 1.5em;
        min-width: 5em;
        min-height: 5em;
        margin: 1em;
        margin-bottom: 2em;
        margin-top: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        transition: transform 0.2s ease-in-out;
    }
    .buttons > a:hover{
        transform: scale(1.2);
    }

    h3{
        margin-inline: 1em;
    }

    input{
        border: none;
        font-size: 2em;
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

    .custom-buttons > a {
        text-decoration: none;
        font-size: 2em;
    }
</style>