<script>
	export let color;
	export let name;
</script>

<li>
	<span style="background-color: {color}"></span>
	{name}
</li>


<style>
	span {
		width: 15px;
		height: 15px;
		display: inline-block;
	}
</style>