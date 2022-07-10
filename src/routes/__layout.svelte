<script lang="ts">
    import Settings from "$lib/components/Settings.svelte";

    let visible: boolean = false;

    const toggleVisible = () => {
        visible = !visible;
    }
</script>

<section>
    <button class="settings-button" on:click={toggleVisible}>⚙️</button>
    {#if visible}
        <Settings toggleVisible={toggleVisible} />
    {/if}
    <header>
        <a href="/">
            <h1>🧮 Quick Maths</h1>
        </a>
    </header>
    <div class="content">
        <slot />
    </div>
    <footer>
        <h4>
            By <a href="https://github.com/wwessel01" target="_blank">Wessel van Tilburg</a>
        </h4>
    </footer>
</section>

<style>
    section {
        font-family: "Montserrat Alternates", sans-serif;
        color: #06283d;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
    }
    header > a {
        text-decoration: none;
        color: #06283d;
    }

    footer {
        text-align: center;
        color: #06283d80;
    }

    footer > h4 > a {
        color: #1365df80;
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .settings-button {
        position: absolute;
        right: 0.5em;
        top: 0.5em;
        padding: 0;

        background-color: transparent;
        border: none;
        font-size: 1.5em;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
    }

    .settings-button:hover {
        transform: scale(1.2);
    }

    @media screen and (max-width: 600px) {
        header {
            font-size: 1.2em;
        }
    }
</style>
