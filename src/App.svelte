<script>
	import Slice from './Slice.svelte';
	export let restaurants;

	let cumulativePercent = 0;
	const percent = 1 / restaurants.length;

	const getCoordinatesForPercent = (percent) => {
		const x = Math.cos(2 * Math.PI * percent);
		const y = Math.sin(2 * Math.PI * percent);
		
		return [x, y];
	}

	const getPath = () => {
		let [startX, startY] = getCoordinatesForPercent(cumulativePercent);
		cumulativePercent += percent;
		let [endX, endY] = getCoordinatesForPercent(cumulativePercent);

		const largeArcFlag = percent > .5 ? 1 : 0;

		return [
			`M ${startX} ${startY}`,
			`A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
			`L 0 0`,
		].join(' ');
	}

</script>

<main>
	<h1>Lunch Wheeeeeeeeeeeeel</h1>
	<svg 
		viewBox="-1 -1 2 2"
		style="transform: rotate(-90deg)"
	>
	{#each restaurants as r, i}
		<path d={getPath()} fill={i % 2 ? 'red' : 'blue'} />
	{/each}
	</svg>
	{#each restaurants as r}
		<Slice name={r.name} />
	{/each}
</main>

<style>
	svg {
		height: 200px;
	}
</style>