function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("7Y9D8");function l(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(t){t.preventDefault();let n=t.currentTarget.delay.valueAsNumber;const r=t.currentTarget.step.valueAsNumber,o=t.currentTarget.amount.valueAsNumber;if(n<0||r<0||o<=0)e(i).Notify.failure("Value of input fields cannot be negative");else for(let t=1;t<=o;t+=1)l(t,n).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),n+=r}));
//# sourceMappingURL=03-promises.ec23fe4b.js.map
