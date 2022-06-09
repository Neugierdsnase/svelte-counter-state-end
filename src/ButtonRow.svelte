<script>
    import {fly} from 'svelte/transition'
    export let count;
    export let increment;
    export let decrement;
</script>

<div class="row">
    <button id="minus" on:click={decrement} class="bg-red-300 disabled:bg-slate-400 hover:bg-red-600" disabled={count === 0 || null} >
        {#if count !== 0}
        <span transition:fly="{{duration: 350, y: 50}}">
            -
        </span>
        {/if}
    </button>
    <button id="plus" on:click={increment} class="button">
        <span in:fly={{}}>
            +
        </span>
    </button>
</div>

<style>
.row {
    flex-grow: 1;
    display: flex;
}

.button {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    background-color: #17C3B2;
    border: none;
    color: #FEF9EF;
}

.button:first-child {
    background-color: #FE6D73;
}

#plus:hover {
    background-color: #0F8075;
}

#minus:hover {
    background-color: #DF0109;
}

</style>