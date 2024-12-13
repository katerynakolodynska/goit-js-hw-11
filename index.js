import{S as u,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(r){if(r.ep)return;r.ep=!0;const e=o(r);fetch(r.href,e)}})();let a;function f(t){t.insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function i(){const t=document.querySelector(".loader");t&&t.remove()}function d(t){const s=document.querySelector(".gallery"),o=t.map(n=>`
      <a href="${n.largeImageURL}" class="gallery-link">
        <img class="img-gallery"
          src="${n.webformatURL}"
          alt="${n.tags}" 
          loading="lazy" />

        <ul class="list-wrapper">
          <li class="text-content"><b>Likes:</b> ${n.likes}</li>
          <li class="text-content"><b>Views:</b> ${n.views}</li>
          <li class="text-content"><b>Comments:</b> ${n.comments}</li>
          <li class="text-content"><b>Downloads:</b> ${n.downloads}</li>
        </ul>
        
      </a>
  `).join("");s.innerHTML=o,a?a.refresh():a=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function m(){const t=document.querySelector(".gallery");t.innerHTML=""}function h(t){c.info({title:"Info",message:t,backgroundColor:"red"})}async function y(t){const s="https://pixabay.com/api/",o="47525205-faccd6d0438e1a7a5e4c149e6",n=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}),r=`${s}?${n.toString()}`;return fetch(r).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>(console.log(e),e)).catch(e=>{throw console.error("There was an error with the fetch operation:",e),e})}const g=document.querySelector(".search-form"),p=document.querySelector("input"),b=document.querySelector(".gallery");g.addEventListener("submit",t=>{t.preventDefault();const s=p.value.trim();if(!s){c.error({title:"Error",message:"Please enter a search query.",backgroundColor:"red"});return}m(),f(b),y(s).then(o=>{if(i(),!o||o.hits.length===0){h("Sorry, there are no images matching your search query. Please try again!");return}d(o.hits)}).catch(o=>{console.error("Error fetching images:",o),c.error({title:"Error",message:`Error: ${o.message}`})}).finally(()=>{i()})});
//# sourceMappingURL=index.js.map
