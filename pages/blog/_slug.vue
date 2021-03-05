<template>
	<div>
		<div class="border-b border-gray-300 pb-10 text-center">
			<div>Wednesday, November 18, 2020</div>
			<div class="mt-1 text-4xl font-bold tracking-wide">{{ post.title }}</div>
		</div>
		<div class="pt-10">
			<div class="lg:grid lg:grid-cols-8">
				<div class="lg:col-span-2 pb-6 lg:pb-0">
					<nuxt-link class="flex justify-start text-green-600" :to="`/blog`">
						<svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		  					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
						</svg>
						<span class="ml-2">Back to blog</span>
					</nuxt-link>
				</div>
				<div class="md:col-span-6">
					<nuxt-content class="tracking-wide leading-loose" :document="post" />	
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		async asyncData({$content,params}){
			const post = await $content('blog',params.slug).fetch()
			console.log(post)
			return {
				post
			}
		}
	};
</script>