(function(a){a.fn.menu=function(){return this.each(function(){var d=0,e=0;null!=navigator.userAgent.match(/iPad/i)&&(e=2);a(this).children("ul").children("li").wrapInner("<div class='omm_menuitem'></div>").children("div").unwrap().unwrap();a(this).find("ul").addClass("omm_ul").wrap("<div class='omm_submenu'></div>");a(this).find("li").addClass("omm_li").each(function(){var b=a(this);0<a(this).children("a").length&&(b=a(this).children("a:first"));b.wrapInner("<div class='omm_submenuitem'></div>")});a(this).find(".omm_menuitem").on("mouseenter touchstart",function(){a(this).addClass("omm_menuitem_hover").removeClass("omm_menuitem_normal");var b=a(".omm_submenu").width()+a(this).position().left,c=a(this).position().left;d=c;b>a(window).width()&&(c-=b-a(window).width());a(this).children(".omm_submenu").css({top:a(this).position().top+a(this).outerHeight()+e,left:c}).fadeIn()}).on("mouseleave touchmove",function(){a(this).addClass("omm_menuitem_normal").removeClass("omm_menuitem_hover");a(this).children(".omm_submenu").stop(!0,!0).hide()});a(this).find(".omm_submenuitem").on("mouseenter touchstart",function(){a(this).addClass("omm_submenuitem_hover").removeClass("omm_submenuitem_normal");var b=0;d+2*(a(this).position().left+a(this).outerWidth())>a(window).width()&&(b=a(".omm_submenu").width());a(this).find(".omm_submenu:first").css({top:a(this).position().top,left:a(this).position().left+a(this).outerWidth()-2*b}).fadeIn()}).on("mouseleave touchmove",function(){a(this).addClass("omm_submenuitem_normal").removeClass("omm_submenuitem_hover");a(this).find(".omm_submenu:first").stop(!0,!0).hide()})})}})(jQuery);