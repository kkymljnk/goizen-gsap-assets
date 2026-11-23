/* GSAP Lite Typography + Resource Card Border (2px solid + 14px radius) + <pre><code> Enhancer & PrismJS */
(function(){
  var oldSt=document.getElementById('gz-gsap-card-border');
  if(oldSt&&oldSt.parentNode)oldSt.parentNode.removeChild(oldSt);
  var st=document.createElement('style');
  st.id='gz-gsap-card-border';
  st.textContent=
    ':root{'+
      '--gz-bg:#fffceb;--gz-surface:#ffffff;--gz-surface-2:#f7f4e4;'+
      '--gz-text:#3d3d34;--gz-text-muted:#6e6e62;--gz-heading:#0e100f;--gz-cream:#fffce1;--gz-hr:#42433d;'+
      '--gz-link:#0ae448;--gz-link-text:#007a29;--gz-link-hover:#006120;--gz-pre-bg:#161816;--gz-code-inline-bg:#ece9d8;'+
      '--gz-font:"Plus Jakarta Sans","Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;'+
      '--gz-mono:"JetBrains Mono","Fira Code",SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace'+
    '}'+
    'html body{font-family:var(--gz-font)!important;color:var(--gz-text)!important}'+
    'html body h1,html body h2,html body h3,html body h4,html body h5,html body h6,'+
    'html body .title-postpage .post-title,html body h1.post-title.entry-title,'+
    'html body h2.post-title.entry-title,html body h2.post-title.entry-title a,html body h2.post-title.entry-title a:visited,'+
    'html body .PopularPosts .post-title,html body .PopularPosts .post-title a,html body .PopularPosts .post-title a:visited,'+
    'html body a.related-post-item-title,html body a.related-post-item-title:visited{'+
      'color:var(--gz-heading,#0e100f)!important;font-family:var(--gz-font)!important;font-weight:600!important;letter-spacing:-0.015em!important'+
    '}'+
    'html body h2.post-title.entry-title a:hover,html body .PopularPosts .post-title a:hover,html body a.related-post-item-title:hover{'+
      'color:var(--gz-heading,#0e100f)!important;text-decoration:underline!important;text-decoration-thickness:2px!important;text-underline-offset:3px!important'+
    '}'+
    'html body .post-tags,html body .post-tags a,html body .post-tags a:link,html body .post-tags a:visited,html body .post-tags a:hover,'+
    'html body.item .post-header-line-1,html body .item .post-header-line-1,'+
    'html body.item .post-author,html body.item .post-author a,html body.item .post-author span,'+
    'html body .item .post-author,html body .item .post-author a,html body .item .post-author span,'+
    'html body.item .post-timestamp,html body.item .post-timestamp a,html body.item .post-timestamp time,'+
    'html body .item .post-timestamp,html body .item .post-timestamp a,html body .item .post-timestamp time{'+
      'color:var(--gz-link-text,#007a29)!important;font-weight:500!important'+
    '}'+
    'html body .snippet-text-box,html body .popular-posts-snippet.snippet-container,html body .related-post-item-summary,html body .post-body{'+
      'color:var(--gz-text,#3d3d34)!important;font-family:var(--gz-font)!important;line-height:1.65!important;font-size:15.5px!important'+
    '}'+
    '#col-sidebar-wrapper,#sidebar,.sidebar,.PopularPosts{background:var(--gz-bg,#fffceb)!important}'+
    'html body .index .post-outer,html body.index .post-outer,'+
    'html body .archive .post-outer,html body.archive .post-outer,'+
    'html body .search .post-outer,html body.search .post-outer,'+
    'html body .PopularPosts article.post,.PopularPosts article.post{'+
      'background:var(--gz-bg,#fffceb)!important;'+
      'border:2px solid var(--gz-heading,#0e100f)!important;'+
      'border-radius:14px!important;'+
      'padding:20px!important;'+
      'margin:0 0 20px 0!important;'+
      'display:flow-root!important;'+
      'overflow:hidden!important;'+
      'width:100%!important;'+
      'box-sizing:border-box!important'+
    '}'+
    'html body .index .post-outer:hover,html body.index .post-outer:hover,'+
    'html body .archive .post-outer:hover,html body.archive .post-outer:hover,'+
    'html body .search .post-outer:hover,html body.search .post-outer:hover,'+
    'html body .PopularPosts article.post:hover,.PopularPosts article.post:hover{'+
      'background:var(--gz-bg,#fffceb)!important;'+
      'border-color:var(--gz-heading,#0e100f)!important'+
    '}'+
    '.PopularPosts .post+.post{margin-top:0!important}'+
    '.PopularPosts h3.title,.PopularPosts .popular-brace-title{'+
      'display:inline-flex!important;align-items:center!important;gap:8px!important;'+
      'font-size:16px!important;font-weight:500!important;color:var(--gz-heading,#0e100f)!important;'+
      'margin:8px 0 18px 0!important'+
    '}'+
    '.PopularPosts .popular-brace-title .brace-l,.PopularPosts .popular-brace-title .brace-r{'+
      'font-size:1.25em;font-weight:500;color:var(--gz-heading,#0e100f);line-height:1'+
    '}'+
    'html body .FeaturedPost .featured-snippet-thumbnail{'+
      'border:2px solid var(--gz-heading,#0e100f)!important;'+
      'border-radius:14px!important;'+
      'overflow:hidden!important;'+
      'box-sizing:border-box!important'+
    '}'+
    'html body .post-body pre,html body pre,html body pre[class*="language-"]{'+
      'background:var(--gz-pre-bg,#161816)!important;color:var(--gz-cream,#fffce1)!important;'+
      'font-family:var(--gz-mono)!important;font-size:14px!important;line-height:1.6!important;'+
      'border:2px solid var(--gz-heading,#0e100f)!important;border-radius:12px!important;'+
      'padding:0!important;margin:1.4em 0!important;overflow-x:auto!important'+
    '}'+
    'html body .post-body pre code,html body pre code,html body pre[class*="language-"]>code{'+
      'background:transparent!important;color:var(--gz-cream,#fffce1)!important;'+
      'font-family:var(--gz-mono)!important;font-size:14px!important;line-height:1.6!important;'+
      'padding:20px 22px!important;display:block!important;text-shadow:none!important'+
    '}'+
    '.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#7c7c6f!important;font-style:italic}'+
    '.token.punctuation{color:#bbbaa6!important}'+
    '.token.property,.token.tag,.token.constant,.token.symbol,.token.deleted,.token.keyword{color:#0ae448!important}'+
    '.token.boolean,.token.number,.token.regex,.token.important{color:#ff8709!important}'+
    '.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#fffce1!important}'+
    '.token.atrule,.token.attr-value,.token.function,.token.class-name{color:#9d95ff!important}'+
    'div.code-toolbar{position:relative;margin:1.4em 0}'+
    'div.code-toolbar>pre{margin:0!important}'+
    'div.code-toolbar>.toolbar{position:absolute;top:10px;right:12px;z-index:5;display:flex;align-items:center;gap:6px}'+
    '.gz-lang-badge{color:#7c7c6f;font-family:var(--gz-mono);font-size:11px;font-weight:600;text-transform:uppercase;padding:3px 8px;user-select:none}'+
    '.gz-copy-btn{color:var(--gz-cream,#fffce1)!important;font-family:var(--gz-font)!important;font-size:12px!important;font-weight:600!important;padding:4px 12px!important;background:#28292b!important;border:1px solid #4a4d45!important;border-radius:999px!important;cursor:pointer!important;transition:all .18s ease!important}'+
    '.gz-copy-btn:hover,.gz-copy-btn.is-copied{color:#0ae448!important;border-color:#0ae448!important;background:#1f2120!important}'+
    'html body .comments .avatar-image-container{width:42px!important;height:42px!important;max-height:42px!important;border-radius:50%!important;border:2px solid var(--gz-heading,#0e100f)!important;box-sizing:border-box!important}'+
    'html body .comments .avatar-image-container img{width:38px!important;height:38px!important;border-radius:50%!important;display:block!important}'+
    'html body .comments .comment-block{'+
      'margin-left:56px!important;background:var(--gz-bg,#fffceb)!important;'+
      'padding:16px 20px!important;border-radius:14px!important;border:2px solid var(--gz-heading,#0e100f)!important;box-sizing:border-box!important'+
    '}'+
    'html body .comments .comments-content cite.user a{color:var(--gz-heading,#0e100f)!important;font-weight:600!important}'+
    'html body .comments .comments-content .comment-content{color:var(--gz-text,#3d3d34)!important;padding:10px 0 12px!important;font-size:15px!important;line-height:1.6!important}'+
    'html body .comments .comment .comment-actions a{'+
      'color:var(--gz-heading,#0e100f)!important;background:var(--gz-bg,#fffceb)!important;'+
      'border:1.5px solid var(--gz-heading,#0e100f)!important;border-radius:999px!important;'+
      'padding:4px 14px!important;font-size:12.5px!important;font-weight:600!important;margin-right:8px!important;display:inline-block!important;line-height:1.4!important;text-decoration:none!important'+
    '}'+
    'html body .comments .continue a{'+
      'display:inline-block!important;font-weight:600!important;color:var(--gz-heading,#0e100f)!important;'+
      'background:var(--gz-bg,#fffceb)!important;border:2px solid var(--gz-heading,#0e100f)!important;'+
      'border-radius:999px!important;padding:7px 18px!important;font-size:13.5px!important;margin-top:6px!important;text-decoration:none!important'+
    '}'+
    'html body .comment-post-messages{'+
      'background:var(--gz-bg,#fffceb)!important;border:2px solid var(--gz-heading,#0e100f)!important;border-radius:14px!important;padding:16px 20px!important;box-sizing:border-box!important'+
    '}'+
    'html body iframe#comment-editor{'+
      'margin:16px 0 24px!important;border:2px solid var(--gz-heading,#0e100f)!important;border-radius:14px!important;background:#ffffff!important;padding:8px!important;box-sizing:border-box!important'+
    '}'+
    'html body .related-post-style-2 li{'+
      'border:2px solid var(--gz-heading,#0e100f)!important;border-radius:14px!important;padding:16px!important;background:var(--gz-bg,#fffceb)!important;box-sizing:border-box!important;display:flow-root!important'+
    '}'+
    'html body .post-labels a,html body .post-labels a:visited,'+
    'html body .widget-content.cloud-label-widget-content a,'+
    'html body .post-body :not(pre)>code,html body :not(pre)>code{'+
      'display:inline-flex!important;align-items:center!important;font-family:var(--gz-mono)!important;font-size:13px!important;font-weight:700!important;'+
      'padding:3px 10px!important;background:#42433d!important;color:var(--gz-cream,#fffce1)!important;'+
      'border:0!important;border-radius:6px!important;text-transform:lowercase!important;text-decoration:none!important;line-height:1.4!important'+
    '}'+
    'html body .post-labels a:hover,html body .widget-content.cloud-label-widget-content a:hover{'+
      'background:var(--gz-heading,#0e100f)!important;color:var(--gz-link,#0ae448)!important'+
    '}'+
    'html body .share-post ul,html body .entry-share-list{'+
      'margin:0!important;padding:0!important;display:flex!important;flex-wrap:wrap!important;align-items:center!important;justify-content:space-between!important;gap:8px!important;width:100%!important'+
    '}'+
    'html body .share-post li{display:inline-flex!important;flex:1 1 auto!important;width:auto!important;float:none!important;margin:0!important;padding:0!important;border:0!important}'+
    'html body .share-post li a.line{display:none!important}'+
    'html body .share-post li a{'+
      'display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:7px!important;width:100%!important;'+
      'height:38px!important;padding:0 14px!important;border:2px solid var(--gz-heading,#0e100f)!important;border-radius:999px!important;white-space:nowrap!important;'+
      'background:var(--gz-bg,#fffceb)!important;color:var(--gz-heading,#0e100f)!important;font-size:13px!important;font-weight:600!important;text-decoration:none!important;box-sizing:border-box!important'+
    '}'+
    'html body .share-post li a:hover{border-color:var(--gz-link,#0ae448)!important;transform:translateY(-1px)}'+
    'html body .share-post li a i,html body .share-post li a .fab,html body .share-post li a .fas{'+
      'color:var(--gz-heading,#0e100f)!important;display:inline-block!important;font-size:15px!important;margin:0!important;width:auto!important;height:auto!important'+
    '}'+
    'html body .share-post li span{display:inline-block!important;color:var(--gz-heading,#0e100f)!important;font-size:13.5px!important;font-weight:600!important}'+
    'html body .author-profile{'+
      'padding:20px 22px!important;margin:20px 0!important;border:2px solid var(--gz-heading,#0e100f)!important;border-radius:14px!important;background:var(--gz-bg,#fffceb)!important;display:block!important;width:100%!important;box-sizing:border-box!important'+
    '}'+
    'html body .author-box{display:flex!important;align-items:center!important;gap:18px!important}'+
    'html body .author-box-image{flex:0 0 64px!important}'+
    'html body .author-box-image img{float:none!important;margin:0!important;width:64px!important;height:64px!important;border-radius:50%!important;border:2px solid var(--gz-heading,#0e100f)!important;object-fit:cover!important;display:block!important}'+
    'html body .author-name a{font-weight:600!important;color:var(--gz-heading,#0e100f)!important;font-size:18px!important}'+
    'html body .author-role-tag{color:var(--gz-link-text,#007a29)!important;font-size:12.5px!important;font-weight:600!important;margin-left:8px!important}'+
    'html body .author-desc{color:var(--gz-text,#3d3d34)!important;font-size:15px!important;line-height:1.6!important;margin-top:4px!important;display:block!important}'+
    'html body hr,html body .post-body hr,html body .entry-content hr,html body hr.gsap-hr{'+
      'display:block!important;width:100%!important;height:0!important;border:0!important;'+
      'border-top:1px solid var(--gz-hr,#42433d)!important;background:transparent!important;'+
      'margin:20px 0!important;padding:0!important;opacity:1!important;clear:both!important'+
    '}'+
    'html body .tit-home-tags{padding-bottom:12px!important;border-bottom:1px solid var(--gz-hr,#42433d)!important;margin-bottom:15px!important}'+
    'html body #related-wrapper{border-top:1px solid var(--gz-hr,#42433d)!important;border-bottom:1px solid var(--gz-hr,#42433d)!important}'+
    'html body #top-widget{border:0!important;background:transparent!important;max-width:760px!important;width:100%!important;margin:10px auto 4px!important;padding:0 15px!important;box-sizing:border-box!important;text-align:center!important;display:block!important}'+
    'html body .top-widget{background:transparent!important;padding:0!important;display:block!important}'+
    'html body .top-widget .widget .widget-content{padding:0!important}'+
    'html body.item #top-widget,html body.item #gsap-mmo-hero,html body.item #gz-hr-hero,html body.static_page #top-widget,html body hr.gsap-hr,html body #gz-hr-hero,html body #gz-hr-nav,html body #gz-hr-post-header,html body #gz-hr-post-footer,html body #gz-hr-share,html body #gz-hr-author,html body #gz-hr-sidebar{display:none!important;border:0!important;margin:0!important;padding:0!important;height:0!important}'+
    'html body .gsap-mmo-hero{'+
      'position:relative!important;width:100%!important;background:transparent!important;color:var(--gz-heading,#0e100f)!important;'+
      'border:0!important;border-radius:0!important;padding:26px 10px 12px!important;'+
      'margin:0 auto!important;overflow:visible!important;box-sizing:border-box!important;text-align:center!important;cursor:pointer!important'+
    '}'+
    'html body .gsap-mmo-stage{position:relative!important;max-width:560px!important;margin:0 auto!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:4px!important}'+
    'html body .gsap-mmo-row{position:relative!important;display:flex!important;align-items:baseline!important;justify-content:center!important;line-height:.94!important;font-family:var(--gz-font)!important;font-weight:700!important;font-size:clamp(54px,10.2vw,94px)!important;letter-spacing:-0.035em!important;color:var(--gz-heading,#0e100f)!important;perspective:700px!important}'+
    'html body .gsap-mmo-row--1{justify-content:center!important;padding-left:0!important;transform:translateX(-38px)!important;z-index:3!important}'+
    'html body .gsap-mmo-row--2{justify-content:center!important;padding-left:0!important;transform:translateX(42px)!important;margin-top:2px!important;z-index:2!important}'+
    'html body .gsap-mmo-word{position:relative!important;display:inline-flex!important;align-items:baseline!important;color:var(--gz-heading,#0e100f)!important}'+
    'html body .gsap-mmo-char{position:relative!important;display:inline-block!important;color:var(--gz-heading,#0e100f)!important;z-index:2!important;will-change:transform!important;transform-origin:50% 80%!important}'+
    'html body .gsap-flair-windmill{position:absolute!important;top:clamp(-34px,-3.8vw,-22px)!important;left:clamp(46px,8vw,82px)!important;width:clamp(52px,7.4vw,70px)!important;height:clamp(52px,7.4vw,70px)!important;z-index:3!important;pointer-events:none!important;perspective:600px!important}'+
    'html body .gsap-flair-windmill svg{width:100%!important;height:100%!important;display:block!important;overflow:visible!important}'+
    'html body .gsap-flair-clover{position:absolute!important;left:auto!important;right:clamp(-82px,-8.5vw,-60px)!important;top:clamp(-18px,-2vw,-8px)!important;width:clamp(88px,12.2vw,118px)!important;height:clamp(88px,12.2vw,118px)!important;z-index:1!important;pointer-events:none!important;opacity:1!important}'+
    'html body .gsap-flair-clover svg{width:100%!important;height:100%!important;display:block!important;overflow:visible!important}'+
    'html body #top,#top{'+
      'box-shadow:none!important;margin:0!important;padding:0!important;'+
      'width:46px!important;height:46px!important;line-height:42px!important;text-align:center!important;'+
      'border-radius:50%!important;border:2px solid var(--gz-heading,#0e100f)!important;'+
      'background:var(--gz-bg,#fffceb)!important;background-color:var(--gz-bg,#fffceb)!important;color:var(--gz-heading,#0e100f)!important;'+
      'position:fixed!important;right:20px!important;bottom:20px!important;box-sizing:border-box!important'+
    '}'+
    'html body #top:hover,#top:hover{'+
      'background:var(--gz-bg,#fffceb)!important;background-color:var(--gz-bg,#fffceb)!important;color:var(--gz-heading,#0e100f)!important;border-color:var(--gz-heading,#0e100f)!important'+
    '}'+
    '#top svg{display:inline-block!important;vertical-align:middle!important;width:22px!important;height:22px!important;stroke:var(--gz-heading,#0e100f)!important}'+
    '#top i,#top .fa,#top .fas{display:none!important}'+
    '.gz-hidden-label{display:none!important}'+
    '.index .post-outer,.archive .post-outer,.search .post-outer{position:relative!important}'+
    '.gz-has-vip-dock .title-homepage{padding-right:104px!important}'+
    '.gz-vip04-dock{position:absolute!important;top:-1px!important;right:-1px!important;z-index:6!important;background:#0e100f!important;color:#fffce1!important;padding:7px 14px 8px 15px!important;border-radius:0 12px 0 13px!important;border-left:2px solid #0e100f!important;border-bottom:2px solid #0e100f!important;display:inline-flex!important;align-items:center!important;text-decoration:none!important;box-sizing:border-box!important}'+
    '.gz-vip04-pill{display:inline-flex!important;align-items:center!important;background:#0e100f!important;color:#fffce1!important;padding:5px 12px!important;border-radius:999px!important;border:2px solid #0e100f!important;text-decoration:none!important;vertical-align:middle!important;margin-left:8px!important;box-sizing:border-box!important}'+
    '.gz-vip04-inner{display:inline-flex!important;align-items:center!important;gap:5px!important;font-family:var(--gz-mono)!important;font-size:12px!important;font-weight:800!important;letter-spacing:.07em!important;color:#fffce1!important;line-height:1!important;white-space:nowrap!important}'+
    '.gz-vip04-inner .br{color:#0ae448!important;font-size:14px!important;font-weight:700!important;line-height:1!important;transition:transform .22s cubic-bezier(.22,1,.36,1)!important}'+
    '.gz-vip04-inner svg.gz-lk-svg{width:13.5px!important;height:13.5px!important;display:inline-block!important;flex-shrink:0!important;transition:transform .26s cubic-bezier(.22,1,.36,1)!important}'+
    '.gz-has-vip-dock:hover .gz-vip04-dock .br-l,.gz-vip04-dock:hover .br-l,.gz-vip04-pill:hover .br-l{transform:translateX(-2px)!important}'+
    '.gz-has-vip-dock:hover .gz-vip04-dock .br-r,.gz-vip04-dock:hover .br-r,.gz-vip04-pill:hover .br-r{transform:translateX(2px)!important}'+
    '.gz-has-vip-dock:hover .gz-vip04-dock svg.gz-lk-svg,.gz-vip04-dock:hover svg.gz-lk-svg,.gz-vip04-pill:hover svg.gz-lk-svg{transform:scale(1.13) rotate(-7deg)!important}'+
    '.gz-inline-lock-svg{width:15px!important;height:15px!important;display:inline-block!important;vertical-align:-2.5px!important;margin-right:4px!important;flex-shrink:0!important}'+
    '.gz-card-badge{display:inline-flex!important;align-items:center!important;gap:5px!important;font-family:var(--gz-mono)!important;font-size:11.5px!important;font-weight:700!important;padding:2px 9px!important;border-radius:6px!important;line-height:1.4!important;text-decoration:none!important;white-space:nowrap!important;margin-left:8px!important;vertical-align:middle!important;background:#0e100f!important;color:#0ae448!important}'+
    '.gz-norm-p{margin:0 0 14px 0!important;color:var(--gz-text,#3d3d34)!important;font-family:var(--gz-font)!important;font-size:15.5px!important;line-height:1.68!important}'+
    '.gz-lock-curtain{position:relative!important;min-height:82px!important;max-height:108px!important;overflow:hidden!important;user-select:none!important;pointer-events:none!important;filter:blur(3.2px)!important;opacity:.88!important;-webkit-mask-image:linear-gradient(180deg,#000 0%,rgba(0,0,0,.92) 55%,rgba(0,0,0,.1) 100%)!important;mask-image:linear-gradient(180deg,#000 0%,rgba(0,0,0,.92) 55%,rgba(0,0,0,.1) 100%)!important;margin:6px 0 -4px 0!important;padding-top:2px!important}'+
    '.gz-pro-gate{position:relative;z-index:5;border:2px solid #0e100f!important;border-radius:14px!important;background:var(--gz-bg,#fffceb)!important;padding:11px 14px!important;margin:8px 0 22px!important;box-sizing:border-box!important}'+
    '.gz-gate-bar{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:10px!important;flex-wrap:wrap!important}'+
    '.gz-gate-left{display:inline-flex!important;align-items:center!important;gap:8px!important;flex-wrap:wrap!important;min-width:0}'+
    '.gz-gate-prompt{font-family:var(--gz-font)!important;font-size:13px!important;font-weight:700!important;color:#0e100f!important;white-space:nowrap!important}'+
    '.gz-kw-chip{display:inline-flex!important;align-items:center!important;justify-content:flex-start!important;gap:8px!important;background:#42433d!important;color:#fffce1!important;border:1.5px solid #0e100f!important;font-family:var(--gz-mono)!important;font-size:13px!important;font-weight:700!important;height:36px!important;padding:0 6px 0 11px!important;border-radius:8px!important;cursor:pointer!important;user-select:none!important;flex:0 0 auto!important;width:auto!important;box-sizing:border-box!important}'+
    '.gz-kw-chip .gz-kw-code{color:#fffce1!important;font-weight:700!important;white-space:nowrap!important}'+
    '.gz-kw-chip .gz-kw-copy-tag{background:#0e100f!important;color:#0ae448!important;padding:4px 9px!important;border-radius:6px!important;font-size:11px!important;font-weight:700!important;line-height:1.2!important;flex-shrink:0!important;white-space:nowrap!important}'+
    '.gz-kw-chip.is-copied .gz-kw-copy-tag{background:#0ae448!important;color:#0e100f!important}'+
    '.gz-cmt-code-bar{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:10px!important;flex-wrap:wrap!important;border:2px solid #0e100f!important;border-radius:14px!important;background:var(--gz-bg,#fffceb)!important;padding:10px 14px!important;margin:0 0 16px 0!important;box-sizing:border-box!important}'+
    '.gz-cmt-live-badge{display:inline-flex!important;align-items:center!important;gap:6px!important;font-family:var(--gz-mono)!important;font-size:11.5px!important;font-weight:700!important;color:#008b38!important;white-space:nowrap!important}'+
    '.gz-cmt-live-badge .gz-pulse{width:7px;height:7px;border-radius:50%;background:#0ae448;display:inline-block}'+
    '.gz-paid-tag{display:inline-flex!important;align-items:center!important;gap:8px!important;font-family:var(--gz-font)!important;font-size:13px!important;font-weight:700!important;color:#0e100f!important;flex:0 0 auto!important}'+
    '.gz-paid-tag .gz-price-pill{background:#42433d!important;color:#0ae448!important;font-family:var(--gz-mono)!important;padding:4px 10px!important;border-radius:6px!important;font-size:12.5px!important;font-weight:700!important}'+
    '.gz-gate-btns{display:flex!important;align-items:center!important;gap:8px!important;flex-shrink:0!important;margin-left:auto!important}'+
    '.gz-gate-btn{height:36px!important;padding:0 14px!important;border-radius:999px!important;border:2px solid #0e100f!important;font-family:var(--gz-font)!important;font-size:12.5px!important;font-weight:700!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;cursor:pointer!important;white-space:nowrap!important;box-sizing:border-box!important}'+
    '.gz-gate-btn--primary{background:#0ae448!important;color:#0e100f!important}'+
    '.gz-gate-btn--ghost{background:var(--gz-bg,#fffceb)!important;color:#0e100f!important}'+
    '.gz-gate-status{margin-top:8px;font-size:12px;font-weight:600;color:#3d3d34;display:none}'+
    '.gz-gate-status.is-show{display:block}'+
    '.gz-gate-status.is-err{color:#d90429}'+
    '.gz-gate-status.is-ok{color:#008b38}'+
    '.gz-unlocked-pill{display:inline-flex;align-items:center;gap:6px;background:#42433d;color:#0ae448;font-family:var(--gz-mono);font-size:11.5px;font-weight:700;padding:4px 11px;border-radius:6px;margin:8px 0 12px}'+
    '.gz-qr-drawer{display:none;margin-top:10px;padding-top:10px;border-top:1px dashed #42433d}'+
    '.gz-qr-drawer.is-open{display:block}'+
    '.gz-qr-grid-wrap{display:flex;align-items:center;gap:14px}'+
    '.gz-qr-frame{width:110px;height:110px;border:2px solid #0e100f;border-radius:10px;background:#fff;padding:4px;flex-shrink:0;display:flex;align-items:center;justify-content:center;box-sizing:border-box}'+
    '.gz-qr-frame img{width:100%!important;height:100%!important;object-fit:contain!important;display:block!important}'+
    '.gz-qr-meta{flex:1 1 auto;min-width:0;text-align:left}'+
    '.gz-qr-amount-row{font-family:var(--gz-mono);font-size:13px;font-weight:700;color:#0e100f;margin-bottom:5px}'+
    '.gz-qr-live-pill{display:inline-flex;align-items:center;gap:6px;background:#0e100f;color:#0ae448;font-family:var(--gz-mono);font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px;margin-bottom:6px}'+
    '.gz-qr-live-pill.is-fail{color:#ff4d6d}'+
    '.gz-qr-live-pill .gz-pulse{width:7px;height:7px;border-radius:50%;background:currentColor}'+
    '.gz-qr-copy-row{display:flex;align-items:center;gap:6px;flex-wrap:wrap}'+
    '.gz-mini-chip{background:#42433d;color:#fffce1;border:0;border-radius:6px;font-family:var(--gz-mono);font-size:11px;font-weight:700;padding:3px 8px;cursor:pointer}'+
    '.gz-recover-row{display:none;align-items:center;gap:8px;margin-top:10px;padding-top:10px;border-top:1px dashed #42433d}'+
    '.gz-recover-row.is-open{display:flex}'+
    '.gz-recover-input{flex:1 1 auto;height:34px;padding:0 12px;border:1.5px solid #0e100f;border-radius:999px;background:#fff;color:#0e100f;font-family:var(--gz-mono);font-size:12px;outline:0}'+
    '.gz-admin-overlay{position:fixed;inset:0;z-index:99999;background:rgba(14,16,15,.72);display:none;align-items:flex-start;justify-content:center;overflow-y:auto;padding:24px 12px;box-sizing:border-box}'+
    '.gz-admin-overlay.is-open{display:flex}'+
    '.gz-admin-panel{width:100%;max-width:760px;background:var(--gz-bg,#fffceb);border:2px solid #0e100f;border-radius:14px;padding:20px;box-sizing:border-box;color:#0e100f}'+
    '.gz-admin-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding-bottom:12px;border-bottom:1px solid #42433d;margin-bottom:14px;flex-wrap:wrap}'+
    '.gz-admin-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:14px}'+
    '.gz-kpi-card{border:2px solid #0e100f;border-radius:10px;padding:10px 12px;background:var(--gz-bg,#fffceb)}'+
    '.gz-kpi-card .k-num{font-family:var(--gz-mono);font-size:18px;font-weight:700;color:#0e100f;display:block}'+
    '.gz-kpi-card .k-lbl{font-size:11.5px;color:#3d3d34;font-weight:600}'+
    '.gz-admin-Check-bar{display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap}'+
    '.gz-admin-diag{background:#161816;color:#fffce1;font-family:var(--gz-mono);font-size:12px;padding:12px 14px;border-radius:10px;border:2px solid #0e100f;margin-bottom:14px;display:none;white-space:pre-wrap;line-height:1.5}'+
    '.gz-admin-diag.is-show{display:block}'+
    '.gz-admin-table-wrap{overflow-x:auto}'+
    '.gz-admin-table{width:100%;border-collapse:collapse;font-size:12.5px}'+
    '.gz-admin-table th,.gz-admin-table td{border-bottom:1px solid #42433d;padding:8px 6px;text-align:left;vertical-align:middle}'+
    '.gz-st-badge{font-family:var(--gz-mono);font-size:10.5px;font-weight:700;padding:2px 7px;border-radius:5px;display:inline-block}'+
    '.gz-st-badge--paid{background:#0ae448;color:#0e100f}'+
    '.gz-st-badge--pending{background:#42433d;color:#ffe866}'+
    '.gz-st-badge--failed{background:#ff4d6d;color:#fffce1}'+
    '@media screen and (max-width:580px){.gz-pro-gate{padding:10px 12px!important}.gz-gate-bar{flex-direction:column!important;align-items:stretch!important;gap:8px!important}.gz-gate-left{width:100%!important;justify-content:space-between!important}.gz-gate-btns{width:100%!important;display:grid!important;grid-template-columns:1fr auto!important;gap:8px!important;margin-left:0!important}.gz-qr-grid-wrap{flex-direction:column!important;align-items:center!important;text-align:center!important}.gz-qr-meta{text-align:center!important;width:100%!important}.gz-qr-amount-row,.gz-qr-copy-row{justify-content:center!important}.gz-admin-kpis{grid-template-columns:1fr 1fr!important}}';
  if(!document.getElementById('gz-layout-inlined')){(document.head||document.documentElement).appendChild(st);}

  function detectLang(raw){
    var s=(raw||'').trim();
    if(/^<!DOCTYPE|^<\/?[a-z][\s\S]*>/i.test(s))return'html';
    if(/\{[\s\S]*:[^{}]*;[\s\S]*\}/.test(s)&&!/function\s|const\s|let\s|var\s|=>/.test(s))return'css';
    return'javascript';
  }

  function enhanceCodeBlocks(){
    var pres=document.querySelectorAll('.post-body pre, .entry-content pre, pre');
    if(!pres.length)return;
    for(var i=0;i<pres.length;i++){
      var pre=pres[i];
      var code=pre.querySelector('code');
      if(!code){
        code=document.createElement('code');
        var rawText=pre.textContent||'';
        code.className='language-'+detectLang(rawText);
        code.textContent=rawText;
        pre.innerHTML='';
        pre.appendChild(code);
      }else if(!/language-/.test(code.className||'')){
        code.className=((code.className||'')+' language-'+detectLang(code.textContent||'')).trim();
      }
      var m=(code.className||'').match(/language-([a-z0-9_-]+)/i);
      var lang=m?m[1].toLowerCase():'js';
      if(!/language-/.test(pre.className||'')){
        pre.className=((pre.className||'')+' language-'+lang).trim();
      }
      if(!pre.parentElement||!pre.parentElement.classList.contains('code-toolbar')){
        var wrap=document.createElement('div');
        wrap.className='code-toolbar';
        pre.parentNode.insertBefore(wrap,pre);
        wrap.appendChild(pre);
        var tb=document.createElement('div');
        tb.className='toolbar';
        var badge=document.createElement('span');
        badge.className='gz-lang-badge';
        badge.textContent=lang==='javascript'?'JS':lang.toUpperCase();
        var btn=document.createElement('button');
        btn.type='button';
        btn.className='gz-copy-btn';
        btn.textContent='Copy';
        (function(cEl,bEl){
          bEl.addEventListener('click',function(){
            var txt=cEl.textContent||'';
            function done(){
              bEl.textContent='Copied! \u2713';
              bEl.classList.add('is-copied');
              setTimeout(function(){
                bEl.textContent='Copy';
                bEl.classList.remove('is-copied');
              },1800);
            }
            if(navigator.clipboard&&navigator.clipboard.writeText){
              navigator.clipboard.writeText(txt).then(done).catch(function(){
                var ta=document.createElement('textarea');
                ta.value=txt;document.body.appendChild(ta);ta.select();
                try{document.execCommand('copy');}catch(e){}
                document.body.removeChild(ta);done();
              });
            }else{
              var ta=document.createElement('textarea');
              ta.value=txt;document.body.appendChild(ta);ta.select();
              try{document.execCommand('copy');}catch(e){}
              document.body.removeChild(ta);done();
            }
          });
        })(code,btn);
        tb.appendChild(badge);
        tb.appendChild(btn);
        wrap.appendChild(tb);
      }
    }
    if(window.Prism&&window.Prism.highlightAll){
      window.Prism.highlightAll();
    }else if(!document.getElementById('gz-prism-js')){
      var ps=document.createElement('script');
      ps.id='gz-prism-js';
      ps.src='https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js';
      ps.onload=function(){if(window.Prism&&window.Prism.highlightAll)window.Prism.highlightAll();};
      document.body.appendChild(ps);
    }
  }

  function ensureTopArrowAndPopularTitle(){
    var topBtn=document.getElementById('top');
    if(topBtn&&!topBtn.querySelector('svg')){
      topBtn.innerHTML='<svg aria-hidden="true" fill="none" height="22" stroke="currentColor" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" viewBox="0 0 24 24" width="22"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
    }
    var pop=document.getElementById('PopularPosts1');
    if(pop&&!document.body.classList.contains('item')){
      var existing=pop.querySelector('.popular-brace-title');
      if(!existing){
        var h3=pop.querySelector('h3.title');
        if(!h3){
          h3=document.createElement('h3');
          pop.insertBefore(h3,pop.firstChild);
        }
        h3.className='title popular-brace-title';
        h3.innerHTML='<span class="brace-l">{</span><span class="logo-text">Popular Posts</span><span class="brace-r">}</span>';
      }
    }
    enhanceCodeBlocks();
    enhanceShareAndAuthor();
    ensureGsapHrDividers();
    initGsapMmoHero();
  }

  function insertHrAfter(el,id){
    if(!el||!el.parentNode||document.getElementById(id))return;
    var hr=document.createElement('hr');
    hr.id=id;
    hr.className='gsap-hr';
    if(el.nextSibling)el.parentNode.insertBefore(hr,el.nextSibling);
    else el.parentNode.appendChild(hr);
  }
  function insertHrBefore(el,id){
    if(!el||!el.parentNode||document.getElementById(id))return;
    var hr=document.createElement('hr');
    hr.id=id;
    hr.className='gsap-hr';
    el.parentNode.insertBefore(hr,el);
  }
  function ensureGsapHrDividers(){
    var hrs=document.querySelectorAll('hr.gsap-hr,#gz-hr-hero,#gz-hr-nav,#gz-hr-post-header,#gz-hr-post-footer,#gz-hr-share,#gz-hr-author,#gz-hr-sidebar');
    for(var i=0;i<hrs.length;i++){
      if(hrs[i]&&hrs[i].parentNode)hrs[i].parentNode.removeChild(hrs[i]);
    }
  }

  function getHeroMarkup(){
    return (
      '<div class="gsap-mmo-hero" id="gsap-mmo-hero">' +
        '<div class="gsap-mmo-stage">' +
          '<div class="gsap-mmo-row gsap-mmo-row--1">' +
            '<span class="gsap-mmo-word" aria-label="MMO">' +
              '<span class="gsap-flair-windmill" id="gsap-flair-windmill" aria-hidden="true">' +
                '<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                  '<defs>' +
                    '<linearGradient id="gz-pro-dollar-grad" x1="28" y1="4" x2="112" y2="130" gradientUnits="userSpaceOnUse">' +
                      '<stop offset="0%" stop-color="#0AE448"/>' +
                      '<stop offset="48%" stop-color="#008B38"/>' +
                      '<stop offset="100%" stop-color="#FF8709"/>' +
                    '</linearGradient>' +
                  '</defs>' +
                  '<path d="M63 10C63 5.6 66.6 2 71 2C75.4 2 79 5.6 79 10V18.8C94.2 21.4 105 31.8 105 45.5C105 51.3 100.3 56 94.5 56C88.7 56 84 51.3 84 45.5C84 39.5 78.2 35.8 70 35.8C61.8 35.8 56 39.2 56 44.5C56 50.2 61.8 52.8 73.5 55.6C91.2 59.8 107 66.4 107 84.5C107 99.4 95.8 110.2 79 112.8V122C79 126.4 75.4 130 71 130C66.6 130 63 126.4 63 122V112.8C46.2 109.8 34.5 98.4 34.5 83.5C34.5 77.7 39.2 73 45 73C50.8 73 55.5 77.7 55.5 83.5C55.5 90.2 62.2 94.5 72 94.5C81.5 94.5 88 90.8 88 85C88 79 81.8 76.2 69.2 73.2C52.2 69.2 37 62.6 37 45C37 31 47.8 21.5 63 18.8V10Z" transform="translate(5 6)" fill="#0E100F" fill-opacity="0.28"/>' +
                  '<path d="M63 10C63 5.6 66.6 2 71 2C75.4 2 79 5.6 79 10V18.8C94.2 21.4 105 31.8 105 45.5C105 51.3 100.3 56 94.5 56C88.7 56 84 51.3 84 45.5C84 39.5 78.2 35.8 70 35.8C61.8 35.8 56 39.2 56 44.5C56 50.2 61.8 52.8 73.5 55.6C91.2 59.8 107 66.4 107 84.5C107 99.4 95.8 110.2 79 112.8V122C79 126.4 75.4 130 71 130C66.6 130 63 126.4 63 122V112.8C46.2 109.8 34.5 98.4 34.5 83.5C34.5 77.7 39.2 73 45 73C50.8 73 55.5 77.7 55.5 83.5C55.5 90.2 62.2 94.5 72 94.5C81.5 94.5 88 90.8 88 85C88 79 81.8 76.2 69.2 73.2C52.2 69.2 37 62.6 37 45C37 31 47.8 21.5 63 18.8V10Z" fill="url(#gz-pro-dollar-grad)"/>' +
                  '<path d="M46 39C48 29 58 24 70 24" stroke="#FFFFFF" stroke-opacity="0.48" stroke-width="3.2" stroke-linecap="round"/>' +
                '</svg>' +
              '</span>' +
              '<span class="gsap-mmo-char">M</span>' +
              '<span class="gsap-mmo-char">M</span>' +
              '<span class="gsap-mmo-char">O</span>' +
            '</span>' +
          '</div>' +
          '<div class="gsap-mmo-row gsap-mmo-row--2">' +
            '<span class="gsap-mmo-word" aria-label="TeaM">' +
              '<span class="gsap-flair-clover" id="gsap-flair-clover" aria-hidden="true">' +
                '<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                  '<defs>' +
                    '<linearGradient id="gz-pro-ghost-grad" x1="24" y1="8" x2="142" y2="152" gradientUnits="userSpaceOnUse">' +
                      '<stop offset="0%" stop-color="#FF2A85"/>' +
                      '<stop offset="50%" stop-color="#C9184A"/>' +
                      '<stop offset="100%" stop-color="#590D22"/>' +
                    '</linearGradient>' +
                  '</defs>' +
                  '<path fill-rule="evenodd" clip-rule="evenodd" d="M82 10C46.5 10 20 36.8 20 72.5V132C20 140.5 29.8 145.2 36.5 139.8L46.2 132C51.2 128 58.3 128.2 63.1 132.4L71.8 140C77.6 145.1 86.4 145.1 92.2 140L100.9 132.4C105.7 128.2 112.8 128 117.8 132L127.5 139.8C134.2 145.2 144 140.5 144 132V72.5C144 36.8 117.5 10 82 10ZM65 54C70 54 74 58.8 74 65V79C74 85.2 70 90 65 90C60 90 56 85.2 56 79V65C56 58.8 60 54 65 54ZM105 54C110 54 114 58.8 114 65V79C114 85.2 110 90 105 90C100 90 96 85.2 96 79V65C96 58.8 100 54 105 54Z" transform="translate(5 6) rotate(6 82 78)" fill="#2B0510" fill-opacity="0.24"/>' +
                  '<path fill-rule="evenodd" clip-rule="evenodd" d="M82 10C46.5 10 20 36.8 20 72.5V132C20 140.5 29.8 145.2 36.5 139.8L46.2 132C51.2 128 58.3 128.2 63.1 132.4L71.8 140C77.6 145.1 86.4 145.1 92.2 140L100.9 132.4C105.7 128.2 112.8 128 117.8 132L127.5 139.8C134.2 145.2 144 140.5 144 132V72.5C144 36.8 117.5 10 82 10ZM65 54C70 54 74 58.8 74 65V79C74 85.2 70 90 65 90C60 90 56 85.2 56 79V65C56 58.8 60 54 65 54ZM105 54C110 54 114 58.8 114 65V79C114 85.2 110 90 105 90C100 90 96 85.2 96 79V65C96 58.8 100 54 105 54Z" transform="rotate(6 82 78)" fill="url(#gz-pro-ghost-grad)"/>' +
                  '<path d="M90 22C110 25 124 39 128 58" stroke="#FFFFFF" stroke-opacity="0.42" stroke-width="4.5" stroke-linecap="round" transform="rotate(6 82 78)"/>' +
                '</svg>' +
              '</span>' +
              '<span class="gsap-mmo-char">T</span>' +
              '<span class="gsap-mmo-char">e</span>' +
              '<span class="gsap-mmo-char">a</span>' +
              '<span class="gsap-mmo-char">M</span>' +
            '</span>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function runGsapHeroAnimation(){
    var g=window.gsap;
    var hero=document.getElementById('gsap-mmo-hero');
    if(!g||!hero||hero.getAttribute('data-gsap-init')==='1')return;
    hero.setAttribute('data-gsap-init','1');
    var chars=hero.querySelectorAll('.gsap-mmo-char');
    var windmill=document.getElementById('gsap-flair-windmill');
    var clover=document.getElementById('gsap-flair-clover');
    /* Hover-only Pro Dollar ($) & Cyber Ghost animation */
    hero.addEventListener('mouseenter',function(){
      var g2=window.gsap;
      if(!g2||g2.__stub){ensureExternalInteractiveAssets(function(){if(window.gsap&&!window.gsap.__stub)hero.dispatchEvent(new Event('mouseenter'));});return;}
      g2.to(windmill,{rotationY:'+=360',rotationZ:-8,scale:1.18,duration:0.8,ease:'back.out(1.8)',overwrite:'auto'});
      g2.to(clover,{x:10,y:-10,rotation:10,scale:1.12,duration:0.75,ease:'elastic.out(1,0.45)',overwrite:'auto'});
      g2.fromTo(chars,{y:0,rotationX:0},{y:-8,rotationX:18,duration:0.22,stagger:0.038,yoyo:true,repeat:1,ease:'power2.out',overwrite:'auto'});
    });
    hero.addEventListener('mouseleave',function(){
      var g2=window.gsap;
      if(!g2||g2.__stub)return;
      g2.to(windmill,{rotationZ:0,scale:1,duration:0.65,ease:'elastic.out(1,0.6)',overwrite:'auto'});
      g2.to(clover,{x:0,y:0,rotation:0,scale:1,duration:0.65,ease:'elastic.out(1,0.6)',overwrite:'auto'});
    });
  }

  var _extLoaded=false;
  function ensureExternalInteractiveAssets(cb){
    if(!document.getElementById('gz-gsap-fonts')){
      var fl=document.createElement('link');
      fl.id='gz-gsap-fonts';
      fl.rel='stylesheet';
      fl.href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap';
      (document.head||document.documentElement).appendChild(fl);
    }
    if(window.gsap&&!window.gsap.__stub){if(cb)cb();return;}
    var ex=document.getElementById('gz-gsap-core-js');
    if(ex){if(cb)ex.addEventListener('load',cb);return;}
    var gs=document.createElement('script');
    gs.id='gz-gsap-core-js';
    gs.src='https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js';
    if(cb)gs.addEventListener('load',cb);
    (document.head||document.documentElement).appendChild(gs);
  }
  if(!window.gsap){
    window.gsap={version:'3.12.5',__stub:true,to:function(){},fromTo:function(){}};
  }
  ['pointermove','touchstart','scroll','keydown'].forEach(function(ev){
    window.addEventListener(ev,function onInt(){
      window.removeEventListener(ev,onInt);
      if(!_extLoaded){_extLoaded=true;ensureExternalInteractiveAssets();}
    },{passive:true,once:true});
  });

  function initGsapMmoHero(){
    var isSingle=document.body.classList.contains('item')||document.body.classList.contains('static_page')||document.body.classList.contains('error_page');
    var topWidget=document.getElementById('top-widget');
    if(isSingle){
      if(topWidget)topWidget.style.display='none';
      return;
    }
    var superMain=document.getElementById('super-main-wrapper');
    if(!topWidget&&superMain){
      topWidget=document.createElement('div');
      topWidget.id='top-widget';
      superMain.insertBefore(topWidget,superMain.firstChild);
    }else if(topWidget&&superMain&&superMain.firstElementChild!==topWidget){
      superMain.insertBefore(topWidget,superMain.firstChild);
    }
    if(!topWidget)return;
    var sec=document.getElementById('widget-top')||topWidget;
    sec.classList.remove('no-items');
    var existingHero=document.getElementById('gsap-mmo-hero');
    if(existingHero){
      if(!existingHero.querySelector('#gz-pro-dollar-grad')){
        existingHero.outerHTML=getHeroMarkup();
      }
    }else{
      var wrap=document.createElement('div');
      wrap.className='widget HTML';
      wrap.id='HTML99-runtime';
      wrap.innerHTML='<div class="widget-content">'+getHeroMarkup()+'</div>';
      sec.insertBefore(wrap,sec.firstChild);
    }
    runGsapHeroAnimation();
  }

  function enhanceShareAndAuthor(){
    var lineA=document.querySelector('.share-post a.line');
    if(lineA&&lineA.parentElement&&lineA.parentElement.parentNode){
      lineA.parentElement.parentNode.removeChild(lineA.parentElement);
    }
    var wa=document.querySelector('.share-post a.whatsapp');
    if(wa&&!wa.querySelector('span')){
      var sp=document.createElement('span');
      sp.textContent='WhatsApp';
      wa.appendChild(sp);
    }
    var list=document.querySelector('.share-post .entry-share-list');
    if(list&&!list.querySelector('.gz-copy-link-item')){
      var li=document.createElement('li');
      li.className='gz-copy-link-item';
      var a=document.createElement('a');
      a.href='javascript:;';
      a.className='shbutton social-radius';
      a.title='Copy Link';
      a.innerHTML='<i class="fas fa-share-alt"></i><span>Copy Link</span>';
      a.addEventListener('click',function(e){
        e.preventDefault();
        var url=window.location.href;
        var labelSpan=a.querySelector('span');
        function ok(){
          if(labelSpan)labelSpan.textContent='Copied! \u2713';
          a.style.borderColor='#0ae448';
          setTimeout(function(){
            if(labelSpan)labelSpan.textContent='Copy Link';
            a.style.borderColor='';
          },1800);
        }
        if(navigator.clipboard&&navigator.clipboard.writeText){
          navigator.clipboard.writeText(url).then(ok).catch(ok);
        }else{ok();}
      });
      li.appendChild(a);
      list.appendChild(li);
    }
    var aname=document.querySelector('.author-profile .author-name');
    if(aname&&!aname.querySelector('.author-role-tag')){
      var tag=document.createElement('span');
      tag.className='author-role-tag';
      tag.textContent='{ Author }';
      aname.appendChild(tag);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ensureTopArrowAndPopularTitle);
  else ensureTopArrowAndPopularTitle();
})();

/* Item: gỡ Popular Posts khỏi DOM (tránh cache CSS cũ vẫn thấy) */
(function(){
  if(!document.body.classList.contains('item'))return;
  var pop=document.getElementById('PopularPosts1');
  if(pop&&pop.parentNode)pop.parentNode.removeChild(pop);
  var side=document.getElementById('col-sidebar-wrapper');
  if(side){side.style.display='none';}
})();

/* Comment author tick: wrap name+icon in inline-flex (căn giữa chuẩn) */
(function(){
  function wrapTicks(){
    var headers=document.querySelectorAll('.comments .comment-header');
    for(var i=0;i<headers.length;i++){
      var h=headers[i];
      if(h.getAttribute('data-tick-wrap')==='1')continue;
      var user=h.querySelector('cite.user');
      var icon=h.querySelector('.icon.blog-author');
      if(!user||!icon)continue;
      var wrap=document.createElement('span');
      wrap.className='comment-author-wrap';
      wrap.style.cssText='display:inline-flex;align-items:center;gap:6px;line-height:1;max-width:100%';
      user.parentNode.insertBefore(wrap,user);
      wrap.appendChild(user);
      wrap.appendChild(icon);
      h.setAttribute('data-tick-wrap','1');
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wrapTicks);
  else wrapTicks();
  setTimeout(wrapTicks,800);
  setTimeout(wrapTicks,2000);
})();

/* Hide duplicate first body image when hero featured image is shown (mọi bài sau) */
(function(){
  var feat=document.querySelector('.featured-post-image img');
  var body=document.getElementById('tgtPost');
  if(!feat||!body)return;
  function key(u){
    if(!u)return'';
    u=String(u).split('?')[0];
    var m=u.match(/\/(?:s\d+(?:-[\w]+)?|w\d+-h\d+[^\/]*)\/([^\/]+)$/);
    if(m)return m[1].toLowerCase();
    m=u.match(/\/([^\/]+)$/);
    return m?m[1].toLowerCase():u.toLowerCase();
  }
  var fk=key(feat.getAttribute('data-src')||feat.getAttribute('src')||'');
  if(!fk)return;
  var imgs=body.querySelectorAll('img');
  for(var i=0;i<imgs.length;i++){
    var im=imgs[i];
    var s=im.getAttribute('data-src')||im.getAttribute('src')||'';
    if(!s||key(s)!==fk)continue;
    im.classList.add('hidden-image');
    im.style.display='none';
    if(im.parentElement && im.parentElement.tagName==='A' && !im.parentElement.innerText.replace(/\s+/g,'').length){
      im.parentElement.style.display='none';
    }
    var wrap=im.closest('p, .separator, table.tr-caption-container')||im.parentElement;
    if(wrap&&wrap!==body){
      var onlyImg=!wrap.innerText.replace(/\s+/g,'').length;
      if(onlyImg){
        wrap.style.display='none';
      }
    }
    break;
  }
})();

/* ==========================================================================
   GSAP SMART CONTENT LOCKER, PAYOS REALTIME (500.000đ/month VIP & Paid Posts)
   & ADMIN ORDER MANAGEMENT DASHBOARD (?admin=orders)
   ========================================================================== */
(function(){
  var DEFAULT_CFG = {
    clientId: '0a1cc230-4c1a-4735-b71d-9ac82d34156d',
    apiKey: 'b7a2a48a-ef0b-4397-a994-b6746f74467f',
    checksumKey: '6275fa071a1dd3d1070c0f965c8c55fb2aeeaf057091b20eb5d2d01ffbcb6e7a',
    bankId: 'OCB',
    accountNo: '0356189725',
    accountName: 'NGUYEN DUY KHANH',
    vipMonthlyPrice: 500000,
    vipDurationDays: 30,
    commentPrefix: 'MMO',
    demoPaidPosts: {
      'malesuada-bibendum-arcu-vitae-elementum': 50000,
      'duis-ullamcorper-purus-ut-fringilla': 50000,
      'sed-ullamcorper-morbi-tincidunt-ornare': 50000
    }
  };

  /* Dual Storage Helper: LocalStorage + Cookie (As designed in Step 1403) */
  function setDualStore(key, val, days){
    var str = String(val);
    try { localStorage.setItem(key, str); } catch(e){}
    try {
      var d = new Date();
      d.setTime(d.getTime() + ((days || 365) * 86400000));
      document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(str) + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
    } catch(e){}
  }
  function getDualStore(key){
    var v = '';
    try { v = localStorage.getItem(key) || ''; } catch(e){}
    if(v) return v;
    try {
      var nameEQ = encodeURIComponent(key) + '=';
      var ca = document.cookie.split(';');
      for(var i=0;i<ca.length;i++){
        var c = ca[i].replace(/^\s+/,'');
        if(c.indexOf(nameEQ) === 0){
          var cv = decodeURIComponent(c.substring(nameEQ.length));
          try { localStorage.setItem(key, cv); } catch(e){}
          return cv;
        }
      }
    } catch(e){}
    return '';
  }
  function removeDualStore(key){
    try { localStorage.removeItem(key); } catch(e){}
    try { document.cookie = encodeURIComponent(key) + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'; } catch(e){}
  }

  function getCfg(){
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem('gz_locker_cfg') || '{}'); } catch(e){}
    var ext = window.__GZ_LOCKER_CONFIG || {};
    var out = {};
    for(var k in DEFAULT_CFG) out[k] = DEFAULT_CFG[k];
    for(var k2 in ext) if(ext[k2] !== undefined && ext[k2] !== '') out[k2] = ext[k2];
    for(var k3 in saved) if(saved[k3] !== undefined && saved[k3] !== '') out[k3] = saved[k3];
    return out;
  }

  function formatVnd(n){
    var num = Number(n) || 0;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
  }

  function getClientUid(){
    var uid = getDualStore('gz_client_uid');
    if(!/^\d{4}$/.test(uid)){
      uid = String(Math.floor(1000 + Math.random() * 9000));
      setDualStore('gz_client_uid', uid, 365);
    }
    return uid;
  }

  function hash4(str){
    var s = String(str || 'post');
    var h = 0;
    for(var i=0;i<s.length;i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
    var pos = Math.abs(h) % 9000 + 1000;
    return String(pos);
  }

  function getPostSlug(url){
    var u = String(url || location.pathname || '');
    var m = u.match(/\/([^\/]+)\.html/i);
    return m ? m[1].toLowerCase() : u.toLowerCase();
  }

  function getCurrentPostId(){
    var a = document.querySelector('article.post a[name]');
    if(a && a.getAttribute('name')) return a.getAttribute('name');
    var snip = document.querySelector('[id^="post-snippet-"]');
    if(snip) return snip.id.replace('post-snippet-','');
    return hash4(getPostSlug(location.pathname));
  }

  /* 1. Multi-user Order Registry (Local + Synced with PayOS) */
  function getOrders(){
    try {
      var arr = JSON.parse(localStorage.getItem('gz_orders_registry') || '[]');
      return Array.isArray(arr) ? arr : [];
    } catch(e){ return []; }
  }
  function saveOrders(arr){
    try { localStorage.setItem('gz_orders_registry', JSON.stringify(arr.slice(0, 200))); } catch(e){}
  }
  function upsertOrder(ord){
    var list = getOrders();
    var target = ord;
    var found = false;
    for(var i=0;i<list.length;i++){
      if(String(list[i].orderCode) === String(ord.orderCode)){
        for(var k in ord){
          if(ord[k] !== undefined) list[i][k] = ord[k];
        }
        list[i].updatedAt = new Date().toISOString();
        target = list[i];
        found = true;
        break;
      }
    }
    if(!found){
      ord.createdAt = ord.createdAt || new Date().toISOString();
      ord.updatedAt = ord.createdAt;
      list.unshift(ord);
      target = ord;
    }
    saveOrders(list);
    return target;
  }

  /* 2. VIP 30-Day Pass Management (Auto-expires after 30 days) */
  function getActiveVipPass(){
    try {
      var str = getDualStore('gz_vip_pass');
      var raw = JSON.parse(str || 'null');
      if(!raw || !raw.expiresAt) return null;
      var now = Date.now();
      if(now >= Number(raw.expiresAt)){
        removeDualStore('gz_vip_pass');
        return null;
      }
      raw.daysLeft = Math.max(1, Math.ceil((Number(raw.expiresAt) - now) / 86400000));
      return raw;
    } catch(e){ return null; }
  }
  function activateVipPass(orderCode, paidTimestampMs){
    var cfg = getCfg();
    var startMs = paidTimestampMs || Date.now();
    var expMs = startMs + (Number(cfg.vipDurationDays) || 30) * 86400000;
    var pass = {
      orderCode: String(orderCode),
      paidAt: startMs,
      expiresAt: expMs,
      amount: cfg.vipMonthlyPrice
    };
    setDualStore('gz_vip_pass', JSON.stringify(pass), 35);
    return getActiveVipPass();
  }

  /* 3. Filter Hidden System Labels (price-XXXX, lock, vip) & Detect Post Price */
  function parseSystemLabelPrice(txt){
    var s = String(txt || '').trim().toLowerCase();
    var m = s.match(/^(?:price|gia)[-_:]?(\d+)(k)?$/i);
    if(!m) return 0;
    var val = parseInt(m[1], 10);
    if(m[2] || val < 1000) val = val * 1000;
    return val;
  }
  function isHiddenSystemLabel(txt){
    var s = String(txt || '').trim().toLowerCase();
    return /^(?:price|gia)[-_:]?\d+k?$/i.test(s) || /^(?:lock|locked|vip|premium)$/i.test(s);
  }
  function filterLabelsAndDetectPrice(rootEl, postUrl){
    var price = 0;
    var links = (rootEl || document).querySelectorAll('.post-tags a, .post-labels a, .widget-content.cloud-label-widget-content a, .widget-content.list-label-widget-content a');
    for(var i=0;i<links.length;i++){
      var a = links[i];
      var t = (a.textContent || '').trim();
      var p = parseSystemLabelPrice(t);
      if(p > 0) price = p;
      if(isHiddenSystemLabel(t)){
        a.classList.add('gz-hidden-label');
        a.style.setProperty('display','none','important');
        if(a.previousSibling && a.previousSibling.nodeType === 3 && /,\s*$/.test(a.previousSibling.nodeValue)){
          a.previousSibling.nodeValue = a.previousSibling.nodeValue.replace(/,\s*$/,'');
        }else if(a.nextSibling && a.nextSibling.nodeType === 3 && /^\s*,/.test(a.nextSibling.nodeValue)){
          a.nextSibling.nodeValue = a.nextSibling.nodeValue.replace(/^\s*,\s*/,'');
        }
      }
    }
    if(!price && postUrl){
      var cfg = getCfg();
      var slug = getPostSlug(postUrl);
      if(cfg.demoPaidPosts && cfg.demoPaidPosts[slug]){
        price = Number(cfg.demoPaidPosts[slug]) || 0;
      }
    }
    return price;
  }

  var _lkCounter = 0;
  function getGsapLockSvg(cls){
    _lkCounter++;
    var gid = 'gz-lk-mint-' + _lkCounter;
    return '<svg class="' + (cls || 'gz-lk-svg') + '" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
      '<defs><linearGradient id="' + gid + '" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">' +
        '<stop offset="0%" stop-color="#0AE448"/>' +
        '<stop offset="100%" stop-color="#00F5D4"/>' +
      '</linearGradient></defs>' +
      '<path d="M7.5 10V7.5C7.5 5 9.5 3 12 3C14.5 3 16.5 5 16.5 7.5V10" stroke="url(#' + gid + ')" stroke-width="2.6" stroke-linecap="round"/>' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.5H17.5C19.15 9.5 20.5 10.85 20.5 12.5V18.5C20.5 20.15 19.15 21.5 17.5 21.5H6.5C4.85 21.5 3.5 20.15 3.5 18.5V12.5C3.5 10.85 4.85 9.5 6.5 9.5ZM12 13.2C11.06 13.2 10.3 13.96 10.3 14.9C10.3 15.54 10.65 16.09 11.17 16.38V17.9C11.17 18.36 11.54 18.73 12 18.73C12.46 18.73 12.83 18.36 12.83 17.9V16.38C13.35 16.09 13.7 15.54 13.7 14.9C13.7 13.96 12.94 13.2 12 13.2Z" fill="url(#' + gid + ')"/>' +
    '</svg>';
  }

  function buildVip04Inner(labelText){
    return '<span class="gz-vip04-inner">' +
      '<span class="br br-l">{</span>' +
      getGsapLockSvg('gz-lk-svg') +
      '<span>' + labelText + '</span>' +
      '<span class="br br-r">}</span>' +
    '</span>';
  }

  function decorateHomepageCards(){
    var cards = document.querySelectorAll('.index .post-outer, .archive .post-outer, .search .post-outer, #FeaturedPost1 article.post');
    for(var i=0;i<cards.length;i++){
      var card = cards[i];
      var titleA = card.querySelector('h2.post-title a, h3.post-title a');
      var url = titleA ? titleA.getAttribute('href') : '';
      var price = filterLabelsAndDetectPrice(card, url);
      if(price > 0 && !card.querySelector('.gz-vip04-dock')){
        var isFeatured = !!(card.closest && card.closest('#FeaturedPost1'));
        var dockHost = isFeatured ? (card.querySelector('.featured-snippet-thumbnail') || card) : card;
        dockHost.classList.add('gz-has-vip-dock');
        var dock = document.createElement('a');
        dock.className = 'gz-vip04-dock';
        dock.href = url || 'javascript:;';
        dock.title = titleA ? titleA.textContent.trim() : 'Bài viết VIP';
        dock.setAttribute('aria-label', titleA ? titleA.textContent.trim() : 'VIP');
        dock.innerHTML = buildVip04Inner('VIP');
        dockHost.appendChild(dock);
      }
    }
  }

  /* 4. WebCrypto HMAC-SHA256 & PayOS API Client */
  function hmacSha256Hex(keyStr, messageStr){
    if(!window.crypto || !window.crypto.subtle || !window.TextEncoder){
      return Promise.resolve('');
    }
    var enc = new TextEncoder();
    return window.crypto.subtle.importKey(
      'raw', enc.encode(keyStr), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    ).then(function(key){
      return window.crypto.subtle.sign('HMAC', key, enc.encode(messageStr));
    }).then(function(buf){
      var bytes = new Uint8Array(buf);
      var hex = '';
      for(var i=0;i<bytes.length;i++){
        hex += ('0' + bytes[i].toString(16)).slice(-2);
      }
      return hex;
    }).catch(function(){ return ''; });
  }

  function buildVietQrUrl(amount, description){
    var cfg = getCfg();
    return 'https://img.vietqr.io/image/' + encodeURIComponent(cfg.bankId) + '-' + encodeURIComponent(cfg.accountNo) +
      '-compact2.png?amount=' + encodeURIComponent(amount) +
      '&addInfo=' + encodeURIComponent(description) +
      '&accountName=' + encodeURIComponent(cfg.accountName);
  }

  function createPayOSOrder(opts){
    var cfg = getCfg();
    var isVip = opts.type === 'VIP30D';
    var postId = String(opts.postId || getCurrentPostId());
    var pHash = hash4(postId);
    var rand4 = String(Math.floor(1000 + Math.random() * 9000));
    var rand8 = String(Math.floor(10000000 + Math.random() * 90000000));
    var orderCode = isVip ? Number('9' + rand8) : Number('1' + pHash + rand4);
    var amount = Number(opts.amount) || (isVip ? cfg.vipMonthlyPrice : 50000);
    var desc = isVip ? ('VIP30D ' + orderCode) : ('MMO ' + orderCode);
    var cancelUrl = location.href.split('#')[0];
    var returnUrl = location.href.split('#')[0];

    var ordRecord = upsertOrder({
      orderCode: orderCode,
      type: isVip ? 'VIP_MONTH' : 'POST_SINGLE',
      postId: isVip ? 'ALL_FREE_30D' : postId,
      postTitle: isVip ? 'Gói Tháng VIP (30 Ngày)' : (document.title || postId),
      amount: amount,
      description: desc,
      status: 'PENDING',
      clientUid: getClientUid(),
      diagnostic: 'Đang chờ khách quét mã VietQR...'
    });

    var signData = 'amount=' + amount + '&cancelUrl=' + cancelUrl + '&description=' + desc + '&orderCode=' + orderCode + '&returnUrl=' + returnUrl;
    return hmacSha256Hex(cfg.checksumKey, signData).then(function(sig){
      if(!sig) return ordRecord;
      return fetch('https://api-merchant.payos.vn/v2/payment-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-client-id': cfg.clientId,
          'x-api-key': cfg.apiKey
        },
        body: JSON.stringify({
          orderCode: orderCode,
          amount: amount,
          description: desc,
          cancelUrl: cancelUrl,
          returnUrl: returnUrl,
          signature: sig
        })
      }).then(function(r){ return r.json(); }).then(function(res){
        if(res && res.code === '00' && res.data){
          return upsertOrder({
            orderCode: orderCode,
            payosPaymentLinkId: res.data.paymentLinkId || '',
            checkoutUrl: res.data.checkoutUrl || '',
            diagnostic: 'Đã khởi tạo lệnh thanh toán trên PayOS thành công (code: 00).'
          });
        }else{
          var msg = (res && (res.desc || res.message)) ? (res.code + ': ' + (res.desc || res.message)) : 'PayOS trả về lỗi chữ ký';
          if(String(cfg.checksumKey).length < 64){
            msg += ' — Gợi ý sửa lỗi: Checksum Key hiện tại mới có ' + String(cfg.checksumKey).length + '/64 ký tự (bị che bởi icon con mắt trong ảnh). Hãy dán đủ 64 ký tự trong trang Admin!';
          }
          return upsertOrder({
            orderCode: orderCode,
            payosApiNote: msg,
            diagnostic: msg
          });
        }
      }).catch(function(err){
        return upsertOrder({
          orderCode: orderCode,
          diagnostic: 'Lỗi kết nối mạng tới PayOS: ' + String(err)
        });
      });
    });
  }

  function checkPayOSOrderRealtime(orderCode){
    var cfg = getCfg();
    var codeStr = String(orderCode || '').replace(/\D/g,'');
    if(!codeStr) return Promise.resolve({ status: 'INVALID', reason: 'Mã đơn không hợp lệ' });

    /* Check local override first (e.g. approved via Admin Dashboard / Webhook test) */
    var localList = getOrders();
    for(var i=0;i<localList.length;i++){
      if(String(localList[i].orderCode) === codeStr && localList[i].status === 'PAID' && localList[i].manualApproved){
        return Promise.resolve({
          status: 'PAID',
          orderCode: Number(codeStr),
          amount: localList[i].amount,
          paidAt: localList[i].paidAt || Date.now(),
          source: 'ADMIN_VERIFIED'
        });
      }
    }

    return fetch('https://api-merchant.payos.vn/v2/payment-requests/' + encodeURIComponent(codeStr), {
      method: 'GET',
      headers: {
        'x-client-id': cfg.clientId,
        'x-api-key': cfg.apiKey
      }
    }).then(function(r){ return r.json(); }).then(function(res){
      if(res && res.code === '00' && res.data){
        var d = res.data;
        var st = String(d.status || 'PENDING').toUpperCase();
        var paidAtMs = Date.now();
        if(d.transactions && d.transactions.length && d.transactions[0].transactionDateTime){
          var parsed = Date.parse(d.transactions[0].transactionDateTime);
          if(!isNaN(parsed)) paidAtMs = parsed;
        }else if(d.createdAt){
          var parsed2 = Date.parse(d.createdAt);
          if(!isNaN(parsed2)) paidAtMs = parsed2;
        }
        var diag = st === 'PAID'
          ? 'Đã thanh toán thành công (' + formatVnd(d.amountPaid || d.amount) + ')'
          : (st === 'CANCELLED' || st === 'EXPIRED'
              ? ('Đơn đã hủy/hết hạn: ' + (d.cancellationReason || st))
              : ('Đang chờ thanh toán trên PayOS (Đã nhận: ' + formatVnd(d.amountPaid || 0) + '/' + formatVnd(d.amount) + ')'));
        upsertOrder({
          orderCode: Number(codeStr),
          amount: d.amount,
          status: (st === 'CANCELLED' || st === 'EXPIRED') ? 'FAILED' : st,
          paidAt: st === 'PAID' ? paidAtMs : undefined,
          diagnostic: diag
        });
        return {
          status: st,
          orderCode: Number(codeStr),
          amount: d.amount,
          amountPaid: d.amountPaid,
          paidAt: paidAtMs,
          raw: d,
          diagnostic: diag
        };
      }
      var errReason = (res && (res.desc || res.message)) ? (res.code + ' - ' + (res.desc || res.message)) : 'Không tìm thấy mã đơn trên PayOS';
      upsertOrder({
        orderCode: Number(codeStr),
        diagnostic: 'Kiểm tra PayOS báo: ' + errReason
      });
      return { status: 'NOT_FOUND', reason: errReason, raw: res };
    }).catch(function(e){
      return { status: 'NETWORK_ERROR', reason: String(e) };
    });
  }

  /* 5. Realtime Blogger Comment Verifier (DOM + Live Feed) */
  function hasCommentTokenInDom(requiredToken){
    var cleanToken = String(requiredToken || '').trim().toLowerCase();
    var shortNum = (cleanToken.match(/#\d+/) || [cleanToken])[0];
    var domComments = document.querySelectorAll('#comments .comment-content, #comment-holder .comment-content, #comment-holder p.comment-content, #comments .comment-body p, #comments .comment-block');
    for(var i=0;i<domComments.length;i++){
      var txt = (domComments[i].textContent || '').toLowerCase();
      if(txt.indexOf(shortNum) !== -1 || txt.indexOf(cleanToken) !== -1){
        return true;
      }
    }
    return false;
  }

  function verifyBloggerCommentRealtime(postId, requiredToken){
    var cleanToken = String(requiredToken || '').trim().toLowerCase();
    var shortNum = (cleanToken.match(/#\d+/) || [cleanToken])[0];
    if(hasCommentTokenInDom(requiredToken)){
      return Promise.resolve({ ok: true, source: 'DOM' });
    }
    /* Query Blogger live JSON Comment Feed */
    var feedUrl = '/feeds/' + encodeURIComponent(postId) + '/comments/default?alt=json&max-results=50&_cb=' + Date.now();
    return fetch(feedUrl, { cache: 'no-store' })
      .then(function(r){ return r.ok ? r.json() : fetch('/feeds/comments/default?alt=json&max-results=50&_cb=' + Date.now()).then(function(r2){ return r2.json(); }); })
      .then(function(data){
        var entries = (data && data.feed && data.feed.entry) || [];
        for(var j=0;j<entries.length;j++){
          var c = ((entries[j].content && entries[j].content.$t) ? entries[j].content.$t : '') + ' ' +
                  ((entries[j].summary && entries[j].summary.$t) ? entries[j].summary.$t : '');
          c = c.toLowerCase();
          if(c.indexOf(shortNum) !== -1 || c.indexOf(cleanToken) !== -1){
            return { ok: true, source: 'FEED' };
          }
        }
        return { ok: false };
      }).catch(function(){ return { ok: false }; });
  }

  /* 6. Normalize Post Paragraphs, Lock Post Content & Render Ultra-Compact 1-Line GSAP Gate */
  function normalizePostBodyBlocks(postBody){
    /* 1. Support [lock]...[/lock] shortcode if present */
    if(postBody.innerHTML.indexOf('[lock]') !== -1 && postBody.innerHTML.indexOf('[/lock]') !== -1){
      postBody.innerHTML = postBody.innerHTML
        .replace(/\[lock\]/i, '<a name="more" id="more"></a>')
        .replace(/\[\/lock\]/ig, '');
    }

    /* 2. Unwrap single-child wrapper containers (e.g. Blogger <div dir="ltr"> or wrapper <p>/<div>) */
    for(var pass=0; pass<5; pass++){
      var visEls = [];
      for(var c=0; c<postBody.childNodes.length; c++){
        var nd = postBody.childNodes[c];
        if(nd.nodeType === 1 && nd.classList && (nd.classList.contains('clear') || nd.classList.contains('hidden-image'))) continue;
        if(nd.nodeType === 1 && nd.style && nd.style.display === 'none') continue;
        if(nd.nodeType === 3 && !(nd.nodeValue || '').replace(/\s+/g,'').length) continue;
        visEls.push(nd);
      }
      if(visEls.length === 1 && visEls[0].nodeType === 1 && /^(DIV|P|SPAN|SECTION|ARTICLE)$/i.test(visEls[0].tagName)){
        var innerWrapper = visEls[0];
        if(innerWrapper.childNodes.length > 1){
          while(innerWrapper.firstChild){
            postBody.insertBefore(innerWrapper.firstChild, innerWrapper);
          }
          postBody.removeChild(innerWrapper);
          continue;
        }
      }
      break;
    }

    /* 3. Group raw text nodes & <br> sequences into proper <p class="gz-norm-p"> paragraphs */
    var rawNodes = [];
    for(var i=0;i<postBody.childNodes.length;i++){
      rawNodes.push(postBody.childNodes[i]);
    }
    var hasRawTextOrBr = false;
    for(var r=0;r<rawNodes.length;r++){
      var n = rawNodes[r];
      if((n.nodeType === 3 && n.nodeValue && n.nodeValue.replace(/\s+/g,'').length > 0) ||
         (n.nodeType === 1 && n.tagName === 'BR')){
        hasRawTextOrBr = true;
        break;
      }
    }

    function splitLongTextIntoParagraphs(textStr, targetParent, beforeNode){
      var clean = String(textStr || '').replace(/\s+/g,' ').trim();
      if(!clean) return;
      var sentences = clean.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g) || [clean];
      var bucket = '';
      for(var s=0;s<sentences.length;s++){
        bucket += sentences[s];
        if(bucket.length >= 180 || s === sentences.length - 1){
          var p = document.createElement('p');
          p.className = 'gz-norm-p';
          p.textContent = bucket.trim();
          if(beforeNode) targetParent.insertBefore(p, beforeNode);
          else targetParent.appendChild(p);
          bucket = '';
        }
      }
    }

    if(hasRawTextOrBr){
      var frag = document.createDocumentFragment();
      var currentP = null;
      for(var j=0;j<rawNodes.length;j++){
        var nd2 = rawNodes[j];
        if(nd2.nodeType === 1 && nd2.tagName === 'BR'){
          if(currentP && currentP.textContent.replace(/\s+/g,'').length > 0){
            frag.appendChild(currentP);
            currentP = null;
          }
        }else if(nd2.nodeType === 3){
          var txt = nd2.nodeValue || '';
          if(txt.replace(/\s+/g,'').length > 0){
            if(!currentP){
              currentP = document.createElement('p');
              currentP.className = 'gz-norm-p';
            }
            currentP.appendChild(document.createTextNode(txt));
          }
        }else if(nd2.nodeType === 1){
          if(currentP && currentP.textContent.replace(/\s+/g,'').length > 0){
            frag.appendChild(currentP);
            currentP = null;
          }
          frag.appendChild(nd2);
        }
      }
      if(currentP && currentP.textContent.replace(/\s+/g,'').length > 0){
        frag.appendChild(currentP);
      }
      postBody.innerHTML = '';
      postBody.appendChild(frag);
    }

    /* 4. Also split any child <p> or <div> that contains internal <br> tags or is the only paragraph */
    var blockCandidates = postBody.querySelectorAll('p, div:not(.separator):not(.clear)');
    var visibleCount = 0;
    for(var bc=0;bc<blockCandidates.length;bc++){
      if(blockCandidates[bc].parentNode === postBody && blockCandidates[bc].style.display !== 'none' && (blockCandidates[bc].textContent || '').replace(/\s+/g,'').length > 25){
        visibleCount++;
      }
    }
    if(visibleCount > 0 && visibleCount < 3){
      for(var pk=0;pk<blockCandidates.length;pk++){
        var pEl = blockCandidates[pk];
        if(pEl.parentNode !== postBody) continue;
        if(pEl.querySelector('img:not(.hidden-image), pre, iframe, table')) continue;
        var pTxt = (pEl.textContent || '').trim();
        if(pTxt.length > 200){
          splitLongTextIntoParagraphs(pTxt, postBody, pEl);
          postBody.removeChild(pEl);
        }
      }
    }
  }

  function initSinglePostLocker(){
    if(!document.body.classList.contains('item')) return;
    var postBody = document.getElementById('tgtPost');
    if(!postBody || postBody.getAttribute('data-gz-locked') === '1') return;
    postBody.setAttribute('data-gz-locked','1');

    var postId = getCurrentPostId();
    var postPrice = filterLabelsAndDetectPrice(document, location.pathname);
    var isPaidPost = postPrice > 0;
    var cfg = getCfg();
    var uid = getClientUid();
    var userCommentToken = cfg.commentPrefix + ' #' + uid;

    /* Add VIP 04 price badge to post header if paid post (Price shown INSIDE the post!) */
    if(isPaidPost){
      var hLine = document.querySelector('.item .post-header-line-1');
      if(hLine && !hLine.querySelector('.gz-vip04-pill')){
        var pb = document.createElement('span');
        pb.className = 'gz-vip04-pill';
        pb.innerHTML = buildVip04Inner(formatVnd(postPrice));
        hLine.appendChild(pb);
      }
    }

    /* Normalize post body so every post has clean preview paragraphs + blurred locked paragraphs */
    normalizePostBodyBlocks(postBody);

    var children = [];
    for(var c=0;c<postBody.childNodes.length;c++){
      var nd = postBody.childNodes[c];
      if(nd.nodeType === 1 && nd.classList && nd.classList.contains('clear')) continue;
      if(nd.nodeType === 3 && !(nd.nodeValue || '').replace(/\s+/g,'').length) continue;
      children.push(nd);
    }
    var splitIdx = -1;
    for(var idx=0;idx<children.length;idx++){
      var el = children[idx];
      if(el.nodeType === 1 && ((el.tagName === 'A' && el.getAttribute('name') === 'more') || el.id === 'more')){
        splitIdx = idx;
        break;
      }
    }
    if(splitIdx === -1){
      /* Lock after first 2 visible text paragraphs so Preview Content (Nội dung xem trước) is always clearly visible */
      var visibleTextBlockCount = 0;
      for(var k=0;k<children.length;k++){
        var ck = children[k];
        if(ck.nodeType === 1 && ck.style.display !== 'none'){
          var txtLen = (ck.textContent || '').replace(/\s+/g,'').length;
          if(txtLen > 25){
            visibleTextBlockCount++;
            if(visibleTextBlockCount >= 2 && k + 1 < children.length){
              splitIdx = k + 1;
              break;
            }
          }
        }
      }
      if(splitIdx === -1){
        for(var k2=0;k2<children.length;k2++){
          if(children[k2].nodeType === 1 && (children[k2].textContent || '').replace(/\s+/g,'').length > 25 && k2 + 1 < children.length){
            splitIdx = k2 + 1;
            break;
          }
        }
      }
    }
    if(splitIdx === -1 || splitIdx >= children.length) return;

    var lockedNodes = children.slice(splitIdx);
    var lockContainer = document.createElement('div');
    lockContainer.id = 'gz-locked-content-box';
    lockContainer.className = 'gz-lock-curtain';
    var firstLocked = lockedNodes[0];
    postBody.insertBefore(lockContainer, firstLocked);
    for(var m=0;m<lockedNodes.length;m++){
      var lNode = lockedNodes[m];
      if(m === 0 && lNode.nodeType === 1 && lNode.tagName === 'BR') continue;
      lockContainer.appendChild(lNode);
    }

    var gate = document.createElement('div');
    gate.className = 'gz-pro-gate';
    gate.id = 'gz-pro-gate';
    if(lockContainer.nextSibling) postBody.insertBefore(gate, lockContainer.nextSibling);
    else postBody.appendChild(gate);

    function revealUnlockedContent(badgeText, autoScroll){
      if(pollTimer) clearInterval(pollTimer);
      if(cmtPollTimer) clearInterval(cmtPollTimer);
      var cmtBar = document.getElementById('gz-cmt-code-bar');
      if(cmtBar && cmtBar.parentNode) cmtBar.parentNode.removeChild(cmtBar);

      lockContainer.classList.remove('gz-lock-curtain');
      lockContainer.style.setProperty('max-height','none','important');
      lockContainer.style.setProperty('min-height','0','important');
      lockContainer.style.setProperty('filter','none','important');
      lockContainer.style.setProperty('opacity','1','important');
      lockContainer.style.setProperty('pointer-events','auto','important');
      lockContainer.style.setProperty('user-select','auto','important');
      lockContainer.style.setProperty('-webkit-mask-image','none','important');
      lockContainer.style.setProperty('mask-image','none','important');
      lockContainer.style.setProperty('margin-bottom','0','important');

      var oldPill = document.getElementById('gz-unlocked-pill-badge');
      if(oldPill && oldPill.parentNode) oldPill.parentNode.removeChild(oldPill);
      if(gate.parentNode) gate.parentNode.removeChild(gate);

      if(window.gsap){
        window.gsap.fromTo(lockContainer, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'expo.out' });
      }
      if(autoScroll && lockContainer.scrollIntoView){
        lockContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      enhanceCodeBlocks();
    }

    var pollTimer = null;
    var tickTimer = null;
    var cmtPollTimer = null;

    /* Check if already unlocked (Dual Storage + Immediate DOM Comment Auto-Unlock!) */
    if(isPaidPost){
      var savedPaidOrder = getDualStore('gz_paid_post_' + postId);
      if(savedPaidOrder){
        revealUnlockedContent('\u2713 Đã mở khóa vĩnh viễn · #' + savedPaidOrder, false);
        return;
      }
    }else{
      var vip = getActiveVipPass();
      if(vip){
        revealUnlockedContent('\u26A1 VIP Active · Còn ' + vip.daysLeft + ' ngày (#' + vip.orderCode + ')', false);
        return;
      }
      var savedFree = getDualStore('gz_free_post_' + postId);
      if(savedFree === userCommentToken){
        revealUnlockedContent('\u2713 Đã mở khóa bằng bình luận (' + userCommentToken + ')', false);
        return;
      }
      if(hasCommentTokenInDom(userCommentToken)){
        setDualStore('gz_free_post_' + postId, userCommentToken, 365);
        revealUnlockedContent('\u2713 Đã tự động mở khóa bằng bình luận (' + userCommentToken + ')', false);
        return;
      }
    }

    /* Render Ultra-Compact 1-Line Gate UI */
    if(!isPaidPost){
      gate.innerHTML =
        '<div class="gz-gate-bar">' +
          '<div class="gz-gate-left">' +
            '<span class="gz-gate-prompt">' + getGsapLockSvg('gz-inline-lock-svg') + 'Nội dung khóa · Bình luận mã ở dưới để tự mở</span>' +
          '</div>' +
          '<div class="gz-gate-btns">' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-btn-check-cmt">\u2193 Bình luận mở khóa</button>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-btn-open-vip">\u26A1 VIP</button>' +
          '</div>' +
        '</div>' +
        '<div class="gz-gate-status" id="gz-gate-status"></div>' +
        '<div class="gz-qr-drawer" id="gz-qr-drawer"></div>' +
        '<div class="gz-recover-row" id="gz-recover-row">' +
          '<input type="text" class="gz-recover-input" id="gz-recover-input" placeholder="Nhập mã đơn VIP 9XXXXXXXX..."/>' +
          '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-btn-do-recover">Khôi phục</button>' +
        '</div>';

      /* Place "Bình luận mã: [ MMO #XXXX  ❐ Copy ]" directly below "X Comments" (.custom-comment-title) */
      var cmtTitleEl = document.querySelector('#comments .custom-comment-title');
      var cmtSectionEl = document.getElementById('comments');
      var oldCmtBar = document.getElementById('gz-cmt-code-bar');
      if(oldCmtBar && oldCmtBar.parentNode) oldCmtBar.parentNode.removeChild(oldCmtBar);
      if(cmtTitleEl || cmtSectionEl){
        var cmtBarEl = document.createElement('div');
        cmtBarEl.id = 'gz-cmt-code-bar';
        cmtBarEl.className = 'gz-cmt-code-bar';
        cmtBarEl.innerHTML =
          '<div class="gz-gate-left">' +
            '<span class="gz-gate-prompt">' + getGsapLockSvg('gz-inline-lock-svg') + 'Bình luận mã:</span>' +
            '<div class="gz-kw-chip" id="gz-kw-chip" title="Chạm để Copy mã và dán vào khung bình luận">' +
              '<span class="gz-kw-code">' + userCommentToken + '</span>' +
              '<span class="gz-kw-copy-tag" id="gz-kw-copy-tag">\u2750 Copy</span>' +
            '</div>' +
          '</div>' +
          '<div class="gz-cmt-live-badge"><span class="gz-pulse"></span><span>Tự mở khi bình luận</span></div>';
        if(cmtTitleEl && cmtTitleEl.parentNode){
          if(cmtTitleEl.nextSibling) cmtTitleEl.parentNode.insertBefore(cmtBarEl, cmtTitleEl.nextSibling);
          else cmtTitleEl.parentNode.appendChild(cmtBarEl);
        }else if(cmtSectionEl){
          cmtSectionEl.insertBefore(cmtBarEl, cmtSectionEl.firstChild);
        }
      }
    }else{
      gate.innerHTML =
        '<div class="gz-gate-bar">' +
          '<div class="gz-gate-left">' +
            '<span class="gz-gate-prompt">Mở khóa bài viết VIP:</span>' +
            '<span class="gz-vip04-pill" style="margin-left:0!important">' + buildVip04Inner(formatVnd(postPrice)) + '</span>' +
          '</div>' +
          '<div class="gz-gate-btns">' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-btn-pay-post">Mở khóa \u2197</button>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-btn-toggle-recover">Mã đơn</button>' +
          '</div>' +
        '</div>' +
        '<div class="gz-gate-status" id="gz-gate-status"></div>' +
        '<div class="gz-qr-drawer" id="gz-qr-drawer"></div>' +
        '<div class="gz-recover-row" id="gz-recover-row">' +
          '<input type="text" class="gz-recover-input" id="gz-recover-input" placeholder="Nhập mã đơn đã mua (1XXXXXXXX)..."/>' +
          '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-btn-do-recover">Mở</button>' +
        '</div>';
    }

    var statusEl = document.getElementById('gz-gate-status');
    var qrDrawer = document.getElementById('gz-qr-drawer');
    var recoverRow = document.getElementById('gz-recover-row');

    function showStatus(msg, type){
      if(!statusEl) return;
      statusEl.textContent = msg;
      statusEl.className = 'gz-gate-status is-show ' + (type === 'err' ? 'is-err' : (type === 'ok' ? 'is-ok' : ''));
    }

    /* Free Comment Unlock Handlers + Automatic Realtime Polling & DOM Observer */
    var kwChip = document.getElementById('gz-kw-chip');
    var btnCheckCmt = document.getElementById('gz-btn-check-cmt');
    function tryAutoUnlockFromComment(autoScroll){
      return verifyBloggerCommentRealtime(postId, userCommentToken).then(function(res){
        if(res && res.ok){
          setDualStore('gz_free_post_' + postId, userCommentToken, 365);
          revealUnlockedContent('\u2713 Đã tự động mở khóa bằng bình luận (' + userCommentToken + ')', !!autoScroll);
          return true;
        }
        return false;
      });
    }
    function startCommentAutoPolling(){
      if(cmtPollTimer || isPaidPost) return;
      cmtPollTimer = setInterval(function(){
        tryAutoUnlockFromComment(true);
      }, 2500);
    }
    if(!isPaidPost){
      /* Auto-check immediately via Feed + auto-poll in background + observe #comments DOM */
      tryAutoUnlockFromComment(false);
      startCommentAutoPolling();
      var cmtHolder = document.getElementById('comments');
      if(cmtHolder && window.MutationObserver){
        var cmtObs = new MutationObserver(function(){
          if(hasCommentTokenInDom(userCommentToken)){
            cmtObs.disconnect();
            setDualStore('gz_free_post_' + postId, userCommentToken, 365);
            revealUnlockedContent('\u2713 Đã tự động mở khóa bằng bình luận (' + userCommentToken + ')', true);
          }
        });
        cmtObs.observe(cmtHolder, { childList: true, subtree: true, characterData: true });
      }
    }
    if(kwChip){
      kwChip.addEventListener('click', function(){
        var copyTag = document.getElementById('gz-kw-copy-tag');
        function afterCopy(){
          kwChip.classList.add('is-copied');
          if(copyTag) copyTag.textContent = '\u2713 Đã Copy';
          var cmtForm = document.getElementById('comment-editor') || document.querySelector('#comments .comment-footer');
          if(cmtForm) cmtForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
          startCommentAutoPolling();
        }
        if(navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(userCommentToken).then(afterCopy).catch(afterCopy);
        }else{ afterCopy(); }
      });
    }
    if(btnCheckCmt){
      btnCheckCmt.addEventListener('click', function(){
        tryAutoUnlockFromComment(true).then(function(ok){
          if(!ok){
            if(navigator.clipboard && navigator.clipboard.writeText){
              navigator.clipboard.writeText(userCommentToken).catch(function(){});
            }
            var cmtBarTarget = document.getElementById('gz-cmt-code-bar') || document.getElementById('comments');
            if(cmtBarTarget) cmtBarTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
            showStatus('Đã copy mã "' + userCommentToken + '" — hãy dán vào ô Bình luận bên dưới, bài viết sẽ tự động mở khóa ngay!', 'ok');
            startCommentAutoPolling();
          }
        });
      });
    }

    /* Payment Drawer Handler (Both Single Paid Post & 500.000đ/month VIP Pass) */
    function fmtCountdown(sec){
      var s = Math.max(0, Math.floor(sec));
      var m = Math.floor(s / 60);
      var r = s % 60;
      return (m < 10 ? '0' + m : String(m)) + ':' + (r < 10 ? '0' + r : String(r));
    }
    function openPaymentDrawer(type, amount){
      if(pollTimer) clearInterval(pollTimer);
      if(tickTimer) clearInterval(tickTimer);
      qrDrawer.classList.add('is-open');
      qrDrawer.innerHTML = '<div class="gz-qr-live-pill"><span class="gz-pulse"></span>Tạo QR...</div>';

      createPayOSOrder({ type: type, postId: postId, amount: amount }).then(function(ord){
        var qrImgUrl = buildVietQrUrl(ord.amount, ord.description);
        var labelTitle = type === 'VIP30D' ? ('VIP 30 Ngày · ' + formatVnd(ord.amount)) : (formatVnd(ord.amount) + ' · #' + ord.orderCode);
        var remainSec = 600;
        qrDrawer.innerHTML =
          '<div class="gz-qr-grid-wrap">' +
            '<div class="gz-qr-frame">' +
              '<img src="' + qrImgUrl + '" alt="VietQR PayOS"/>' +
            '</div>' +
            '<div class="gz-qr-meta">' +
              '<div class="gz-qr-amount-row">' +
                '<span>' + labelTitle + '</span>' +
              '</div>' +
              '<div class="gz-qr-live-pill" id="gz-qr-live-pill">' +
                '<span class="gz-pulse"></span><span id="gz-qr-live-txt">Chờ quét QR · ' + fmtCountdown(remainSec) + '</span>' +
              '</div>' +
              '<div class="gz-qr-copy-row">' +
                '<button type="button" class="gz-mini-chip" id="gz-copy-stk">STK: ' + cfg.accountNo + ' \u2750</button>' +
                '<button type="button" class="gz-mini-chip" id="gz-copy-nd">ND: ' + ord.description + ' \u2750</button>' +
                (type === 'VIP30D' ? '<button type="button" class="gz-mini-chip" id="gz-open-recover-vip">Đã mua VIP?</button>' : '') +
              '</div>' +
            '</div>' +
          '</div>';

        var bStk = document.getElementById('gz-copy-stk');
        if(bStk) bStk.addEventListener('click', function(){
          if(navigator.clipboard) navigator.clipboard.writeText(cfg.accountNo);
          bStk.textContent = 'Đã copy STK \u2713';
        });
        var bNd = document.getElementById('gz-copy-nd');
        if(bNd) bNd.addEventListener('click', function(){
          if(navigator.clipboard) navigator.clipboard.writeText(ord.description);
          bNd.textContent = 'Đã copy ND \u2713';
        });
        var bRecVip = document.getElementById('gz-open-recover-vip');
        if(bRecVip && recoverRow){
          bRecVip.addEventListener('click', function(){ recoverRow.classList.toggle('is-open'); });
        }

        tickTimer = setInterval(function(){
          remainSec--;
          var txtEl = document.getElementById('gz-qr-live-txt');
          var pillEl = document.getElementById('gz-qr-live-pill');
          if(!txtEl){ clearInterval(tickTimer); return; }
          if(remainSec <= 0){
            clearInterval(tickTimer);
            if(pollTimer) clearInterval(pollTimer);
            if(pillEl) pillEl.classList.add('is-fail');
            txtEl.textContent = '\u2715 Hết hạn QR · Bấm tạo lại';
            return;
          }
          txtEl.textContent = 'Chờ quét QR · ' + fmtCountdown(remainSec);
        }, 1000);

        pollTimer = setInterval(function(){
          checkPayOSOrderRealtime(ord.orderCode).then(function(st){
            var pillEl = document.getElementById('gz-qr-live-pill');
            var txtEl = document.getElementById('gz-qr-live-txt');
            if(st.status === 'PAID'){
              clearInterval(pollTimer);
              if(tickTimer) clearInterval(tickTimer);
              if(txtEl) txtEl.textContent = '\u2713 Đã thanh toán!';
              if(type === 'VIP30D'){
                var vPass = activateVipPass(ord.orderCode, st.paidAt);
                revealUnlockedContent('\u26A1 VIP Active · Còn ' + (vPass ? vPass.daysLeft : 30) + ' ngày (#' + ord.orderCode + ')');
              }else{
                try { localStorage.setItem('gz_paid_post_' + postId, String(ord.orderCode)); } catch(e){}
                revealUnlockedContent('\u2713 Đã mở khóa · #' + ord.orderCode);
              }
            }else if(st.status === 'CANCELLED' || st.status === 'EXPIRED'){
              clearInterval(pollTimer);
              if(tickTimer) clearInterval(tickTimer);
              if(pillEl) pillEl.classList.add('is-fail');
              if(txtEl) txtEl.textContent = '\u2715 Đơn đã hủy / hết hạn';
            }
          });
        }, 2000);
      });
    }

    var btnOpenVip = document.getElementById('gz-btn-open-vip');
    if(btnOpenVip){
      btnOpenVip.addEventListener('click', function(){
        if(qrDrawer.classList.contains('is-open')){
          qrDrawer.classList.remove('is-open');
          if(pollTimer) clearInterval(pollTimer);
          if(tickTimer) clearInterval(tickTimer);
        }else{
          openPaymentDrawer('VIP30D', getCfg().vipMonthlyPrice);
        }
      });
    }

    var btnPayPost = document.getElementById('gz-btn-pay-post');
    if(btnPayPost){
      btnPayPost.addEventListener('click', function(){
        if(qrDrawer.classList.contains('is-open')){
          qrDrawer.classList.remove('is-open');
          if(pollTimer) clearInterval(pollTimer);
          if(tickTimer) clearInterval(tickTimer);
        }else{
          openPaymentDrawer('POST', postPrice);
        }
      });
    }

    var btnToggleRecover = document.getElementById('gz-btn-toggle-recover');
    if(btnToggleRecover && recoverRow){
      btnToggleRecover.addEventListener('click', function(){
        recoverRow.classList.toggle('is-open');
      });
    }

    var btnDoRecover = document.getElementById('gz-btn-do-recover');
    var recoverInp = document.getElementById('gz-recover-input');
    if(btnDoRecover && recoverInp){
      btnDoRecover.addEventListener('click', function(){
        var code = (recoverInp.value || '').replace(/\D/g,'');
        if(!code || code.length < 6){
          showStatus('Vui lòng nhập đúng mã đơn hàng (9 chữ số).', 'err');
          return;
        }
        if(isPaidPost && code.charAt(0) === '9'){
          showStatus('Bài viết có giá riêng không mở bằng mã Gói Tháng VIP. Vui lòng nhập mã đơn của bài viết này (1XXXXXXXX).', 'err');
          return;
        }
        if(isPaidPost && code.slice(1, 5) !== hash4(postId)){
          showStatus('Mã đơn #' + code + ' thuộc về bài viết khác, không áp dụng cho bài viết này!', 'err');
          return;
        }
        btnDoRecover.textContent = '...';
        checkPayOSOrderRealtime(code).then(function(st){
          btnDoRecover.textContent = 'Mở';
          if(st.status === 'PAID'){
            if(code.charAt(0) === '9'){
              var vp = activateVipPass(code, st.paidAt);
              if(!vp){
                showStatus('Mã đơn VIP #' + code + ' đã hết hạn 30 ngày! Vui lòng bình luận hoặc gia hạn gói mới.', 'err');
                return;
              }
              revealUnlockedContent('\u26A1 VIP Active · Còn ' + vp.daysLeft + ' ngày (#' + code + ')');
            }else{
              try { localStorage.setItem('gz_paid_post_' + postId, code); } catch(e){}
              revealUnlockedContent('\u2713 Đã mở khóa · #' + code);
            }
          }else{
            showStatus('Chưa xác nhận thanh toán PAID cho mã #' + code + ' (' + (st.reason || st.status) + ').', 'err');
          }
        });
      });
    }
  }

  /* 7. GSAP Pro Admin Order Management & Diagnostic Dashboard (?admin=orders) */
  function initAdminDashboard(){
    var overlay = document.getElementById('gz-admin-overlay');
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = 'gz-admin-overlay';
      overlay.className = 'gz-admin-overlay';
      document.body.appendChild(overlay);
    }

    /* Add discreet Admin button in footer credit */
    var creditRight = document.querySelector('.credit-right');
    if(creditRight && !document.getElementById('gz-open-admin-btn')){
      var admLink = document.createElement('a');
      admLink.id = 'gz-open-admin-btn';
      admLink.href = 'javascript:;';
      admLink.style.cssText = 'margin-left:12px;font-family:var(--gz-mono);font-size:11.5px;font-weight:700;background:#42433d;color:#0ae448;padding:3px 9px;border-radius:6px;text-decoration:none;display:inline-block';
      admLink.textContent = '[ \u2699 Admin Orders ]';
      admLink.addEventListener('click', function(e){
        e.preventDefault();
        renderAdminModal();
        overlay.classList.add('is-open');
      });
      creditRight.appendChild(admLink);
    }

    function renderAdminModal(diagText){
      var cfg = getCfg();
      var orders = getOrders();
      var paidCount = 0, pendingCount = 0, failedCount = 0, totalRev = 0;
      for(var i=0;i<orders.length;i++){
        if(orders[i].status === 'PAID'){
          paidCount++;
          totalRev += (Number(orders[i].amount) || 0);
        }else if(orders[i].status === 'FAILED' || orders[i].status === 'CANCELLED' || orders[i].status === 'EXPIRED'){
          failedCount++;
        }else{
          pendingCount++;
        }
      }
      var vipPass = getActiveVipPass();

      var rowsHtml = '';
      if(!orders.length){
        rowsHtml = '<tr><td colspan="6" style="text-align:center;padding:16px;color:#6e6e62">Chưa có đơn hàng nào. Hãy bấm "Tạo Đơn Test" bên dưới để kiểm tra!</td></tr>';
      }else{
        for(var j=0;j<orders.length;j++){
          var o = orders[j];
          var stClass = o.status === 'PAID' ? 'gz-st-badge--paid' : (o.status === 'FAILED' ? 'gz-st-badge--failed' : 'gz-st-badge--pending');
          rowsHtml +=
            '<tr>' +
              '<td><strong style="font-family:var(--gz-mono)">#' + o.orderCode + '</strong><br/><span style="font-size:10.5px;color:#6e6e62">' + (o.type === 'VIP_MONTH' ? 'VIP Tháng' : 'Bài lẻ: ' + o.postId) + '</span></td>' +
              '<td style="font-family:var(--gz-mono);font-weight:700">' + formatVnd(o.amount) + '</td>' +
              '<td><span class="gz-st-badge ' + stClass + '">' + o.status + '</span></td>' +
              '<td style="font-size:11.5px;max-width:210px">' + (o.diagnostic || '-') + '</td>' +
              '<td>' +
                '<div style="display:flex;gap:4px;flex-wrap:wrap">' +
                  '<button type="button" class="gz-mini-chip gz-adm-act" data-act="check" data-code="' + o.orderCode + '">\uD83D\uDD04 Check PayOS</button>' +
                  '<button type="button" class="gz-mini-chip gz-adm-act" style="background:#0ae448;color:#0e100f" data-act="approve" data-code="' + o.orderCode + '">\u2713 Duyệt PAID</button>' +
                  '<button type="button" class="gz-mini-chip gz-adm-act" style="background:#ff4d6d;color:#fffce1" data-act="fail" data-code="' + o.orderCode + '">\u2715 Báo Lỗi</button>' +
                '</div>' +
              '</td>' +
            '</tr>';
        }
      }

      overlay.innerHTML =
        '<div class="gz-admin-panel">' +
          '<div class="gz-admin-head">' +
            '<div class="gz-gate-title"><span class="gz-b">{</span> Quản Lý Đơn Hàng PayOS &amp; Chẩn Đoán Lỗi <span class="gz-b">}</span></div>' +
            '<div style="display:flex;gap:8px;align-items:center">' +
              '<span style="font-family:var(--gz-mono);font-size:11.5px;background:#42433d;color:#0ae448;padding:3px 9px;border-radius:6px">' +
                (vipPass ? ('VIP: Còn ' + vipPass.daysLeft + ' ngày') : 'VIP: Chưa kích hoạt') +
              '</span>' +
              '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-adm-close" style="height:30px!important;padding:0 12px!important">Đóng \u2715</button>' +
            '</div>' +
          '</div>' +
          '<div class="gz-admin-kpis">' +
            '<div class="gz-kpi-card"><span class="k-num" style="color:#008b38">' + formatVnd(totalRev) + '</span><span class="k-lbl">Doanh Thu Thành Công</span></div>' +
            '<div class="gz-kpi-card"><span class="k-num">' + paidCount + '</span><span class="k-lbl">Đơn Thành Công (PAID)</span></div>' +
            '<div class="gz-kpi-card"><span class="k-num">' + pendingCount + '</span><span class="k-lbl">Đang Chờ (PENDING)</span></div>' +
            '<div class="gz-kpi-card"><span class="k-num" style="color:#d90429">' + failedCount + '</span><span class="k-lbl">Thất Bại / Hủy (FAILED)</span></div>' +
          '</div>' +
          '<div class="gz-admin-Check-bar">' +
            '<input type="text" class="gz-recover-input" id="gz-adm-check-inp" placeholder="Nhập mã orderCode cần kiểm tra trên PayOS..."/>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-adm-btn-check">Kiểm Tra PayOS Realtime</button>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-adm-btn-test-vip">+ Tạo Đơn VIP 500.000đ</button>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-adm-btn-test-post">+ Tạo Đơn Bài Lẻ 50.000đ</button>' +
          '</div>' +
          '<div class="gz-admin-Check-bar" style="padding:10px;border:1px dashed #42433d;border-radius:10px;margin-bottom:12px">' +
            '<span style="font-size:12px;font-weight:700;width:100%">Cấu hình PayOS Checksum Key (64 ký tự) &amp; Giá Gói Tháng VIP:</span>' +
            '<input type="text" class="gz-recover-input" id="gz-adm-checksum-inp" value="' + cfg.checksumKey + '" placeholder="Checksum Key (64 hex chars)..."/>' +
            '<input type="number" class="gz-recover-input" id="gz-adm-vipprice-inp" style="max-width:130px" value="' + cfg.vipMonthlyPrice + '"/>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-adm-save-cfg">Lưu Cấu Hình</button>' +
          '</div>' +
          '<div class="gz-admin-diag ' + (diagText ? 'is-show' : '') + '" id="gz-admin-diag">' + (diagText || '') + '</div>' +
          '<div class="gz-admin-table-wrap">' +
            '<table class="gz-admin-table">' +
              '<thead><tr><th>Mã Đơn / Loại</th><th>Số Tiền</th><th>Trạng Thái</th><th>Chẩn Đoán / Lỗi</th><th>Thao Tác Sửa Lỗi</th></tr></thead>' +
              '<tbody>' + rowsHtml + '</tbody>' +
            '</table>' +
          '</div>' +
        '</div>';

      document.getElementById('gz-adm-close').addEventListener('click', function(){
        overlay.classList.remove('is-open');
      });

      document.getElementById('gz-adm-save-cfg').addEventListener('click', function(){
        var newCk = (document.getElementById('gz-adm-checksum-inp').value || '').trim();
        var newVp = Number(document.getElementById('gz-adm-vipprice-inp').value) || 500000;
        try {
          localStorage.setItem('gz_locker_cfg', JSON.stringify({ checksumKey: newCk, vipMonthlyPrice: newVp }));
        } catch(e){}
        renderAdminModal('\u2713 Đã lưu cấu hình! Giá VIP Tháng: ' + formatVnd(newVp) + ' | Độ dài Checksum Key: ' + newCk.length + '/64 ký tự.');
      });

      document.getElementById('gz-adm-btn-check').addEventListener('click', function(){
        var code = (document.getElementById('gz-adm-check-inp').value || '').trim();
        if(!code){
          renderAdminModal('\u26A0 Vui lòng nhập mã orderCode cần kiểm tra!');
          return;
        }
        renderAdminModal('Đang gọi GET https://api-merchant.payos.vn/v2/payment-requests/' + code + ' ...');
        checkPayOSOrderRealtime(code).then(function(res){
          renderAdminModal(
            '[KẾT QUẢ KIỂM TRA REALTIME PAYOS CHO ĐƠN #' + code + ']\n' +
            '• Trạng thái: ' + res.status + '\n' +
            '• Chẩn đoán: ' + (res.diagnostic || res.reason || 'OK') + '\n' +
            '• Phản hồi gốc từ PayOS: ' + JSON.stringify(res.raw || res, null, 2)
          );
        });
      });

      document.getElementById('gz-adm-btn-test-vip').addEventListener('click', function(){
        createPayOSOrder({ type: 'VIP30D', amount: getCfg().vipMonthlyPrice }).then(function(o){
          renderAdminModal('\u2713 Đã tạo đơn Gói Tháng VIP (500.000đ) #' + o.orderCode + '\nChẩn đoán: ' + (o.diagnostic || 'OK'));
        });
      });

      document.getElementById('gz-adm-btn-test-post').addEventListener('click', function(){
        createPayOSOrder({ type: 'POST', postId: getCurrentPostId(), amount: 50000 }).then(function(o){
          renderAdminModal('\u2713 Đã tạo đơn Bài Lẻ (50.000đ) #' + o.orderCode + '\nChẩn đoán: ' + (o.diagnostic || 'OK'));
        });
      });

      var actBtns = overlay.querySelectorAll('.gz-adm-act');
      for(var b=0;b<actBtns.length;b++){
        actBtns[b].addEventListener('click', function(){
          var act = this.getAttribute('data-act');
          var code = this.getAttribute('data-code');
          if(act === 'check'){
            checkPayOSOrderRealtime(code).then(function(r){
              renderAdminModal('Đã kiểm tra lại đơn #' + code + ' trên PayOS -> Trạng thái: ' + r.status + ' (' + (r.diagnostic || r.reason || '') + ')');
            });
          }else if(act === 'approve'){
            var list = getOrders();
            for(var k=0;k<list.length;k++){
              if(String(list[k].orderCode) === String(code)){
                list[k].status = 'PAID';
                list[k].manualApproved = true;
                list[k].paidAt = Date.now();
                list[k].diagnostic = 'Đã duyệt PAID & kích hoạt mở khóa thành công!';
                if(list[k].type === 'VIP_MONTH'){
                  activateVipPass(code, Date.now());
                }else if(list[k].postId){
                  try { localStorage.setItem('gz_paid_post_' + list[k].postId, String(code)); } catch(e){}
                }
              }
            }
            saveOrders(list);
            renderAdminModal('\u2713 Đã duyệt đơn #' + code + ' sang trạng thái PAID và mở khóa nội dung tương ứng!');
          }else if(act === 'fail'){
            upsertOrder({
              orderCode: Number(code),
              status: 'FAILED',
              manualApproved: false,
              diagnostic: 'Đơn bị đánh dấu Thất bại / Đã hủy bởi Admin.'
            });
            renderAdminModal('\u2715 Đã đánh dấu đơn #' + code + ' là FAILED (Thất bại).');
          }
        });
      }
    }

    if(location.search.indexOf('admin=orders') !== -1 || location.hash === '#admin-orders'){
      renderAdminModal();
      overlay.classList.add('is-open');
    }
    window.__gzOpenAdminOrders = function(){
      renderAdminModal();
      overlay.classList.add('is-open');
    };
  }


  function initNativeNavAndAaveMenu(){
    if(document.getElementById('gz-native-nav')) return;
    var nav = document.createElement('nav');
    nav.id = 'gz-native-nav';
    nav.className = 'gz-native-nav';
    nav.setAttribute('aria-label', 'Mobile Navigation');
    var isHome = location.pathname === '/' || location.pathname === '/index.html';
    nav.innerHTML =
      '<button type="button" class="gz-nav-item' + (isHome ? ' is-active' : '') + '" id="gz-nav-btn-home" aria-label="Home">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5.5v-6h-5v6H4a1 1 0 0 1-1-1v-9.5z"/></svg>' +
        '<span>HOME</span>' +
      '</button>' +
      '<button type="button" class="gz-nav-item" id="gz-nav-btn-menu" aria-label="Menu" aria-expanded="false">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>' +
        '<span>MENU</span>' +
      '</button>' +
      '<button type="button" class="gz-nav-item" id="gz-nav-btn-search" aria-label="Search">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.8-3.8"/></svg>' +
        '<span>SEARCH</span>' +
      '</button>' +
      '<button type="button" class="gz-nav-item" id="gz-nav-btn-chat" aria-label="Chat">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>' +
        '<span>CHAT</span>' +
      '</button>';
    document.body.appendChild(nav);

    function setActiveTab(tabId){
      var btns = nav.querySelectorAll('.gz-nav-item');
      for(var i=0;i<btns.length;i++){
        btns[i].classList.toggle('is-active', btns[i].id === tabId);
      }
    }

    function ensureAaveMenuModal(){
      var existing = document.getElementById('gz-aave-menu-modal');
      if(existing) return existing;
      var st = document.createElement('style');
      st.id = 'gz-aave-menu-style';
      st.textContent = "#gz-aave-menu-modal{ position:fixed; inset:0; z-index:9985; background:#fafaf9; color:#211d1d; font-family:var(--gz-font,\"Plus Jakarta Sans\",sans-serif); display:none; flex-direction:column; overflow:hidden; --icon-purple-1:#bbf7d0; --icon-purple-2:#86efac; --icon-purple-3:#4ade80; --icon-purple-4:#22e560; --icon-purple-5:#0ae448; --icon-purple-6:#00b83b; --icon-purple-7:#007a29; --gho-1:#0ae448; --gho-2:#86efac; --fp-0:#0e100f; --fp-1:#0e100f } #gz-aave-menu-modal.is-open{ display:flex; animation:gzAaveFadeIn .18s cubic-bezier(.16,1,.3,1) } @keyframes gzAaveFadeIn{ from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} } .gz-aave-topbar{ display:flex; align-items:center; justify-content:space-between; padding:16px 20px; background:#ffffff; border-bottom:1px solid rgba(38,34,40,.06); flex:0 0 auto } .gz-aave-brand{ display:inline-flex; align-items:center; gap:10px; color:#211d1d; text-decoration:none } .gz-aave-brand svg{ display:block; height:18px; width:auto; fill:#211d1d } .gz-aave-brand:hover svg .logo-eyes path{ fill:#0ae448 } .gz-aave-close{ appearance:none; border:0; background:transparent; width:36px; height:36px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; color:#211d1d; cursor:pointer; transition:background .15s ease,transform .15s ease } .gz-aave-close:hover{ background:rgba(14,16,15,.06); transform:rotate(90deg) } .gz-aave-scroll{ flex:1 1 auto; overflow-y:auto; padding:18px 20px 140px; max-width:780px; width:100%; margin:0 auto; box-sizing:border-box } .gz-aave-search-box{ margin-bottom:20px } .gz-aave-search-form{ display:flex; align-items:center; background:#ffffff; border:1.5px solid rgba(39,34,40,.1); border-radius:999px; padding:4px 6px 4px 16px; transition:border-color .18s ease,box-shadow .18s ease } .gz-aave-search-form:focus-within{ border-color:#00b83b; box-shadow:0 0 0 3px rgba(10,228,72,.18) } .gz-aave-search-inp{ flex:1 1 auto; border:0; background:transparent; font-family:var(--gz-font); font-size:14px; color:#0e100f; padding:8px 0; outline:0 } .gz-aave-search-btn{ appearance:none; border:0; background:#0e100f; color:#0ae448; font-family:var(--gz-font); font-size:12.5px; font-weight:700; padding:8px 16px; border-radius:999px; cursor:pointer; transition:background .15s ease,color .15s ease } .gz-aave-search-btn:hover{ background:#0ae448; color:#0e100f } .gz-aave-sec-title{ font-size:14px; font-weight:500; color:#636161; margin:22px 0 12px; letter-spacing:-0.01em } .gz-aave-sec-title:first-of-type{ margin-top:4px } .gz-aave-grid{ display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px } @media screen and (max-width:600px){ .gz-aave-grid{ grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px } .gz-aave-scroll{ padding:14px 12px 140px } } @media screen and (max-width:390px){ .gz-aave-grid{ grid-template-columns:1fr } } #gz-aave-menu-modal .styles_navigationLink__BGSXO{ display:flex; align-items:center; column-gap:12px; border-radius:24px; padding:14px 16px; border:1px solid rgba(39,34,40,.06); background-color:#ffffff; background-clip:padding-box; box-shadow:0 1px 2px rgba(0,0,0,.02); text-decoration:none!important; font-size:14px; font-weight:500; transition:border-color .18s ease,box-shadow .18s ease,transform .18s ease; box-sizing:border-box } #gz-aave-menu-modal .styles_navigationLink__BGSXO:hover, #gz-aave-menu-modal .styles_navigationLink__BGSXO:focus-visible, #gz-aave-menu-modal .styles_navigationLink__BGSXO:active, #gz-aave-menu-modal .styles_navigationLink__BGSXO.is-hover{ border-color:rgba(0,184,59,.38); box-shadow:0 6px 18px rgba(10,228,72,.10); transform:translateY(-1px) } #gz-aave-menu-modal .styles_navigationLinkIcon___z4gv{ --color-1:#bcbbbb; --color-2:#a9a8a8; --color-3:#9c9b9b; --color-4:#8f8e8e; width:40px; height:40px; flex:0 0 40px; transition:transform .22s cubic-bezier(.16,1,.3,1) } #gz-aave-menu-modal .styles_navigationLinkIcon___z4gv *{ transition-property:fill,stroke,transform; transition-duration:.22s; transition-timing-function:cubic-bezier(.16,1,.3,1) } #gz-aave-menu-modal .styles_navigationLink__BGSXO:hover .styles_navigationLinkIcon___z4gv, #gz-aave-menu-modal .styles_navigationLink__BGSXO:focus-visible .styles_navigationLinkIcon___z4gv, #gz-aave-menu-modal .styles_navigationLink__BGSXO:active .styles_navigationLinkIcon___z4gv, #gz-aave-menu-modal .styles_navigationLink__BGSXO.is-hover .styles_navigationLinkIcon___z4gv{ --color-1:var(--active-color-1,#bbf7d0); --color-2:var(--active-color-2,#4ade80); --color-3:var(--active-color-3,#22e560); --color-4:var(--active-color-4,#00b83b); transform:scale(1.06) } #gz-aave-menu-modal .styles_navigationLinkContent__AIB30{ flex-grow:1; min-width:0 } #gz-aave-menu-modal .styles_navigationLinkTitleContainer__u_DKK{ display:flex; align-items:center; column-gap:6px } #gz-aave-menu-modal .styles_navigationLinkTitle__seT_D{ margin:0!important; font-size:14.5px; font-weight:600; letter-spacing:.01em; line-height:1.2; color:#211d1d!important; transition:color .18s ease } #gz-aave-menu-modal .styles_navigationLink__BGSXO:hover .styles_navigationLinkTitle__seT_D, #gz-aave-menu-modal .styles_navigationLink__BGSXO.is-hover .styles_navigationLinkTitle__seT_D{ color:#007a29!important } #gz-aave-menu-modal .styles_navigationLinkDescription__z37O9{ margin:4px 0 0!important; font-size:12.5px; font-weight:400; line-height:1.3; color:rgba(39,34,40,.65)!important } #gz-aave-menu-modal .styles_tag__ry4r1{ display:inline-flex; align-items:center; justify-content:center; padding:2px 6px; border-radius:6px; font-size:10.5px; font-weight:700; line-height:1 } #gz-aave-menu-modal .styles_primary__cFySc{ background:rgba(10,228,72,.18); color:#007a29 } #gz-aave-menu-modal .styles_secondary__Qypn2{ background:rgba(39,34,40,.06); color:#636161 } #gz-aave-menu-modal .styles_navigationLinkArrow__noF6H{ margin-inline-start:auto; color:#8f8e8e; width:16px; height:16px; flex:0 0 16px; transition:transform .2s ease,color .2s ease } #gz-aave-menu-modal .styles_navigationLink__BGSXO:hover .styles_navigationLinkArrow__noF6H, #gz-aave-menu-modal .styles_navigationLink__BGSXO.is-hover .styles_navigationLinkArrow__noF6H{ transform:translate(2px,-2px); color:#00b83b } .gz-aave-bottom-cta-wrap{ position:fixed; left:50%; bottom:74px; transform:translateX(-50%); width:calc(100% - 32px); max-width:740px; z-index:9988; pointer-events:none } .gz-aave-bottom-cta{ pointer-events:auto; display:flex; align-items:center; justify-content:center; width:100%; height:48px; border-radius:999px; background:#211d1d; color:#ffffff!important; font-family:var(--gz-font); font-size:15px; font-weight:600; text-decoration:none!important; box-shadow:0 10px 28px rgba(0,0,0,.18); transition:background .18s ease,color .18s ease,transform .18s ease } .gz-aave-bottom-cta:hover{ background:#0ae448; color:#0e100f!important; transform:translateY(-1px) }";
      (document.head || document.documentElement).appendChild(st);

      var modal = document.createElement('div');
      modal.id = 'gz-aave-menu-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-label', 'Aave Navigation Menu');
      modal.innerHTML =
        '<div class="gz-aave-topbar">' +
          '<a class="gz-aave-brand" href="/" aria-label="Home">' + "<svg class=\"styles_logo___vDjy styles_headerLogo__uE_lb\" width=\"94\" height=\"16\" viewBox=\"0 0 94 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86.2267 12.3723C84.2104 12.3723 82.4186 10.9191 81.9571 8.91278H93.9286C93.9286 8.91278 93.9927 8.18584 93.9927 7.92867C93.9927 3.67036 90.5098 0.205078 86.2288 0.205078C81.9478 0.205078 78.4648 3.66964 78.4648 7.92867C78.4648 12.1877 81.9283 15.5718 86.2288 15.5718C90.5293 15.5718 93.0402 12.4204 93.667 10.139H90.0179C90.0179 10.139 88.8575 12.3723 86.2267 12.3723ZM86.2288 3.40312C88.162 3.40312 89.8402 4.67315 90.4152 6.56599H82.0424C82.615 4.67315 84.294 3.40312 86.2288 3.40312Z\"></path><path d=\"M40.5454 15.5718C36.2644 15.5718 32.9062 12.1432 32.9062 7.92867C32.9062 3.71416 36.3892 0.205078 40.6702 0.205078C44.9512 0.205078 48.4344 3.80612 48.4344 7.88771C48.4344 9.62682 48.4344 15.1889 48.4344 15.1889H45.4199V12.7523L45.2005 12.6948C44.6696 13.9893 42.7474 15.5718 40.5454 15.5718ZM40.6702 3.40312C38.2523 3.40312 36.2844 5.42239 36.2844 7.90496C36.2844 10.3875 38.2518 12.373 40.6702 12.373C43.0889 12.373 45.056 10.3689 45.056 7.90496C45.056 5.44104 43.0889 3.40312 40.6702 3.40312Z\"></path><path d=\"M57.0368 15.5718C52.7558 15.5718 49.3984 12.1432 49.3984 7.92867C49.3984 3.71416 52.8814 0.205078 57.1624 0.205078C61.4434 0.205078 64.9266 3.80612 64.9266 7.88771C64.9266 9.62682 64.9266 15.1889 64.9266 15.1889H61.9121V12.7523L61.6927 12.6948C61.1618 13.9893 59.2388 15.5718 57.0368 15.5718ZM57.1624 3.40312C54.7448 3.40312 52.7769 5.42239 52.7769 7.90496C52.7769 10.3875 54.744 12.373 57.1624 12.373C59.5811 12.373 61.5482 10.3689 61.5482 7.90496C61.5482 5.44104 59.5811 3.40312 57.1624 3.40312Z\"></path><path d=\"M69.9877 15.1874L63.8008 0.589355H67.1856L71.7202 11.3429L76.2554 0.589355H79.6394L73.4533 15.1874H69.9877Z\"></path><path d=\"M14.985 0C6.70823 0 -0.00216598 6.80197 5.24457e-07 15.19H3.82821C3.82821 8.90381 8.78373 3.8072 14.985 3.8072C21.1862 3.8072 26.1418 8.90381 26.1418 15.19H29.9699C29.9715 6.80197 23.261 0 14.985 0Z\"></path><g class=\"logo-eyes\"><path class=\"logo-eye-left\" d=\"M11.007 15.5481C12.6893 15.5481 14.053 14.1915 14.053 12.5182C14.053 10.8448 12.6893 9.48828 11.007 9.48828C9.32471 9.48828 7.96094 10.8448 7.96094 12.5182C7.96094 14.1915 9.32471 15.5481 11.007 15.5481Z\"></path><path class=\"logo-eye-right\" d=\"M18.9679 15.5481C20.6502 15.5481 22.014 14.1915 22.014 12.5182C22.014 10.8448 20.6502 9.48828 18.9679 9.48828C17.2856 9.48828 15.9219 10.8448 15.9219 12.5182C15.9219 14.1915 17.2856 15.5481 18.9679 15.5481Z\"></path></g></svg>" + '</a>' +
          '<button type="button" class="gz-aave-close" id="gz-aave-close" aria-label="Close Menu">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="gz-aave-scroll">' +
          '<div class="gz-aave-search-box" id="gz-aave-search-box">' +
            '<form class="gz-aave-search-form" action="/search" method="get">' +
              '<input type="text" name="q" id="gz-aave-search-input" class="gz-aave-search-inp" placeholder="Tìm kiếm bài viết, công cụ MMO, DeFi..." aria-label="Search"/>' +
              '<button type="submit" class="gz-aave-search-btn">Tìm kiếm</button>' +
            '</form>' +
          '</div>' +
          '<div class="gz-aave-sec-title">Products</div>' +
          '<div class="gz-aave-grid">' + "<a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Aave+App\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\"><path d=\"M30 0H10C4.48 0 0 4.48 0 10V30C0 35.52 4.48 40 10 40H30C35.52 40 40 35.52 40 30V10C40 4.48 35.52 0 30 0Z\" fill=\"#0AE448\"></path><path d=\"M15.39 14.61C17.1 14.33 18.72 15.49 19 17.21C19.27 18.92 18.11 20.54 16.39 20.82C14.68 21.1 13.06 19.93 12.79 18.22C12.51 16.5 13.67 14.89 15.39 14.61ZM23.61 14.61C25.32 14.33 26.94 15.49 27.22 17.21C27.5 18.92 26.33 20.54 24.62 20.82C22.9 21.1 21.29 19.93 21.01 18.22C20.73 16.5 21.89 14.89 23.61 14.61ZM20 4.73C28.54 4.73 35.46 11.78 35.46 20.49H31.51C31.51 13.96 26.4 8.68 20 8.68C13.6 8.68 8.48 13.96 8.48 20.49H4.53C4.53 11.78 11.45 4.73 20 4.73Z\" fill=\"#fff\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Aave App</p></div><p class=\"styles_navigationLinkDescription__z37O9\">Savings for everyone</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Aave+Pro\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\"><path d=\"M30 0H10C4.48 0 0 4.48 0 10V30C0 35.52 4.48 40 10 40H30C35.52 40 40 35.52 40 30V10C40 4.48 35.52 0 30 0Z\" fill=\"url(#aaveproicon-paint0)\"></path><path d=\"M15.39 15.54C17.1 15.26 18.72 16.42 19 18.14C19.27 19.85 18.11 21.47 16.39 21.75C14.68 22.03 13.06 20.86 12.79 19.15C12.51 17.43 13.67 15.82 15.39 15.54ZM23.61 15.54C25.32 15.26 26.94 16.42 27.22 18.14C27.5 19.85 26.33 21.47 24.62 21.75C22.9 22.03 21.29 20.86 21.01 19.15C20.73 17.43 21.89 15.82 23.61 15.54ZM20 5.66C28.54 5.66 35.46 12.71 35.46 21.42H31.51C31.51 14.89 26.4 9.61 20 9.61C13.6 9.61 8.48 14.89 8.48 21.42H4.53C4.53 12.71 11.45 5.66 20 5.66Z\" fill=\"black\" fill-opacity=\"0.3\"></path><path d=\"M15.39 14.61C17.1 14.33 18.72 15.49 19 17.21C19.27 18.92 18.11 20.54 16.39 20.82C14.68 21.1 13.06 19.93 12.79 18.22C12.51 16.5 13.67 14.89 15.39 14.61ZM23.61 14.61C25.32 14.33 26.94 15.49 27.22 17.21C27.5 18.92 26.33 20.54 24.62 20.82C22.9 21.1 21.29 19.93 21.01 18.22C20.73 16.5 21.89 14.89 23.61 14.61ZM20 4.73C28.54 4.73 35.46 11.78 35.46 20.49H31.51C31.51 13.96 26.4 8.68 20 8.68C13.6 8.68 8.48 13.96 8.48 20.49H4.53C4.53 11.78 11.45 4.73 20 4.73Z\" fill=\"url(#aaveproicon-paint1)\"></path><path d=\"M15.47 15.1C16.91 14.87 18.27 15.85 18.5 17.29C18.74 18.73 17.76 20.09 16.31 20.32C14.96 20.54 13.68 19.7 13.34 18.4L13.28 18.14C13.06 16.78 13.91 15.51 15.2 15.16L15.47 15.1ZM23.69 15.1C25.13 14.87 26.49 15.85 26.73 17.29C26.95 18.64 26.1 19.92 24.8 20.27L24.54 20.32C23.18 20.54 21.91 19.7 21.56 18.4L21.5 18.14C21.27 16.69 22.25 15.33 23.69 15.1ZM20 5.23C28.09 5.23 34.7 11.78 34.95 19.99H32C31.75 13.54 26.69 8.35 20.31 8.18L20 8.18C13.47 8.18 8.25 13.43 7.99 19.99H5.04C5.29 11.91 11.69 5.44 19.61 5.23L20 5.23Z\" stroke=\"#fff\" stroke-opacity=\"0.5\"></path><path d=\"M16 0.5H24C26.81 0.5 28.88 0.5 30.53 0.63C32.16 0.77 33.33 1.03 34.31 1.54C36.1 2.45 37.55 3.9 38.46 5.69C38.97 6.67 39.23 7.84 39.37 9.47C39.5 11.12 39.5 13.19 39.5 16V24C39.5 26.81 39.5 28.88 39.37 30.53C39.23 32.16 38.97 33.33 38.46 34.31C37.55 36.1 36.1 37.55 34.31 38.46C33.33 38.97 32.16 39.23 30.53 39.37C28.88 39.5 26.81 39.5 24 39.5H16C13.19 39.5 11.12 39.5 9.47 39.37C7.84 39.23 6.67 38.97 5.69 38.46C3.9 37.55 2.45 36.1 1.54 34.31C1.03 33.33 0.77 32.16 0.63 30.53C0.5 28.88 0.5 26.81 0.5 24V16C0.5 13.19 0.5 11.12 0.63 9.47C0.77 7.84 1.03 6.67 1.54 5.69C2.45 3.9 3.9 2.45 5.69 1.54C6.67 1.03 7.84 0.77 9.47 0.63C11.12 0.5 13.19 0.5 16 0.5Z\" stroke=\"#fff\" stroke-opacity=\"0.09\"></path><defs><linearGradient id=\"aaveproicon-paint0\" x1=\"20\" y1=\"0\" x2=\"20\" y2=\"40\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#454445\"></stop><stop offset=\"1\" stop-color=\"#2B2B2B\"></stop></linearGradient><linearGradient id=\"aaveproicon-paint1\" x1=\"20\" y1=\"4.73\" x2=\"20\" y2=\"20.86\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#fff\"></stop><stop offset=\"0.69\" stop-color=\"#C2C3C6\"></stop></linearGradient></defs></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Aave Pro</p><div class=\"styles_tag__ry4r1 styles_primary__cFySc \">V4</div></div><p class=\"styles_navigationLinkDescription__z37O9\">The full power of DeFi</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Aave\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\"><path d=\"M1.00 15.40C1.00 10.36 1.00 7.84 1.98 5.91C2.84 4.22 4.22 2.84 5.91 1.98C7.84 1.00 10.36 1.00 15.40 1.00H24.60C29.64 1.00 32.16 1.00 34.09 1.98C35.78 2.84 37.16 4.22 38.02 5.91C39.00 7.84 39.00 10.36 39.00 15.40V24.60C39.00 29.64 39.00 32.16 38.02 34.09C37.16 35.78 35.78 37.16 34.09 38.02C32.16 39.00 29.64 39.00 24.60 39.00H15.40C10.36 39.00 7.84 39.00 5.91 38.02C4.22 37.16 2.84 35.78 1.98 34.09C1.00 32.16 1.00 29.64 1.00 24.60V15.40Z\" fill=\"#fff\"></path><path d=\"M15.39 14.61C17.1 14.33 18.72 15.49 19 17.21C19.27 18.92 18.11 20.54 16.39 20.82C14.68 21.1 13.06 19.93 12.79 18.22C12.51 16.5 13.67 14.89 15.39 14.61ZM23.61 14.61C25.32 14.33 26.94 15.49 27.22 17.21C27.5 18.92 26.33 20.54 24.62 20.82C22.9 21.1 21.29 19.93 21.01 18.22C20.73 16.5 21.89 14.89 23.61 14.61ZM20 4.73C28.54 4.73 35.46 11.78 35.46 20.49H31.51C31.51 13.96 26.4 8.68 20 8.68C13.6 8.68 8.48 13.96 8.48 20.49H4.53C4.53 11.78 11.45 4.73 20 4.73Z\" fill=\"#0AE448\"></path><path d=\"M16 0.5H24C26.81 0.5 28.88 0.5 30.53 0.63C32.16 0.77 33.33 1.03 34.31 1.54C36.1 2.45 37.55 3.9 38.46 5.69C38.97 6.67 39.23 7.84 39.37 9.47C39.5 11.12 39.5 13.19 39.5 16V24C39.5 26.81 39.5 28.88 39.37 30.53C39.23 32.16 38.97 33.33 38.46 34.31C37.55 36.1 36.1 37.55 34.31 38.46C33.33 38.97 32.16 39.23 30.53 39.37C28.88 39.5 26.81 39.5 24 39.5H16C13.19 39.5 11.12 39.5 9.47 39.37C7.84 39.23 6.67 38.97 5.69 38.46C3.9 37.55 2.45 36.1 1.54 34.31C1.03 33.33 0.77 32.16 0.63 30.53C0.5 28.88 0.5 26.81 0.5 24V16C0.5 13.19 0.5 11.12 0.63 9.47C0.77 7.84 1.03 6.67 1.54 5.69C2.45 3.9 3.9 2.45 5.69 1.54C6.67 1.03 7.84 0.77 9.47 0.63C11.12 0.5 13.19 0.5 16 0.5Z\" stroke=\"var(--fp-0)\" stroke-opacity=\"0.05\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Aave</p><div class=\"styles_tag__ry4r1 styles_secondary__Qypn2 \">V3</div><svg class=\"styles_navigationLinkArrow__noF6H\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M4.60596 11.4269L11.3942 4.63867M5.70755 4.66844L11.3942 4.63867L11.3644 10.3253\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><p class=\"styles_navigationLinkDescription__z37O9\">The original DeFi protocol</p></div></a>" + '</div>' +
          '<div class="gz-aave-sec-title">Solutions</div>' +
          '<div class="gz-aave-grid">' + "<a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Aave+Kit\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-1); --active-color-2: var(--icon-purple-3); --active-color-3: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><path d=\"M18.16 13.27C19.36 13.05 20.64 13.05 21.84 13.27C23.2 13.53 24.38 14.21 26.73 15.57L33 19.18C35.35 20.54 36.53 21.22 36.97 22.01C37.17 22.37 37.27 22.74 37.26 23.11L37.26 23.26V28.72L37.26 29.02C37.28 29.42 37.19 29.82 36.97 30.21C36.53 30.99 35.35 31.67 33 33.03L26.73 36.65L25.9 37.13C24.08 38.17 23.03 38.72 21.84 38.94C20.64 39.17 19.36 39.17 18.16 38.94C16.8 38.69 15.62 38.01 13.27 36.65L7 33.03C4.65 31.67 3.47 30.99 3.03 30.21C2.81 29.82 2.72 29.42 2.74 29.02L2.74 23.11C2.73 22.74 2.83 22.37 3.03 22.01C3.47 21.22 4.65 20.54 7 19.18L13.27 15.57C15.62 14.21 16.8 13.53 18.16 13.27Z\" fill=\"var(--color-1)\"></path><path d=\"M18.16 7.35C19.36 7.12 20.64 7.12 21.84 7.35C23.2 7.6 24.38 8.28 26.73 9.64L33 13.26C35.35 14.62 36.53 15.3 36.97 16.08C37.17 16.44 37.27 16.81 37.26 17.18L37.26 17.33V22.79L37.26 23.1C37.28 23.49 37.19 23.9 36.97 24.28C36.53 25.07 35.35 25.75 33 27.11L26.73 30.72L25.9 31.2C24.08 32.25 23.03 32.8 21.84 33.02C20.64 33.24 19.36 33.24 18.16 33.02C16.8 32.76 15.62 32.08 13.27 30.72L7 27.11C4.65 25.75 3.47 25.07 3.03 24.28C2.81 23.9 2.72 23.49 2.74 23.1L2.74 17.18C2.73 16.81 2.83 16.44 3.03 16.08C3.47 15.3 4.65 14.62 7 13.26L13.27 9.64C15.62 8.28 16.8 7.6 18.16 7.35Z\" fill=\"var(--color-2)\"></path><path d=\"M18.16 1.28C19.36 1.06 20.64 1.06 21.84 1.28C23.2 1.54 24.38 2.22 26.73 3.58L33 7.19C35.35 8.55 36.53 9.23 36.97 10.02C37.17 10.38 37.27 10.75 37.26 11.12L37.26 11.27V16.73L37.26 17.03C37.28 17.43 37.19 17.83 36.97 18.22C36.53 19 35.35 19.68 33 21.04L26.73 24.66L25.9 25.14C24.08 26.18 23.03 26.73 21.84 26.96C20.64 27.18 19.36 27.18 18.16 26.96C16.8 26.7 15.62 26.02 13.27 24.66L7 21.04C4.65 19.68 3.47 19 3.03 18.22C2.81 17.83 2.72 17.43 2.74 17.03L2.74 11.12C2.73 10.75 2.83 10.38 3.03 10.02C3.47 9.23 4.65 8.55 7 7.19L13.27 3.58C15.62 2.22 16.8 1.54 18.16 1.28Z\" fill=\"var(--color-3)\"></path><path d=\"M18.13 1.19C19.32 0.96 20.61 0.96 21.8 1.19C23.16 1.44 24.34 2.12 26.69 3.48L32.94 7.09C35.29 8.44 36.47 9.12 36.91 9.91C37.3 10.6 37.3 11.34 36.91 12.03C36.47 12.81 35.29 13.49 32.94 14.85L26.69 18.46C24.34 19.81 23.16 20.49 21.8 20.75C20.61 20.97 19.32 20.97 18.13 20.75C16.78 20.49 15.6 19.81 13.25 18.46L7 14.85C4.64 13.49 3.47 12.81 3.03 12.03C2.64 11.34 2.64 10.6 3.03 9.91C3.47 9.12 4.64 8.44 7 7.09L13.25 3.48C15.6 2.12 16.78 1.44 18.13 1.19Z\" fill=\"var(--color-4)\"></path><path d=\"M24.56 10.81C23.78 11.26 22.52 11.26 21.74 10.81C20.96 10.36 20.96 9.63 21.74 9.18C22.52 8.73 23.78 8.73 24.56 9.18C25.34 9.63 25.34 10.36 24.56 10.81Z\" fill=\"#fff\"></path><path d=\"M20.87 12.94C20.09 13.39 18.83 13.39 18.05 12.94C17.27 12.49 17.27 11.76 18.05 11.31C18.83 10.86 20.09 10.86 20.87 11.31C21.65 11.76 21.65 12.49 20.87 12.94Z\" fill=\"#fff\"></path><path d=\"M15.48 7.7C19.31 5.48 25.59 5.52 29.49 7.77L27.72 8.8C24.79 7.11 20.13 7.06 17.25 8.72C14.38 10.38 14.46 13.07 17.39 14.76L15.61 15.79C11.71 13.53 11.65 9.91 15.48 7.7Z\" fill=\"#fff\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Aave Kit</p></div><p class=\"styles_navigationLinkDescription__z37O9\">Build with Aave</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Stable+Vaults\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><rect x=\"7.6665\" y=\"8\" width=\"10\" height=\"10\" rx=\"5\" fill=\"var(--color-1)\"></rect><rect x=\"21.6665\" y=\"22\" width=\"10\" height=\"10\" rx=\"5\" fill=\"var(--color-1)\"></rect><path d=\"M11.6665 28L27.6665 12\" stroke=\"var(--color-4)\" stroke-width=\"4\" stroke-linecap=\"round\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Stable Vaults</p></div><p class=\"styles_navigationLinkDescription__z37O9\">Predictable Stablecoin Yields</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=GHO++sGHO\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--gho-1);\"><circle cx=\"20\" cy=\"20\" r=\"16\" fill=\"var(--color-1)\"></circle><circle cx=\"16.72\" cy=\"17.91\" r=\"2.6\" fill=\"#fff\"></circle><circle cx=\"23.29\" cy=\"17.91\" r=\"2.6\" fill=\"#fff\"></circle><path d=\"M32.35 30.18V21.3H29C28.32 25.78 24.62 29.04 20 29.04C14.89 29.04 10.81 25.06 10.81 19.85C10.81 14.65 14.89 10.59 20 10.59C24.46 10.59 28.13 13.67 29 17.91H32.35C31.43 11.89 26.17 7.27 20 7.27C13.18 7.27 7.65 12.91 7.65 19.85C7.65 26.8 13.18 32.43 20 32.43C24.29 32.43 27.28 30.45 29.12 27.32C29.16 27.33 29.21 27.34 29.25 27.35V33.06C30.4 32.24 31.45 31.27 32.35 30.18Z\" fill=\"#fff\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">GHO &amp; sGHO</p></div><p class=\"styles_navigationLinkDescription__z37O9\">Aave-native stablecoin + savings</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Aave+for+Agents\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><path d=\"M19.5 5C21.1569 5 22.5 6.34315 22.5 8C22.5 9.21025 21.7821 10.2503 20.75 10.7246V14C20.75 14.6904 20.1904 15.25 19.5 15.25C18.8096 15.25 18.25 14.6904 18.25 14V10.7246C17.2179 10.2503 16.5 9.21025 16.5 8C16.5 6.34315 17.8431 5 19.5 5Z\" fill=\"var(--color-1)\"></path><path d=\"M26 17C29.3137 17 32 19.6863 32 23V28C32 31.3137 29.3137 34 26 34H13C9.68629 34 7 31.3137 7 28V23C7 19.6863 9.68629 17 13 17H26ZM15.5 22C14.3954 22 13.5 22.8954 13.5 24C13.5 25.1046 14.3954 26 15.5 26C16.6046 26 17.5 25.1046 17.5 24C17.5 22.8954 16.6046 22 15.5 22ZM23.5 22C22.3954 22 21.5 22.8954 21.5 24C21.5 25.1046 22.3954 26 23.5 26C24.6046 26 25.5 25.1046 25.5 24C25.5 22.8954 24.6046 22 23.5 22Z\" fill=\"var(--color-4)\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Aave for Agents</p></div><p class=\"styles_navigationLinkDescription__z37O9\">The lending layer for AiFi</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Documentation\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><path d=\"M17 30.76V17.41C17 16.55 17 16.12 17.15 15.75C17.28 15.43 17.49 15.15 17.76 14.94C18.07 14.69 18.49 14.57 19.32 14.34L26.92 12.17C28.31 11.77 29 11.57 29.55 11.73C30.03 11.86 30.44 12.17 30.7 12.6C31 13.08 31 13.8 31 15.24V28.59C31 29.45 31 29.88 30.85 30.25C30.72 30.57 30.51 30.85 30.24 31.06C29.93 31.31 29.51 31.43 28.68 31.66L28.68 31.66L21.08 33.83L21.08 33.83C19.69 34.23 19 34.43 18.45 34.27C17.97 34.14 17.56 33.83 17.3 33.4C17 32.92 17 32.2 17 30.76Z\" fill=\"var(--color-1)\"></path><path d=\"M17.92 6.17C19.31 5.77 20 5.57 20.55 5.73C21.03 5.86 21.44 6.17 21.7 6.6C22 7.08 22 7.8 22 9.24V10.45L18.5 11.45C17.96 11.61 16.93 11.85 16.08 12.45L15.91 12.58C15.31 13.05 14.83 13.64 14.5 14.32L14.37 14.62C13.95 15.66 14 16.82 14 17.41V27.28L12.08 27.83L11.16 28.09C10.36 28.31 9.87 28.39 9.45 28.27C8.97 28.14 8.56 27.83 8.3 27.4C8 26.92 8 26.2 8 24.76V13.83C8 12.1 8 11.23 8.3 10.5C8.56 9.86 8.98 9.3 9.53 8.87C10.15 8.39 10.98 8.15 12.64 7.67L17.92 6.17Z\" fill=\"var(--color-4)\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Documentation</p></div><p class=\"styles_navigationLinkDescription__z37O9\">Technical guides for developers</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Partners\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><path d=\"M20.6 6.84C22.84 6.84 23.96 6.84 24.82 7.28C25.57 7.66 26.18 8.27 26.56 9.03C27 9.88 27 11 27 13.24L27 27.44C27 29.68 27 30.8 26.56 31.66C26.18 32.41 25.57 33.02 24.82 33.41C23.96 33.84 22.84 33.84 20.6 33.84L13.4 33.84C11.16 33.84 10.04 33.84 9.18 33.41C8.43 33.02 7.82 32.41 7.44 31.66C7 30.8 7 29.68 7 27.44L7 13.24C7 11 7 9.88 7.44 9.03C7.82 8.27 8.43 7.66 9.18 7.28C10.04 6.84 11.16 6.84 13.4 6.84L20.6 6.84Z\" fill=\"var(--color-4)\"></path><path d=\"M29.5 13.24C29.5 12.16 29.5 11.2 29.44 10.41C29.4 9.9 29.32 9.38 29.17 8.85C30.42 8.87 31.19 8.96 31.82 9.28C32.57 9.66 33.18 10.27 33.56 11.03C34 11.88 34 13 34 15.24V25.44C34 27.68 34 28.8 33.56 29.66C33.18 30.41 32.57 31.02 31.82 31.41C31.19 31.73 30.42 31.81 29.17 31.83C29.32 31.31 29.4 30.78 29.44 30.27C29.5 29.48 29.5 28.52 29.5 27.44V13.24Z\" fill=\"var(--color-1)\"></path><path d=\"M12 12.84H22M12 19.84H19.14\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Partners</p></div><p class=\"styles_navigationLinkDescription__z37O9\">The best build on Aave</p></div></a>" + '</div>' +
          '<div class="gz-aave-sec-title">Resources</div>' +
          '<div class="gz-aave-grid">' + "<a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Blog\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><rect x=\"6\" y=\"7\" width=\"12\" height=\"26\" rx=\"3\" fill=\"var(--color-4)\"></rect><rect x=\"21\" y=\"7\" width=\"7\" height=\"26\" rx=\"2\" fill=\"var(--color-1)\"></rect><rect x=\"31\" y=\"7\" width=\"3\" height=\"26\" rx=\"1.5\" fill=\"var(--color-4)\"></rect></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Blog</p></div><p class=\"styles_navigationLinkDescription__z37O9\">The latest news &amp; updates</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Brand\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><path d=\"M9.31 19C8.76 19 8.49 19 8.26 18.87C8.08 18.77 7.9 18.57 7.82 18.38C7.72 18.14 7.75 17.89 7.81 17.4C8.17 14.54 9.46 11.87 11.52 9.81C13.96 7.37 17.27 6 20.71 6C24.16 6 27.47 7.37 29.91 9.81C31.97 11.87 33.26 14.54 33.62 17.4C33.68 17.89 33.71 18.14 33.61 18.38C33.53 18.57 33.35 18.77 33.17 18.87C32.94 19 32.67 19 32.11 19H28.82C28.27 19 28 19 27.81 18.92C27.62 18.84 27.52 18.77 27.4 18.6C27.28 18.44 27.19 18.1 27.02 17.42C26.74 16.29 26.15 15.24 25.31 14.4C24.09 13.18 22.44 12.5 20.71 12.5C18.99 12.5 17.34 13.18 16.12 14.4C15.28 15.24 14.69 16.29 14.41 17.42C14.24 18.1 14.15 18.44 14.03 18.6C13.9 18.77 13.81 18.84 13.62 18.92C13.43 19 13.16 19 12.61 19H9.31Z\" fill=\"var(--color-4)\"></path><path d=\"M9.31 34C8.76 34 8.49 34 8.26 33.87C8.08 33.77 7.9 33.57 7.82 33.38C7.72 33.14 7.75 32.89 7.81 32.4C8.17 29.54 9.46 26.87 11.52 24.81C13.96 22.37 17.27 21 20.71 21C24.16 21 27.47 22.37 29.91 24.81C31.97 26.87 33.26 29.54 33.62 32.4C33.68 32.89 33.71 33.14 33.61 33.38C33.53 33.57 33.35 33.77 33.17 33.87C32.94 34 32.67 34 32.11 34H28.82C28.27 34 28 34 27.81 33.92C27.62 33.84 27.52 33.77 27.4 33.6C27.28 33.44 27.19 33.1 27.02 32.42C26.74 31.29 26.15 30.24 25.31 29.4C24.09 28.18 22.44 27.5 20.71 27.5C18.99 27.5 17.34 28.18 16.12 29.4C15.28 30.24 14.69 31.29 14.41 32.42C14.24 33.1 14.15 33.44 14.03 33.6C13.9 33.77 13.81 33.84 13.62 33.92C13.43 34 13.16 34 12.61 34H9.31Z\" fill=\"var(--color-1)\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Brand</p></div><p class=\"styles_navigationLinkDescription__z37O9\">Assets, examples &amp; guides</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=FAQs\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><path d=\"M17 34C13.69 34 11 31.31 11 28C11 24.69 13.69 22 17 22L25.4 22C26.89 22 27.63 22 28.25 22.1C31.67 22.64 34.36 25.33 34.9 28.75C35 29.37 35 30.11 35 31.6C35 31.97 35 32.16 34.98 32.31C34.84 33.17 34.17 33.84 33.31 33.98C33.16 34 32.97 34 32.6 34L17 34Z\" fill=\"var(--color-1)\"></path><path d=\"M25 6C28.31 6 31 8.69 31 12C31 15.31 28.31 18 25 18L9.4 18C9.03 18 8.84 18 8.69 17.98C7.83 17.84 7.16 17.17 7.02 16.31C7 16.16 7 15.97 7 15.6C7 14.11 7 13.37 7.1 12.75C7.64 9.33 10.33 6.64 13.75 6.1C14.37 6 15.11 6 16.6 6L25 6Z\" fill=\"var(--color-4)\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">FAQs</p></div><p class=\"styles_navigationLinkDescription__z37O9\">Answers to common questions</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Help++Support\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><path d=\"M20.43 30.86C25.48 30.86 29.77 27.58 31.28 23.03C31.55 22.21 31.69 21.8 31.52 21.16C31.4 20.69 30.94 20.05 30.53 19.79C29.97 19.43 29.38 19.43 28.2 19.43L12.66 19.43C11.48 19.43 10.88 19.43 10.32 19.79C9.92 20.05 9.45 20.69 9.33 21.16C9.17 21.8 9.31 22.21 9.58 23.03C11.08 27.58 15.37 30.86 20.43 30.86Z\" fill=\"var(--color-4)\"></path><path d=\"M20.43 16.43C23.72 16.43 26.5 14.3 27.48 11.34C27.66 10.81 27.75 10.54 27.64 10.12C27.56 9.82 27.26 9.4 27 9.23C26.63 9 26.25 9 25.48 9L15.38 9C14.61 9 14.22 9 13.86 9.23C13.59 9.4 13.29 9.82 13.22 10.12C13.11 10.54 13.2 10.81 13.37 11.34C14.35 14.3 17.14 16.43 20.43 16.43Z\" fill=\"var(--color-1)\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Help &amp; Support</p></div><p class=\"styles_navigationLinkDescription__z37O9\">Guides, articles &amp; more</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Policy\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><path d=\"M12.68 16.76C11.99 15.25 11.64 14.49 11.16 14.25C10.74 14.05 10.26 14.05 9.84 14.25C9.36 14.49 9.01 15.25 8.32 16.76L5.72 22.42C5.7 22.47 5.69 22.49 5.68 22.51C5.35 23.3 5.75 24.22 6.56 24.51C6.58 24.52 6.6 24.52 6.65 24.54C6.77 24.58 6.83 24.6 6.88 24.62C9.24 25.36 11.76 25.36 14.12 24.62C14.18 24.6 14.23 24.58 14.35 24.54C14.4 24.52 14.42 24.52 14.44 24.51C15.25 24.22 15.65 23.3 15.32 22.51C15.31 22.49 15.3 22.47 15.28 22.42L12.68 16.76Z\" fill=\"var(--color-1)\"></path><path d=\"M31.68 16.76C30.99 15.25 30.64 14.49 30.16 14.25C29.74 14.05 29.26 14.05 28.84 14.25C28.36 14.49 28.01 15.25 27.32 16.76L24.72 22.42C24.7 22.47 24.69 22.49 24.68 22.51C24.35 23.3 24.75 24.22 25.56 24.51C25.58 24.52 25.6 24.52 25.65 24.54C25.77 24.58 25.83 24.6 25.88 24.62C28.24 25.36 30.76 25.36 33.12 24.62C33.18 24.6 33.23 24.58 33.35 24.54C33.4 24.52 33.42 24.52 33.44 24.51C34.25 24.22 34.65 23.3 34.32 22.51C34.31 22.49 34.3 22.47 34.28 22.42L31.68 16.76Z\" fill=\"var(--color-1)\"></path><path d=\"M20 7.5C20.83 7.5 21.5 8.17 21.5 9V15.45L23.77 14.19C24.5 13.79 25.41 14.05 25.81 14.77C26.21 15.5 25.95 16.41 25.23 16.81L21.51 18.88L21.5 18.88V31.5H25C25.83 31.5 26.5 32.17 26.5 33C26.5 33.83 25.83 34.5 25 34.5H15C14.17 34.5 13.5 33.83 13.5 33C13.5 32.17 14.17 31.5 15 31.5H18.5V18.88L18.49 18.88L14.77 16.81C14.05 16.41 13.79 15.5 14.19 14.77C14.59 14.05 15.5 13.79 16.23 14.19L18.5 15.45V9C18.5 8.17 19.17 7.5 20 7.5Z\" fill=\"var(--color-4)\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Policy</p></div><p class=\"styles_navigationLinkDescription__z37O9\">Regulatory submissions</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Security\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><g transform=\"translate(4 4) scale(2)\"><path d=\"M3.7135 11.5755C3.26054 10.8233 3 9.94207 3 9V4C3 2.89543 3.89543 2 5 2H11C11.2139 2 11.42 2.03359 11.6133 2.09579L3.7135 11.5755Z\" fill=\"var(--color-4)\"></path><path d=\"M4.62109 12.6863L12.7157 2.97266C12.896 3.27303 12.9998 3.62467 12.9998 4.0005V9.00049C12.9998 11.7619 10.7612 14.0005 7.99978 14.0005C6.6972 14.0005 5.51094 13.5024 4.62109 12.6863Z\" fill=\"var(--color-1)\"></path></g></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Security</p></div><p class=\"styles_navigationLinkDescription__z37O9\">Audit &amp; compliance reports</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Insights\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><circle cx=\"20\" cy=\"20\" r=\"5\" fill=\"var(--color-4)\"></circle><path d=\"M7.4 24.84C5.55 20.02 6.56 14.35 10.45 10.45C13.09 7.82 16.55 6.5 20 6.5C20.83 6.5 21.5 7.17 21.5 8C21.5 8.83 20.83 9.5 20 9.5C17.31 9.5 14.63 10.52 12.58 12.58C9.6 15.55 8.79 19.86 10.12 23.57C9.09 23.74 8.16 24.19 7.4 24.84Z\" fill=\"var(--color-1)\"></path><path d=\"M20 33.5C19.17 33.5 18.5 32.83 18.5 32C18.5 31.17 19.17 30.5 20 30.5C22.69 30.5 25.37 29.48 27.42 27.42C30.4 24.45 31.21 20.14 29.88 16.43C30.91 16.27 31.85 15.81 32.6 15.15C34.46 19.98 33.44 25.65 29.55 29.55C26.91 32.18 23.45 33.5 20 33.5Z\" fill=\"var(--color-1)\"></path><circle cx=\"11\" cy=\"29\" r=\"3\" fill=\"var(--color-1)\"></circle><circle cx=\"29\" cy=\"11\" r=\"3\" fill=\"var(--color-1)\"></circle></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Insights</p><svg class=\"styles_navigationLinkArrow__noF6H\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M4.60596 11.4269L11.3942 4.63867M5.70755 4.66844L11.3942 4.63867L11.3644 10.3253\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><p class=\"styles_navigationLinkDescription__z37O9\">Protocol metrics &amp; updates.</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Governance\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><rect x=\"9\" y=\"21\" width=\"5\" height=\"11\" rx=\"2\" fill=\"var(--color-1)\"></rect><rect x=\"17\" y=\"21\" width=\"5\" height=\"11\" rx=\"2\" fill=\"var(--color-1)\"></rect><rect x=\"25\" y=\"21\" width=\"5\" height=\"11\" rx=\"2\" fill=\"var(--color-1)\"></rect><path d=\"M16.31 9C17.51 8.27 18.11 7.91 18.76 7.77C19.33 7.64 19.91 7.64 20.48 7.77C21.12 7.91 21.73 8.27 22.93 9L25.95 10.83C29.61 13.04 31.44 14.14 31.69 15.14C31.91 16 31.65 16.91 31.02 17.53C30.29 18.25 28.16 18.25 23.88 18.25H15.36C11.08 18.25 8.95 18.25 8.21 17.53C7.58 16.91 7.33 16 7.55 15.14C7.8 14.14 9.63 13.04 13.29 10.83L16.31 9Z\" fill=\"var(--color-4)\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Governance</p><svg class=\"styles_navigationLinkArrow__noF6H\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M4.60596 11.4269L11.3942 4.63867M5.70755 4.66844L11.3942 4.63867L11.3644 10.3253\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><p class=\"styles_navigationLinkDescription__z37O9\">The Aave governance forum</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Bug+Bounty\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><path d=\"M31 15.5C31 18.54 26.08 21 20 21C13.92 21 9 18.54 9 15.5C9 12.46 13.92 10 20 10C26.08 10 31 12.46 31 15.5Z\" fill=\"var(--color-1)\"></path><path d=\"M30.21 21.45C30.72 22.09 31 22.78 31 23.5C31 26.54 26.08 29 20 29C13.92 29 9 26.54 9 23.5C9 22.78 9.28 22.09 9.79 21.45C10.15 21.68 10.52 21.89 10.88 22.07C13.37 23.32 16.6 24 20 24C23.4 24 26.63 23.32 29.12 22.07C29.48 21.89 29.85 21.68 30.21 21.45Z\" fill=\"var(--color-4)\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Bug Bounty</p><svg class=\"styles_navigationLinkArrow__noF6H\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M4.60596 11.4269L11.3942 4.63867M5.70755 4.66844L11.3942 4.63867L11.3644 10.3253\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><p class=\"styles_navigationLinkDescription__z37O9\">Report responsibly, get rewarded</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Aave+Labs\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><path d=\"M32.8 20.74V11.51C32.8 9.99 31.76 8.6 30.24 8.6C24.58 8.6 20 13.18 20 18.84C20 13.18 15.41 8.6 9.76 8.6C8.24 8.6 7.2 9.99 7.2 11.51V20.74C7.2 22.05 8.45 23 9.76 23C12.22 23 15.63 23.86 17.74 25.31C18.41 25.77 19.18 26.12 20 26.12C20.82 26.12 21.59 25.77 22.26 25.31C24.37 23.86 27.78 23 30.24 23C31.55 23 32.8 22.05 32.8 20.74Z\" fill=\"var(--color-1)\"></path><path d=\"M29.83 26.21C31.49 26.33 32.8 27.71 32.8 29.4C32.8 31.17 31.37 32.6 29.6 32.6H10.4C8.63 32.6 7.2 31.17 7.2 29.4C7.2 27.71 8.51 26.33 10.17 26.21C12.07 26.3 14.55 27.01 15.93 27.95C16.86 28.58 18.27 29.32 20 29.32C21.73 29.32 23.14 28.58 24.07 27.95C25.44 27.01 27.93 26.3 29.83 26.21Z\" fill=\"var(--color-4)\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Aave Labs</p></div><p class=\"styles_navigationLinkDescription__z37O9\">Learn about Aave Labs</p></div></a><a class=\"styles_navigationLink__BGSXO \" href=\"/search?q=Careers\"><svg class=\"styles_navigationLinkIcon___z4gv\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" style=\"--active-color-1: var(--icon-purple-4); --active-color-4: var(--icon-purple-6);\"><path d=\"M14 13V11.07C14 9.3 15.28 7.79 17.02 7.5C18.99 7.17 21.01 7.17 22.98 7.5C24.72 7.79 26 9.3 26 11.07V13\" stroke=\"var(--color-1)\" stroke-width=\"3\"></path><path d=\"M6 27.99C6 26.78 6 26.18 6.21 25.75C6.49 25.2 7.02 24.8 7.63 24.69C8.09 24.6 8.67 24.76 9.83 25.1L13.85 26.24C16.14 26.9 17.28 27.22 18.44 27.35C19.48 27.47 20.52 27.47 21.56 27.35C22.72 27.22 23.86 26.9 26.15 26.24L30.17 25.1C31.33 24.76 31.91 24.6 32.37 24.69C32.98 24.8 33.51 25.2 33.79 25.75C34 26.18 34 26.78 34 27.99C34 29.86 34 30.8 33.69 31.54C33.29 32.51 32.51 33.29 31.54 33.69C30.8 34 29.86 34 27.99 34H12.01C10.14 34 9.2 34 8.46 33.69C7.49 33.29 6.71 32.51 6.31 31.54C6 30.8 6 29.86 6 27.99Z\" fill=\"var(--color-1)\"></path><path d=\"M6 16.49C6 15.1 6 14.41 6.22 13.86C6.53 13.12 7.12 12.53 7.86 12.22C8.41 12 9.1 12 10.49 12H29.51C30.9 12 31.59 12 32.14 12.22C32.88 12.53 33.47 13.12 33.78 13.86C34 14.41 34 15.1 34 16.49C34 17.91 34 18.63 33.8 19.24C33.52 20.07 32.98 20.79 32.25 21.29C31.72 21.65 31.03 21.85 29.66 22.24L25.27 23.49C23.31 24.05 22.33 24.33 21.33 24.44C20.45 24.54 19.55 24.54 18.67 24.44C17.67 24.33 16.69 24.05 14.73 23.49L10.34 22.24C8.97 21.85 8.28 21.65 7.75 21.29C7.02 20.79 6.48 20.07 6.2 19.24C6 18.63 6 17.91 6 16.49Z\" fill=\"var(--color-4)\"></path></svg><div class=\"styles_navigationLinkContent__AIB30\"><div class=\"styles_navigationLinkTitleContainer__u_DKK\"><p class=\"styles_navigationLinkTitle__seT_D\">Careers</p></div><p class=\"styles_navigationLinkDescription__z37O9\">Build the future of finance</p></div></a>" + '</div>' +
        '</div>' +
        '<div class="gz-aave-bottom-cta-wrap">' +
          '<a class="gz-aave-bottom-cta" id="gz-aave-cta-btn" href="/">Use Aave</a>' +
        '</div>';
      document.body.appendChild(modal);

      var closeBtn = document.getElementById('gz-aave-close');
      if(closeBtn){
        closeBtn.addEventListener('click', function(){
          closeAaveMenu();
        });
      }
      return modal;
    }

    function openAaveMenu(mode){
      var modal = ensureAaveMenuModal();
      var isAlreadyOpen = modal.classList.contains('is-open');
      if(isAlreadyOpen && mode === 'toggle'){
        closeAaveMenu();
        return;
      }
      modal.classList.add('is-open');
      document.getElementById('gz-nav-btn-menu').setAttribute('aria-expanded', 'true');
      setActiveTab(mode === 'search' ? 'gz-nav-btn-search' : 'gz-nav-btn-menu');
      if(mode === 'search'){
        var inp = document.getElementById('gz-aave-search-input');
        if(inp) setTimeout(function(){ inp.focus(); }, 60);
      }
    }

    function closeAaveMenu(){
      var modal = document.getElementById('gz-aave-menu-modal');
      if(modal) modal.classList.remove('is-open');
      var mBtn = document.getElementById('gz-nav-btn-menu');
      if(mBtn) mBtn.setAttribute('aria-expanded', 'false');
      setActiveTab(isHome ? 'gz-nav-btn-home' : '');
    }

    window.__gzOpenAaveMenu = openAaveMenu;
    window.__gzCloseAaveMenu = closeAaveMenu;

    document.getElementById('gz-nav-btn-home').addEventListener('click', function(){
      closeAaveMenu();
      if(location.pathname === '/' || location.pathname === '/index.html'){
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }else{
        location.href = '/';
      }
    });
    document.getElementById('gz-nav-btn-menu').addEventListener('click', function(){
      openAaveMenu('toggle');
    });
    document.getElementById('gz-nav-btn-search').addEventListener('click', function(){
      openAaveMenu('search');
    });
    document.getElementById('gz-nav-btn-chat').addEventListener('click', function(){
      closeAaveMenu();
      setActiveTab('gz-nav-btn-chat');
      var cmt = document.getElementById('comments') || document.getElementById('comment-holder');
      if(cmt){
        cmt.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }else{
        var firstPost = document.querySelector('.post-title a');
        if(firstPost && firstPost.href){
          location.href = firstPost.href + '#comments';
        }
      }
    });
  }

  function bootSmartLocker(){
    initNativeNavAndAaveMenu();
    decorateHomepageCards();
    initSinglePostLocker();
    initAdminDashboard();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', bootSmartLocker);
  }else{
    bootSmartLocker();
  }
})();
