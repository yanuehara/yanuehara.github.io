var B=Object.create;var v=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var M=e=>v(e,"__esModule",{value:!0});var Y=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var x=(e,n,u)=>{if(n&&typeof n=="object"||typeof n=="function")for(let a of L(n))!j.call(e,a)&&a!=="default"&&v(e,a,{get:()=>n[a],enumerable:!(u=E(n,a))||u.enumerable});return e},N=e=>x(M(v(e!=null?B(z(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var O=Y((C,b)=>{(function(e,n){typeof C=="object"&&typeof b!="undefined"?b.exports=n():typeof define=="function"&&define.amd?define(n):(e=e||self).Headroom=n()})(C,function(){"use strict";function e(){return typeof window!="undefined"}function n(t){return function(o){return o&&o.document&&function(d){return d.nodeType===9}(o.document)}(t)?function(o){var d=o.document,r=d.body,h=d.documentElement;return{scrollHeight:function(){return Math.max(r.scrollHeight,h.scrollHeight,r.offsetHeight,h.offsetHeight,r.clientHeight,h.clientHeight)},height:function(){return o.innerHeight||h.clientHeight||r.clientHeight},scrollY:function(){return o.pageYOffset!==void 0?o.pageYOffset:(h||r.parentNode||r).scrollTop}}}(t):function(o){return{scrollHeight:function(){return Math.max(o.scrollHeight,o.offsetHeight,o.clientHeight)},height:function(){return Math.max(o.offsetHeight,o.clientHeight)},scrollY:function(){return o.scrollTop}}}(t)}function u(t,o,d){var r,h=function(){var i=!1;try{var c={get passive(){i=!0}};window.addEventListener("test",c,c),window.removeEventListener("test",c,c)}catch{i=!1}return i}(),p=!1,f=n(t),m=f.scrollY(),s={};function H(){var i=Math.round(f.scrollY()),c=f.height(),g=f.scrollHeight();s.scrollY=i,s.lastScrollY=m,s.direction=m<i?"down":"up",s.distance=Math.abs(i-m),s.isOutOfBounds=i<0||g<i+c,s.top=i<=o.offset[s.direction],s.bottom=g<=i+c,s.toleranceExceeded=s.distance>o.tolerance[s.direction],d(s),m=i,p=!1}function y(){p||(p=!0,r=requestAnimationFrame(H))}var T=!!h&&{passive:!0,capture:!1};return t.addEventListener("scroll",y,T),H(),{destroy:function(){cancelAnimationFrame(r),t.removeEventListener("scroll",y,T)}}}function a(t){return t===Object(t)?t:{down:t,up:t}}function l(t,o){o=o||{},Object.assign(this,l.options,o),this.classes=Object.assign({},l.options.classes,o.classes),this.elem=t,this.tolerance=a(this.tolerance),this.offset=a(this.offset),this.initialised=!1,this.frozen=!1}return l.prototype={constructor:l,init:function(){return l.cutsTheMustard&&!this.initialised&&(this.addClass("initial"),this.initialised=!0,setTimeout(function(t){t.scrollTracker=u(t.scroller,{offset:t.offset,tolerance:t.tolerance},t.update.bind(t))},100,this)),this},destroy:function(){this.initialised=!1,Object.keys(this.classes).forEach(this.removeClass,this),this.scrollTracker.destroy()},unpin:function(){!this.hasClass("pinned")&&this.hasClass("unpinned")||(this.addClass("unpinned"),this.removeClass("pinned"),this.onUnpin&&this.onUnpin.call(this))},pin:function(){this.hasClass("unpinned")&&(this.addClass("pinned"),this.removeClass("unpinned"),this.onPin&&this.onPin.call(this))},freeze:function(){this.frozen=!0,this.addClass("frozen")},unfreeze:function(){this.frozen=!1,this.removeClass("frozen")},top:function(){this.hasClass("top")||(this.addClass("top"),this.removeClass("notTop"),this.onTop&&this.onTop.call(this))},notTop:function(){this.hasClass("notTop")||(this.addClass("notTop"),this.removeClass("top"),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){this.hasClass("bottom")||(this.addClass("bottom"),this.removeClass("notBottom"),this.onBottom&&this.onBottom.call(this))},notBottom:function(){this.hasClass("notBottom")||(this.addClass("notBottom"),this.removeClass("bottom"),this.onNotBottom&&this.onNotBottom.call(this))},shouldUnpin:function(t){return t.direction==="down"&&!t.top&&t.toleranceExceeded},shouldPin:function(t){return t.direction==="up"&&t.toleranceExceeded||t.top},addClass:function(t){this.elem.classList.add.apply(this.elem.classList,this.classes[t].split(" "))},removeClass:function(t){this.elem.classList.remove.apply(this.elem.classList,this.classes[t].split(" "))},hasClass:function(t){return this.classes[t].split(" ").every(function(o){return this.classList.contains(o)},this.elem)},update:function(t){t.isOutOfBounds||this.frozen!==!0&&(t.top?this.top():this.notTop(),t.bottom?this.bottom():this.notBottom(),this.shouldUnpin(t)?this.unpin():this.shouldPin(t)&&this.pin())}},l.options={tolerance:{up:0,down:0},offset:0,scroller:e()?window:null,classes:{frozen:"headroom--frozen",pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},l.cutsTheMustard=!!(e()&&function(){}.bind&&"classList"in document.documentElement&&Object.assign&&Object.keys&&requestAnimationFrame),l})});var w=N(O());document.addEventListener("DOMContentLoaded",function(){let e=JSON.parse(document.getElementById("page-data").textContent);console.debug(`Use headroom on this page? ${e.use_headroom}`);let n=document.querySelector("header");n&&e.use_headroom===!0&&new w.default(n).init()});
/*!
 * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
