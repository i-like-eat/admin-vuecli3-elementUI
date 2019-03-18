import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import qjContent from '../components/qj-content'
import qjNavone from '../components/content/qj-navone'
import qjGrid from '../components/content/qj-grid'
import qjForm from '../components/content/qj-form'
import qjList from '../components/content/qj-list'
import qjCharts from '../components/content/qj-charts'
import qjPage from '../components/content/qj-page'

let router = {
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
					name:'list',
					component:qjList
				},
				{
					path:"charts",
					component:qjCharts
				},
				{
					path:"page/:id",
					component:qjPage
				}
			]
		},
	]
}
export default new VueRouter(router)