import{p as s,q as o}from"./auth.service.hooks.59ab2c5f.js";const i=async()=>{try{const t=await s.get("/debts",{headers:o()});return t==null?void 0:t.data}catch(t){throw new Error(t.message)}},h=async(t,e)=>{try{const a=await s.get(`/operations?take=${e}&skip=${t}`,{headers:o()});return a==null?void 0:a.data}catch(a){throw new Error(a.message)}},p=async t=>{const{amount:e,debtId:a,type:n=1}=t;try{const r=await s.post("/operations/generateTransfer",{debt_id:a,amount_paid:e,type:n},{headers:o()}),{data:c}=r!=null?r:{};return c}catch(r){throw new Error(r.message)}},w=async t=>{try{const e=await s.get(`/operations/exportpdf/${t}`,{responseType:"blob",headers:o()});return e==null?void 0:e.data}catch(e){throw new Error(e.message)}},g=async t=>{try{return await s.get(`/operations/sendMail/${t}`,{headers:o()})}catch(e){throw new Error(e.message)}};export{w as e,h as f,p as g,g as s,i as u};
