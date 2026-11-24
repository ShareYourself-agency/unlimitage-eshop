(function(){
var P=[['7567','Hermès','Birkin 35 Blue Electric','329 000 Kč'],['3824','Chanel','Classic Medium Double Flap','160 000 Kč'],['4096','Christian Dior','Lady Dior Python','95 000 Kč'],['5330','Christian Dior','Mini Lady Dior Embroidery','85 000 Kč'],['4172','Chanel','Chevron Quilted Flap Red','72 000 Kč'],['4484','Celine','Classic Box Lizard','57 500 Kč'],['3843','Chanel','Wallet on Chain','39 900 Kč'],['6755','Fendi','Mini Peekaboo','37 000 Kč'],['4031','Gucci','GG Marmont Chevron','32 500 Kč'],['4061','Gucci','GG Marmont','28 500 Kč'],['6490','Louis Vuitton','Alma GM Multicolore','24 500 Kč'],['6767','Louis Vuitton','Pochette Voyage MM','19 000 Kč'],['6990','Louis Vuitton','Mini Pochette','12 500 Kč']];
function card(p){return '<a class="pc rv" href="maison-produkt.html"><div class="ph"><img loading="lazy" src="img/c-'+p[0]+'.webp" alt="'+p[1]+' '+p[2]+'"><span class="go sn">Zobrazit detail</span></div><h3>'+p[1]+'</h3><span class="n">'+p[2]+'</span><em>'+p[3]+'</em></a>'}
document.querySelectorAll('[data-products]').forEach(function(el){
  var n=+el.dataset.products,skip=el.dataset.skip||'',ids=el.dataset.ids?el.dataset.ids.split(','):null,list=ids?ids.map(function(i){return P.filter(function(p){return p[0]===i})[0]}):P.filter(function(p){return p[0]!==skip}).slice(0,n);
  var h=list.map(card).join('');
  if(el.dataset.cta)h+='<a class="pc cta rv" href="maison-kategorie.html"><div class="ph"><b>'+el.dataset.cta+'</b><i>→</i></div><h3>Celá kolekce</h3><span class="n">Kabelky, hodinky, šperky</span></a>';
  el.innerHTML=h;
});
var bar=document.getElementById('bar');
if(bar){var th=+bar.dataset.at||140;var sc=function(){bar.classList.toggle('on',scrollY>th)};addEventListener('scroll',sc,{passive:true});sc()}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('.rv,.ln').forEach(function(el){
  var sib=[].slice.call(el.parentNode.children).filter(function(c){return c.classList.contains('rv')||c.classList.contains('ln')});
  el.style.transitionDelay=(sib.indexOf(el)%4)*110+'ms';io.observe(el)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);
  var el=e.target,to=parseFloat(el.dataset.count),dec=(el.dataset.count.split('.')[1]||'').length,pre=el.dataset.pre||'',suf=el.dataset.suf||'',t0=performance.now(),D=1600;
  (function f(t){var k=Math.min(1,(t-t0)/D);k=1-Math.pow(1-k,3);el.textContent=pre+(to*k).toFixed(dec).replace('.',',')+suf;if(k<1)requestAnimationFrame(f)})(t0)})},{threshold:.5});
document.querySelectorAll('[data-count]').forEach(function(el){co.observe(el)});
document.querySelectorAll('.acc button').forEach(function(b){b.addEventListener('click',function(){var a=b.parentNode,o=a.classList.toggle('on');a.querySelector('.bd').style.maxHeight=o?a.querySelector('.bd').scrollHeight+'px':'0'})});
document.querySelectorAll('.acc.on .bd').forEach(function(b){b.style.maxHeight=b.scrollHeight+'px'});
})();
