<template>
	<div class="container">
		<div>Div 1</div>
		<div class="fill">Div 2</div>
		<div>Div 3</div>
	</div>
</template>

<script>

export default {
	name: 'app',
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.container .fill {
  background-color: tomato;
  flex: 1;
}
</style>
