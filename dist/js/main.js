(()=>{"use strict";const e=e=>{const t=document.querySelector(".cards");t.innerHTML="",console.log(e),0==e.length?t.textContent="no information about Heroes":e.forEach((e=>{const s=document.createElement("div"),n=document.createElement("div"),o=document.createElement("img"),c=document.createElement("h3"),a=document.createElement("div");s.classList.add("col-lg-4","col-md-6","col-sm-6","mb-3"),n.classList.add("cards__item"),Object.assign(o,{src:`db/${e.photo}`,className:"img-fluid rounded-top cards__item__img",alt:"marvel heroes img"}),c.classList.add("cards__item__tittle"),a.classList.add("cards__item__descr"),c.textContent=`${e.name}`,Object.entries(e).forEach((([e,t])=>{"photo"!==e&&"movies"!==e&&a.insertAdjacentHTML("beforeend",`\n            <span class="cards__item__desc__span">${e}: <strong>${t}</strong></span>\n            `)})),n.append(o),n.append(c),n.append(a),s.append(n),t.append(s)}))};(()=>{const t=(e,t)=>{const s=document.getElementById(e);t.forEach((e=>{s.insertAdjacentHTML("beforeend",`\n            <option value="${e}">${e}</option>\n            `)}))};fetch("./db/dbHeroes.json").then((e=>e.json())).then((s=>{const n=new Set,o=new Set,c=new Set;s.forEach((e=>{e.species&&n.add(e.species),e.status&&c.add(e.status),e.movies&&e.movies.forEach((e=>o.add(e)))})),t("species",n),t("movies",o),t("status",c),e(s)})).catch((e=>console.log(e.message)))})(),(()=>{const t=document.getElementById("sort");t.addEventListener("change",(()=>{const s=t.querySelectorAll("select");fetch("./db/dbHeroes.json").then((e=>e.json())).catch((e=>console.log(e.message))).then((t=>{let n=t.slice();s.forEach((e=>{if("noselected"!==e.value){const t=e.id,s=e.value;return"movies"===t&&(n=((e,t)=>e.filter((e=>{if(e.movies)return e.movies.includes(t)})))(n,s)),"movies"!==t&&(n=((e,t,s)=>e.filter((e=>{if(e[t])return e[t]===s})))(n,t,s)),n}})),e(n)}))}))})()})();