var go=TweenMax.to("#cm2",1,{left:0}),go_rt=TweenMax.to("#rt2",1,{y:1200}),go_lb=TweenMax.to("#lb2",1,{y:-1e3}),gone=TweenMax.to("#cm1",1,{left:1200}),gone_rt=TweenMax.to("#rt1",1,{y:1200}),gone_lb=TweenMax.to("#lb1",1,{y:-1200}),controller=new ScrollMagic.Controller,go_scene=new ScrollMagic.Scene({triggerElement:"#trigger"}).setTween(go),golb_scene=new ScrollMagic.Scene({triggerElement:"#trigger"}).setTween(go_lb),gort_scene=new ScrollMagic.Scene({triggerElement:"#trigger"}).setTween(go_rt),gone_scene=new ScrollMagic.Scene({triggerElement:"#trigger"}).setTween(gone),gonert_scene=new ScrollMagic.Scene({triggerElement:"#trigger"}).setTween(gone_rt),gonelb_scene=new ScrollMagic.Scene({triggerElement:"#trigger"}).setTween(gone_lb);controller.addScene([go_scene,gort_scene,golb_scene,gone_scene,gonelb_scene,gonert_scene]);