(function(b,c){var d=b.documentElement,resizeEvt='orientationchange'in window?'orientationchange':'resize',recalc=function(){var a=d.clientWidth;if(!a)return;if(a>=640){d.style.fontSize='100px'}else{d.style.fontSize=100*(a/750)+'px'}};if(!b.addEventListener)return;c.addEventListener(resizeEvt,recalc,false);b.addEventListener('DOMContentLoaded',recalc,false);console.log(d)})(document,window);