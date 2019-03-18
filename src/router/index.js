import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import qjContent from '../components/qj-content'
import qjNavone from '../components/content/qj-navone'
import qjGrid from '../components/content/qj-grid'
import qjForm from '../components/content/qj-form'
import qjList from '../components/content/qj-list'

export default new VueRouter({
	routes:[
		{
			path:"/",
			component:qjContent,
			children:[
				{
					path:"",
					component:qjNavone
				},
				{
					path:"grid",
					component:qjGrid
				},
				{
					path:"form",
					component:qjForm
				},
				{
					path:"list",
					component:qjList
				}
			]
		},
	]
})