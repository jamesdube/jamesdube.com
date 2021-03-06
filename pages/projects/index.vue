<template>
	<div>
		<SectionHeader title="Projects" description="Stuff i do when i'm bored"/>
		<div class="border-t border-gray-300 dark:border-gray-700 py-8">
			<div class="/mb-60  --- ">
				<div v-for="(project,index) in projects" :key="index">
					<div v-if="index % 2 === 0">
						<Project class="py-20" :name="project.name" :description="project.description"/>
					</div>
					<div v-else>
						<ProjectFeatureAlternate class="py-20" :name="project.name" :description="project.description"/> 
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				dame: "foop",
				projects: [
					{
						name: "Laravel News App",
						description: "Android App for the Laravel news website (Unofficial). Laravel News is the official blog of Laravel. Every day bringing you the latest news, tutorials, and packages for the framework...."
					},
					{
						name: "Gobit Client",
						description: "A RabbitMQ client written in golang. It is a wrapper around github.com/streadway/amqp to provide a smooth and better API for interacting with Rabbitmq...."
					},
					{
						name: "Init C",
						description: "Init Container for probing dependant services in Kubernetes..."
					},
					{
						name: "Ansible Kubernetes",
						description: "Ansible playbook to create a kubernetes cluster..."
					}
				]
			}
		}
	};
</script>