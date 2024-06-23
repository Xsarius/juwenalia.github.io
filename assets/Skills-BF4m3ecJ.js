import{j as e,r as h}from"./react-DYH0GjtO.js";import{T as b,a as k,b as c,c as o}from"./react-tabs-BUKdfrjx.js";import{C as m,T as t,h as j,b as p,i as N,M as E,j as f,G as a}from"./@mui-DkpqcusS.js";import{L as y}from"./react-router-dom-DkaW0e_f.js";import"./@babel-Ci-rzA-s.js";import"./clsx-B-dksMZM.js";import"./react-is-bRM3snkL.js";import"./@emotion-wHFImRRo.js";import"./hoist-non-react-statics-c_oXS48o.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-B-ESzoyQ.js";import"./react-dom-COzWVqkv.js";import"./scheduler-DckzrJrc.js";import"./@popperjs-BQBsAJpH.js";import"./react-router-CzNJ0ar9.js";import"./@remix-run-3RjNJ9fY.js";const S=s=>e.jsx(m,{className:"modal-box",sx:{borderRadius:"0px"},children:e.jsxs("div",{className:"body",children:[e.jsxs(t,{className:"title",children:[s.title," at ",s.subtitle]}),e.jsx("div",{className:"desc",children:s.desc})]})}),x=s=>{const[l,n]=h.useState(!1),r=()=>{l||n(!0)},i=()=>n(!1);return h.useEffect(()=>{const g=()=>{const u=document.body;l?u.style.overflowY="hidden":u.style.overflowY="scroll"};return g(),()=>{g()}},[l]),e.jsx(m,{className:"education-card",sx:{borderRadius:"0px"},children:e.jsxs(j,{className:"card-contents",children:[e.jsxs("div",{className:"details-container",children:[e.jsx(t,{className:"title",children:s.title}),e.jsx(t,{className:"subtitle",children:e.jsxs(y,{className:"link",target:"_blank",to:s.link_to,children:[s.subtitle,e.jsx(p,{className:"icon"})]})}),e.jsxs(t,{className:"date",children:[s.date_from," - ",s.date_to]}),s.grade?e.jsxs(t,{className:"grade",children:["Grade: ",s.grade]}):e.jsx(t,{className:"grade",children:e.jsx("br",{})}),e.jsx(t,{className:"content",variant:"body1",children:s.desc}),e.jsxs(N,{children:[e.jsx(E,{open:l,onClose:i,style:{backdropFilter:"blur(5px)"},children:e.jsx(S,{...s})}),e.jsx(f,{className:"details-btn",onClick:r,variant:"contained",children:"Details"})]})]}),e.jsx("div",{className:"img-container",children:e.jsx("img",{src:s.img,alt:"logo",loading:"lazy"})})]})})},_=s=>e.jsx("div",{className:"skill-card-container",children:e.jsx(m,{className:"card",sx:{borderRadius:"0px"},children:e.jsxs(j,{className:"contents",children:[e.jsx("div",{className:"img-container",children:e.jsx("img",{src:s.img,alt:"img",loading:"lazy"})}),e.jsxs("div",{className:"text-container",children:[e.jsx(t,{className:"title",children:s.title?s.title:e.jsx("br",{})}),e.jsxs(t,{className:"hours",children:["Est. ",s.hours?s.hours:"N/A"," hours"]})]})]})})}),d={skillsData:{skill1:{title:"C",img:"/img/Skills/C.png",hours:"2600"},skill2:{title:"Python",img:"/img/Skills/python.png",hours:"1200"},skill3:{title:"Rust",img:"/img/Skills/rust.png",hours:"300"},skill4:{title:"Docker",img:"/img/Skills/docker.png",hours:"300"},skill5:{title:"Django",img:"/img/Skills/django.png",hours:"300"},skill6:{title:"Electronics design",img:"/img/Skills/electronics_design.png",hours:"1000"},skill7:{title:"React",img:"/img/Skills/react.png",hours:"500"},skill8:{title:"STM32 (M0+/M7)",img:"/img/Skills/stm32.png",hours:"1500"},skill9:{title:"Modbus RTU",img:"/img/Skills/modbus.png",hours:"250"},skill10:{title:"Linux (Ubuntu)",img:"/img/Skills/ubuntu.png",hours:"1200"},skills11:{title:"FreeRTOS",img:"/img/Skills/freertos.png",hours:"50"},skill12:{title:"ATMEL AVR",img:"/img/Skills/atmega.jpg",hours:"200"}},jobsData:{job1:{title:"Embedded software / Electrical Engineer",subtitle:"DTU Energy",date_from:"Oct 2023",date_to:"Present",link_to:"https://www.energy.dtu.dk/",img:"/img/Employers/DTU_energy.jpg"},job2:{title:"Embedded software / Electrical Engineer",subtitle:"Anemorobotics ApS",date_from:"Oct 2023",date_to:"Dec 2023",link_to:"https://anemorobotics.com/",img:"/img/Employers/anemorobotics.jpeg"},job3:{title:"Embedded Software Engineer",subtitle:"UXEON sp. z o.o.",date_from:"Jan 2023",date_to:"Jun 2023",link_to:"https://www.uxeon.com/en/index",img:"/img/Employers/uxeon.jpeg"},job4:{title:"Fullstack Software Engineer",subtitle:"Impicode sp. z o.o.",date_from:"Apr 2022",date_to:"Dec 2022",link_to:"https://impicode.com/",img:"/img/Employers/impicode.jpeg"}},educationData:{education1:{title:"MSc in Electrical Engineering",subtitle:"Technical University of Denmark",date_from:"Aug 2023",date_to:"Present",link_to:"https://www.dtu.dk/english/",img:"/img/Employers/DTU-logo.png",grade:""},education2:{title:"BSc in Power Engineering",subtitle:"Warsaw University of Technology",date_from:"Oct 2019",date_to:"Mar 2023",link_to:"https://eng.pw.edu.pl/",img:"/img/Employers/pw-logo.jpg",grade:"4.5/5 (ECTS Grade: B)"}}},J=()=>{let s=d.skillsData,l=d.jobsData,n=d.educationData;const r={display:"flex",justifyContent:"center"};return e.jsxs("div",{className:"skills-container",id:"experience",children:[e.jsx("div",{className:"header",children:e.jsx("div",{className:"title",children:"My Resume"})}),e.jsx("div",{className:"contents-container",children:e.jsxs(b,{children:[e.jsxs(k,{children:[e.jsx(c,{children:"Skills"}),e.jsx(c,{children:"Experience"}),e.jsx(c,{children:"Education"})]}),e.jsx(o,{className:"skills-tabpanel",children:e.jsx(a,{container:!0,spacing:4,sx:r,children:Object.keys(s).map(i=>e.jsx(a,{item:!0,className:"skills-item",children:e.jsx(_,{...s[i]})},i))})}),e.jsx(o,{className:"experience-tabpanel",children:e.jsx(a,{container:!0,direction:"column",sx:r,children:Object.keys(l).map(i=>e.jsx(a,{item:!0,className:"card-grid-item",children:e.jsx(x,{...l[i]})},i))})}),e.jsx(o,{className:"education-tabpanel",children:e.jsx(a,{container:!0,direction:"column",sx:r,children:Object.keys(n).map(i=>e.jsx(a,{item:!0,className:"card-grid-item",children:e.jsx(x,{...n[i]})},i))})})]})})]})};export{J as default};
