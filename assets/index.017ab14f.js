import{C as x,S as y,M as f,a as g,b as h,W as P,c as b,T as u,P as L,d as M,A as z,B as A,e as q,f as C,g as E,h as W}from"./vendor.c520aec7.js";const F=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}};F();var R="/assets/devmanifesto.d3546690.webp";var j="/assets/space.47c9b8e9.jpg",B="/assets/moon.b246064f.jpg",H="/assets/moon.normal.8e277ece.jpg";let d=0,m=0;const p=new x,a=O(),S=N(),w=I(),T=U();X();G();const s=Y(),c=k();document.body.onscroll=D;document.addEventListener("mousemove",K);window.addEventListener("resize",Z);v();function U(){return Array(600).fill().map(()=>{const e=new y(f.randFloatSpread(.3),20,20),n=new g({color:16777215}),r=new h(e,n),[i,t,o]=Array(3).fill().map(()=>f.randFloatSpread(100));return r.position.set(i,t,o),a.add(r),r.originalPosition={x:i,y:t,z:o},r})}function N(){const e=document.querySelector("#bg"),n=new P({canvas:e});return n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n}function O(){const e=new b;return e.background=new u().load(j),e}function k(){const e=window.innerWidth/window.innerHeight;return new L(75,e,1)}function G(){const e=new M(16777215);return e.position.set(10,10,10),a.add(e),e}function X(){const e=new z(16777215);return a.add(e),e}function Y(){const e=new y(3,32,32),n=new u().load(B),r=new u().load(H),i=new g({map:n,normalMap:r}),t=new h(e,i);return t.position.z=30,t.position.x=-10,a.add(t),t}function D(){const e=document.body.getBoundingClientRect().top;s.rotation.x+=.05,s.rotation.y+=.075,s.rotation.z+=.05,c.position.z=e*-.01,c.position.x=e*-2e-4,c.position.y=e*-2e-4}function I(){const e=new A,n=new q({color:16777215,size:1}),r=new Float32Array(600);for(let t=0;t<600;t++)r[t]=(f.randFloatSpread(100)-.5)*3;e.setAttribute("position",new C(r,3));const i=new E(e,n);return a.add(i),i}function K(e){m=e.clientY,d=e.clientX}function J(){w.rotation.y=-.1*p.getElapsedTime(),!(d<=0)&&(w.rotation.y=d*(p.getElapsedTime()*5e-5),w.rotation.x=m*(p.getElapsedTime()*5e-5))}function Q(){T.forEach(e=>{e.position.y=e.originalPosition.y-m*5e-4,e.position.x=e.originalPosition.x-d*5e-4})}function v(){requestAnimationFrame(v),J(),Q(),V(),S.render(a,c)}function V(){s.rotation.x+=9e-5,s.rotation.y+=9e-5,s.rotation.z+=9e-5}function Z(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),S.setSize(window.innerWidth,window.innerHeight)}W.timeline().to(document.querySelector(".HeaderBorder"),{delay:.3,duration:1,transform:"scaleX(1)",y:"30px"}).to(document.querySelector("header h1"),{duration:1,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",y:"30px"}).to(document.querySelector("header p"),{duration:1,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",y:"30px"},"-=0.5");document.querySelector(".DevManifesto").src=R;
