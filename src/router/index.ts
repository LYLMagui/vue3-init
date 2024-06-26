import { createRouter, createWebHistory } from 'vue-router'
import Props from '../pages/01_props/Father.vue'
import Event from '../pages/02_custom-event/Father.vue'
import Bus from '../pages/03_mitt/Father.vue'
import Model from '../pages/04_v-model/Father.vue'
import AttrsListeners from '../pages/05_$attrs/Father.vue'
import RefChildrenParent from '../pages/06_$refs-$parent/Father.vue'
import ProvideInject from '../pages/07_provide-inject/Father.vue'
import Pinia from '../pages/08_pinia/Father.vue'
import Slot from '../pages/09_slot/Father.vue'
import Slot_name from "../pages/09_slot_具名插槽/Father.vue";
import Slot_scope from "../pages/09_slot_作用域插槽/Father.vue";

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/props',
			component: Props
		},
		{
			path: '/event',
			component: Event
		},
		{
			path: '/mitt',
			component: Bus
		},
		{
			path: '/model',
			component: Model
		},
		{
			path: '/attrs',
			component: AttrsListeners
		},
		{
			path: '/ref-parent',
			component: RefChildrenParent
		},
		{
			path: '/provide-inject',
			component: ProvideInject
		},
		{
			path: '/pinia',
			component: Pinia
		},
		{
			path: '/slot',
			component: Slot
		},
		{
			path: '/slot_name',
			component:Slot_name
		},
		{
			path: '/slot_scope',
			component:Slot_scope
		}
		
		
	]
})