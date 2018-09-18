		var go = TweenMax.to('#cm2', 1, {
  left: 0  
});

var go_rt = TweenMax.to('#rt2', 1, {
  y: 1200
});

var go_lb = TweenMax.to('#lb2', 1, {
  y: -1000 
});
 var gone = TweenMax.to('#cm1', 1, {
	 left: 1200
 })
  var gone_rt = TweenMax.to('#rt1', 1, {
	 y: 1200
 })
	  var gone_lb = TweenMax.to('#lb1', 1, {
	 y: -1200
 })


var controller = new ScrollMagic.Controller();



var go_scene = new ScrollMagic.Scene({
  triggerElement: '#trigger'
})
.setTween(go);

var golb_scene = new ScrollMagic.Scene({
  triggerElement: '#trigger'
})
.setTween(go_lb);

var gort_scene = new ScrollMagic.Scene({
  triggerElement: '#trigger'
})
.setTween(go_rt);
		
		var gone_scene = new ScrollMagic.Scene({
  triggerElement: '#trigger'
})
.setTween(gone);
				var gonert_scene = new ScrollMagic.Scene({
  triggerElement: '#trigger'
})
.setTween(gone_rt);
				var gonelb_scene = new ScrollMagic.Scene({
  triggerElement: '#trigger'
})
.setTween(gone_lb);


controller.addScene([
  go_scene,
  gort_scene,
  golb_scene,
	gone_scene,
	gonelb_scene,
	gonert_scene
]);