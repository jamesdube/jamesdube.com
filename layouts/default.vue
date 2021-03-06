<template>
	<div class="dark:bg-gray-900 bg-gray-50 min-h-screen transition-colors duration-75 font-sans">		
		<div class="flex flex-col min-h-screen -- container mx-auto px-8 lg:px-20 xl:px-80 text-gray-500 dark:text-gray-400 antialiased">
	  		<header class="">
	    		<Header/>
	  		</header>
	  		<main class="flex-grow mt-16">
	    		<Nuxt/>
	  		</main>
	  		<footer>
	    		<div class="flex justify-center /border-t-2 pb-8 pt-20">
	            	<div>© 2021 James Dube</div>
	          	</div>
	  		</footer>
		</div>
	</div>
</template>