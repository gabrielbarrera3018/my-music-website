const e=document.querySelector("[data-form]"),t=document.querySelectorAll("[data-error]"),s=document.querySelectorAll("[data-icon]");class r{static displayErrorsOnChange(e,t){const s=t[e.target.attributes.name.value].find((e=>e.message)),r=e.target.parentElement,a=r.querySelector("[data-error]"),i=r.querySelector("[data-icon]");a.textContent=s?.message||"",this.toggleIcon(s,i)}static displayErrorsOnSubmit(r){Object.values(r).forEach(((e,r)=>{const a=t[r],i=s[r],n=e.find((e=>e.message));a.textContent=n?.message||"",this.toggleIcon(n,i)}));Object.values(r).flat(1/0).find((e=>e.message))||(this.showSuccessModal(),e.reset(),this.resetIcons(s))}static toggleIcon(e,t){const s=["fa-check","form__item__icon-success"],r=["fa-exclamation-circle","form__item__icon-failure"];e?.message?(t.classList.add(...r),t.classList.remove(...s)):(t.classList.add(...s),t.classList.remove(...r)),t.style.opacity=1}static resetIcons(e){return e.forEach((e=>e.style.opacity=0))}static showSuccessModal(){Swal.fire({position:"center",icon:"success",title:"Your  message has been sent",text:"I will respond soon 👋",timer:3e3,color:"#2c2323",confirmButtonColor:"green"})}}class a{static isRequired(e,t){return e.length>0||{message:t}}static isLessThan(e,t,s){return e.length>=t||{message:s}}static isGreaterThan(e,t,s){return e.length<=t||{message:s}}static isNumber(e,t){return!/\d/.test(e)||{message:t}}static isEmail(e,t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())||{message:t}}}class i{static getErrors(e){const t={name:e=>[a.isRequired(e,"name is required"),a.isNumber(e,"number is not required"),a.isLessThan(e,3,"must be at least 3 characters"),a.isGreaterThan(e,15,"must be maximum 15 characters")],email:e=>[a.isRequired(e,"email is required"),a.isLessThan(e,3,"must be at least 3 characters"),a.isEmail(e,"email is not valid - has to contains @ and .")],subject:e=>[a.isRequired(e,"subject is required"),a.isLessThan(e,3,"must be at least 3 characters"),a.isGreaterThan(e,15,"must be maximum 15 characters")],description:e=>[a.isRequired(e,"description is required"),a.isLessThan(e,3,"must be at least 3 characters")]};return[e].reduce(((e,s)=>{for(const r in s)e[r]=t[r](s[r]);return e}),{})}}const n=document.querySelector("[data-form]");new class{constructor(e){this.form=e,this.init()}init(){this.addListenerOnChange(),this.addListenerOnSubmit()}addListenerOnChange(){this.form.addEventListener("keyup",(e=>{const t=this.getFormData(this.form),s=this.createFieldDataObject(e,t),a=i.getErrors(s);r.displayErrorsOnChange(e,a)}),!1)}addListenerOnSubmit(){this.form.addEventListener("submit",(e=>{e.preventDefault();const t=this.getFormData(this.form),s=i.getErrors(t);r.displayErrorsOnSubmit(s)}),!1)}getFormData(e){return Object.fromEntries(new FormData(e).entries())}createFieldDataObject(e,t){const s=e.target.attributes.name.value,r=t[s],a={};return a[s]=r,a}}(n);document.querySelector("[data-area]").addEventListener("keyup",(function({target:e}){e.style.height="auto";const t=e.scrollHeight;e.style.height=`${t}px`}));
//# sourceMappingURL=index.17a74ec5.js.map
