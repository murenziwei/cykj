Vue&&(function(lw){
	//	页面倒退组件
	lw.component('lw-back',{
		props:['backV'],
		template:`<div class='nav-back'>
		<a onclick="window.history.go(-1)" class='nb-link'><img src='../../img/left-cut.png' class='nl-icon' /></a>
		<span class='nb-text'>{{backV}}</span>
		</div>`
	})
})(Vue)
