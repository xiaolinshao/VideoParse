// ==UserScript==
// @name Whoami视频解析
// @namespace    https://ljxnet.cn/
// @version      4.1.4
// @description    在各大视频网站的播放页面按~键即可跳过广告直接播放VIP视频，无任何页面上的修改
// @author       ljxi
// @icon         https://v.ljxnet.cn/favicon.ico
// @match        *://*.iqiyi.com/*
// @match        *://*.youku.com/*
// @match        *://*.le.com/*
// @match        *://*.letv.com/*
// @match        *://v.qq.com/*
// @match        *://*.tudou.com/*
// @match        *://*.mgtv.com/*
// @match        *://film.sohu.com/*
// @match        *://tv.sohu.com/*
// @match        *://*.acfun.cn/v/*
// @match        *://*.bilibili.com/*
// @match        *://vip.1905.com/play/*
// @match        *://*.pptv.com/*
// @match        *://v.yinyuetai.com/video/*
// @match        *://v.yinyuetai.com/playlist/*
// @match        *://*.fun.tv/vplay/*
// @match        *://*.wasu.cn/Play/show/*
// @exclude      *://*.bilibili.com/blackboard/*
// ==/UserScript==

(function() {
    'use strict';

    document.onkeydown = function(event){
      if(event.keyCode == "33" || event.keyCode == "34"|| event.keyCode == "192"){
      window.location.href='https://v.ljxnet.cn/?url='+location.href
      };
    };

})();