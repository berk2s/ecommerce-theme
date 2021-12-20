(()=>{"use strict";const t=function(t=0,e=24,n="createdAt",i="asc",a=""){return fetch(`https://talent-product-api.herokuapp.com/products?page=${t}&size=${e}&sort=${n}&order=${i}&search=${a}`,{method:"GET"})};String.prototype.format=function(){var t=arguments;return this.replace(/\{(\d+)\}/g,(function(){return t[arguments[1]]}))};const e=function(t,e,n=null){const i=document.querySelector(t);if(!t||!i)throw new Error("Invalid target element id");if(!Array.isArray(e))throw new Error("Invalid type of products");e.forEach((t=>{const{id:e,productImages:a,productName:s,listingPrice:r,salePrice:c}=t,o='<div class="card-content">\n                            <div class="image-area">\n                                <img src="{0}" />\n                            </div>\n\n                            <div class="review-area">\n                                <div class="star-list">\n                                    <i class="bi bi-star-fill"></i>\n                                    <i class="bi bi-star-fill"></i>\n                                    <i class="bi bi-star-fill"></i>\n                                    <i class="bi bi-star-half"></i>\n                                    <i class="bi bi-star"></i>\n                                    <span class="review-text">(4)</span>\n\n                                </div>\n\n                            </div>\n\n                            <div class="info-area">\n                                <h4 class="product-name-text">\n                                    {1}\n                                </h4>\n\n                                <div class="price-area">\n                                    <span class="old-price-text">${2}</span>\n                                    <span class="current-price-text">${3}</span>\n                                </div>\n                            </div>\n                        </div>'.format(a[0],s,r,c),l=document.createElement("div");l.setAttribute("data-item-id",e),l.classList.add("item-card"),l.innerHTML=o,n&&n.trim().length>0&&l.classList.add(n),i.appendChild(l)}))};function n(t){const e=function(t,e){for(let e=0;e<t.path.length;e++){const n=t.path[e];if(n.attributes)for(let t=0;t<n.attributes.length;t++)if("data-actionable-index"===n.attributes[t].name)return n.attributes[t].value}}(t);console.log(e),i(e)}function i(t){const e=a();if(0===e.length)throw new Error("There is no any slider image, please add images into slider");for(let t=0;t<e.length;t++)e[t].style.display="none";e[t].style.display="block",function(t){const e=parseInt(t),n=a().length-1,i=document.querySelector(".js-slider-action-prev-btn"),s=document.querySelector(".js-slider-action-next-btn");i.setAttribute("data-actionable-index",0===e?n:e-1),s.setAttribute("data-actionable-index",e===n?0:e+1)}(t)}function a(){return document.getElementsByClassName("js-slider-image")}window.onload=function(){document.querySelector(".js-slider-container")&&(i(0),document.querySelector(".js-slider-action-prev-btn").addEventListener("click",n),document.querySelector(".js-slider-action-next-btn").addEventListener("click",n)),async function(){try{const n=await t(0,6),i=await t(0,18),a=await n.json(),s=await i.json();e(".js-new-products-list",a.content,"col-lg-2"),e(".js-featured-product-list",s.content,"col-lg-2")}catch(t){console.log(t),alert("Sorry, something went wrong!")}}()}})();