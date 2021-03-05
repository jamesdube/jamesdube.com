<template>
	<div class="">
		<nav class="flex justify-between items-center /px-16 py-6 /border-b border-gray-300">
			<div>
				<nuxt-link :to="`/`">
					<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	 					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
					</svg>
				</nuxt-link>
			</div>
			<div class="">
				<!-- hamburger -->
				<div class="sm:hidden flex items-center">
					<svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</div>
				<!-- normal menu -->
				<div class="hidden sm:block">
					<div class="flex justify-between">
					<div class="px-6">
						<nuxt-link :to="`/blog`">
							Blog
						</nuxt-link>
					</div>
					<div class="px-6 dark:font-extrabold dark:text-5xl">Twitter</div>
					<div class="px-6">Github</div>
					<div class="ml-6">
						<div v-if="darkMode">
							<svg @click="toggleColourScheme" class="w-6 h-6 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						</div>
						<div v-else>
							<svg @click="toggleColourScheme" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
						</div>
					</div>
				</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>

if (process.browser) {
  require('aframe')
}

export default {
	name: 'App',
	data(){
		return {
			darkMode: false
		}
	},
	methods: {
		toggleColourScheme(){
			this.darkMode =! this.darkMode
		}
	},
	watch:{
		darkMode: {
			handler:function(value) {
				if(this.darkMode)
					this.$colorMode.preference = 'dark'
				else
					this.$colorMode.preference = 'light'
			},
			immediate: true
		}
	}
};
</script>