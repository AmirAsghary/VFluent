import './light-theme/index.scss'
import './dark-theme/index.scss'
import './custom-theme/index.scss'
// Script Gen, Wanring: Edit template instead of it
import global from './global.js'
import {SDate} from './usual.js'
import {SUtility} from './usual.js'
import '../examples/style/global-transition.css'
import Button from '@/Button/index.js'
import ProgressRing from '@/ProgressRing/index.js'
import CheckBox from '@/CheckBox/index.js'
import Combobox from '@/Combobox/index.js'
import DropDown from '@/DropDown/index.js'
import ProgressBar from '@/ProgressBar/index.js'
import FlipView from '@/FlipView/index.js'
import ToggleSwitch from '@/ToggleSwitch/index.js'
import Slider from '@/Slider/index.js'
import CalendarView from '@/CalendarView/index.js'
import ColorPicker from '@/ColorPicker/index.js'
import TextBox from '@/TextBox/index.js'
import RadioGroup from '@/RadioGroup/index.js'
import Radio from '@/Radio/index.js'
import Callout from '@/Callout/index.js'
import ImgBox from '@/ImgBox/index.js'
import ScrollStory from '@/ScrollStory/index.js'
import DetailsList from '@/DetailsList/index.js'
import Pivot from '@/Pivot/index.js'


let components = [
  Button,
  ProgressRing,
  CheckBox,
  Combobox,
  DropDown,
  ProgressBar,
  FlipView,
  ToggleSwitch,
  Slider,
  CalendarView,
  ColorPicker,
  TextBox,
  RadioGroup,
  Radio,
  Callout,
  ImgBox,
  ScrollStory,
  DetailsList,
  Pivot,

]

const install = function(Vue){
  if (install.installed) return
  Vue.prototype.$fvGlobal=global
  Vue.prototype.$SDate=SDate
  Vue.prototype.$SUtility=SUtility
  components.map(component => Vue.use(component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
    Button,
  ProgressRing,
  CheckBox,
  Combobox,
  DropDown,
  ProgressBar,
  FlipView,
  ToggleSwitch,
  Slider,
  CalendarView,
  ColorPicker,
  TextBox,
  RadioGroup,
  Radio,
  Callout,
  ImgBox,
  ScrollStory,
  DetailsList,
  Pivot,

}

