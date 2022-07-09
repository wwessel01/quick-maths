<script lang="ts">
    export let value: number;
    export let max: number;
</script>

<section>
    <h2>{value}/{max} complete</h2>
    <div class="progress-bar">
        <div class="progress" style="width: {(value/max)*100}%"></div>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
    }

    h2{
        margin-bottom: 0;
    }

    .progress-bar{
        width: 60vw;
        height: 1em;
        margin-block: 1em;
        background-color: #DFF6FF;
        position: relative;
        border-radius: 5px;
    }

    .progress-bar > .progress{
        background-color: #1363DF;
        position: absolute;
        max-width: 100%;
        height: 1em;
        border-radius: 5px;
        transition: width 0.2s ease-in-out;
    }
</style>