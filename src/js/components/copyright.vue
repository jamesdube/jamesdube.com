<template>
	<div>
		&copy {{ getYear() }} James Dube
	</div>
</template>
<script>
	export default {

		methods : {
			getYear(){
				var date = new Date()
				return date.getFullYear()
			}
		}
	}
</script>