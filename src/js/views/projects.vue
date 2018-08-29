<template>
	<transition name="custom-classes-transition"
    enter-active-class="animated fadeIn">
	<div class="row mt-md-9 d-flex justify-content-center">
		<div class="col-md-10">
			<div class="//mt-3">
	        	<h1 class="font-weight-light">A bit of some <span class="text-brand">Code</span></h1>
	        </div>
	        <div class="lead mt-3">
	        	<p>Here's a hand picked selection of some of my work, see more over on <a class="text-brand" href="https://github.com/jamesddube">Github</a></p>
	        </div>
		</div>

		<div class="row mt-4 d-flex justify-content-center align-items-stretch">
            <div class="col-md-5 p-4" v-for='project in projects'>
            	<a v-bind:href="project.link" class="text-dark">
            	<div class="card mb-3 box-shadow d-flex bg-dark" style="min-height: 199.317px;">
  					<div class="card-body bg-dark">
						<h4 class="card-title text-brand">{{ project.title }}</h4>
    					<p class="card-text text-muted /">{{ project.description }}</p>
  					</div>
  					<div class="border-t border-brand p-3 bg-dark">
  						<small v-for="tag in project.tags" class="text-white mr-2 badge bg-brand //badge-pill //badge-brand-inverse">{{ tag }}</small>
  					</div>
				</div>
            	</a>
            </div>
        </div>
	</div> 
</transition>
</template>
<script>
	export default {
		data(){
			return {
				projects : [
					{
						title : 'Laravel News App',
						description : "This is an android app I made as a news reader for Laravel's official blog, however it is not the official app and is completely open source",
						tags : [
							'android','java'
						],
						link : 'https://github.com/jamesddube/LaravelNewsApp'
					},
					{
						title : 'My Website',
						description : "My own personal site about me (this site!), listing all the current and previous projects I've worked on, as well as contact information. Site was done using bootstrap and vue.",
						tags : [
							'javascript','vue'
						],
						link : 'https://github.com/jamesddube/jamesdube.com'
					},
					{
						title : 'Auto-Virtual Hosts',
						description : "This is a bash script I've used for a while to create virtual hosts in apache web server, just input the your desired site name and the projects root location and it does all the rest for you!",
						tags : [
							'bash','linux'
						],
						link : 'https://gist.github.com/jamesddube/b526928afe6ed2f4e935'
					},
					{
						title : 'Laravel Model Validator',
						description : "A laravel package that adds functionality to validate a model on demand as when needed anywhere in your code",
						tags : [
							'laravel','php'
						],
						link : 'https://github.com/jamesddube/model-validator'
					}
				]
			}
		}
	}
</script>