import VueRouter from 'vue-router'

let routes = [
	{
		path : '/',
		component : require('./views/home')
	},
	{
		path : '/contact',
		component : require('./views/contact')
	},
	{
		path : '/projects',
		component : require('./views/projects')
	},
	{
		path : '/blog',
		component : require('./views/blog')
	}
]

export default new VueRouter({
	routes,
	// mode: 'history'
})