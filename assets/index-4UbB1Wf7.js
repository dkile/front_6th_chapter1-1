var e=function(exports){function t(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function n(e,n,r){return e.set(t(e,n),r),r}function r(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function i(e,t,n){r(e,t),t.set(e,n)}function a(e,t){r(e,t),t.add(e)}function o(e,n){return e.get(t(e,n))}return exports.assertClassBrand=t,exports.classPrivateFieldGet2=o,exports.classPrivateFieldInitSpec=i,exports.classPrivateFieldSet2=n,exports.classPrivateMethodInitSpec=a,exports}({}),t,n,r,i;(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const a=`modulepreload`,o=function(e){return`/`+e},s={},c=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},i=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);r=e(t.map(e=>{if(e=o(e,n),e in s)return;s[e]=!0;let t=e.endsWith(`.css`),r=t?`[rel="stylesheet"]`:``,c=!!n;if(c)for(let n=i.length-1;n>=0;n--){let r=i[n];if(r.href===e&&(!t||r.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${e}"]${r}`))return;let u=document.createElement(`link`);if(u.rel=t?`stylesheet`:a,t||(u.as=`script`),u.crossOrigin=``,u.href=e,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),t)return new Promise((t,n)=>{u.addEventListener(`load`,t),u.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${e}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[]){if(e.status!==`rejected`)continue;i(e.reason)}return e().catch(i)})};function l(){return`
  ${u}
  `}const u=`
    <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
          </filter>
        </defs>
        
        <!-- 404 Numbers -->
        <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
        
        <!-- Icon decoration -->
        <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        
        <!-- Message -->
        <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
        
        <!-- Subtle bottom accent -->
        <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
      </svg>
      
      <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
    </div>
    </main>
  `;var d=l;async function f(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function p(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function m(){let e=await fetch(`/api/categories`);return await e.json()}function h(){return`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `}var g=h;function _({loading:e=!1}){return e?v():`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
          </div>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
              <span
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
              >
                1
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  `}function v(){return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
          </div>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  `}var y=_;function b({children:e}){return`
    <div class="min-h-screen bg-gray-50">
      ${y({loading:!0})}
      <main id="product-detail-content" class="max-w-md mx-auto px-4 py-4">${e}</main>
      ${g()}
    </div>
  `}var ee=b;function x({to:e,as:t=`a`,children:n}){let r=document.createElement(t);return r.href=e,r.addEventListener(`click`,t=>{t.preventDefault(),$.navigate(e)}),typeof n==`string`?r.innerHTML=n:n instanceof Node&&r.appendChild(n),r}var S=x;function te({id:e=``,tag:t=`ul`,list:n,renderItem:r,className:i=``}){let a=document.createElement(t);return a.setAttribute(`class`,i),a.setAttribute(`id`,e),n.forEach(e=>{let t=document.createElement(`li`),n=r(e);n instanceof Node?t.appendChild(n):t.innerHTML=n,a.appendChild(t)}),a}var C=te;function ne({relatedProductList:e}){return re({products:e})}function re({products:e}){let t=()=>{let e=document.createElement(`div`);return e.className=`bg-white rounded-lg shadow-sm`,e},n=()=>{let e=document.createElement(`div`);return e.className=`p-4 border-b border-gray-200`,e.innerHTML=`
      <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
      <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
    `,e},r=()=>{let t=document.createElement(`div`);return t.className=`p-4`,t.appendChild(C({list:e,renderItem:e=>S({to:`/product/${e.productId}`,children:`
              <div
                class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer"
                data-product-id="${e.productId}"
              >
                <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                  <img
                    src="${e.image}"
                    alt="${e.title}"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
                <p class="text-sm font-bold text-blue-600">${Number.parseInt(e.lprice).toLocaleString()}원</p>
              </div>
            `}),className:`grid grid-cols-2 gap-3 responsive-grid`})),t},i=t();return i.appendChild(n()),i.appendChild(r()),i}var ie=ne;function ae(){let e=(e,n)=>{let r=crypto.randomUUID(),i=document.createElement(`div`);i.classList.add(`fixed`,`bottom-4`,`left-1/2`,`-translate-x-1/2`,`z-50`),i.id=r,i.innerHTML=t(e,n),document.body.appendChild(i);let a=document.getElementById(`toast-close-btn`);a.addEventListener(`click`,()=>{i.remove()}),setTimeout(()=>{i.remove()},3e3)},t=(e,t)=>{switch(e){case`success`:return oe(t);case`info`:return se(t);case`error`:return w(t);default:return``}};return{show:e}}const oe=e=>`
  <div class="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <p class="text-sm font-medium">${e}</p>
    <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>
`,se=e=>`
  <div class="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <p class="text-sm font-medium">${e}</p>
    <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>
`,w=e=>`
  <div class="bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <p class="text-sm font-medium">${e}</p>
    <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>
`;var T=ae;function E({product:e,loading:t=!0}){if(t)return`
      <div class="py-20 bg-gray-50 flex items-center justify-center">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600">상품 정보를 불러오는 중...</p>
        </div>
      </div>
    `;let n=T(),r=t=>{var n;let r=JSON.parse(window.localStorage.getItem(`cart`)||`{}`),i={...r,[e.productId]:{...e,quantity:(n=r[e.productId])?.quantity+t||t}};window.localStorage.setItem(`cart`,JSON.stringify(i))};queueMicrotask(()=>{let e=document.getElementById(`add-to-cart-btn`);e.addEventListener(`click`,e=>{e.preventDefault(),r(Number(document.getElementById(`quantity-input`).value)),n.show(`success`,`장바구니에 추가되었습니다`)})}),queueMicrotask(()=>{let e=document.getElementById(`go-to-product-list-btn`);e.addEventListener(`click`,e=>{e.preventDefault(),$.navigate(`/`,{replace:!0})})}),queueMicrotask(()=>{let e=document.getElementById(`quantity-increase`);e.addEventListener(`click`,e=>{e.preventDefault();let t=document.getElementById(`quantity-input`);t.value=Number(t.value)+1})}),queueMicrotask(()=>{let e=document.getElementById(`quantity-decrease`);e.addEventListener(`click`,e=>{e.preventDefault();let t=document.getElementById(`quantity-input`);t.value=Math.max(Number(t.value)-1,1)})});let i=crypto.randomUUID(),a=async()=>{let t=await f({category1:e.category1,category2:e.category2}),n=document.getElementById(i);n.replaceWith(ie({relatedProductList:t.products.filter(t=>t.productId!==e.productId)}))};return a(),`
    <!-- 브레드크럼 -->
    <nav class="mb-4">
      <div class="flex items-center space-x-2 text-sm text-gray-600">
        <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <button class="breadcrumb-link" data-category1=${e.category1}>${e.category1}</button>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <button class="breadcrumb-link" data-category2=${e.category2}>${e.category2}</button>
      </div>
    </nav>
    <!-- 상품 상세 정보 -->
    <div class="bg-white rounded-lg shadow-sm mb-6">
      <!-- 상품 이미지 -->
      <div class="p-4">
        <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img src=${e.image} alt="${e.title}" class="w-full h-full object-cover product-detail-image" />
        </div>
        <!-- 상품 정보 -->
        <div>
          <p class="text-sm text-gray-600 mb-1">${e.brand}</p>
          <h1 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h1>
          <!-- 평점 및 리뷰 -->
          <div class="flex items-center mb-3">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
            </div>
            <span class="ml-2 text-sm text-gray-600"
              >${Number.parseFloat(e.rating).toFixed(1)} (${e.reviewCount}개 리뷰)</span
            >
          </div>
          <!-- 가격 -->
          <div class="mb-4">
            <span class="text-2xl font-bold text-blue-600">${Number.parseInt(e.lprice).toLocaleString()}원</span>
          </div>
          <!-- 재고 -->
          <div class="text-sm text-gray-600 mb-4">재고 ${e.stock}개</div>
          <!-- 설명 -->
          <div class="text-sm text-gray-700 leading-relaxed mb-6">${e.description}</div>
        </div>
      </div>
      <!-- 수량 선택 및 액션 -->
      <div class="border-t border-gray-200 p-4">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-gray-900">수량</span>
          <div class="flex items-center">
            <button
              id="quantity-decrease"
              class="w-8 h-8 flex items-center justify-center border border-gray-300 
             rounded-l-md bg-gray-50 hover:bg-gray-100"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
              </svg>
            </button>
            <input
              type="number"
              id="quantity-input"
              value="1"
              min="1"
              max=${e.stock}
              class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
            focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              id="quantity-increase"
              class="w-8 h-8 flex items-center justify-center border border-gray-300 
             rounded-r-md bg-gray-50 hover:bg-gray-100"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- 액션 버튼 -->
        <button
          id="add-to-cart-btn"
          data-product-id=${e.productId}
          class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
           hover:bg-blue-700 transition-colors font-medium"
        >
          장바구니 담기
        </button>
      </div>
    </div>
    <!-- 상품 목록으로 이동 -->
    <div class="mb-6">
      <button
        id="go-to-product-list-btn"
        class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
      hover:bg-gray-200 transition-colors go-to-product-list"
      >
        상품 목록으로 돌아가기
      </button>
    </div>
    <!-- 관련 상품 -->
    <div id="${i}"></div>
  `}var D=E;function O(){let{productId:e}=$.getParams({path:`/product/:productId`}),t=({product:e})=>{let t=document.getElementById(`product-detail-content`);t.innerHTML=D({product:e,loading:!1})},n=async e=>{try{let n=await p(e);t({product:n})}catch(e){console.error(`상품 데이터를 가져오는 중 오류가 발생했습니다:`,e)}};return n(e),ee({children:D({loading:!0}),loading:!0})}var k=O;function A({loading:e=!1,categories:t={},selectedCategory1:n,selectedCategory2:r}){return e?j():M({categories:t,selectedCategory1:n,selectedCategory2:r})}function j(){return`
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <label class="text-sm text-gray-600">카테고리:</label>
        <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
      </div>
      <div class="flex flex-wrap gap-2">
        <div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>
      </div>
    </div>
  `}function M({categories:e,selectedCategory1:t,selectedCategory2:n}){let r=[`전체`];t&&r.push(t),n&&r.push(n);let i=r.map((e,t)=>t===0?`<button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">${e}</button>`:t===r.length-1?`<span class="text-xs text-gray-700">${e}</span>`:`<button data-breadcrumb="category1" data-category1="${e}" class="text-xs hover:text-blue-800 hover:underline">${e}</button>`).join(`<span class="text-xs text-gray-500">&gt;</span>`),a=``;if(n)a=``;else if(t){let n=Object.keys(e[t]||{});a=n.map(e=>`
      <button
        data-category1="${t}"
        data-category2="${e}"
        class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        ${e}
      </button>
    `).join(``)}else{let t=Object.keys(e);a=t.map(e=>`
      <button
        data-category1="${e}"
        class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        ${e}
      </button>
    `).join(``)}return`
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <label class="text-sm text-gray-600">카테고리:</label>
        ${i}
      </div>
      ${a?`<div class="flex flex-wrap gap-2">${a}</div>`:``}
    </div>
  `}var N=A;function P(){return setTimeout(()=>{let e=document.querySelector(`#limit-select`);if(!e)return;let t=$.getSearchParams().limit||`20`;e.value=t;let n=$.subscribeSearchParams(`limit`,t=>{e.value=t||`20`}),r=e=>{let t=e.target.value;$.updateSearchParams({limit:t,page:1})};e.addEventListener(`change`,r),window.limitSelectCleanup||(window.limitSelectCleanup=[]),window.limitSelectCleanup.push(()=>{n(),e.removeEventListener(`change`,r)})},0),`
    <div class="flex items-center gap-2">
      <label class="text-sm text-gray-600">개수:</label>
      <select
        id="limit-select"
        class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="10">10개</option>
        <option value="20" selected="">20개</option>
        <option value="50">50개</option>
        <option value="100">100개</option>
      </select>
    </div>
  `}var F=P;function I(){return setTimeout(()=>{let e=document.querySelector(`#search-input`);if(!e)return;let t=$.getSearchParams().search||``;e.value=t;let n=$.subscribeSearchParams(`search`,t=>{e.value=t||``}),r=e=>{if(e.key===`Enter`){let t=e.target.value.trim();$.updateSearchParams({search:t||null,page:1})}};e.addEventListener(`keypress`,r),window.searchBarCleanup||(window.searchBarCleanup=[]),window.searchBarCleanup.push(()=>{n(),e.removeEventListener(`keypress`,r)})},0),`
    <div class="mb-4">
      <div class="relative">
        <input
          type="text"
          id="search-input"
          placeholder="상품명을 검색해보세요..."
          value=""
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  `}var L=I;function R(){return setTimeout(()=>{let e=document.querySelector(`#sort-select`);if(!e)return;let t=$.getSearchParams().sort||`price_asc`;e.value=t;let n=$.subscribeSearchParams(`sort`,t=>{e.value=t||`price_asc`}),r=e=>{let t=e.target.value;$.updateSearchParams({sort:t,page:1})};e.addEventListener(`change`,r),window.sortSelectCleanup||(window.sortSelectCleanup=[]),window.sortSelectCleanup.push(()=>{n(),e.removeEventListener(`change`,r)})},0),`
    <div class="flex items-center gap-2">
      <label class="text-sm text-gray-600">정렬:</label>
      <select
        id="sort-select"
        class="text-sm border border-gray-300 rounded px-2 py-1
               focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="price_asc" selected="">가격 낮은순</option>
        <option value="price_desc">가격 높은순</option>
        <option value="name_asc">이름순</option>
        <option value="name_desc">이름 역순</option>
      </select>
    </div>
  `}var z=R;function B({loading:e=!1,categories:t={},selectedCategory1:n,selectedCategory2:r,onCategorySelect:i,onBreadcrumbClick:a}){return`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      ${L()}
      <div class="space-y-3">
        ${N({loading:e,categories:t,selectedCategory1:n,selectedCategory2:r,onCategorySelect:i,onBreadcrumbClick:a})}
        <div class="flex gap-2 items-center justify-between">${F()} ${z()}</div>
      </div>
    </div>
  `}var V=B;function H({loading:e=!1}){return e?` <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900">
            <a href="/" data-link="">쇼핑몰</a>
          </h1>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>`:`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900">
            <a href="/" data-link="">쇼핑몰</a>
          </h1>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  `}var U=H;function ce({children:e}){return`
    <div class="min-h-screen bg-gray-50">
      ${U({loading:!1})}
      <main class="max-w-md mx-auto px-4 py-4">${e}</main>
      ${g()}
    </div>
  `}var W=ce;function G({loading:e=!1,product:t}){if(e)return le();let{productId:n,image:r,title:i,lprice:a,brand:o}=t;return`
    <div
      class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
      data-product-id="${n}"
    >
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img
          src="${r}"
          alt="${i}"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${i}</h3>
          <p class="text-xs text-gray-500 mb-2">${o}</p>
          <p class="text-lg font-bold text-gray-900">${Number.parseInt(a).toLocaleString()}원</p>
        </div>
        <!-- 장바구니 버튼 -->
        <button
          class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
             hover:bg-blue-700 transition-colors add-to-cart-btn"
          data-product-id="${n}"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  `}function le(){return`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      <div class="aspect-square bg-gray-200"></div>
      <div class="p-3">
        <div class="h-4 bg-gray-200 rounded mb-2"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div class="h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  `}var K=G;function ue({products:e,loading:t=!1}){return t?`
      ${C({id:`products-grid`,list:Array.from({length:4}),renderItem:e=>K({product:e,loading:!0}),className:`grid grid-cols-2 gap-4 mb-6`}).outerHTML}
    `:C({id:`products-grid`,list:e,renderItem:e=>S({to:`/product/${e.productId}`,children:K({product:e})}),className:`grid grid-cols-2 gap-4 mb-6`})}var q=ue;const J={currentPage:1,isLoading:!1,hasMoreData:!0,reset(){this.currentPage=1,this.isLoading=!1,this.hasMoreData=!0},incrementPage(){this.currentPage+=1},setLoading(e){this.isLoading=e},setNoMoreData(){this.hasMoreData=!1},canLoadMore(){return!this.isLoading&&this.hasMoreData}};function de(){let e={},t=[],n=({products:e,isAppend:t=!1})=>{let n=document.getElementById(`products-grid`);if(n)if(t){let t=document.getElementById(`loading-indicator`);t&&t.remove(),e.forEach(e=>{let t=document.createElement(`li`),r=document.createElement(`div`);r.innerHTML=K({product:e});let i=r.firstElementChild,a=S({to:`/product/${e.productId}`,children:i});t.appendChild(a),n.appendChild(t)})}else n.replaceWith(q({products:e,loading:!1}))},r=({count:e})=>{let t=document.getElementById(`total-products-count`);t&&(t.innerHTML=`총 <span class="font-medium text-gray-900">${e}개</span>의 상품`)},i=({categories:e})=>{let t=document.getElementById(`filter-section-container`);if(!t)return;let{category1:n,category2:r}=$.getSearchParams();t.innerHTML=V({loading:!1,categories:e,selectedCategory1:n,selectedCategory2:r}),d()},a=()=>{let e=document.getElementById(`products-container`);if(!e.querySelector(`#loading-indicator`)){let t=document.createElement(`div`);t.id=`loading-indicator`,t.className=`text-center py-4 text-sm text-gray-500`,t.textContent=`상품을 불러오는 중...`,e.appendChild(t)}},o=()=>{let e=document.getElementById(`loading-indicator`);e&&e.remove()},s=()=>{let e=document.getElementById(`products-container`);if(!e.querySelector(`#no-more-data`)){let t=e.querySelector(`.text-center.py-4.text-sm.text-gray-500`);t&&t.remove();let n=document.createElement(`div`);n.id=`no-more-data`,n.className=`text-center py-4 text-sm text-gray-500`,n.textContent=`모든 상품을 확인했습니다`,e.appendChild(n)}},c=async()=>{try{let e=$.getSearchParams(),{category1:t,category2:i,search:a,sort:o,limit:s}=e,c=await f({category1:t,category2:i,search:a,sort:o,limit:Number.parseInt(s)||20,page:1});n({products:c.products,isAppend:!1}),r({count:c.pagination.total})}catch(e){console.error(`상품 데이터를 가져오는 중 오류가 발생했습니다:`,e)}},l=async()=>{if(J.canLoadMore()){J.setLoading(!0),a();try{let e=$.getSearchParams(),{category1:t,category2:r,search:i,sort:a,limit:o}=e,c=J.currentPage+1,l=await f({category1:t,category2:r,search:i,sort:a,limit:Number.parseInt(o)||20,page:c});l.products.length===0?(J.setNoMoreData(),s()):(J.incrementPage(),n({products:l.products,isAppend:!0}))}catch(e){console.error(`추가 상품 로드 중 오류:`,e)}finally{J.setLoading(!1),o()}}},u=()=>{let e=async()=>{if(!J.canLoadMore())return;let e=window.innerHeight+window.scrollY,t=document.documentElement.scrollHeight;e>=t-100&&await l()};window.addEventListener(`scroll`,e);let n=()=>{window.removeEventListener(`scroll`,e)};t.push(n)},d=()=>{let e=document.getElementById(`filter-section-container`);e&&e.addEventListener(`click`,e=>{let t=e.target;if(t.hasAttribute(`data-category1`)&&!t.hasAttribute(`data-category2`)){let e=t.getAttribute(`data-category1`);p(e,null)}if(t.hasAttribute(`data-category1`)&&t.hasAttribute(`data-category2`)){let e=t.getAttribute(`data-category1`),n=t.getAttribute(`data-category2`);p(e,n)}if(t.hasAttribute(`data-breadcrumb`)){let e=t.getAttribute(`data-breadcrumb`);e===`reset`?h(0):e===`category1`&&h(1)}})},p=(e,t)=>{$.updateSearchParams({category1:e,category2:t,page:1})},h=e=>{let{category1:t}=$.getSearchParams();e===0?$.updateSearchParams({category1:null,category2:null,page:1}):e===1&&$.updateSearchParams({category1:t,category2:null,page:1})},g=()=>{Object.keys(e).length>0&&i({categories:e})},_=async()=>{try{let t=$.getSearchParams(),{category1:a,category2:o,search:s,sort:c,limit:l}=t,d=await m(),p=await f({category1:a,category2:o,search:s,sort:c,limit:parseInt(l)||20,page:1});e=d,i({categories:d}),n({products:p.products,isAppend:!1}),r({count:p.pagination.total}),u()}catch(e){console.error(`상품 데이터를 가져오는 중 오류가 발생했습니다:`,e)}},v={category1:()=>{J.reset(),c(),g()},category2:()=>{J.reset(),c(),g()},search:()=>{J.reset(),c()},sort:()=>{J.reset(),c()},limit:()=>{J.reset(),c()},page:()=>{c()}};Object.keys(v).forEach(e=>{let n=$.subscribeSearchParams(e,v[e]);t.push(n)}),_();let y=()=>{t.forEach(e=>e()),window.searchBarCleanup&&(window.searchBarCleanup.forEach(e=>e()),window.searchBarCleanup=[]),window.sortSelectCleanup&&(window.sortSelectCleanup.forEach(e=>e()),window.sortSelectCleanup=[]),window.limitSelectCleanup&&(window.limitSelectCleanup.forEach(e=>e()),window.limitSelectCleanup=[])};window.cleanupProducts=y;let b=()=>{y()};return window.addEventListener(`beforeunload`,b),t.push(()=>{window.removeEventListener(`beforeunload`,b)}),W({children:`<div id="filter-section-container">${V({loading:!0,categories:[]})}</div>
    <div class="mb-6">
      <div id="products-container">
        <div id="total-products-count" class="mb-4 text-sm text-gray-600"></div>
        ${q({loading:!0})}
      </div>
    </div>`})}var fe=de;const pe={isMatch(e,t){let n=this.parsePattern(e),r=this.parsePattern(t);if(n.length!==r.length)return!1;for(let e=0;e<n.length;e++){let t=n[e],i=r[e];if(!t.startsWith(`:`)&&t!==i)return!1}return!0},findMatchedPattern(e,t){let n=this.sortPatternsByPriority(t);for(let t of n)if(this.isMatch(t,e))return t;return null},parsePattern(e){return e.split(`/`).filter(Boolean)},sortPatternsByPriority(e){return e.sort((e,t)=>{let n=this.getPatternScore(e),r=this.getPatternScore(t);return r-n})},getPatternScore(e){let t=this.parsePattern(e),n=0;for(let e of t)e===`*`?n+=1:e.startsWith(`:`)?n+=10:n+=100;return n}},me={extract(e,t){let n=this.parsePattern(e),r=this.parsePattern(t);if(n.length!==r.length)return{};let i={};for(let e=0;e<n.length;e++){let t=n[e],a=r[e];if(t.startsWith(`:`)){let e=t.slice(1);i[e]=a}}return i},getParameterNames(e){let t=this.parsePattern(e),n=[];for(let e of t)if(e.startsWith(`:`)){let t=e.slice(1);n.push(t)}return n},parsePattern(e){return e.split(`/`).filter(Boolean)}};var he=(t=new WeakMap,n=new WeakMap,r=new WeakSet,class{constructor(){e.classPrivateMethodInitSpec(this,r),e.classPrivateFieldInitSpec(this,t,new Map),e.classPrivateFieldInitSpec(this,n,{}),e.classPrivateFieldSet2(n,this,e.assertClassBrand(r,this,Y).call(this)),window.addEventListener(`popstate`,()=>{e.assertClassBrand(r,this,X).call(this)})}getParams(t){return t?e.classPrivateFieldGet2(n,this)[t]:{...e.classPrivateFieldGet2(n,this)}}updateParams(t,i={}){let a=window.location.pathname,o=new URLSearchParams,s={...e.classPrivateFieldGet2(n,this),...t};Object.entries(s).forEach(([e,t])=>{t!=null&&o.set(e,t)});let c=o.toString()?`${a}?${o.toString()}`:a;i.replace?window.history.replaceState(null,``,c):window.history.pushState(null,``,c),e.assertClassBrand(r,this,X).call(this)}subscribe(n,r){return e.classPrivateFieldGet2(t,this).has(n)||e.classPrivateFieldGet2(t,this).set(n,[]),e.classPrivateFieldGet2(t,this).get(n).push(r),()=>{let i=e.classPrivateFieldGet2(t,this).get(n);if(i){let e=i.indexOf(r);e>-1&&i.splice(e,1)}}}unsubscribe(n,r){let i=e.classPrivateFieldGet2(t,this).get(n);if(i){let e=i.indexOf(r);e>-1&&i.splice(e,1)}}unsubscribeAll(n){n?e.classPrivateFieldGet2(t,this).delete(n):e.classPrivateFieldGet2(t,this).clear()}});function Y(){return Object.fromEntries(new URLSearchParams(window.location.search))}function X(){let i=e.assertClassBrand(r,this,Y).call(this),a=new Set;Object.keys({...e.classPrivateFieldGet2(n,this),...i}).forEach(t=>{e.classPrivateFieldGet2(n,this)[t]!==i[t]&&a.add(t)}),e.classPrivateFieldSet2(n,this,i),a.forEach(n=>{e.classPrivateFieldGet2(t,this).has(n)&&e.classPrivateFieldGet2(t,this).get(n).forEach(e=>{e(i[n],i)})}),e.classPrivateFieldGet2(t,this).has(`*`)&&e.classPrivateFieldGet2(t,this).get(`*`).forEach(e=>{e(i,Array.from(a))})}const Z=new he,Q=`/`;var ge=(i=new WeakMap,class{constructor(t={},n={}){e.classPrivateFieldInitSpec(this,i,{}),this.pathMatcher=n.pathMatcher||pe,this.parameterExtractor=n.parameterExtractor||me,this.fallback=n.fallback||null,this.searchParams=Z,this.addRoute(t),this.currentPath=null,this.currentParams={},window.addEventListener(`popstate`,this.handlePopState.bind(this))}getInitialRoute(){let t=window.location.pathname,n=Object.keys(e.classPrivateFieldGet2(i,this)),r=this.pathMatcher.findMatchedPattern(t,n);return r?(this.currentPath=r,this.currentParams=this.parameterExtractor.extract(r,t),e.classPrivateFieldGet2(i,this)[r]):{path:null,view:this.fallback}}addRoute({path:t,view:n,children:r}){if(r==null){e.classPrivateFieldGet2(i,this)[t]={path:t,view:n};return}if(!Array.isArray(r))throw Error(`children must be an array`);e.classPrivateFieldGet2(i,this)[t]={path:t,view:n};for(let e of r)this.addRoute({...e,path:this.isRootPath(t)?e.path:`${t}${e.path}`})}navigate(e,t={}){if(e===-1){window.history.back();return}let{replace:n=!1,searchParams:r}=t,i=e;if(r){let t=new URLSearchParams;Object.entries(r).forEach(([e,n])=>{n!=null&&t.set(e,n)}),i=t.toString()?`${e}?${t.toString()}`:e}n?window.history.replaceState(null,``,i):window.history.pushState(null,``,i),this.handlePopState()}handlePopState(t){var n;let r=(t==null||(n=t.state)==null?void 0:n.path)||window.location.pathname||Q,a=Object.keys(e.classPrivateFieldGet2(i,this)),o=this.pathMatcher.findMatchedPattern(r,a);if(o){this.currentPath=o,this.currentParams=this.parameterExtractor.extract(o,r);let t=e.classPrivateFieldGet2(i,this)[o],n=document.getElementById(`root`);n.innerHTML=t.view()}else if(this.fallback){this.currentPath=null,this.currentParams={};let e=document.getElementById(`root`);e.innerHTML=this.fallback.view()}}getParams({path:e}){return this.currentPath===e?this.currentParams:{}}getSearchParams(){return this.searchParams.getParams()}updateSearchParams(e,t={}){this.searchParams.updateParams(e,t)}subscribeSearchParams(e,t){return this.searchParams.subscribe(e,t)}unsubscribeSearchParams(e,t){this.searchParams.unsubscribe(e,t)}isRootPath(e){return e===Q}}),_e=ge;const ve={path:`/`,view:()=>fe(),children:[{path:`/product/:productId`,view:()=>k()}]},$=new _e(ve,{fallback:()=>d()}),ye=()=>c(async()=>{let{worker:e}=await import(`./browser-CcyfQrG1.js`);return{worker:e}},[]).then(({worker:e})=>e.start({onUnhandledRequest:`bypass`}));function be(){let e=document.getElementById(`root`),t=$.getInitialRoute();e.innerHTML=t.view()}ye().then(be);