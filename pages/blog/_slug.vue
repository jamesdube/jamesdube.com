<template>
	<div>
		<div class="border-b border-gray-300 dark:border-gray-700 pb-10 text-center">
			<div>{{ formatDate(post) }}</div>
			<div class="mt-1 text-4xl text-gray-700 dark:text-gray-400 font-bold tracking-wide">{{ post.title }}</div>
		</div>
		<div class="pt-10">
			<div class="lg:grid lg:grid-cols-8">
				<div class="md:col-span-8">
					<nuxt-content class="/tracking-wide /leading-loose dark:text-gray-400" :document="post" />	
				</div>
			</div>
		</div>
	</div>
</template>

<script>
var dateFormat = require('dateformat');
	export default {
		async asyncData({$content,params}){
			const post = await $content('blog',params.slug).fetch()
			console.log(post)
			return {
				post
			}
		},
		methods: {
	      formatDate(post){
	        let date = new Date(post.createdAt)
	        return dateFormat(date, "mmmm dS, yyyy");
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