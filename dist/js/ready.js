function docReady(){if($(".home-image-text")[0]&&setTimeout((function(){$((function(){var t=$(".home-image-text");t.animate({opacity:1},2e3),t.css("opacity",1);var i=t.text().split("");t.text(""),$.each(i,(function(i,e){var a=$("<span/>").text(e).css({opacity:0});a.appendTo(t),a.delay(30*i),a.animate({opacity:1},500)}))}))}),100),$("nav a.nav-link:not(.dropdown-toggle)").click((function(){window.location.href=$(this).attr("destination")})),$(".image-credit").mouseenter((function(){var t='[img-id="'+$(this).parent().parents().attr("img-id")+'"]',i=$(t+" .photo-icon").position().left-6,e=$(t+" .image-title");e.offset({left:i}),e.show()})),$(".image-credit").mouseleave((function(){var t=$(this).parent().parents().attr("img-id");$('[img-id="'+t+'"]'+" .image-title").hide()})),$(".person-desc").each((function(){$(this).html($.parseHTML($(this).text()))})),$(".gdoc-html-container")[0]&&($("a[href*='%3']").each((function(){var t=this.href.replace("%3","=");$(this).attr("href",t)})),$("[id*='h.']").each((function(){var t=$(this).attr("id"),i=$(this).text().replace(/\s+/g,"-").toLowerCase();$("[id*='"+t+"']").attr("id",i),$("a[href^='#"+t+"']").each((function(){$(this).attr("href","#"+i)}))}))),$(".british-antislavery-container")[0]){["victims","institution","advocacy","society"].forEach((function(t){var i=1;$("a[href^='#"+t+"']").each((function(){$(this).attr("href")=="#"+t&&($(this).attr("href","#"+t+i),i+=1)}));var e=1;$("h3#"+t).each((function(){$(this).attr("id")==t&&($(this).attr("id",t+e),e+=1)}))}))}if($(".how-is-SI-research-different-container")[0]&&$("ol[class*='lst-kix_'][class*='-1']+ol[class*='lst-kix_'][class*='-0']").prop("start",2),$("a[href^='#'], a[id^=ftnt]").click((function(){if(window.scroll)var t=$(window).scrollTop(),i=setInterval((function(){var e=$(window).scrollTop();t!==e&&($(window).scrollTop(e-62),clearInterval(i))}),10)})),$(document).on("iframeinputfocus",(function(t,i){resizeIframe($("iframe."+i)[0])})),$(".podcast-episode-container")[0]){let t=$(".podcast-episode-writeup p:first-of-type span");t.text(t.text().replace(".",""))}}function elementSizing(){if($(".gdoc-html-container:not(.animal-farming-attitudes-survey-2017-container) table tbody tr").each((function(){var t=$(this).children("td").length;$(this).children("td").css("width","calc(100%/"+t+")")})),$(".animal-farming-attitudes-survey-2017-container img").each((function(){$(this).parent().css("width","auto"),$(this).parent().css("height","auto")})),$(".research-list-container")[0]){var t=$(".tech-studies-list .research-item-container");$(t).each((function(){var t=$(this).find(".research-item").height();$(this).children(".research-item-abstract").css("height","calc(100% - 15px - "+t+"px )")}))}}$(document).ready((function(){docReady(),elementSizing()})),$(window).resize((function(){elementSizing()}));