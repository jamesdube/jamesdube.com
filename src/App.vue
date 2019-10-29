<template>
  <div id="app" class="antialiased text-gray-500 ">
	<div class="bg-gray-900 min-h-screen">
		<Navbar/>
		<div class="md:px-48 lg:px-64">
			<Hero/>
		</div>
		<div class="md:px-48 lg:px-64">
			<About/>
		</div>
		<div class="md:px-48 lg:px-64">
			<FeaturedProjects/>
		</div>
		<div class="md:px-48 lg:px-64">
			<Projects/>
		</div>
		<div class="md:px-48 lg:px-64">
			<Contact/>
		</div>
		<div class="md:px-48 lg:px-64 bg-gray-800">
			<Footer/>
		</div> 
	</div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import FeaturedProjects from './components/FeaturedProjects'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
	Navbar,
	Hero,
	About,
	Work,
	FeaturedProjects,
	Projects,
	Contact,
	Footer
  },
}
</script>

<style src="./assets/tailwind.css"></style>
