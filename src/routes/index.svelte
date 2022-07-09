<script lang="ts">
</script>

<section>
    <h2>I would like to practice...</h2>
    <div class="buttons">
        <a href="/practice/addition">➕</a>
        <a href="/practice/subtraction">➖</a>
        <a href="/practice/multiplication">✖️</a>
        <a href="/practice/division">➗</a>
        <a href="/practice/random">🎲</a>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-inline: 2em;
    }
    a{
        background-color: #47B5FF;
        color: #DFF6FF;
        text-decoration: none;
        border: 3px solid #06283D;
        border-radius: 0.5em;
        font-size: 1.5em;
        min-width: 5em;
        min-height: 5em;
        margin: 1em;
        display: flex;
        align-items: center;
        justify-content: center;

        transition: transform 0.2s ease-in-out;
    }

    a:hover{
        transform: scale(1.2);
    }
</style>