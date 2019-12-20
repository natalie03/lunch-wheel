<script>
	//TODO: Put names on pie pieces?
	// Add a color palette generator
	// Spin! The! Wheel!
	// Fonts
	// Allow for deletion of restaurants

	export let restaurants;

	import GuideItem from './GuideItem.svelte';
	import { colors } from './data/colors.json'

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
		<path d={getPath()} fill={colors[i]} />
	{/each}
	</svg>
	<ul>
	{#each restaurants as r, i}
		<GuideItem color={colors[i]} name={r.name} />
	{/each}
	</ul>
	<div>
		<button type="button">Spin. The. Wheel.</button>
	</div>
</main>

<style>
	main {
		text-align: center;
		position: relative;
		width: 100%;
		height: 100vh;
	}
	svg {
		height: 60vh;
	}
	ul {
		position: absolute;
		left: 0;
		background-color: #F2F2F2;
		top: 2vh;
	}
</style>