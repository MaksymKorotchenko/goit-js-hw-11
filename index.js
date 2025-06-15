import{a as d,S as u,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(a){const r=new URLSearchParams({key:"50854630-6377197e49f9883f109b83eb2",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get("https://pixabay.com/api/",{params:r}).then(s=>s.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const r=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:p,downloads:f})=>`<li class="gallery-item">
            <a class="gallery-link" href="${o}">
                <img
                    class="gallery-image"
                    src="${s}"
                    alt="${e}"/>
            </a>
            <div class="info-wrapper">
                <div class="attr-wrapper">
                    <span class="title">Likes</span>
                    <span class="text">${t}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Views</span>
                    <span class="text">${i}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Comments</span>
                    <span class="text">${p}</span>
                </div>    
                <div class="attr-wrapper">
                    <span class="title">Downloads</span>
                    <span class="text">${f}</span>
                </div>
            </div>        
        </li>`).join("");l.insertAdjacentHTML("afterbegin",r),g.refresh()}function y(){l.innerHTML=""}function v(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(r===""){n.error({message:"Please, fill in the field",color:"#ef4040",messageColor:"#fff",position:"topRight"});return}y(),v(),m(r).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",messageColor:"#fff",position:"topRight"});return}h(s.hits)}).catch(s=>n.error({message:`${s}`})).finally(()=>L())});
//# sourceMappingURL=index.js.map
