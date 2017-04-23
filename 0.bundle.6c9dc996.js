webpackJsonp([0],{33:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r(39),r(38),r(40);var a=r(0);e.default=function(){return(0,a.h)("div",{class:"about-component mdc-card"},(0,a.h)("section",{class:"mdc-card__primary"},(0,a.h)("h1",{class:"mdc-card__title mdc-card__title--large"},"PWA")),(0,a.h)("section",{class:"mdc-card__supporting-text"},"About this Application",(0,a.h)("br",null),(0,a.h)("br",null),(0,a.h)("a",{href:"https://github.com/paulhoughton/preact-pwa"},"GitHub")),(0,a.h)("section",{class:"mdc-card__actions"},(0,a.h)("a",{href:"#/"},(0,a.h)("button",{class:"mdc-button mdc-button--compact mdc-card__action"},"OK"))))}},35:function(t,e,r){e=t.exports=r(2)(void 0),e.push([t.i,'/*!\n Material Components for the web\n Copyright (c) 2017 Google Inc.\n License: Apache-2.0\n*/@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{opacity:0;-webkit-animation-timing-function:linear;animation-timing-function:linear}to{opacity:1}}@keyframes mdc-ripple-fg-opacity-in{0%{opacity:0;-webkit-animation-timing-function:linear;animation-timing-function:linear}to{opacity:1}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{opacity:1;-webkit-animation-timing-function:linear;animation-timing-function:linear}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{opacity:1;-webkit-animation-timing-function:linear;animation-timing-function:linear}to{opacity:0}}.mdc-button{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;letter-spacing:.04em;line-height:1.5rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87));display:inline-block;position:relative;min-width:64px;height:36px;padding:0 16px;border:none;border-radius:2px;outline:none;background:transparent;font-size:14px;font-weight:500;line-height:36px;text-align:center;text-decoration:none;text-transform:uppercase;overflow:hidden;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;-webkit-appearance:none}.mdc-button:not(.mdc-ripple-upgraded):active:after,.mdc-button:not(.mdc-ripple-upgraded):focus:before,.mdc-button:not(.mdc-ripple-upgraded):hover:before{-webkit-transition-duration:85ms;transition-duration:85ms;opacity:.6}.mdc-button:before{background-color:rgba(0,0,0,.06);position:absolute;top:-50%;left:-50%;width:200%;height:200%;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-button.mdc-ripple-upgraded--background-active-fill:before{-webkit-transition-duration:.12s;transition-duration:.12s;opacity:1}.mdc-button.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button:after{background-color:rgba(0,0,0,.06);position:absolute;top:-50%;left:-50%;width:200%;height:200%;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center;opacity:0}.mdc-button:not(.mdc-ripple-upgraded--unbounded):after{-webkit-transform-origin:center center;transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-button.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards;animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));-webkit-animation:.25s mdc-ripple-fg-opacity-out;animation:.25s mdc-ripple-fg-opacity-out}.mdc-button:not(.mdc-ripple-upgraded){-webkit-tap-highlight-color:rgba(0,0,0,.18)}.mdc-button--theme-dark,.mdc-theme--dark .mdc-button{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent;color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-button--theme-dark:not(.mdc-ripple-upgraded):active:after,.mdc-button--theme-dark:not(.mdc-ripple-upgraded):focus:before,.mdc-button--theme-dark:not(.mdc-ripple-upgraded):hover:before,.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):active:after,.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):focus:before,.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):hover:before{-webkit-transition-duration:85ms;transition-duration:85ms;opacity:.6}.mdc-button--theme-dark:before,.mdc-theme--dark .mdc-button:before{background-color:hsla(0,0%,100%,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button--theme-dark.mdc-ripple-upgraded:before,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button--theme-dark.mdc-ripple-upgraded--background-focused:before,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-button--theme-dark.mdc-ripple-upgraded--background-active-fill:before,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--background-active-fill:before{-webkit-transition-duration:.12s;transition-duration:.12s;opacity:1}.mdc-button--theme-dark.mdc-ripple-upgraded--unbounded:before,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button--theme-dark:after,.mdc-theme--dark .mdc-button:after{background-color:hsla(0,0%,100%,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button--theme-dark.mdc-ripple-upgraded:after,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center;opacity:0}.mdc-button--theme-dark:not(.mdc-ripple-upgraded--unbounded):after,.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded--unbounded):after{-webkit-transform-origin:center center;transform-origin:center center}.mdc-button--theme-dark.mdc-ripple-upgraded--unbounded:after,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-button--theme-dark.mdc-ripple-upgraded--foreground-activation:after,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards;animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards}.mdc-button--theme-dark.mdc-ripple-upgraded--foreground-deactivation:after,.mdc-theme--dark .mdc-button.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));-webkit-animation:.25s mdc-ripple-fg-opacity-out;animation:.25s mdc-ripple-fg-opacity-out}.mdc-button--theme-dark:not(.mdc-ripple-upgraded),.mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded){-webkit-tap-highlight-color:rgba(255,255,255,.18)}.mdc-button.mdc-button--primary{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent}.mdc-button.mdc-button--primary:not(.mdc-ripple-upgraded):active:after,.mdc-button.mdc-button--primary:not(.mdc-ripple-upgraded):focus:before,.mdc-button.mdc-button--primary:not(.mdc-ripple-upgraded):hover:before{-webkit-transition-duration:85ms;transition-duration:85ms;opacity:.6}.mdc-button.mdc-button--primary:before{background-color:rgba(63,81,181,.12);position:absolute;top:-50%;left:-50%;width:200%;height:200%;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:""}@supports (background-color:color(green a(10%))){.mdc-button.mdc-button--primary:before{background-color:color(var(--mdc-theme-primary,#3f51b5) a(12%))}}.mdc-button.mdc-button--primary.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-button--primary.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-button.mdc-button--primary.mdc-ripple-upgraded--background-active-fill:before{-webkit-transition-duration:.12s;transition-duration:.12s;opacity:1}.mdc-button.mdc-button--primary.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-button--primary:after{background-color:rgba(63,81,181,.12);position:absolute;top:-50%;left:-50%;width:200%;height:200%;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:""}@supports (background-color:color(green a(10%))){.mdc-button.mdc-button--primary:after{background-color:color(var(--mdc-theme-primary,#3f51b5) a(12%))}}.mdc-button.mdc-button--primary.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center;opacity:0}.mdc-button.mdc-button--primary:not(.mdc-ripple-upgraded--unbounded):after{-webkit-transform-origin:center center;transform-origin:center center}.mdc-button.mdc-button--primary.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-button.mdc-button--primary.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards;animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-button--primary.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));-webkit-animation:.25s mdc-ripple-fg-opacity-out;animation:.25s mdc-ripple-fg-opacity-out}.mdc-button.mdc-button--accent{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent}.mdc-button.mdc-button--accent:not(.mdc-ripple-upgraded):active:after,.mdc-button.mdc-button--accent:not(.mdc-ripple-upgraded):focus:before,.mdc-button.mdc-button--accent:not(.mdc-ripple-upgraded):hover:before{-webkit-transition-duration:85ms;transition-duration:85ms;opacity:.6}.mdc-button.mdc-button--accent:before{background-color:rgba(255,64,129,.12);position:absolute;top:-50%;left:-50%;width:200%;height:200%;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:""}@supports (background-color:color(green a(10%))){.mdc-button.mdc-button--accent:before{background-color:color(var(--mdc-theme-accent,#ff4081) a(12%))}}.mdc-button.mdc-button--accent.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-button--accent.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-button.mdc-button--accent.mdc-ripple-upgraded--background-active-fill:before{-webkit-transition-duration:.12s;transition-duration:.12s;opacity:1}.mdc-button.mdc-button--accent.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-button--accent:after{background-color:rgba(255,64,129,.12);position:absolute;top:-50%;left:-50%;width:200%;height:200%;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:""}@supports (background-color:color(green a(10%))){.mdc-button.mdc-button--accent:after{background-color:color(var(--mdc-theme-accent,#ff4081) a(12%))}}.mdc-button.mdc-button--accent.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center;opacity:0}.mdc-button.mdc-button--accent:not(.mdc-ripple-upgraded--unbounded):after{-webkit-transform-origin:center center;transform-origin:center center}.mdc-button.mdc-button--accent.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-button.mdc-button--accent.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards;animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-button--accent.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));-webkit-animation:.25s mdc-ripple-fg-opacity-out;animation:.25s mdc-ripple-fg-opacity-out}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button--dense{height:32px;font-size:.8125rem;line-height:32px}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition:box-shadow .28s cubic-bezier(.4,0,.2,1);transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;min-width:88px}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised.mdc-button--primary{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent}.mdc-button--raised.mdc-button--primary:not(.mdc-ripple-upgraded):active:after,.mdc-button--raised.mdc-button--primary:not(.mdc-ripple-upgraded):focus:before,.mdc-button--raised.mdc-button--primary:not(.mdc-ripple-upgraded):hover:before{-webkit-transition-duration:85ms;transition-duration:85ms;opacity:.6}.mdc-button--raised.mdc-button--primary:before{background-color:hsla(0,0%,100%,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--background-active-fill:before{-webkit-transition-duration:.12s;transition-duration:.12s;opacity:1}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button--raised.mdc-button--primary:after{background-color:hsla(0,0%,100%,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center;opacity:0}.mdc-button--raised.mdc-button--primary:not(.mdc-ripple-upgraded--unbounded):after{-webkit-transform-origin:center center;transform-origin:center center}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards;animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards}.mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));-webkit-animation:.25s mdc-ripple-fg-opacity-out;animation:.25s mdc-ripple-fg-opacity-out}.mdc-button--raised.mdc-button--accent{--mdc-ripple-surface-width:0;--mdc-ripple-surface-height:0;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform,opacity;-webkit-tap-highlight-color:transparent}.mdc-button--raised.mdc-button--accent:not(.mdc-ripple-upgraded):active:after,.mdc-button--raised.mdc-button--accent:not(.mdc-ripple-upgraded):focus:before,.mdc-button--raised.mdc-button--accent:not(.mdc-ripple-upgraded):hover:before{-webkit-transition-duration:85ms;transition-duration:85ms;opacity:.6}.mdc-button--raised.mdc-button--accent:before{background-color:hsla(0,0%,100%,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded:before{top:-50%;left:-50%;width:200%;height:200%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--background-focused:before{opacity:.99999}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--background-active-fill:before{-webkit-transition-duration:.12s;transition-duration:.12s;opacity:1}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--unbounded:before{top:0%;top:var(--mdc-ripple-top,0%);left:0%;left:var(--mdc-ripple-left,0%);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform:scale(var(--mdc-ripple-fg-scale,0));transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button--raised.mdc-button--accent:after{background-color:hsla(0,0%,100%,.14);position:absolute;top:-50%;left:-50%;width:200%;height:200%;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded:after{top:0;left:0;width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center;opacity:0}.mdc-button--raised.mdc-button--accent:not(.mdc-ripple-upgraded--unbounded):after{-webkit-transform-origin:center center;transform-origin:center center}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--unbounded:after{top:0;top:var(--mdc-ripple-top,0);left:0;left:var(--mdc-ripple-left,0);width:100%;width:var(--mdc-ripple-fg-size,100%);height:100%;height:var(--mdc-ripple-fg-size,100%);-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards;animation:.3s mdc-ripple-fg-radius-in forwards,83ms mdc-ripple-fg-opacity-in forwards}.mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));-webkit-animation:.25s mdc-ripple-fg-opacity-out;animation:.25s mdc-ripple-fg-opacity-out}.mdc-button--theme-dark .mdc-button--raised,.mdc-theme--dark .mdc-button--raised{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5)}.mdc-button--theme-dark .mdc-button--raised:before,.mdc-theme--dark .mdc-button--raised:before{color:#000}.mdc-button--primary,.mdc-button--theme-dark .mdc-button--primary,.mdc-theme--dark .mdc-button--primary{color:#3f51b5;color:var(--mdc-theme-primary,#3f51b5)}.mdc-button--primary.mdc-button--raised{background-color:#3f51b5;background-color:var(--mdc-theme-primary,#3f51b5);color:#fff;color:var(--mdc-theme-text-primary-on-primary,#fff)}.mdc-button--primary.mdc-button--raised:before{color:#000}.mdc-button--accent,.mdc-button--theme-dark .mdc-button--accent,.mdc-theme--dark .mdc-button--accent{color:#ff4081;color:var(--mdc-theme-accent,#ff4081)}.mdc-button--accent.mdc-button--raised{background-color:#ff4081;background-color:var(--mdc-theme-accent,#ff4081);color:#fff;color:var(--mdc-theme-text-primary-on-accent,#fff)}.mdc-button--accent.mdc-button--raised:before{color:#000}.mdc-button--compact{padding:0 8px}.mdc-button:disabled,fieldset:disabled .mdc-button{color:rgba(0,0,0,.26);cursor:default;pointer-events:none}.mdc-button--theme-dark .mdc-button:disabled,.mdc-button--theme-dark fieldset:disabled .mdc-button,.mdc-theme--dark .mdc-button:disabled,.mdc-theme--dark fieldset:disabled .mdc-button{color:hsla(0,0%,100%,.3)}.mdc-button--raised:disabled,fieldset:disabled .mdc-button--raised{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);background-color:rgba(0,0,0,.12);pointer-events:none}.mdc-button--theme-dark .mdc-button--raised:disabled,.mdc-button--theme-dark fieldset:disabled .mdc-button--raised,.mdc-theme--dark .mdc-button--raised:disabled,.mdc-theme--dark fieldset:disabled .mdc-button--raised{background-color:hsla(0,0%,100%,.12)}',""])},36:function(t,e,r){e=t.exports=r(2)(void 0),e.push([t.i,"/*!\n Material Components for the web\n Copyright (c) 2017 Google Inc.\n License: Apache-2.0\n*/.mdc-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding:0;box-sizing:border-box}.mdc-card__primary{padding:16px}.mdc-card__primary .mdc-card__title--large{padding-top:8px}.mdc-card__primary:last-child{padding-bottom:24px}.mdc-card__supporting-text{padding:8px 16px;box-sizing:border-box;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:400;letter-spacing:.04em;line-height:1.25rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}.mdc-card--theme-dark .mdc-card__supporting-text,.mdc-theme--dark .mdc-card__supporting-text{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-card__primary+.mdc-card__supporting-text{margin-top:-8px;padding-top:0}.mdc-card__supporting-text:last-child{padding-bottom:24px}.mdc-card__actions{display:-webkit-box;display:-ms-flexbox;display:flex;padding:8px;box-sizing:border-box}.mdc-card--theme-dark .mdc-card__actions,.mdc-theme--dark .mdc-card__actions{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-card__actions .mdc-card__action{margin:0 8px 0 0}.mdc-card__actions .mdc-card__action:last-child{margin-right:0}.mdc-card__actions--vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.mdc-card__actions--vertical .mdc-card__action{margin:0 0 4px}.mdc-card__actions--vertical .mdc-card__action:last-child{margin-bottom:0}.mdc-card__media{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding:16px;box-sizing:border-box}.mdc-card__media-item{display:inline-block;width:auto;height:80px;margin:16px 0 0;padding:0}.mdc-card__media-item--1dot5x{width:auto;height:120px}.mdc-card__media-item--2x{width:auto;height:160px}.mdc-card__media-item--3x{width:auto;height:240px}.mdc-card__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;font-weight:500;letter-spacing:.04em;line-height:1.5rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));margin:-.063rem 0}.mdc-card--theme-dark .mdc-card__title,.mdc-theme--dark .mdc-card__title{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-card__title--large{font-size:1.5rem;letter-spacing:normal;line-height:2rem;margin:0}.mdc-card__subtitle,.mdc-card__title--large{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:400}.mdc-card__subtitle{font-size:.875rem;letter-spacing:.04em;line-height:1.25rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));margin:-.063rem 0}.mdc-card--theme-dark .mdc-card__subtitle,.mdc-theme--dark .mdc-card__subtitle{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-card__horizontal-block{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 16px 0 0;box-sizing:border-box}.mdc-card__horizontal-block .mdc-card__actions--vertical{margin:16px}.mdc-card__horizontal-block .mdc-card__media-item{margin-left:16px}.mdc-card__horizontal-block .mdc-card__media-item--3x{margin-bottom:16px}",""])},37:function(t,e,r){e=t.exports=r(2)(void 0),e.push([t.i,".about-component.mdc-card{width:330px;text-align:center}.about-component .mdc-card__supporting-text{margin-top:30px}.about-component .mdc-card__actions{margin:auto}",""])},38:function(t,e,r){var a=r(35);"string"==typeof a&&(a=[[t.i,a,""]]);r(3)(a,{});a.locals&&(t.exports=a.locals)},39:function(t,e,r){var a=r(36);"string"==typeof a&&(a=[[t.i,a,""]]);r(3)(a,{});a.locals&&(t.exports=a.locals)},40:function(t,e,r){var a=r(37);"string"==typeof a&&(a=[[t.i,a,""]]);r(3)(a,{});a.locals&&(t.exports=a.locals)}});