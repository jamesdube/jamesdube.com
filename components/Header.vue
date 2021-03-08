<template>
	<div class="">
		<nav class=" /px-16 py-6 /border-b border-gray-300 dark:text-gray-400">
			<div class="flex justify-between items-center">
				<div>
					<nuxt-link :to="`/`">
						<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
						</svg>
					</nuxt-link>
				</div>
				<div class="">
					<!-- hamburger -->
					<div @click="toggleMenu" class="sm:hidden cursor-pointer flex items-center">
						<svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</div>
					<!-- normal menu -->
					<div class="hidden sm:block">
						<div class="sm:flex sm:justify-between">
							<div class="px-6">
								<nuxt-link :to="`/projects`">
									Projects
								</nuxt-link>
							</div>
							<div class="px-6">
								<nuxt-link :to="`/blog`">
									Blog
								</nuxt-link>
							</div>
							<div class="px-6">
								<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jamesddube" data-splitbee-event="External Link" data-splitbee-event-type="twitter">
									Twitter
								</a>
							</div>
							<div class="px-6">
								<a target="_blank" rel="noopener noreferrer" href="https://github.com/jamesdube" data-splitbee-event="External Link" data-splitbee-event-type="github">
									Github
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="hidden sm:block">
					<div class="ml-6">
						<div v-if="darkMode">
							<svg @click="toggleColourScheme" class="w-6 h-6 cursor-pointer fill-current text-yellow-400 hover:w-8 hover:h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						</div>
						<div v-else>
							<svg @click="toggleColourScheme" class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
						</div>
					</div>
				</div>
			</div>
		</nav>

		<!-- Mobile menu -->
		<div v-if="menuActive"  class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right sm:hidden">
			<div class="rounded-lg shadow-lg ring-1 ring-black /ring-opacity-5  dark:bg-gray-800 divide-y-2 divide-gray-50">
				<div class="pt-5 pb-6 px-5">
					<div class="flex items-center justify-between">
						<div>
							<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
							</svg>						
						</div>
						<div class="-mr-2">
							<button @click="toggleMenu" type="button" class="bg-white dark:bg-gray-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
								<span class="sr-only">Close menu</span>
								<!-- Heroicon name: outline/x -->
								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-6">
						<nav class="grid gap-y-8">
							<a href="#" class="-m-3 p-3 flex items-center rounded-md /hover:bg-gray-600 /hover:bg-gray-50">
								<!-- Heroicon name: outline/chart-bar -->
								<svg class="flex-shrink-0 h-6 w-6 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900 dark:text-gray-400 -- ">
									Projects
								</span>
							</a>

							<a href="#" class="-m-3 p-3 flex items-center rounded-md /hover:dark:bg-gray-600">
								<!-- Heroicon name: outline/cursor-click -->
								<svg class="flex-shrink-0 h-6 w-6 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								  	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900 dark:text-gray-400">
									Blog
								</span>
							</a>

							<a href="#" class="-m-3 p-3 flex items-center rounded-md /hover:bg-gray-50">
								<svg class="flex-shrink-0 h-6 w-6 text-teal-600 fill-current" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
								  	<path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"/>
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900 dark:text-gray-400">
									Github
								</span>
							</a>

							<a href="#" class="-m-3 p-3 flex items-center rounded-md /hover:bg-gray-50">
								<svg class="flex-shrink-0 h-6 w-6 text-teal-600 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								  	<path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"/>
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900 dark:text-gray-400">
									Twitter
								</span>
							</a>
						</nav>
					</div>
				</div>
			</div>
		</div>
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
			darkMode: true,
			menuActive: true
		}
	},
	methods: {
		toggleColourScheme(){
			this.darkMode =! this.darkMode
		},
		toggleMenu(){
			this.menuActive =! this.menuActive
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
