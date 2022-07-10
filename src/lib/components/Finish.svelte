<script lang="ts">
    import parseOperation from "$lib/helpers/OperationParser";

    import type Expression from "src/models/Expression";

    export let expressions: Expression[];
</script>

<section>
    <h2>Done 🏁</h2>
    <table>
        <tr>
            <th>Expression</th>
            <th>Answer</th>
            <th>Your answer</th>
        </tr>
        {#each expressions as expression}
            <tr>
                <td>
                    {expression.first}
                    {parseOperation(expression.operation)}
                    {expression.second}
                </td>
                <td>{expression.answer}</td>
                <td>{expression.userAnswer}</td>
                <td>
                    {#if expression.answer == expression.userAnswer}
                        <div class="correct">✅</div>
                    {:else}
                        <div class="correct">❌</div>
                    {/if}
                </td>
            </tr>
        {/each}
    </table>
</section>

<style>
    section {
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 2em;
    }

    table {
        width: 100%;
    }

    td,
    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    .correct {
        text-align: center;
        font-size: 1.5em;
    }
    @media screen and (max-width: 600px) {
        section {
            padding-inline: 2em;
        }
    }
</style>
