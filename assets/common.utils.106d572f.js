const e=r=>(r-(r%=60))/60+(9<r?":":":0")+r;function o(r,t){return Math.ceil(r/t)}function a(r){return Array.from({length:r},(t,n)=>n+1)}function i(r,t){return r.substring(0,t)}const s=r=>r.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");export{o as a,i as b,e as f,a as g,s as n};
