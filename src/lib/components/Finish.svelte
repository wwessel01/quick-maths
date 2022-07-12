<script lang="ts">
    import type Expression from "src/models/Expression";
    import parseOperation from "$lib/helpers/OperationParser";

    export let expressions: Expression[];

    let sortHighToLowState: boolean = true;

    const renderTime = (time: number | undefined) => {
        if (!time) return "0.000";
        return (time / 1000).toFixed(3);
    };

    const sortExpressions = () => {
        const sortedExpressions = expressions.sort(function (a, b) {
            if(sortHighToLowState) return b.userTime! - a.userTime!;            
            return a.userTime! - b.userTime!;
        });
        expressions = [...sortedExpressions];
        sortHighToLowState = !sortHighToLowState;
    };
</script>

<section>
    <h2>Done 🏁</h2>
    <table>
        <tr>
            <th>Expression</th>
            <th>Answer</th>
            <th>
                Time (s)
                <button on:click={sortExpressions}>
                    {#if sortHighToLowState}
                        🔼
                    {:else}
                        🔽
                    {/if}
                </button>
            </th>
        </tr>
        {#each expressions as expression}
            <tr>
                <td>
                    {expression.first}
                    {parseOperation(expression.operation)}
                    {expression.second}
                </td>
                <td>
                    {#if expression.answer == expression.userAnswer}
                        {expression.userAnswer}
                    {:else}
                        <span class="incorrect">{expression.userAnswer}</span> {expression.answer}
                    {/if}
                </td>
                <td>{renderTime(expression.userTime)}</td>
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

    th > button {
        border: none;
        background-color: transparent;
        padding: 0;
    }

    .correct {
        text-align: center;
        font-size: 1.5em;
    }

    .incorrect {
        color: red;
        text-decoration: underline 2px;
        font-weight: bold;
    }
    @media screen and (max-width: 600px) {
        section {
            padding-inline: 2em;
        }
    }
</style>
