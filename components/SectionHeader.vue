<template>
	<div>
      <div class="text-3xl leading-9 font-extrabold text-gray-800 /tracking-wide sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {{ title }}
      </div>
      <div class="my-5">
      	{{ description }}
      </div>
    </div>
</template>

<script>
	export default {
		props: ["title","description"]
	};
</script>