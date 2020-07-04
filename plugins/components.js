import Vue from 'vue'

import { Topbar } from '../components/Nav'
import SpriteIcon from '../components/Shared/SVG/Icon.vue'
import AuthLayoutBase from '../components/Shared/AuthLayoutBase.vue'

Vue.component('sprite-icon', SpriteIcon)
Vue.component('top-bar', Topbar)
Vue.component('auth-layout-base', AuthLayoutBase)
