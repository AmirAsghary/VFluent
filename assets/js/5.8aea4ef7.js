(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{290:function(e,t,i){"use strict";i.r(t);i(1),i(30),i(13);var n=i(9),s=i(62),c=i.n(s),l=1,a={data:function(){return{revealEffectName:"revealEffect"+l++}},computed:{revealEffectClass:function(){return this.revealEffect?[this.revealEffectName]:[]}}},r=i(130),o={name:"FvTreeViewCheckbox",props:{status:{type:String,default:"Indeterminate"}},methods:{icon:function(){return"checked"==this.status?"ms-Icon--CheckMark":"Indeterminate"==this.status?"ms-Icon--CheckboxIndeterminate":null}}},h=i(0),d=Object(h.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"fv-TreeView__checkbox",class:[e.status],attrs:{role:"checkbox"},on:{click:function(t){return e.$emit("click",t)}}},[i("i",{staticClass:"ms-Icon",class:e.icon()})])}),[],!1,null,null,null).exports,f={name:"FvTreeViewItem",components:{TreeContent:r.a,checkbox:d},mixins:[a],props:{item:{default:function(){return{}}},theme:{default:"system",type:String},padding:{type:Number,default:20},deepth:{default:1},revealEffect:{type:Boolean,default:!0},viewStyle:{},checkable:{type:Boolean,default:!1},draggable:{type:Boolean}},model:{prop:"item",event:"update:item"},data:function(){var e=this;return{event:{label:{mouseover:function(){e.$set(e.style.label,"backgroundColor",e.hoverColor(e.viewStyle.backgroundColor||"#fff",.9,.3).cssa())},mouseout:function(){e.item.selected?e.$set(e.style.label,"backgroundColor",e.hoverColor(e.viewStyle.backgroundColor||"#fff",.8,.2).cssa()):e.$set(e.style.label,"backgroundColor",e.viewStyle.backgroundColor||"#fff")}}},style:{label:{paddingLeft:10+this.deepth*this.padding+"px"}}}},computed:{data:{set:function(e){this.$emit("update:item",e)},get:function(){return this.item}}},watch:{"item.selected":function(e){this.item.checkboxStatus=this.getStatus(),this.setLabelBackgroundColor(e)},viewStyle:{handler:function(){this.setLabelBackgroundColor(this.item.selected),this.initFR()},deepth:!0},padding:function(e){this.$set(this.style.label,"paddingLeft",10+this.deepth*e+"px")}},beforeCreate:function(){for(var e=this.$parent;e;){if(e.$options.name&&"FvTreeViewItem"===e.$options.name)return void(this.parent=e);e=e.$parent}},mounted:function(){var e=this;this.item.selected||this.$set(this.item,"selected",!1),this.item.expanded||this.$set(this.item,"expanded",!1),this.$set(this.item,"checkboxStatus",this.getStatus()),this.initEvent(),this.$nextTick((function(){e.initFR(),e.initStyle()}))},methods:{initFR:function(){var e=this.revealEffectClass.length?"."+this.revealEffectClass[0]:"";n.FluentRevealEffect.applyEffect(".fv-TreeView__label-border"+e,{lightColor:this.hoverColor(this.viewStyle.backgroundColor||"#000",.3,1).alpha(.6).cssa(),gradientSize:120})},initStyle:function(){this.$set(this.style.label,"backgroundColor",this.viewStyle.backgroundColor||"#fff")},initEvent:function(){for(var e in this.event){var t=this.event[e];for(var i in t)this.$refs[e].addEventListener(i,t[i])}},DestroyEvent:function(){for(var e in this.event){var t=this.event[e];for(var i in t)this.$refs[e].removeEventListener(i,t[i])}},hoverColor:function(e,t,i){var n=c()(e);return n.isLight()?n.lightness(t):n.lightness(+(i||t))},click:function(e){e.target!==this.$refs.expanded&&this.select(!0^this.item.selected)},getStatus:function(){var e=0;if(!this.item.children||!this.item.children.length)return this.item.selected?"checked":null;var t=this.item.children;for(var i in t){var n=t[i];if(n.selected&&e++,"Indeterminate"===n.checkboxStatus)return"Indeterminate"}return t&&e===t.length?"checked":e>0?"Indeterminate":null},selectAll:function(e,t){for(var i in e.children){var n=e.children[i];this.selectAll(n,t)}e.selected=t},updateSelect:function(){this.item.checkboxStatus=this.getStatus(),"checked"===this.item.checkboxStatus?this.item.selected=!0:this.item.selected=!1,this.parent&&this.parent.updateSelect()},select:function(e){this.checkable?(this.selectAll(this.item,e),this.updateSelect()):this.item.selected^=!0},setLabelBackgroundColor:function(e){e?this.$set(this.style.label,"backgroundColor",this.hoverColor(this.viewStyle.backgroundColor||"#fff",.8,.2).cssa()):this.$set(this.style.label,"backgroundColor",this.viewStyle.backgroundColor||"#fff")},clickItem:function(e){this.$emit("click",e)},updateParent:function(){for(var e=this.$parent;e;){if(e.$options.name&&"FvTreeViewItem"===e.$options.name)return void(this.parent=e);e=e.$parent}}},beforeDestroy:function(){this.DestroyEvent()}},u=Object(h.a)(f,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"fv-TreeView__item"},[i("div",{staticClass:"fv-TreeView__label-border",class:e.revealEffectClass},[i("div",{ref:"label",staticClass:"fv-TreeView__label",class:e.revealEffectClass,style:e.style.label,on:{click:function(t){!e.checkable&&e.click(t)},mousedown:function(t){return e.clickItem(e.item)}}},[e.checkable?i("checkbox",{attrs:{status:e.item.checkboxStatus},on:{click:function(t){e.checkable&&e.click(t)}}}):e._e(),e._v(" "),e.item.children&&e.item.children.length?i("i",{ref:"expanded",staticClass:"ms-Icon",class:["ms-Icon--"+(e.item.expanded?"ChevronDown":"ChevronRight")+"Med"],on:{click:function(t){e.item.expanded^=!0}}}):i("i",{staticStyle:{width:"12px"}}),e._v(" "),e.item.icon?[/^ms\-Icon/.test(e.item.icon)?i("i",{staticClass:"ms-Icon fv-TreeView__icon",class:[e.item.icon]}):i("img",{staticClass:"fv-TreeView__icon",attrs:{src:e.item.icon}})]:e._e(),e._v(" "),i("span",{staticClass:"fv-TreeView__text"},[e._v(e._s(e.item.label))])],2)]),e._v(" "),e.item.children?i("tree-content",{directives:[{name:"show",rawName:"v-show",value:e.item.expanded,expression:"item.expanded"}],ref:"content",attrs:{children:e.item.children,deepth:e.deepth,viewStyle:e.viewStyle,checkable:e.checkable,padding:e.padding,draggable:e.draggable},on:{click:e.clickItem}}):e._e()],1)}),[],!1,null,null,null);t.default=u.exports}}]);