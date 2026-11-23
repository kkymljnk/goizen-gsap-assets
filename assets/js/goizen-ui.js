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
    'html body .comments .continue,html body .comments .continue a{display:none!important}'+
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
    '.gz-admin-table{width:100%!important;border-collapse:collapse!important;font-size:12.5px!important;margin:0!important;background:transparent!important}'+
    '.gz-admin-panel .gz-admin-table th,.gz-admin-panel .gz-admin-table td{border:0!important;border-bottom:1px solid #c8c5b3!important;padding:10px 8px!important;text-align:left!important;vertical-align:middle!important;background:transparent!important}'+
    '.gz-admin-panel .gz-admin-table th{font-family:var(--gz-mono)!important;font-size:11px!important;font-weight:700!important;text-transform:uppercase!important;color:#3d3d34!important;border-bottom:2px solid #0e100f!important;white-space:nowrap!important}'+
    '.gz-admin-panel .gz-admin-table td[data-label="Mã Đơn"],.gz-admin-panel .gz-admin-table td[data-label="Số Tiền"],.gz-admin-panel .gz-admin-table td[data-label="Trạng Thái"],.gz-admin-panel .gz-admin-table td.gz-td-actions{white-space:nowrap!important}'+
    '.gz-st-badge{font-family:var(--gz-mono);font-size:11px;font-weight:700;padding:3px 9px;border-radius:6px;display:inline-flex!important;align-items:center;justify-content:center;white-space:nowrap!important;line-height:1.25}'+
    '.gz-st-badge--paid{background:#0ae448;color:#0e100f}'+
    '.gz-st-badge--pending{background:#42433d;color:#ffe866}'+
    '.gz-st-badge--failed{background:#ff4d6d;color:#fffce1}'+
    'body.gz-is-admin-page .post-header,body.gz-is-admin-page .post-footer,body.gz-is-admin-page #share-wrapper,body.gz-is-admin-page .author-profile,body.gz-is-admin-page #related-wrapper,body.gz-is-admin-page #comments,body.gz-is-admin-page #PopularPosts1,body.gz-is-admin-page #col-sidebar-wrapper,body.gz-is-admin-page .breadcrumbs,body.gz-is-admin-page .title-postpage,body.gz-is-admin-page hr.gsap-hr{display:none!important}'+
    '.gz-admin-inline-host{width:100%;margin:10px 0 24px;box-sizing:border-box}'+
    '.gz-admin-inline-host .gz-admin-panel{max-width:100%;margin:0 auto}'+
    '.gz-admin-auth-card{max-width:440px;margin:22px auto;background:var(--gz-bg,#fffceb);border:2px solid #0e100f;border-radius:14px;padding:24px 20px;text-align:center;box-sizing:border-box;color:#0e100f}'+
    '.gz-admin-auth-badge{display:inline-flex;align-items:center;gap:6px;background:#0e100f;color:#0ae448;font-family:var(--gz-mono);font-size:12px;font-weight:700;padding:5px 12px;border-radius:999px;margin-bottom:12px}'+
    '.gz-admin-auth-title{font-size:20px;font-weight:700;color:#0e100f;margin:0 0 6px}'+
    '.gz-admin-auth-sub{font-size:13px;color:#3d3d34;margin:0 0 16px;line-height:1.5}'+
    '.gz-admin-pin-row{display:flex;gap:8px;justify-content:center;align-items:center;margin-bottom:10px}'+
    '.gz-admin-pin-inp{flex:1 1 auto;max-width:220px;height:42px;border:2px solid #0e100f;border-radius:10px;background:#fff;color:#0e100f;font-family:var(--gz-mono);font-size:18px;font-weight:700;letter-spacing:.22em;text-align:center;padding:0 12px;box-sizing:border-box}'+
    '.gz-admin-auth-msg{font-family:var(--gz-mono);font-size:12px;font-weight:700;color:#d90429;min-height:18px;margin-top:6px}'+
    '.gz-admin-filter-row{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:12px;flex-wrap:wrap}'+
    '.gz-admin-filter-pills{display:inline-flex;gap:6px;flex-wrap:wrap}'+
    '.gz-adm-filter-btn{appearance:none;border:1.5px solid #0e100f;background:var(--gz-bg,#fffceb);color:#0e100f;font-family:var(--gz-mono);font-size:11.5px;font-weight:700;padding:5px 11px;border-radius:999px;cursor:pointer}'+
    '.gz-adm-filter-btn.is-active{background:#0e100f;color:#0ae448}'+
    '.gz-admin-settings-drawer{display:none;padding:12px;border:1.5px dashed #42433d;border-radius:12px;margin-bottom:14px;background:rgba(14,16,15,.03)}'+
    '.gz-admin-settings-drawer.is-open{display:block}'+
    '@media screen and (max-width:580px){.gz-pro-gate{padding:10px 12px!important}.gz-gate-bar{flex-direction:column!important;align-items:stretch!important;gap:8px!important}.gz-gate-left{width:100%!important;justify-content:space-between!important}.gz-gate-btns{width:100%!important;display:grid!important;grid-template-columns:1fr auto!important;gap:8px!important;margin-left:0!important}.gz-qr-grid-wrap{flex-direction:column!important;align-items:center!important;text-align:center!important}.gz-qr-meta{text-align:center!important;width:100%!important}.gz-qr-amount-row,.gz-qr-copy-row{justify-content:center!important}.gz-admin-panel{padding:14px 12px!important}.gz-admin-head{flex-direction:column!important;align-items:flex-start!important}.gz-admin-kpis{grid-template-columns:1fr 1fr!important;gap:8px!important}.gz-kpi-card{padding:8px 10px!important}.gz-kpi-card .k-num{font-size:15px!important}.gz-admin-Check-bar{flex-direction:column!important;align-items:stretch!important}.gz-admin-Check-bar .gz-recover-input,.gz-admin-Check-bar .gz-gate-btn{width:100%!important;max-width:none!important;margin:0!important}.gz-admin-pin-row{flex-direction:column!important}.gz-admin-pin-inp{max-width:100%!important;width:100%!important}.gz-admin-table thead{display:none!important}.gz-admin-table,.gz-admin-table tbody,.gz-admin-table tr,.gz-admin-panel .gz-admin-table td{display:block!important;width:100%!important;box-sizing:border-box!important}.gz-admin-table tr{border:1.5px solid #0e100f!important;border-radius:12px!important;padding:10px 12px!important;margin-bottom:10px!important;background:var(--gz-bg,#fffceb)!important}.gz-admin-panel .gz-admin-table td{border:0!important;border-bottom:1px dashed rgba(14,16,15,.12)!important;padding:6px 0!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:10px!important;text-align:right!important;max-width:none!important;background:transparent!important}.gz-admin-panel .gz-admin-table td>div{border:0!important;background:transparent!important;padding:0!important;margin:0!important}.gz-admin-panel .gz-admin-table td::before{content:attr(data-label);font-family:var(--gz-mono);font-size:10.5px;font-weight:700;text-transform:uppercase;color:#6e6e62;text-align:left;flex:0 0 auto}.gz-admin-panel .gz-admin-table td.gz-td-actions{display:block!important;padding:10px 0 2px!important;margin-top:4px!important;border:0!important}.gz-admin-panel .gz-admin-table td.gz-td-actions::before{display:none!important}.gz-adm-act-group{display:grid!important;grid-template-columns:repeat(4,auto)!important;gap:6px!important;width:100%!important}.gz-adm-act-group .gz-mini-chip{justify-content:center!important;padding:7px 4px!important;font-size:11px!important;width:100%!important}}';
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
          ? 'Đã thanh toán đủ ' + formatVnd(d.amountPaid || d.amount)
          : (st === 'CANCELLED' || st === 'EXPIRED'
              ? 'Đơn đã hủy hoặc hết hạn'
              : ('Chờ thanh toán · Đã nhận ' + formatVnd(d.amountPaid || 0) + ' / ' + formatVnd(d.amount)));
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

  /* 7. GSAP Pro Admin Order Management & Diagnostic Dashboard (/p/admin-orders.html + SHA-256 PIN Gate) */
  function sha256HexSync(str){
    var ascii = unescape(encodeURIComponent(String(str)));
    function rightRotate(v, a){ return (v >>> a) | (v << (32 - a)); }
    var mathPow = Math.pow, maxWord = mathPow(2, 32), i, j;
    var result = '', words = [], asciiBitLength = ascii.length * 8;
    var hash = [], k = [], primeCounter = 0, isComposite = {};
    for(var candidate = 2; primeCounter < 64; candidate++){
      if(!isComposite[candidate]){
        for(i = 0; i < 313; i += candidate) isComposite[i] = candidate;
        hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
      }
    }
    ascii += '\x80';
    while(ascii.length % 64 - 56) ascii += '\x00';
    for(i = 0; i < ascii.length; i++){
      j = ascii.charCodeAt(i);
      words[i >> 2] |= j << ((3 - i) % 4) * 8;
    }
    words[words.length] = ((asciiBitLength / maxWord) | 0);
    words[words.length] = (asciiBitLength);
    for(j = 0; j < words.length;){
      var w = words.slice(j, j += 16), oldHash = hash.slice(0);
      for(i = 0; i < 64; i++){
        var w15 = w[i - 15], w2 = w[i - 2], a = hash[0], e = hash[4];
        var temp1 = hash[7]
          + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
          + ((e & hash[5]) ^ ((~e) & hash[6]))
          + k[i]
          + (w[i] = (i < 16) ? w[i] : (
              w[i - 16]
              + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3))
              + w[i - 7]
              + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))
            ) | 0);
        var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
          + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash = [(temp1 + temp2) | 0].concat(hash);
        hash[4] = (hash[4] + temp1) | 0;
        hash.pop();
      }
      for(i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
    }
    for(i = 0; i < 8; i++){
      for(j = 3; j + 1; j--){
        var b = (hash[i] >> (j * 8)) & 255;
        result += ((b < 16) ? 0 : '') + b.toString(16);
      }
    }
    return result;
  }

  function sha256SaltedHex(pinStr){
    var input = 'gz_adm_v1:' + String(pinStr || '').trim();
    if(window.crypto && window.crypto.subtle && window.TextEncoder){
      var enc = new TextEncoder();
      return window.crypto.subtle.digest('SHA-256', enc.encode(input)).then(function(buf){
        var bytes = new Uint8Array(buf);
        var hex = '';
        for(var i=0;i<bytes.length;i++){
          hex += ('0' + bytes[i].toString(16)).slice(-2);
        }
        return hex;
      }).catch(function(){ return sha256HexSync(input); });
    }
    return Promise.resolve(sha256HexSync(input));
  }

  function initAdminDashboard(){
    /* Remove any legacy footer admin button so public visitors never see it */
    var oldFooterBtn = document.getElementById('gz-open-admin-btn');
    if(oldFooterBtn && oldFooterBtn.parentNode) oldFooterBtn.parentNode.removeChild(oldFooterBtn);

    var isDedicatedAdminPage = /\/p\/admin[-_]?orders/i.test(location.pathname) || !!document.getElementById('gz-admin-page-mount');
    var isQueryAdmin = location.search.indexOf('admin=orders') !== -1 || location.hash === '#admin-orders';

    var hostContainer = null;
    var overlay = null;

    if(isDedicatedAdminPage){
      document.body.classList.add('gz-is-admin-page');
      var mountEl = document.getElementById('gz-admin-page-mount') || document.getElementById('tgtPost') || document.querySelector('.post-body') || document.querySelector('.blog-posts') || document.getElementById('col-posting-wrapper');
      if(mountEl){
        mountEl.innerHTML = '<div id="gz-admin-inline-host" class="gz-admin-inline-host"></div>';
        hostContainer = document.getElementById('gz-admin-inline-host');
      }
    }
    if(!hostContainer){
      overlay = document.getElementById('gz-admin-overlay');
      if(!overlay){
        overlay = document.createElement('div');
        overlay.id = 'gz-admin-overlay';
        overlay.className = 'gz-admin-overlay';
        document.body.appendChild(overlay);
      }
      hostContainer = overlay;
    }

    var DEFAULT_PIN_HASH = '12fef9e4807a9151b1f816e09833d7c275c0b3d5f863c62f8daa03e84b00ff2f';
    var currentFilter = 'ALL';
    var settingsOpen = false;

    function getExpectedPinHash(){
      try {
        return localStorage.getItem('gz_adm_pin_hash') || DEFAULT_PIN_HASH;
      } catch(e){ return DEFAULT_PIN_HASH; }
    }

    function isAdminAuthenticated(){
      try {
        var raw = JSON.parse(sessionStorage.getItem('gz_adm_session') || 'null');
        if(raw && raw.ok && Number(raw.exp) > Date.now()){
          return true;
        }
      } catch(e){}
      return false;
    }

    function setAdminAuthenticated(val){
      try {
        if(val){
          sessionStorage.setItem('gz_adm_session', JSON.stringify({ ok: true, exp: Date.now() + 7200000 }));
          localStorage.removeItem('gz_adm_fail_count');
          localStorage.removeItem('gz_adm_lock_until');
        }else{
          sessionStorage.removeItem('gz_adm_session');
        }
      } catch(e){}
    }

    function formatStatusVi(st){
      var s = String(st || 'PENDING').toUpperCase();
      if(s === 'PAID') return 'Thành công';
      if(s === 'FAILED' || s === 'CANCELLED' || s === 'EXPIRED') return 'Thất bại';
      return 'Đang chờ';
    }

    function cleanDiagVi(txt, amt){
      var s = String(txt || '').trim();
      if(!s) return 'Chờ thanh toán · Đã nhận 0đ / ' + formatVnd(amt || 50000);
      s = s.replace(/\s*\(code:\s*00\)\.?/gi, '')
           .replace(/Đang chờ thanh toán trên PayOS\s*\(Đã nhận:\s*([^/]+)\/([^)]+)\)/gi, 'Chờ thanh toán · Đã nhận $1 / $2')
           .replace(/Đã thanh toán thành công\s*\(([^)]+)\)/gi, 'Đã thanh toán đủ $1')
           .replace(/[()]/g, '')
           .replace(/\bPAID\b/g, 'Thành công')
           .replace(/\bPENDING\b/g, 'Đang chờ')
           .replace(/\bFAILED\b/g, 'Thất bại');
      return s;
    }

    function renderPinGate(errMsg){
      var lockUntil = 0;
      try { lockUntil = Number(localStorage.getItem('gz_adm_lock_until') || 0); } catch(e){}
      var remainLockSec = Math.max(0, Math.ceil((lockUntil - Date.now()) / 1000));
      var lockMsg = remainLockSec > 0
        ? ('\u26D4 Tạm khóa chống dò mật khẩu · Thử lại sau ' + remainLockSec + 's')
        : (errMsg || '');

      hostContainer.innerHTML =
        '<div class="gz-admin-auth-card" id="gz-admin-auth-card">' +
          '<div class="gz-admin-auth-badge">' + getGsapLockSvg('gz-lk-svg') + '<span>BẢO MẬT QUẢN TRỊ · SHA-256</span></div>' +
          '<h2 class="gz-admin-auth-title">{ Xác Thực Quản Trị }</h2>' +
          '<p class="gz-admin-auth-sub">Nhập mã PIN quản trị để mở khóa trung tâm đơn hàng.</p>' +
          '<form class="gz-admin-pin-row" id="gz-adm-pin-form" onsubmit="return false">' +
            '<input type="password" inputmode="numeric" autocomplete="current-password" class="gz-admin-pin-inp" id="gz-adm-pin-inp" placeholder="\u2022\u2022\u2022\u2022" maxlength="16" ' + (remainLockSec > 0 ? 'disabled' : '') + '/>' +
            '<button type="submit" class="gz-gate-btn gz-gate-btn--primary" id="gz-adm-pin-btn" style="height:42px!important;padding:0 18px!important" ' + (remainLockSec > 0 ? 'disabled' : '') + '>Mở Khóa \u2197</button>' +
          '</form>' +
          '<div class="gz-admin-auth-msg" id="gz-adm-auth-msg">' + lockMsg + '</div>' +
          (!isDedicatedAdminPage ? '<div style="margin-top:12px"><button type="button" class="gz-mini-chip" id="gz-adm-auth-cancel">Đóng cửa sổ</button></div>' : '') +
        '</div>';

      var cancelBtn = document.getElementById('gz-adm-auth-cancel');
      if(cancelBtn && overlay){
        cancelBtn.addEventListener('click', function(){ overlay.classList.remove('is-open'); });
      }
      var pinInp = document.getElementById('gz-adm-pin-inp');
      if(pinInp && !remainLockSec){
        setTimeout(function(){ pinInp.focus(); }, 50);
      }
      var pinForm = document.getElementById('gz-adm-pin-form');
      if(pinForm){
        pinForm.addEventListener('submit', function(e){
          e.preventDefault();
          if(remainLockSec > 0) return;
          var entered = (document.getElementById('gz-adm-pin-inp').value || '').trim();
          if(!entered){
            renderPinGate('\u26A0 Vui lòng nhập mã PIN quản trị!');
            return;
          }
          sha256SaltedHex(entered).then(function(hash){
            if(hash === getExpectedPinHash()){
              setAdminAuthenticated(true);
              renderAdminModal();
            }else{
              var fails = 0;
              try { fails = Number(localStorage.getItem('gz_adm_fail_count') || 0) + 1; } catch(err){}
              if(fails >= 5){
                try {
                  localStorage.setItem('gz_adm_fail_count', '0');
                  localStorage.setItem('gz_adm_lock_until', String(Date.now() + 300000));
                } catch(err2){}
                renderPinGate('\u26D4 Nhập sai 5 lần · Tự khóa bảo vệ trong 5 phút');
              }else{
                try { localStorage.setItem('gz_adm_fail_count', String(fails)); } catch(err3){}
                renderPinGate('\u2715 Mã PIN không đúng · Còn ' + (5 - fails) + ' lần thử');
              }
            }
          });
        });
      }
    }

    function renderAdminModal(diagText){
      if(!isAdminAuthenticated()){
        renderPinGate();
        return;
      }
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

      var filtered = [];
      for(var f=0;f<orders.length;f++){
        var stf = orders[f].status || 'PENDING';
        if(currentFilter === 'ALL' ||
           (currentFilter === 'PAID' && stf === 'PAID') ||
           (currentFilter === 'PENDING' && stf === 'PENDING') ||
           (currentFilter === 'FAILED' && (stf === 'FAILED' || stf === 'CANCELLED' || stf === 'EXPIRED'))){
          filtered.push(orders[f]);
        }
      }

      var rowsHtml = '';
      if(!filtered.length){
        rowsHtml = '<tr><td colspan="5" style="text-align:center!important;padding:16px!important;color:#6e6e62;justify-content:center!important">Chưa có đơn hàng nào trong mục này.</td></tr>';
      }else{
        for(var j=0;j<filtered.length;j++){
          var o = filtered[j];
          var stClass = o.status === 'PAID' ? 'gz-st-badge--paid' : (o.status === 'FAILED' ? 'gz-st-badge--failed' : 'gz-st-badge--pending');
          var typeLabel = o.type === 'VIP_MONTH' ? 'Gói VIP 30 ngày' : ('Bài lẻ · #' + String(o.postId || '').slice(-6));
          rowsHtml +=
            '<tr>' +
              '<td data-label="Mã Đơn"><div><strong style="font-family:var(--gz-mono)">#' + o.orderCode + '</strong><div style="font-size:10.5px;color:#6e6e62">' + typeLabel + '</div></div></td>' +
              '<td data-label="Số Tiền" style="font-family:var(--gz-mono);font-weight:700">' + formatVnd(o.amount) + '</td>' +
              '<td data-label="Trạng Thái"><span class="gz-st-badge ' + stClass + '">' + formatStatusVi(o.status) + '</span></td>' +
              '<td data-label="Chi Tiết" style="font-size:11.5px">' + cleanDiagVi(o.diagnostic, o.amount) + '</td>' +
              '<td class="gz-td-actions">' +
                '<div class="gz-adm-act-group" style="display:inline-flex;gap:4px;align-items:center;flex-wrap:nowrap;white-space:nowrap">' +
                  '<button type="button" class="gz-mini-chip gz-adm-act" data-act="check" data-code="' + o.orderCode + '">\uD83D\uDD04 Kiểm tra</button>' +
                  '<button type="button" class="gz-mini-chip gz-adm-act" style="background:#0ae448;color:#0e100f" data-act="approve" data-code="' + o.orderCode + '">\u2713 Duyệt</button>' +
                  '<button type="button" class="gz-mini-chip gz-adm-act" style="background:#ff4d6d;color:#fffce1" data-act="fail" data-code="' + o.orderCode + '">\u2715 Hủy</button>' +
                  '<button type="button" class="gz-mini-chip gz-adm-act" style="background:#2a2c29;color:#fffce1" title="Xóa đơn" data-act="delete" data-code="' + o.orderCode + '">\uD83D\uDDD1</button>' +
                '</div>' +
              '</td>' +
            '</tr>';
        }
      }

      var cleanBannerDiag = diagText ? cleanDiagVi(diagText) : '';

      hostContainer.innerHTML =
        '<div class="gz-admin-panel">' +
          '<div class="gz-admin-head">' +
            '<div class="gz-gate-title"><span class="gz-b">{</span> Quản Lý Đơn Hàng <span class="gz-b">}</span></div>' +
            '<div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">' +
              '<span style="font-family:var(--gz-mono);font-size:11px;background:#42433d;color:#0ae448;padding:4px 9px;border-radius:6px">' +
                (vipPass ? ('VIP · Còn ' + vipPass.daysLeft + ' ngày') : 'VIP · Chưa bật') +
              '</span>' +
              '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-adm-toggle-settings" style="height:30px!important;padding:0 11px!important;font-size:11.5px!important">\u2699 Cấu hình</button>' +
              '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-adm-lock-btn" style="height:30px!important;padding:0 11px!important;font-size:11.5px!important">\uD83D\uDD12 Khóa</button>' +
              (!isDedicatedAdminPage ? '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-adm-close" style="height:30px!important;padding:0 11px!important;font-size:11.5px!important">Đóng \u2715</button>' : '') +
            '</div>' +
          '</div>' +
          '<div class="gz-admin-kpis">' +
            '<div class="gz-kpi-card"><span class="k-num" style="color:#008b38">' + formatVnd(totalRev) + '</span><span class="k-lbl">Doanh Thu</span></div>' +
            '<div class="gz-kpi-card"><span class="k-num">' + paidCount + '</span><span class="k-lbl">Thành Công</span></div>' +
            '<div class="gz-kpi-card"><span class="k-num">' + pendingCount + '</span><span class="k-lbl">Đang Chờ</span></div>' +
            '<div class="gz-kpi-card"><span class="k-num" style="color:#d90429">' + failedCount + '</span><span class="k-lbl">Thất Bại</span></div>' +
          '</div>' +
          '<div class="gz-admin-Check-bar">' +
            '<input type="text" class="gz-recover-input" id="gz-adm-check-inp" placeholder="Nhập mã đơn cần kiểm tra..."/>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-adm-btn-check">Kiểm Tra Đơn</button>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-adm-btn-test-vip">+ Đơn VIP 500k</button>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-adm-btn-test-post">+ Đơn Bài Lẻ 50k</button>' +
          '</div>' +
          '<div class="gz-admin-settings-drawer ' + (settingsOpen ? 'is-open' : '') + '" id="gz-admin-settings-drawer">' +
            '<div style="font-size:12px;font-weight:700;margin-bottom:8px">\uD83D\uDD10 Cấu hình Ngân hàng, Giá VIP &amp; Khóa PayOS:</div>' +
            '<div class="gz-admin-Check-bar" style="margin-bottom:10px">' +
              '<input type="text" class="gz-recover-input" id="gz-adm-bank-inp" style="max-width:95px" value="' + cfg.bankId + '" placeholder="Ngân hàng"/>' +
              '<input type="text" class="gz-recover-input" id="gz-adm-accno-inp" style="max-width:140px" value="' + cfg.accountNo + '" placeholder="Số tài khoản"/>' +
              '<input type="number" class="gz-recover-input" id="gz-adm-vipprice-inp" style="max-width:125px" value="' + cfg.vipMonthlyPrice + '" placeholder="Giá VIP"/>' +
              '<input type="password" class="gz-recover-input" id="gz-adm-checksum-inp" value="' + cfg.checksumKey + '" placeholder="Khóa Checksum PayOS..."/>' +
              '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-adm-toggle-ck" style="height:34px!important;padding:0 12px!important">Hiện</button>' +
              '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-adm-save-cfg">Lưu cấu hình</button>' +
            '</div>' +
            '<div style="font-size:12px;font-weight:700;margin-bottom:6px">\uD83D\uDD11 Đổi mã PIN quản trị:</div>' +
            '<div class="gz-admin-Check-bar" style="margin-bottom:0">' +
              '<input type="password" inputmode="numeric" class="gz-recover-input" id="gz-adm-new-pin-inp" placeholder="Nhập mã PIN mới từ 4 ký tự..."/>' +
              '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-adm-save-pin">Đổi mã PIN</button>' +
            '</div>' +
          '</div>' +
          '<div class="gz-admin-filter-row">' +
            '<div class="gz-admin-filter-pills">' +
              '<button type="button" class="gz-adm-filter-btn ' + (currentFilter === 'ALL' ? 'is-active' : '') + '" data-filter="ALL">Tất cả · ' + orders.length + '</button>' +
              '<button type="button" class="gz-adm-filter-btn ' + (currentFilter === 'PAID' ? 'is-active' : '') + '" data-filter="PAID">Thành công · ' + paidCount + '</button>' +
              '<button type="button" class="gz-adm-filter-btn ' + (currentFilter === 'PENDING' ? 'is-active' : '') + '" data-filter="PENDING">Đang chờ · ' + pendingCount + '</button>' +
              '<button type="button" class="gz-adm-filter-btn ' + (currentFilter === 'FAILED' ? 'is-active' : '') + '" data-filter="FAILED">Thất bại · ' + failedCount + '</button>' +
            '</div>' +
            '<div class="gz-admin-filter-pills">' +
              '<button type="button" class="gz-mini-chip" id="gz-adm-sync-all">\uD83D\uDD04 Đồng bộ tất cả</button>' +
              '<button type="button" class="gz-mini-chip" id="gz-adm-export-csv">\uD83D\uDCE5 Xuất CSV</button>' +
              '<button type="button" class="gz-mini-chip" id="gz-adm-clear-failed">\uD83D\uDDD1 Dọn đơn lỗi</button>' +
            '</div>' +
          '</div>' +
          '<div class="gz-admin-diag ' + (cleanBannerDiag ? 'is-show' : '') + '" id="gz-admin-diag">' + cleanBannerDiag + '</div>' +
          '<div class="gz-admin-table-wrap">' +
            '<table class="gz-admin-table">' +
              '<thead><tr><th>Mã Đơn</th><th>Số Tiền</th><th>Trạng Thái</th><th>Chi Tiết</th><th>Thao Tác</th></tr></thead>' +
              '<tbody>' + rowsHtml + '</tbody>' +
            '</table>' +
          '</div>' +
        '</div>';

      var closeBtn = document.getElementById('gz-adm-close');
      if(closeBtn && overlay){
        closeBtn.addEventListener('click', function(){ overlay.classList.remove('is-open'); });
      }
      var lockBtn = document.getElementById('gz-adm-lock-btn');
      if(lockBtn){
        lockBtn.addEventListener('click', function(){
          setAdminAuthenticated(false);
          renderPinGate('\u2713 Đã khóa phiên quản trị an toàn');
        });
      }
      var toggleSetBtn = document.getElementById('gz-adm-toggle-settings');
      if(toggleSetBtn){
        toggleSetBtn.addEventListener('click', function(){
          settingsOpen = !settingsOpen;
          var dr = document.getElementById('gz-admin-settings-drawer');
          if(dr) dr.classList.toggle('is-open', settingsOpen);
        });
      }
      var toggleCkBtn = document.getElementById('gz-adm-toggle-ck');
      if(toggleCkBtn){
        toggleCkBtn.addEventListener('click', function(){
          var ckInp = document.getElementById('gz-adm-checksum-inp');
          if(!ckInp) return;
          var isPwd = ckInp.type === 'password';
          ckInp.type = isPwd ? 'text' : 'password';
          toggleCkBtn.textContent = isPwd ? 'Ẩn' : 'Hiện';
        });
      }
      var savePinBtn = document.getElementById('gz-adm-save-pin');
      if(savePinBtn){
        savePinBtn.addEventListener('click', function(){
          var newPin = (document.getElementById('gz-adm-new-pin-inp').value || '').trim();
          if(newPin.length < 4){
            renderAdminModal('\u26A0 Mã PIN mới phải từ 4 ký tự trở lên');
            return;
          }
          sha256SaltedHex(newPin).then(function(h){
            if(h){
              try { localStorage.setItem('gz_adm_pin_hash', h); } catch(e){}
              renderAdminModal('\u2713 Đã cập nhật mã PIN quản trị mới');
            }
          });
        });
      }
      var filterBtns = hostContainer.querySelectorAll('.gz-adm-filter-btn');
      for(var fb=0;fb<filterBtns.length;fb++){
        filterBtns[fb].addEventListener('click', function(){
          currentFilter = this.getAttribute('data-filter') || 'ALL';
          renderAdminModal(diagText);
        });
      }

      var syncAllBtn = document.getElementById('gz-adm-sync-all');
      if(syncAllBtn){
        syncAllBtn.addEventListener('click', function(){
          var list = getOrders();
          var pendings = [];
          for(var p=0;p<list.length;p++){
            if(!list[p].status || list[p].status === 'PENDING') pendings.push(list[p].orderCode);
          }
          if(!pendings.length){
            renderAdminModal('\u2713 Không có đơn đang chờ nào cần đồng bộ');
            return;
          }
          renderAdminModal('Đang đồng bộ ' + pendings.length + ' đơn hàng với PayOS...');
          Promise.all(pendings.map(function(c){ return checkPayOSOrderRealtime(c); })).then(function(){
            renderAdminModal('\u2713 Đã đồng bộ xong ' + pendings.length + ' đơn hàng với PayOS');
          });
        });
      }

      var exportCsvBtn = document.getElementById('gz-adm-export-csv');
      if(exportCsvBtn){
        exportCsvBtn.addEventListener('click', function(){
          var list = getOrders();
          var csv = 'MaDon,Loai,SoTien,TrangThai,ChiTiet\n';
          for(var c=0;c<list.length;c++){
            var it = list[c];
            csv += it.orderCode + ',' + (it.type === 'VIP_MONTH' ? 'VIP 30 ngay' : 'Bai le') + ',' + it.amount + ',' + formatStatusVi(it.status) + ',"' + cleanDiagVi(it.diagnostic, it.amount).replace(/"/g, '""') + '"\n';
          }
          var blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
          var a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'don-hang-mmo-team.csv';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          renderAdminModal('\u2713 Đã xuất tệp báo cáo CSV thành công');
        });
      }

      var clearFailedBtn = document.getElementById('gz-adm-clear-failed');
      if(clearFailedBtn){
        clearFailedBtn.addEventListener('click', function(){
          var list = getOrders();
          var kept = [];
          var removed = 0;
          for(var c=0;c<list.length;c++){
            var st = list[c].status || 'PENDING';
            if(st === 'FAILED' || st === 'CANCELLED' || st === 'EXPIRED'){
              removed++;
            }else{
              kept.push(list[c]);
            }
          }
          saveOrders(kept);
          renderAdminModal('\u2713 Đã dọn sạch ' + removed + ' đơn lỗi và hết hạn');
        });
      }

      document.getElementById('gz-adm-save-cfg').addEventListener('click', function(){
        var newBank = (document.getElementById('gz-adm-bank-inp').value || 'OCB').trim();
        var newAcc = (document.getElementById('gz-adm-accno-inp').value || '').trim();
        var newCk = (document.getElementById('gz-adm-checksum-inp').value || '').trim();
        var newVp = Number(document.getElementById('gz-adm-vipprice-inp').value) || 500000;
        try {
          localStorage.setItem('gz_locker_cfg', JSON.stringify({ bankId: newBank, accountNo: newAcc, checksumKey: newCk, vipMonthlyPrice: newVp }));
        } catch(e){}
        renderAdminModal('\u2713 Đã lưu cấu hình · Ngân hàng ' + newBank + ' · Giá VIP ' + formatVnd(newVp));
      });

      document.getElementById('gz-adm-btn-check').addEventListener('click', function(){
        var code = (document.getElementById('gz-adm-check-inp').value || '').trim();
        if(!code){
          renderAdminModal('\u26A0 Vui lòng nhập mã đơn cần kiểm tra');
          return;
        }
        renderAdminModal('Đang kiểm tra đơn #' + code + ' trên PayOS...');
        checkPayOSOrderRealtime(code).then(function(res){
          renderAdminModal('Đơn #' + code + ' · Trạng thái: ' + formatStatusVi(res.status) + ' · ' + cleanDiagVi(res.diagnostic || res.reason || 'Hoàn tất'));
        });
      });

      document.getElementById('gz-adm-btn-test-vip').addEventListener('click', function(){
        createPayOSOrder({ type: 'VIP30D', amount: getCfg().vipMonthlyPrice }).then(function(o){
          renderAdminModal('\u2713 Đã tạo đơn Gói VIP 30 ngày #' + o.orderCode + ' · ' + formatVnd(o.amount));
        });
      });

      document.getElementById('gz-adm-btn-test-post').addEventListener('click', function(){
        createPayOSOrder({ type: 'POST', postId: getCurrentPostId(), amount: 50000 }).then(function(o){
          renderAdminModal('\u2713 Đã tạo đơn Bài lẻ #' + o.orderCode + ' · ' + formatVnd(o.amount));
        });
      });

      var actBtns = hostContainer.querySelectorAll('.gz-adm-act');
      for(var b=0;b<actBtns.length;b++){
        actBtns[b].addEventListener('click', function(){
          var act = this.getAttribute('data-act');
          var code = this.getAttribute('data-code');
          if(act === 'check'){
            checkPayOSOrderRealtime(code).then(function(r){
              renderAdminModal('Đã kiểm tra đơn #' + code + ' · Trạng thái: ' + formatStatusVi(r.status) + ' · ' + cleanDiagVi(r.diagnostic || r.reason || ''));
            });
          }else if(act === 'approve'){
            var list = getOrders();
            for(var k=0;k<list.length;k++){
              if(String(list[k].orderCode) === String(code)){
                list[k].status = 'PAID';
                list[k].manualApproved = true;
                list[k].paidAt = Date.now();
                list[k].diagnostic = 'Đã duyệt thanh toán và mở khóa thành công';
                if(list[k].type === 'VIP_MONTH'){
                  activateVipPass(code, Date.now());
                }else if(list[k].postId){
                  try { localStorage.setItem('gz_paid_post_' + list[k].postId, String(code)); } catch(e){}
                }
              }
            }
            saveOrders(list);
            renderAdminModal('\u2713 Đã duyệt thành công đơn #' + code + ' và mở khóa nội dung');
          }else if(act === 'fail'){
            upsertOrder({
              orderCode: Number(code),
              status: 'FAILED',
              manualApproved: false,
              diagnostic: 'Đơn đã hủy bởi quản trị viên'
            });
            renderAdminModal('\u2715 Đã chuyển đơn #' + code + ' sang trạng thái Thất bại');
          }else if(act === 'delete'){
            var listDel = getOrders();
            var nextList = [];
            for(var d=0;d<listDel.length;d++){
              if(String(listDel[d].orderCode) !== String(code)) nextList.push(listDel[d]);
            }
            saveOrders(nextList);
            renderAdminModal('\u2713 Đã xóa đơn #' + code);
          }
        });
      }
    }

    if(isDedicatedAdminPage){
      renderAdminModal();
    }else if(isQueryAdmin && overlay){
      renderAdminModal();
      overlay.classList.add('is-open');
    }
    window.__gzOpenAdminOrders = function(){
      renderAdminModal();
      if(overlay) overlay.classList.add('is-open');
    };
    window.__gzUnlockAdminWithPin = function(pinStr){
      return sha256SaltedHex(pinStr).then(function(h){
        if(h === getExpectedPinHash()){
          setAdminAuthenticated(true);
          renderAdminModal();
          return true;
        }
        return false;
      });
    };
  }

  /* =========================================================================
     4. SMART ANTI-INSPECT SHIELD & DEBUGGER TRAP (Mask Blogger & Protect Source)
     - Blocks F12, Ctrl+U, Ctrl+Shift+I/J/C, Ctrl+S
     - Leaves text selection, copy & normal right-click intact for best UX
     - Infinite Debugger Trap freezes DevTools if opened via browser menu
     - Secret Admin Bypass: typing '8563' or authenticated in /p/admin-orders.html
     ========================================================================= */
  function initSmartAntiInspect(){
    var secretSeq = '';
    var secretTimer = null;
    var bypassKey = 'gz_anti_inspect_bypass';

    function isBypassActive(){
      try{
        if(sessionStorage.getItem('gz_adm_session') === '8563') return true;
        if(localStorage.getItem(bypassKey) === '1') return true;
      }catch(e){}
      return false;
    }

    function showToast(msg){
      var t = document.createElement('div');
      t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#0e100f;color:#0ae448;padding:8px 18px;border-radius:999px;font-family:var(--gz-mono,monospace);font-size:12.5px;font-weight:700;z-index:999999;box-shadow:0 4px 16px rgba(0,0,0,.35);pointer-events:none;transition:opacity .3s';
      t.textContent = msg;
      document.body.appendChild(t);
      setTimeout(function(){
        t.style.opacity = '0';
        setTimeout(function(){ if(t.parentNode) t.parentNode.removeChild(t); }, 350);
      }, 2200);
    }

    // 1. Keyboard shortcuts blocking (F12, Ctrl+U, Ctrl+Shift+I, etc.) + Secret '8563' code
    window.addEventListener('keydown', function(e){
      var key = e.key;

      // Secret sequence tracking: typing '8563' sequentially
      if(key && /^[0-9]$/.test(key)){
        secretSeq += key;
        clearTimeout(secretTimer);
        secretTimer = setTimeout(function(){ secretSeq = ''; }, 3000);
        if(secretSeq.indexOf('8563') !== -1){
          secretSeq = '';
          var curr = isBypassActive();
          try{
            localStorage.setItem(bypassKey, curr ? '0' : '1');
          }catch(err){}
          showToast(curr ? '\uD83D\uDD12 Ch\u1EBF \u0111\u1ED9 B\u1EA3o v\u1EC7 M\u00E3 ngu\u1ED3n: \u0110\u00C3 B\u1EACT' : '\uD83D\uDD13 DevTools Admin: \u0110\u00C3 M\u1EDE KH\u00D3A');
          return;
        }
      }

      if(isBypassActive()) return;

      var isCtrlOrMeta = e.ctrlKey || e.metaKey;
      var isShift = e.shiftKey;
      var isAlt = e.altKey;
      var k = e.keyCode || e.which;

      // F12 (123)
      if(k === 123 || key === 'F12'){
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + U (85) - View Source
      if(isCtrlOrMeta && (k === 85 || key === 'u' || key === 'U')){
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + S (83) - Save Page
      if(isCtrlOrMeta && (k === 83 || key === 's' || key === 'S')){
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + Shift + I / J / C (73, 74, 67) OR Mac Cmd + Opt + I / J / C
      if((isCtrlOrMeta && isShift && (k === 73 || k === 74 || k === 67)) ||
         (isCtrlOrMeta && isAlt && (k === 73 || k === 74 || k === 67))){
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }, true);

    // 2. Continuous DevTools Detection & Debugger Trap
    function runDebuggerTrap(){
      if(isBypassActive()) return;
      try{
        var startTime = performance.now();
        (function(){}).constructor('debugger')();
        var endTime = performance.now();
        if(endTime - startTime > 100){
          try{ console.clear(); }catch(e){}
        }
      }catch(e){}
    }

    // 3. Mute Console methods for non-admin to prevent data inspection
    if(!isBypassActive()){
      try{
        var noop = function(){};
        console.log = noop;
        console.warn = noop;
        console.info = noop;
        console.dir = noop;
        console.table = noop;
      }catch(e){}
    }

    // Run trap periodically every 800ms
    setInterval(runDebuggerTrap, 800);
  }

  function bootSmartLocker(){
    initSmartAntiInspect();
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
