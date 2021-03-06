<template>
	<div>
		<div class="border-b border-gray-300 dark:border-gray-700 pb-10 text-center">
			<div>Wednesday, November 18, 2020</div>
			<div class="mt-1 text-4xl text-gray-700 dark:text-gray-400 font-bold tracking-wide">{{ post.title }}</div>
		</div>
		<div class="pt-10">
			<div class="lg:grid lg:grid-cols-8">
<!-- 				<div class="lg:col-span-2 pb-6 lg:pb-0">
					<nuxt-link class="flex justify-start text-green-600" :to="`/blog`">
						<svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		  					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
						</svg>
						<span class="ml-2">Back to blog</span>
					</nuxt-link>
				</div> -->
				<div class="md:col-span-8">
					<nuxt-content class="/tracking-wide /leading-loose dark:text-gray-400" :document="post" />	
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

<style>
  .nuxt-content h1 {
    font-weight: bold;
    font-size: 32px;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
  .nuxt-content pre {
  	border-radius: 5px;
  	/*margin-top: 20px;*/
  	margin-bottom: 40px;
  }
  .nuxt-content ul,ol {
    margin-left: 40px;
    margin-bottom: 20px;
  }
  .nuxt-content li {
    display: list-item;
    text-align: -webkit-match-parent;
    list-style-type: disc;
  }
</style>