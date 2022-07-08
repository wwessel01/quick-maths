
<section>
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
        font-family: 'Montserrat Alternates', sans-serif;
        color: #06283D;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
    }
    header > a {
        text-decoration: none;
        color: #06283D;
    }

    footer {
        text-align: center;
        color: #06283d80;
    }

    footer > h4 > a {
        color: #1365df80;
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>