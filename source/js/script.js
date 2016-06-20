/*! gumshoe v3.1.2 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */
!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.gumshoe=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,o,r,a,c,i={},s="querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_"),l=[],u={selector:"[data-gumshoe] a",selectorHeader:"[data-gumshoe-header]",offset:0,activeClass:"active",callback:function(){}},f=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var r=0,a=e.length;a>r;r++)t.call(n,e[r],r,e)},d=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=d(!0,e[o],n[o]):e[o]=n[o])};o>n;n++){var a=arguments[n];r(a)}return e},v=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},m=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},g=function(e){var n=0;if(e.offsetParent){do n+=e.offsetTop,e=e.offsetParent;while(e)}else n=e.offsetTop;return n=n-a-t.offset,n>=0?n:0},h=function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},p=function(){l.sort(function(e,t){return e.distance>t.distance?-1:e.distance<t.distance?1:0})};i.setDistances=function(){o=m(),a=r?v(r)+g(r):0,f(l,function(e){e.distance=g(e.target)}),p()};var b=function(){var e=document.querySelectorAll(t.selector);f(e,function(e){if(e.hash){var t=document.querySelector(e.hash);t&&l.push({nav:e,target:t,parent:"li"===e.parentNode.tagName.toLowerCase()?e.parentNode:null,distance:0})}})},y=function(){c&&(c.nav.classList.remove(t.activeClass),c.parent&&c.parent.classList.remove(t.activeClass))},H=function(e){y(),e.nav.classList.add(t.activeClass),e.parent&&e.parent.classList.add(t.activeClass),t.callback(e),c={nav:e.nav,parent:e.parent}};i.getCurrentNav=function(){var n=e.pageYOffset;if(e.innerHeight+n>=o&&h(l[0].target))return H(l[0]),l[0];for(var r=0,a=l.length;a>r;r++){var c=l[r];if(c.distance<=n)return H(c),c}y(),t.callback()};var C=function(){f(l,function(e){e.nav.classList.contains(t.activeClass)&&(c={nav:e.nav,parent:e.parent})})};i.destroy=function(){t&&(e.removeEventListener("resize",L,!1),e.removeEventListener("scroll",L,!1),l=[],t=null,n=null,o=null,r=null,a=null,c=null)};var L=function(e){n||(n=setTimeout(function(){n=null,"scroll"===e.type&&i.getCurrentNav(),"resize"===e.type&&(i.setDistances(),i.getCurrentNav())},66))};return i.init=function(n){s&&(i.destroy(),t=d(u,n||{}),r=document.querySelector(t.selectorHeader),b(),0!==l.length&&(C(),i.setDistances(),i.getCurrentNav(),e.addEventListener("resize",L,!1),e.addEventListener("scroll",L,!1)))},i});
(function (d, w){
  // LESS TYPING

  var $ = d.querySelector.bind(d);
  var $$ = d.querySelectorAll.bind(d);

  // TICKING SYSTEM - window scroll throttle

  var ticking = false;
  var updateChain = [];

  function requestTick() {
    if(!ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  }

  w.addEventListener('scroll', function (e) {
    requestTick();
  });

  function update() {
    // call functions in the chain one by one
    for (var i = 0; i < updateChain.length; i ++) {
      updateChain[i]();
    }
    ticking = false;
  }


  // <header> nav -> responsive

  var burger = $('.hamburger');
  var headerNav = $('.nav');
  burger.addEventListener('click', function (ev) {
    burger.classList.toggle('toggle');
    headerNav.classList.toggle('toggle');
  });

  // STICK TOC

  var toc = $('.toc');
  var tocAnchor = $('.post-content');
  if (toc && toc.clientHeight < window.innerHeight) {
    stickToc();
    updateChain.push(stickToc);
  }

  function stickToc() {
    var tocTop = tocAnchor.getBoundingClientRect().top;
    if (tocTop <= 0) {
      toc.classList.add('fixed');
    } else {
      toc.classList.remove('fixed');
    }
  }

  // gumshoe

  if (toc) {
    gumshoe.init({
      selector: '.toc a',
      offset: 0,
      activeClass: 'active'
    });
  }

  // POSTS NAV POSITION

  var nav = $('.post-nav');
  if (nav) {
    updateNav();
    updateChain.push(updateNav);
  }

  function updateNav() {
    var navTop = nav.getBoundingClientRect().top;

    var prev = $('.post-nav .prev');
    var next = $('.post-nav .next');
    if (navTop < w.innerHeight) {
      prev && !prev.classList.contains('stop') && prev.classList.add('stop');
      next && !next.classList.contains('stop') && next.classList.add('stop');
    } else {
      prev && prev.classList.contains('stop') && prev.classList.remove('stop');
      next && next.classList.contains('stop') && next.classList.remove('stop');
    }
  }

  // .post-footer comments button
  var disqus = $('#disqus_thread');
  var commentsTrigger = $('#comments-trigger');
  var disqus_loaded = false;
  if (commentsTrigger) {
    commentsTrigger.addEventListener('click', function (ev) {
      ev.preventDefault();
      if (! disqus_loaded) {
        load_disqus(); // from _partial/disqus.ejs
        disqus_loaded = true;
      } else {
        disqus.classList.toggle('hide');
      }
    });
  }

  //debugger;
}(document, window))