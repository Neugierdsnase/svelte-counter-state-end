<script>
	import ButtonRow from './ButtonRow.svelte';

	let count = 0;
	
	const increment = () => {
		count++;
	}

	const decrement = () => {
		count--;
	}
</script>

<div class="h-screen flex justify-center items-center">
	<main class="h-[50vh] w-[50vw] bg-jelly-bean-500 flex flex-col">
		<input aria-label="Counted number" class="row" type="number" value={count}>		
		<ButtonRow {count} {increment} {decrement} />
	</main>
</div>

<style>


.row {
	flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Press Start 2P', Arial, Helvetica, sans-serif;
    font-size: clamp(0px, 15vw, 7rem);
    background-color: transparent;
    color: #FEF9EF;
    text-align: center;
    border:none;
}

@media (max-width: 360px) {
    main {
        height:100%;
        width:100%;
    }
}
</style>