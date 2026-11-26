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
    /* List/archive: Blogger often ships FULL body (ignores #more). Hide everything after jump break. */
    'html body.index .snippet-text-box #more ~ *,'+
    'html body.index .snippet-text-box a[name="more"] ~ *,'+
    'html body .index .snippet-text-box #more ~ *,'+
    'html body .index .snippet-text-box a[name="more"] ~ *,'+
    'html body.archive .snippet-text-box #more ~ *,'+
    'html body.archive .snippet-text-box a[name="more"] ~ *,'+
    'html body .archive .snippet-text-box #more ~ *,'+
    'html body.search .snippet-text-box #more ~ *,'+
    'html body .search .snippet-text-box #more ~ *,'+
    'html body.index .item-content #more ~ *,'+
    'html body .index .item-content #more ~ *,'+
    'html body .PopularPosts .item-content #more ~ *,'+
    'html body .PopularPosts .item-content a[name="more"] ~ *{display:none!important}'+
    /* FOUC guard until sanitize marks .gz-excerpt-ready (label click flash fix) */
    'html body.index .snippet-text-box.gz-public-excerpt:not(.gz-excerpt-ready),'+
    'html body.archive .snippet-text-box.gz-public-excerpt:not(.gz-excerpt-ready),'+
    'html body.search .snippet-text-box.gz-public-excerpt:not(.gz-excerpt-ready),'+
    'html body .PopularPosts .item-content.gz-public-excerpt:not(.gz-excerpt-ready),'+
    'html body .related-post-item-summary:not(.gz-excerpt-ready){'+
      'max-height:3.6em!important;overflow:hidden!important'+
    '}'+
    'html body.index .snippet-text-box.gz-public-excerpt:not(.gz-excerpt-ready)>*:not(:first-child),'+
    'html body.archive .snippet-text-box.gz-public-excerpt:not(.gz-excerpt-ready)>*:not(:first-child),'+
    'html body.search .snippet-text-box.gz-public-excerpt:not(.gz-excerpt-ready)>*:not(:first-child),'+
    'html body .PopularPosts .item-content.gz-public-excerpt:not(.gz-excerpt-ready)>*:not(:first-child){display:none!important}'+
    'html body .snippet-text-box.gz-public-excerpt.gz-excerpt-ready,'+
    'html body .PopularPosts .item-content.gz-public-excerpt.gz-excerpt-ready,'+
    'html body .related-post-item-summary.gz-excerpt-ready{max-height:none!important;overflow:visible!important}'+
    /* List/archive: hide cover/hidden-image + read-more junk in excerpt */
    'html body .snippet-text-box.gz-public-excerpt img,'+
    'html body .snippet-text-box.gz-public-excerpt .hidden-image,'+
    'html body .snippet-text-box.gz-public-excerpt .jump-link,'+
    'html body .item-content.gz-public-excerpt img,'+
    'html body .item-content.gz-public-excerpt .hidden-image,'+
    'html body .item-content.gz-public-excerpt .jump-link{display:none!important}'+
    'html body .snippet-text-box.gz-public-excerpt p{margin:0!important}'+
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
    '.gz-cmt-live-badge{display:inline-flex!important;align-items:center!important;gap:6px!important;font-family:var(--gz-mono)!important;font-size:11.5px!important;font-weight:700!important;color:#005c23!important;white-space:nowrap!important}'+
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
    '.gz-mini-chip{background:#42433d;color:#fffce1;border:0;border-radius:6px;font-family:var(--gz-mono);font-size:11px;font-weight:700;padding:5px 10px;cursor:pointer;display:inline-flex;align-items:center;gap:4px;transition:all .15s}'+
    '.gz-mini-chip:hover{background:#0e100f;color:#0ae448}'+
    '.gz-recover-row{display:none;align-items:center;gap:8px;margin-top:10px;padding-top:10px;border-top:1px dashed #42433d}'+
    '.gz-recover-row.is-open{display:flex}'+
    '.gz-recover-input{flex:1 1 auto;height:38px;padding:0 14px;border:2px solid #0e100f;border-radius:10px;background:#fff;color:#0e100f;font-family:var(--gz-mono);font-size:13px;outline:0;box-sizing:border-box;transition:border-color .15s,box-shadow .15s}'+
    '.gz-recover-input:focus{border-color:#0ae448;box-shadow:0 0 0 3px rgba(10,228,72,.15)}'+
    '.gz-admin-overlay{position:fixed;inset:0;z-index:99999;background:rgba(14,16,15,.72);display:none;align-items:flex-start;justify-content:center;overflow-y:auto;padding:24px 12px;box-sizing:border-box}'+
    '.gz-admin-overlay.is-open{display:flex}'+
    '.gz-admin-panel{width:100%;max-width:1160px;background:var(--gz-bg,#fffceb);border:2px solid #0e100f;border-radius:16px;padding:24px 28px;box-sizing:border-box;color:#0e100f;box-shadow:4px 6px 0 #0e100f}'+
    '.gz-admin-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding-bottom:14px;border-bottom:2px solid #0e100f;margin-bottom:16px;flex-wrap:wrap}'+
    '.gz-admin-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px}'+
    '.gz-kpi-card{border:2px solid #0e100f;border-radius:12px;padding:12px 14px;background:#fff;box-shadow:2px 2px 0 #0e100f}'+
    '.gz-kpi-card .k-num{font-family:var(--gz-mono);font-size:20px;font-weight:700;color:#0e100f;display:block}'+
    '.gz-kpi-card .k-lbl{font-size:12px;color:#55554b;font-weight:700;text-transform:uppercase}'+
    '.gz-admin-Check-bar{display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap}'+
    '.gz-admin-diag{background:#161816;color:#fffce1;font-family:var(--gz-mono);font-size:12px;padding:12px 14px;border-radius:10px;border:2px solid #0e100f;margin-bottom:14px;display:none;white-space:pre-wrap;line-height:1.5}'+
    '.gz-admin-diag.is-show{display:block}'+
    '.gz-admin-table-wrap{overflow-x:auto;border:2px solid #0e100f!important;border-radius:14px!important;background:#fff!important;box-shadow:2px 3px 0 #0e100f!important;margin-bottom:16px!important;overflow:hidden!important}'+
    '.gz-admin-table{width:100%!important;border-collapse:collapse!important;font-size:12.5px!important;margin:0!important;background:transparent!important}'+
    '.gz-admin-table thead tr{background:#0e100f!important}'+
    '.gz-admin-panel .gz-admin-table th{background:#0e100f!important;color:#fffceb!important;font-family:var(--gz-mono,monospace)!important;font-size:11.5px!important;font-weight:800!important;text-transform:uppercase!important;letter-spacing:.06em!important;padding:12px 14px!important;border:0!important;border-bottom:2px solid #0e100f!important;white-space:nowrap!important}'+
    '.gz-admin-panel .gz-admin-table td{border:0!important;border-bottom:1px solid #e8e5d4!important;padding:12px 14px!important;text-align:left!important;vertical-align:middle!important;background:#fff!important}'+
    '.gz-admin-panel .gz-admin-table td[data-label="Mã Đơn"],.gz-admin-panel .gz-admin-table td[data-label="Số Tiền"],.gz-admin-panel .gz-admin-table td[data-label="Trạng Thái"],.gz-admin-panel .gz-admin-table td.gz-td-actions{white-space:nowrap!important}'+
    '.gz-st-badge{font-family:var(--gz-mono);font-size:11px;font-weight:700;padding:3px 9px;border-radius:6px;display:inline-flex!important;align-items:center;justify-content:center;white-space:nowrap!important;line-height:1.25}'+
    '.gz-st-badge--paid{background:#0ae448;color:#0e100f}'+
    '.gz-st-badge--pending{background:#42433d;color:#ffe866}'+
    '.gz-st-badge--failed{background:#ff4d6d;color:#fffce1}'+
    'body.gz-is-admin-page .post-header,body.gz-is-admin-page .post-footer,body.gz-is-admin-page #share-wrapper,body.gz-is-admin-page .author-profile,body.gz-is-admin-page #related-wrapper,body.gz-is-admin-page #comments,body.gz-is-admin-page #PopularPosts1,body.gz-is-admin-page #col-sidebar-wrapper,body.gz-is-admin-page .breadcrumbs,body.gz-is-admin-page .title-postpage,body.gz-is-admin-page hr.gsap-hr{display:none!important}'+
    'body.gz-is-admin-page #wrapper,body.gz-is-admin-page #superheaderwrapper,body.gz-is-admin-page #col-posting-wrapper,body.gz-is-admin-page .post-body,body.gz-is-admin-page .post,body.gz-is-admin-page .gz-admin-inline-host{width:100%!important;max-width:1180px!important;margin:0 auto!important;box-sizing:border-box!important}'+
    '.gz-admin-inline-host{width:100%!important;margin:10px auto 24px!important;box-sizing:border-box!important}'+
    '.gz-admin-inline-host .gz-admin-panel{max-width:100%!important;margin:0 auto!important}'+
    '.gz-is-admin-page #col-posting-wrapper,.gz-is-admin-page .gz-admin-inline-host{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;min-height:55vh!important;width:100%!important;box-sizing:border-box!important}'+
    '.gz-admin-auth-card{max-width:480px!important;width:100%!important;margin:20px auto!important;background:var(--gz-bg,#fffceb)!important;border:2.5px solid #0e100f!important;border-radius:18px!important;padding:36px 28px!important;text-align:center!important;box-sizing:border-box!important;color:#0e100f!important;box-shadow:6px 6px 0 #0e100f!important}'+
    '.gz-admin-auth-badge{display:inline-flex;align-items:center;gap:6px;background:#0e100f;color:#0ae448;font-family:var(--gz-mono);font-size:12px;font-weight:700;padding:6px 14px;border-radius:999px;margin-bottom:14px;letter-spacing:.04em}'+
    '.gz-admin-auth-title{font-family:var(--gz-mono,monospace)!important;font-size:24px!important;font-weight:800!important;color:#0e100f!important;margin:0 0 8px 0!important;letter-spacing:-.01em!important;text-align:center!important}'+
    '.gz-admin-auth-sub{font-size:13.5px;color:#55554b;margin:0 0 20px;line-height:1.5;text-align:center}'+
    '.gz-admin-pin-row{display:flex!important;gap:10px!important;justify-content:center!important;align-items:center!important;margin-bottom:12px!important}'+
    '.gz-admin-pin-inp{flex:1 1 auto!important;max-width:210px!important;height:46px!important;border:2px solid #0e100f!important;border-radius:10px!important;background:#fff!important;color:#0e100f!important;font-family:var(--gz-mono)!important;font-size:20px!important;font-weight:700!important;letter-spacing:.25em!important;text-align:center!important;padding:0 12px!important;box-sizing:border-box!important}'+
    '.gz-pin-btn-cyber{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;height:46px!important;padding:0 22px!important;background:#0e100f!important;color:#0ae448!important;border:2px solid #0ae448!important;border-radius:10px!important;font-family:var(--gz-mono,monospace)!important;font-size:13.5px!important;font-weight:800!important;letter-spacing:.05em!important;text-transform:uppercase!important;cursor:pointer!important;box-shadow:3px 3px 0 #0ae448!important;transition:all .15s cubic-bezier(.16,1,.3,1)!important;user-select:none!important;box-sizing:border-box!important;white-space:nowrap!important}'+
    '.gz-pin-btn-cyber:hover:not(:disabled){background:#0ae448!important;color:#0e100f!important;border-color:#0e100f!important;box-shadow:4px 4px 0 #0e100f!important;transform:translate(-1px,-1px)!important}'+
    '.gz-pin-btn-cyber:active:not(:disabled){transform:translate(2px,2px)!important;box-shadow:1px 1px 0 #0e100f!important}'+
    '.gz-pin-btn-cyber:disabled{opacity:.5!important;cursor:not-allowed!important;box-shadow:none!important}'+
    '.gz-admin-auth-msg{font-family:var(--gz-mono);font-size:12px;font-weight:700;color:#d90429;min-height:18px;margin-top:6px}'+
    '.gz-admin-filter-row{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:12px;flex-wrap:wrap}'+
    '.gz-admin-filter-pills{display:inline-flex;gap:6px;flex-wrap:wrap}'+
    '.gz-adm-filter-btn{appearance:none;border:1.5px solid #0e100f;background:var(--gz-bg,#fffceb);color:#0e100f;font-family:var(--gz-mono);font-size:11.5px;font-weight:700;padding:5px 12px;border-radius:999px;cursor:pointer}'+
    '.gz-adm-filter-btn.is-active{background:#0e100f;color:#0ae448}'+
    '.gz-admin-settings-drawer{display:none;padding:14px;border:2px dashed #0e100f;border-radius:14px;margin-bottom:16px;background:rgba(14,16,15,.03)}'+
    '.gz-admin-settings-drawer.is-open{display:block}'+
    /* ── Admin Tab Nav (Segmented Studio Command Bar - 100% Solid at any DPI) ── */
    '.gz-adm-tabs{display:inline-flex!important;background:#e8e5d4!important;padding:4px!important;border:2px solid #0e100f!important;border-radius:12px!important;gap:4px!important;margin-bottom:20px!important;overflow-x:auto!important;max-width:100%!important;box-sizing:border-box!important}'+
    '.gz-adm-tabs::-webkit-scrollbar{display:none}'+
    '.gz-adm-tab-btn{appearance:none!important;border:0!important;background:transparent!important;color:#55554b!important;font-family:var(--gz-mono,monospace)!important;font-size:12.5px!important;font-weight:700!important;padding:8px 18px!important;cursor:pointer!important;white-space:nowrap!important;border-radius:8px!important;margin:0!important;transition:all .15s ease!important;display:inline-flex!important;align-items:center!important;gap:6px!important}'+
    '.gz-adm-tab-btn:hover:not(.is-active){color:#0e100f!important;background:rgba(14,16,15,.08)!important}'+
    '.gz-adm-tab-btn.is-active{background:#0e100f!important;color:#0ae448!important;box-shadow:0 2px 5px rgba(0,0,0,.15)!important}'+
    /* ── Tab content panels ── */
    '.gz-adm-tab-pane{display:none}.gz-adm-tab-pane.is-active{display:block}'+
    /* ── Master-class shared inputs & typography ── */
    '.gz-adm-textarea{width:100%!important;max-width:100%!important;display:block!important;box-sizing:border-box!important;border:2px solid #0e100f!important;border-radius:12px!important;background:#fff!important;color:#0e100f!important;font-family:var(--gz-mono,monospace)!important;font-size:13px!important;line-height:1.6!important;padding:12px 14px!important;resize:vertical!important;min-height:140px!important;margin:6px 0 12px 0!important;outline:0!important;transition:border-color .15s,box-shadow .15s}'+
    '.gz-adm-textarea:focus{border-color:#0ae448!important;box-shadow:0 0 0 3px rgba(10,228,72,.18)!important}'+
    '.gz-adm-select{appearance:none;border:2px solid #0e100f;border-radius:10px;background:#fff;color:#0e100f;font-family:var(--gz-mono);font-size:12.5px;font-weight:700;padding:8px 14px;cursor:pointer;outline:0;transition:border-color .15s}'+
    '.gz-adm-select:focus{border-color:#0ae448}'+
    '.gz-adm-label{display:block!important;width:100%!important;font-family:var(--gz-mono,monospace)!important;font-size:11px!important;font-weight:700!important;text-transform:uppercase!important;letter-spacing:.04em!important;color:#55554b!important;margin:0 0 6px 0!important}'+
    '.gz-adm-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:12px}'+
    '.gz-adm-col{flex:1 1 200px;display:flex;flex-direction:column}'+
    '.gz-adm-grid-2{display:grid!important;grid-template-columns:1fr 1fr!important;gap:14px!important;align-items:start!important;margin-bottom:12px!important}'+
    '.gz-adm-split-grid{display:grid!important;grid-template-columns:1fr 1fr!important;gap:18px!important;align-items:stretch!important;margin-top:10px!important}'+
    '.gz-adm-split-col{display:flex!important;flex-direction:column!important}'+
    '.gz-adm-col-header{display:flex!important;align-items:center!important;justify-content:space-between!important;margin-bottom:4px!important}'+
    '.gz-adm-details{border:1.5px dashed #0e100f!important;border-radius:10px!important;padding:8px 14px!important;background:rgba(14,16,15,.02)!important;margin-bottom:14px!important}'+
    '.gz-adm-summary{font-family:var(--gz-mono,monospace)!important;font-size:11.5px!important;font-weight:700!important;color:#3d3d34!important;cursor:pointer!important;user-select:none!important}'+
    '.gz-segmented-group{display:inline-flex!important;background:#e8e5d4!important;padding:3px!important;border-radius:10px!important;border:2px solid #0e100f!important;gap:3px!important}'+
    '.gz-seg-btn{display:inline-flex!important;align-items:center!important;padding:6px 14px!important;border-radius:7px!important;cursor:pointer!important;font-family:var(--gz-mono,monospace)!important;font-size:11.5px!important;font-weight:700!important;color:#3d3d34!important;transition:all .15s ease!important;margin:0!important}'+
    '.gz-seg-btn input[type="radio"]{display:none!important}'+
    '.gz-seg-btn.is-active{background:#0e100f!important;color:#0ae448!important}'+
    '.gz-adm-action-bar{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;flex-wrap:wrap!important;padding-top:14px!important;border-top:1px dashed #c8c5b3!important;margin-top:14px!important}'+
    '.gz-adm-preview-box{border:2px solid #0e100f;border-radius:12px;background:#fff;padding:16px;min-height:80px;font-size:13px;line-height:1.65;margin-bottom:10px;white-space:pre-wrap;word-break:break-word;max-height:360px;overflow-y:auto}'+
    '.gz-adm-media-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-top:10px}'+
    '.gz-adm-media-thumb{border:2px solid #0e100f;border-radius:10px;overflow:hidden;position:relative;aspect-ratio:1;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:2px 2px 0 #0e100f}'+
    '.gz-adm-media-thumb img{width:100%;height:100%;object-fit:cover;display:block}'+
    '.gz-adm-media-url{font-family:var(--gz-mono);font-size:10px;padding:4px 8px;background:#0e100f;color:#0ae448;border-radius:6px;margin-top:4px;word-break:break-all;cursor:pointer;text-align:center}'+
    '.gz-adm-status-bar{font-family:var(--gz-mono);font-size:12.5px;font-weight:700;padding:10px 14px;border-radius:10px;background:#f0f8f0;border:2px solid #0ae448;color:#005c23;margin-bottom:12px;display:none}'+
    '.gz-adm-status-bar.is-show{display:block}'+
    '.gz-adm-status-bar.is-err{background:#fff0f0;border-color:#d90429;color:#d90429}'+
    '.gz-adm-model-row{display:flex;gap:8px;align-items:center;margin-bottom:12px;flex-wrap:wrap}'+
    '.gz-med-upload-card{border:2px solid #0e100f!important;border-radius:14px!important;background:#fff!important;overflow:hidden!important;margin-bottom:16px!important;box-shadow:2px 3px 0 #0e100f!important}'+
    '.gz-med-dropzone{padding:24px 20px!important;text-align:center!important;border-bottom:2px dashed #0e100f!important;background:rgba(10,228,72,.03)!important;cursor:pointer!important;transition:background .15s ease!important}'+
    '.gz-med-dropzone:hover{background:rgba(10,228,72,.08)!important}'+
    '.gz-med-url-strip{display:flex!important;align-items:center!important;gap:10px!important;padding:12px 16px!important;background:#faf8ee!important;flex-wrap:wrap!important}'+
    '.gz-med-library-header{display:flex!important;align-items:center!important;justify-content:space-between!important;padding-bottom:8px!important;margin-bottom:10px!important;border-bottom:1.5px solid #0e100f!important;flex-wrap:wrap!important;gap:8px!important}'+
    '.gz-crawl-bar{display:flex!important;align-items:center!important;gap:8px!important;padding:12px 14px!important;border:2px solid #0e100f!important;border-radius:14px!important;background:#fff!important;margin-bottom:14px!important;box-shadow:2px 3px 0 #0e100f!important;flex-wrap:wrap!important}'+
    '@media(max-width:860px){.gz-adm-grid-2,.gz-adm-split-grid{grid-template-columns:1fr!important}.gz-segmented-group{flex-wrap:wrap!important}.gz-adm-action-bar{flex-direction:column!important;align-items:stretch!important}}'+
    '@media(max-width:580px){.gz-adm-tabs{gap:0}.gz-adm-tab-btn{padding:8px 10px;font-size:11px}.gz-adm-row{flex-direction:column}.gz-adm-col{flex:1 1 100%}}'+
    '.gz-post-gallery{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))!important;gap:16px!important;margin:20px 0!important;width:100%!important;box-sizing:border-box!important}'+
    '.gz-gallery-item{margin:0!important;padding:0!important;border:2px solid #0e100f!important;border-radius:14px!important;overflow:hidden!important;background:#fff!important;box-shadow:3px 3px 0 #0e100f!important;transition:transform .2s ease,box-shadow .2s ease!important;display:flex!important;flex-direction:column!important}'+
    '.gz-gallery-item:hover{transform:translateY(-2px)!important;box-shadow:4px 4px 0 #0ae448!important}'+
    '.gz-gallery-item img{width:100%!important;height:220px!important;object-fit:cover!important;display:block!important;cursor:zoom-in!important;border:0!important;border-radius:0!important;margin:0!important}'+
    '.gz-gallery-item figcaption{font-family:var(--gz-mono,monospace)!important;font-size:11.5px!important;font-weight:700!important;color:#3d3d34!important;padding:8px 12px!important;background:#faf8ee!important;border-top:1.5px solid #0e100f!important;text-align:center!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;margin:0!important}'+
    '@media(max-width:640px){.gz-post-gallery{grid-template-columns:1fr!important;gap:12px!important}.gz-gallery-item img{height:190px!important}}'+
    '.gz-lightbox-overlay{position:fixed;inset:0;z-index:999999;background:rgba(14,16,15,.88);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;opacity:0;pointer-events:none;transition:opacity .2s ease}'+
    '.gz-lightbox-overlay.is-open{opacity:1;pointer-events:auto}'+
    '.gz-lightbox-wrap{position:relative;max-width:90vw;max-height:85vh;border:2.5px solid #0e100f;border-radius:16px;background:#fffceb;overflow:hidden;box-shadow:6px 8px 0 #0e100f;display:flex;flex-direction:column;transform:scale(.96);transition:transform .2s ease}'+
    '.gz-lightbox-overlay.is-open .gz-lightbox-wrap{transform:scale(1)}'+
    '.gz-lightbox-wrap img{max-width:100%;max-height:75vh;object-fit:contain;display:block}'+
    '.gz-lightbox-caption{font-family:var(--gz-mono,monospace);font-size:12.5px;font-weight:700;color:#0e100f;padding:10px 16px;background:#fff;border-top:2px solid #0e100f;text-align:center}'+
    '.gz-lightbox-close{position:absolute;top:10px;right:10px;width:34px;height:34px;border:2px solid #0e100f;border-radius:50%;background:#fff;color:#0e100f;font-weight:800;font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:2px 2px 0 #0e100f}'+
    '@media screen and (max-width:580px){.gz-pro-gate{padding:10px 12px!important}.gz-gate-bar{flex-direction:column!important;align-items:stretch!important;gap:8px!important}.gz-gate-left{width:100%!important;justify-content:space-between!important}.gz-gate-btns{width:100%!important;display:grid!important;grid-template-columns:1fr auto!important;gap:8px!important;margin-left:0!important}.gz-admin-panel{padding:16px 12px!important}}';
  if(!document.getElementById('gz-admin-studio-inlined')){
    st.id = 'gz-admin-studio-inlined';
    (document.head||document.documentElement).appendChild(st);
  }

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
    if(pop&&document.body.classList.contains('item')){
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

  var _extLoaded=false; // single declaration — reused by triggerLoad below
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
    function loadScript(id, src, done){
      var ex=document.getElementById(id);
      if(ex){if(done)ex.addEventListener('load',done);return;}
      var s=document.createElement('script');
      s.id=id;
      s.src=src;
      s.async=true;
      s.defer=true;
      if(done)s.addEventListener('load',done);
      (document.head||document.documentElement).appendChild(s);
    }

    loadScript('gz-gsap-core-js', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js', function(){
      loadScript('gz-gsap-st-js', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js', function(){
        loadScript('gz-gsap-to-js', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollToPlugin.min.js', function(){
          try {
            if(window.gsap && window.ScrollTrigger && window.ScrollToPlugin){
              window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollToPlugin);
            }
            initGsapSkillsSuite();
          } catch(e){}
          if(cb)cb();
        });
      });
    });
  }

  var _gsapSkillsInited = false;
  function initGsapSkillsSuite(){
    if (_gsapSkillsInited) return;
    if (!window.gsap || window.gsap.__stub) return;
    _gsapSkillsInited = true;

    try {
      // 1. Reading Progress Bar via ScrollTrigger (Item Post Pages Only)
      var isItemPage = document.body.classList.contains('item');
      var pBar = document.getElementById('gz-reading-progress');
      var postBody = isItemPage ? document.querySelector('.post-body, .entry-content') : null;
      if (isItemPage && pBar && postBody && window.ScrollTrigger) {
        pBar.style.display = 'block';
        window.gsap.to(pBar, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: postBody,
            start: 'top top+=60',
            end: 'bottom bottom-=120',
            scrub: 0.2
          }
        });
      } else if (pBar) {
        pBar.style.display = 'none';
      }

      // 2. Smooth ScrollToPlugin for Back to Top (#top) and TOC Links
      if (window.ScrollToPlugin) {
        var topBtn = document.getElementById('top');
        if (topBtn) {
          topBtn.addEventListener('click', function(e){
            e.preventDefault();
            window.gsap.to(window, {
              duration: 0.75,
              scrollTo: { y: 0, autoKill: true },
              ease: 'power3.inOut'
            });
          });
        }
        var tocLinks = document.querySelectorAll('#toc a[href^="#"]');
        tocLinks.forEach(function(a){
          a.addEventListener('click', function(e){
            var targetId = a.getAttribute('href').slice(1);
            var targetEl = document.getElementById(targetId);
            if (targetEl) {
              e.preventDefault();
              window.gsap.to(window, {
                duration: 0.65,
                scrollTo: { y: targetEl, offsetY: 70, autoKill: true },
                ease: 'power3.out'
              });
            }
          });
        });
      }

      // 3. gsap.matchMedia() Responsive Animations
      var mm = window.gsap.matchMedia();

      // Desktop: Smooth batch cards scroll stagger with clearProps & no initial flash
      mm.add('(min-width: 769px)', function(){
        if (window.ScrollTrigger) {
          var allCards = document.querySelectorAll('.index .post-outer, .archive .post-outer, .search .post-outer, .PopularPosts article.post');
          var winH = window.innerHeight || 800;
          var belowFoldCards = [];

          allCards.forEach(function(card){
            var r = card.getBoundingClientRect();
            if (r.top < winH && r.bottom > 0) {
              card.style.opacity = '1';
              card.style.visibility = 'visible';
            } else {
              belowFoldCards.push(card);
            }
          });

          if (belowFoldCards.length) {
            window.ScrollTrigger.batch(belowFoldCards, {
              interval: 0.08,
              batchMax: 3,
              onEnter: function(batch){
                window.gsap.fromTo(batch,
                  { opacity: 0, y: 14 },
                  {
                    opacity: 1,
                    y: 0,
                    stagger: 0.06,
                    duration: 0.36,
                    ease: 'power2.out',
                    overwrite: 'auto',
                    clearProps: 'transform,opacity,visibility'
                  }
                );
              },
              once: true
            });
          }
        }

        // Smooth horizontal drag for .scrollmenu
        var menu = document.querySelector('.scrollmenu');
        if (menu) {
          var isDown = false, startX, scrollLeft;
          menu.addEventListener('mousedown', function(e){
            isDown = true;
            startX = e.pageX - menu.offsetLeft;
            scrollLeft = menu.scrollLeft;
          });
          menu.addEventListener('mouseleave', function(){ isDown = false; });
          menu.addEventListener('mouseup', function(){ isDown = false; });
          menu.addEventListener('mousemove', function(e){
            if (!isDown) return;
            e.preventDefault();
            var x = e.pageX - menu.offsetLeft;
            var walk = (x - startX) * 1.5;
            menu.scrollLeft = scrollLeft - walk;
          });
        }
      });

      // Mobile: Immediate safe display
      mm.add('(max-width: 768px)', function(){
        var cards = document.querySelectorAll('.post-outer, .PopularPosts article.post');
        cards.forEach(function(c){
          c.style.opacity = '1';
          c.style.visibility = 'visible';
        });
      });
    } catch(err){}
  }
  if(!window.gsap){
    window.gsap={version:'3.12.5',__stub:true,to:function(){},fromTo:function(){}};
  }
  // _extLoaded declared above near ensureExternalInteractiveAssets
  function triggerLoad(){if(!_extLoaded){_extLoaded=true;ensureExternalInteractiveAssets();}}
  ['pointermove','touchstart','scroll','keydown'].forEach(function(ev){
    window.addEventListener(ev,function onInt(){
      window.removeEventListener(ev,onInt);
      triggerLoad();
    },{passive:true,once:true});
  });
  // Also load after page is fully loaded + idle (improves TBT by not blocking LCP)
  if(window.requestIdleCallback){
    requestIdleCallback(function(){triggerLoad();},{timeout:3000});
  } else {
    window.addEventListener('load',function(){setTimeout(triggerLoad,1500);},{once:true,passive:true});
  }

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
      var a=document.createElement('button');
      a.type='button';
      a.className='shbutton social-radius';
      a.title='Copy Link';
      a.setAttribute('aria-label', 'Copy Link');
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

/* PageSpeed 100/100 Accessibility & SEO Sanitizer */
(function(){
  function sanitizeAccessibilityAndSEO(){
    // 1. All iframes must have titles (WCAG 4.1.2)
    document.querySelectorAll('iframe').forEach(function(f){
      if(!f.getAttribute('title')){
        var title = 'Content frame';
        if(f.id === 'comment-editor') title = 'Comment Form';
        else if(f.id === 'comment-actions') title = 'Comment Actions';
        else if(f.name) title = f.name;
        else if(f.src && f.src.indexOf('youtube') !== -1) title = 'YouTube Video';
        else if(f.src && f.src.indexOf('recaptcha') !== -1) title = 'reCAPTCHA';
        f.setAttribute('title', title);
      }
    });

    // 2. Heading hierarchy: sequentially-descending order
    document.querySelectorAll('.comment-form h4').forEach(function(h4){
      var h3 = document.createElement('h3');
      h3.className = h4.className;
      h3.id = h4.id;
      h3.innerHTML = h4.innerHTML;
      h4.parentNode.replaceChild(h3, h4);
    });

    // 3. Anchor & Link accessibility (discernible name & crawlability)
    document.querySelectorAll('a').forEach(function(a){
      if(a.id === 'comment-editor-src'){
        a.setAttribute('aria-label', 'Comment Editor Source');
        a.setAttribute('tabindex', '-1');
        a.style.display = 'none';
      }
      if(!a.getAttribute('href')){
        if(a.getAttribute('name')){
          a.setAttribute('aria-hidden', 'true');
        }else{
          // Uncrawlable link fix for Lighthouse (comment-reply, replies, load-more)
          a.setAttribute('href', '#comment-form');
          a.setAttribute('role', 'button');
        }
      }
      // Unique names for delete comment links
      if(a.href && a.href.indexOf('/comment/delete/') !== -1){
        var dm = a.href.match(/delete\/[^\/]+\/(\d+)/);
        if(dm){
          a.setAttribute('aria-label', 'Delete comment #' + dm[1]);
        }
      }
      var text = (a.innerText || '').trim();
      var aria = a.getAttribute('aria-label') || a.getAttribute('title');
      var img = a.querySelector('img[alt]');
      if(!text && !aria && (!img || !img.alt)){
        var name = a.getAttribute('name') || a.className || 'Link';
        a.setAttribute('aria-label', name);
      }
    });

    // 4. Image alt & dimensions check
    document.querySelectorAll('img').forEach(function(img){
      if(!img.hasAttribute('alt')){
        img.setAttribute('alt', '');
      }
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', sanitizeAccessibilityAndSEO);
  } else {
    sanitizeAccessibilityAndSEO();
  }

  if(window.MutationObserver){
    var mo = new MutationObserver(function(){
      sanitizeAccessibilityAndSEO();
    });
    mo.observe(document.documentElement, {childList: true, subtree: true});
  }
})();

/* Item: gỡ Popular Posts khỏi DOM (tránh cache CSS cũ vẫn thấy) */
(function(){
  var _bc=document.body.className;
  var _isSearch=window.location.pathname.indexOf('/search')!==-1&&window.location.search.indexOf('q=')!==-1;
  if(_isSearch){
    document.body.classList.add('gz-search-page');
    var _pop=document.getElementById('PopularPosts1');
    if(_pop&&_pop.parentNode)_pop.parentNode.removeChild(_pop);
    var _side=document.getElementById('col-sidebar-wrapper');
    if(_side)_side.style.cssText='display:none!important';
  }
  if(!_bc.includes('item')&&!_bc.includes('search')&&!_bc.includes('archive')&&!_isSearch)return;
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

/* Ambient Blur Background for Featured Post Image */
(function(){
  function initFeatBlur(){
    var wrap=document.querySelector('.featured-post-image');
    var img=wrap?wrap.querySelector('img'):null;
    if(wrap&&img&&!wrap.querySelector('.gz-feat-blur-bg')){
      var bg=document.createElement('div');
      bg.className='gz-feat-blur-bg';
      var src=img.getAttribute('data-src')||img.src||'';
      if(src)bg.style.backgroundImage='url("'+src+'")';
      wrap.insertBefore(bg,img);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initFeatBlur);
  else initFeatBlur();
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
    if(s === 'share') return true;
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
      if(isHiddenSystemLabel(t) || String(t).trim().toLowerCase() === 'share'){
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

  /* Homepage/list snippets (data:post.snippets.short) ignore #more and leak locked TG body.
     Keep only the public "Hướng dẫn …" line (or first safe sentence). */
  function publicSnippetOnly(raw){
    var text = String(raw || '').replace(/\s+/g, ' ').trim();
    if(!text) return '';
    // Keep full "Hướng dẫn …" line; cut only at locked-dump markers (not mid-phrase "tên miền").
    // NOTE: avoid \\b after Unicode (JS \\b is ASCII-only) — use (?=\\s|$) instead.
    var guide = text.match(
      /^(Hướng dẫn.*?)(?=\s+(?:checkdomain\.|Promo\s*:|https?:\/\/|\d+\.\s|GG AI(?:\s|$)|Gem Ultra(?:\s|$)|HeyGen mở(?:\s|$)|Bug GG(?:\s|$)|Vào chọn(?:\s|$)|Link chương trình(?:\s|$)|Config(?:\s|$)|•\s*B\d|⏰|Deadline(?:\s|$))|$)/i
    );
    if(guide && guide[1]) return guide[1].trim();
    var cut = text.split(/(?=https?:\/\/|\b\d+\.\s+|Promo\s*:|checkdomain\.|Config(?:\s|$)|•\s*B\d|⏰|HeyGen mở(?:\s|$))/i)[0];
    cut = (cut || text).trim();
    if(cut.length > 140) cut = cut.slice(0, 137).replace(/\s+\S*$/, '') + '…';
    return cut;
  }

  function excerptCacheKey(box){
    var host = box.closest ? (box.closest('.post-outer, article.post, .related-post-style-2 li') || box) : box;
    var a = host.querySelector ? host.querySelector('h2.post-title a, h3.post-title a, a.related-post-item-title, a[href*=".html"]') : null;
    var href = a ? (a.getAttribute('href') || '') : '';
    var id = box.id || '';
    return 'gz_ex_v3:' + (id || href || String((box.textContent || '').slice(0, 48)));
  }

  function applyExcerptText(box, cleaned){
    while(box.firstChild) box.removeChild(box.firstChild);
    var p = document.createElement('p');
    p.className = 'gz-norm-p';
    p.textContent = cleaned;
    box.appendChild(p);
    box.classList.add('gz-excerpt-ready');
    box.setAttribute('data-gz-excerpt', '1');
  }

  function stripDomAfterMore(box){
    var more = box.querySelector('a[name="more"], #more, a#more');
    if(!more) return false;
    var node = more;
    while(node && node !== box){
      var sib = node.nextSibling;
      while(sib){
        var next = sib.nextSibling;
        if(sib.parentNode) sib.parentNode.removeChild(sib);
        sib = next;
      }
      node = node.parentNode;
    }
    if(more.parentNode) more.parentNode.removeChild(more);
    return true;
  }

  function sanitizeOneExcerpt(box){
    if(!box || box.getAttribute('data-gz-excerpt') === '1') return;
    /* Never touch single-post body (#tgtPost) — only list/related/popular excerpts */
    if(box.id === 'tgtPost' || (box.classList && box.classList.contains('post-body') && document.body.classList.contains('item') && !box.classList.contains('gz-public-excerpt') && !box.classList.contains('snippet-text-box'))){
      return;
    }
    var key = excerptCacheKey(box);
    try{
      var cached = sessionStorage.getItem(key);
      if(cached && cached.length > 8){
        applyExcerptText(box, cached);
        return;
      }
    }catch(e){}

    stripDomAfterMore(box);
    var imgs = box.querySelectorAll('img, .hidden-image, a:has(img.hidden-image)');
    for(var im=0;im<imgs.length;im++) imgs[im].remove();
    var jl = box.querySelectorAll('.jump-link, a.jump-link');
    for(var j=0;j<jl.length;j++) jl[j].remove();

    var cleaned = '';
    var ps = box.querySelectorAll('p');
    for(var p=0;p<ps.length;p++){
      if(ps[p].querySelector('img,video,.hidden-image')) continue;
      var t = (ps[p].textContent || '').replace(/\s+/g,' ').trim();
      if(!t) continue;
      cleaned = publicSnippetOnly(t);
      break;
    }
    if(!cleaned) cleaned = publicSnippetOnly(box.textContent);
    if(!cleaned) cleaned = String(box.textContent || '').replace(/\s+/g,' ').trim().slice(0, 120);
    applyExcerptText(box, cleaned);
    try{ sessionStorage.setItem(key, cleaned); }catch(e2){}
  }

  function sanitizeLockedSnippets(){
    var nodes = document.querySelectorAll(
      '.snippet-text-box.gz-public-excerpt, .item-content.gz-public-excerpt, .popular-posts-snippet, .related-post-item-summary, .related-post-item-summary-text'
    );
    for(var i=0;i<nodes.length;i++) sanitizeOneExcerpt(nodes[i]);
  }

  function fixBrokenLabelHrefs(){
    var links = document.querySelectorAll('a[href*="/search/label/"]');
    for(var i=0;i<links.length;i++){
      var a = links[i];
      var href = a.getAttribute('href') || '';
      if(!href) continue;
      /* Breadcrumb used "?&max-results" on top of ?m=0 → "?m=0?&max-results=16" */
      if(/\?[^#]*\?/.test(href) || href.indexOf('?&') !== -1){
        href = href
          .replace(/\?([^?#]*)\?/g, '?$1&')
          .replace(/\?&/g, '?')
          .replace(/&&+/g, '&')
          .replace(/\?$/,'');
        a.setAttribute('href', href);
      }
      var labelTxt = (a.textContent || '').trim();
      if(isHiddenSystemLabel(labelTxt)){
        a.classList.add('gz-hidden-label');
        a.style.setProperty('display','none','important');
      }
    }
  }

  /* Blogger often serves s72/w150 square thumbs — bump to sharp 16:9 crop for home cards */
  function sharpenHomeThumbUrls(root){
    var scope = root || document;
    var imgs = scope.querySelectorAll('.snippet-thumbnail img, .post-thumbnail, .PopularPosts img, .related-post-item-thumbnail img');
    for(var i=0;i<imgs.length;i++){
      var img = imgs[i];
      var attrs = ['src', 'data-src', 'data-lazy-src'];
      for(var a=0;a<attrs.length;a++){
        var key = attrs[a];
        var u = img.getAttribute(key);
        if(!u || u.indexOf('data:') === 0) continue;
        var nu = u
          .replace(/\/s\d+(-c)?\//i, '/w400-h225-p-k-no-nu/')
          .replace(/[=/]w\d+-h\d+(-[a-z0-9-]*)?/i, '=w400-h225-p-k-no-nu')
          .replace(/\/w\d+-h\d+(-[a-z0-9-]*)?\//i, '/w400-h225-p-k-no-nu/');
        if(nu !== u) img.setAttribute(key, nu);
      }
      img.setAttribute('width', '168');
      img.setAttribute('height', '105');
      img.style.objectFit = 'cover';
    }
  }

  function decorateHomepageCards(){
    fixBrokenLabelHrefs();
    sanitizeLockedSnippets();
    sharpenHomeThumbUrls(document);
    filterLabelsAndDetectPrice(document, location.pathname);
    if(typeof normalizeHomeCardTags === 'function') normalizeHomeCardTags();
    if(typeof reorderBreadcrumbPrimary === 'function') reorderBreadcrumbPrimary();
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
    var currentAdminTab = 'orders'; /* orders | publish | media | crawl | ai */
    var _aiModels = [];
    var _crawlResult = '';
    var _mediaItems = [];  /* [{url,name,type}] */
    var _publishStatus = '';
    var _aiStatus = '';
    var _mediaStatus = '';

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
          '<div class="gz-admin-auth-badge">' + getGsapLockSvg('gz-lk-svg') + '<span>BẢO MẬT QUẢN TRỊ</span></div>' +
          '<h2 class="gz-admin-auth-title">{ Xác Thực Quản Trị }</h2>' +
          '<p class="gz-admin-auth-sub">Nhập mã PIN quản trị để mở khóa trung tâm đơn hàng.</p>' +
          '<form class="gz-admin-pin-row" id="gz-adm-pin-form" onsubmit="return false">' +
            '<input type="password" inputmode="numeric" autocomplete="current-password" class="gz-admin-pin-inp" id="gz-adm-pin-inp" placeholder="\u2022\u2022\u2022\u2022" maxlength="16" ' + (remainLockSec > 0 ? 'disabled' : '') + '/>' +
            '<button type="submit" class="gz-pin-btn-cyber" id="gz-adm-pin-btn" ' + (remainLockSec > 0 ? 'disabled' : '') + '>🔓 Mở Khóa \u2197</button>' +
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

    /* ── Tab Nav HTML ── */
    function buildTabNav(headExtra){
      var tabs = [
        {id:'orders', label:'📋 Đơn Hàng'},
        {id:'publish', label:'📝 Đăng Bài'},
        {id:'media',   label:'🖼 Media'},
        {id:'crawl',   label:'🕷 Crawl'},
        {id:'ai',      label:'🤖 AI Studio'}
      ];
      var navHtml = '<div class="gz-admin-head">' +
        '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">' +
          '<div class="gz-gate-title"><span class="gz-b">{</span> MMO Admin Studio <span class="gz-b">}</span></div>' +
        '</div>' +
        (headExtra||'') +
      '</div>' +
      '<div class="gz-adm-tabs">';
      for(var i=0;i<tabs.length;i++){
        navHtml += '<button type="button" class="gz-adm-tab-btn'+(currentAdminTab===tabs[i].id?' is-active':'')+'" data-admtab="'+tabs[i].id+'">'+tabs[i].label+'</button>';
      }
      navHtml += '</div>';
      return navHtml;
    }

    /* ── Helper: Format Canonical MMO Post HTML matching Đại Ca Tú's sample ── */
    function formatCanonicalPostHtml(title, rawContent, thumbUrl, lockMode){
      var res = "<div id='tgtPost'>\n";
      if(thumbUrl){
        res += "  <p><a href='" + thumbUrl + "'><img class='hidden-image' alt='" + title.replace(/'/g, "&#39;") + "' title='" + title.replace(/'/g, "&#39;") + "' data-original-height='854' data-original-width='1280' src='" + thumbUrl + "' /></a></p>\n";
      }

      var hasMoreAlready = /<a\s+[^>]*name=["']more["']/i.test(rawContent || '') || /<!--more-->/i.test(rawContent || '');

      // Split rawContent into clean paragraphs
      var paras = [];
      var lines = (rawContent || '').split(/\n\s*\n|\r\n\s*\r\n/);
      for(var li=0; li<lines.length; li++){
        var cl = lines[li].trim();
        if(cl){
          if(cl.indexOf('<p>') === 0 || cl.indexOf('<div>') === 0 || cl.indexOf('<h2>') === 0 || cl.indexOf('<h3>') === 0 || cl.indexOf('<pre>') === 0){
            paras.push(cl);
          } else {
            paras.push('<p>' + cl.replace(/\n/g, '<br/>') + '</p>');
          }
        }
      }

      if(!hasMoreAlready && lockMode !== 'none' && paras.length >= 2){
        res += '  ' + paras[0] + '\n';
        if(paras.length > 2){
          res += '  ' + paras[1] + '\n';
          res += '  <a name="more" id="more"></a>\n';
          for(var p=2; p<paras.length; p++){
            res += '  ' + paras[p] + '\n';
          }
        } else {
          res += '  <a name="more" id="more"></a>\n';
          res += '  ' + paras[1] + '\n';
        }
      } else {
        for(var a=0; a<paras.length; a++){
          res += '  ' + paras[a] + '\n';
        }
        if(!hasMoreAlready && lockMode !== 'none' && paras.length === 1){
          res += '  <a name="more" id="more"></a>\n';
        }
      }
      res += "</div>";
      return res;
    }

    /* ── Helper: Canvas 3x3 Sharpening without crop or size distortion ── */
    function sharpenImageViaCanvas(imgFile, callback){
      var reader = new FileReader();
      reader.onload = function(e){
        var img = new Image();
        img.onload = function(){
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          canvas.width = img.naturalWidth || img.width;
          canvas.height = img.naturalHeight || img.height;
          ctx.drawImage(img, 0, 0);
          try {
            var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var d = imgData.data;
            var w = canvas.width, h = canvas.height;
            var copy = new Uint8ClampedArray(d);
            for(var y=1; y<h-1; y++){
              for(var x=1; x<w-1; x++){
                var idx = (y*w + x)*4;
                for(var c=0; c<3; c++){
                  var val = 5*copy[idx+c] - copy[((y-1)*w + x)*4 + c] - copy[((y+1)*w + x)*4 + c] - copy[(y*w + (x-1))*4 + c] - copy[(y*w + (x+1))*4 + c];
                  d[idx+c] = Math.min(255, Math.max(0, val));
                }
              }
            }
            ctx.putImageData(imgData, 0, 0);
          } catch(err){}
          canvas.toBlob(function(blob){
            callback(new File([blob], imgFile.name, { type: 'image/png' }));
          }, 'image/png');
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(imgFile);
    }

    /* ── TAB: Đăng Bài ── */
    function renderTabPublish(){
      var statusClass = _publishStatus ? (_publishStatus.indexOf('✓')>=0||_publishStatus.indexOf('thành')>=0?'is-show':'is-show is-err') : '';
      return '<div class="gz-adm-tab-pane'+(currentAdminTab==='publish'?' is-active':'')+'" id="gz-tab-publish">' +
        '<div class="gz-adm-status-bar '+statusClass+'" id="gz-pub-status">'+(_publishStatus||'')+'</div>' +
        /* Row 1: Tiêu đề to rõ */
        '<div style="margin-bottom:12px">' +
          '<span class="gz-adm-label">Tiêu đề bài viết</span>' +
          '<input type="text" class="gz-recover-input" id="gz-pub-title" placeholder="Nhập tiêu đề bài viết ấn tượng..." style="width:100%!important;font-size:15px;font-weight:700;height:42px"/>' +
        '</div>' +
        /* Row 2: 2 cột: Ảnh đại diện & Nhãn (Labels) */
        '<div class="gz-adm-grid-2" style="margin-bottom:12px">' +
          '<div>' +
            '<span class="gz-adm-label">Ảnh đại diện (Thumbnail URL)</span>' +
            '<input type="text" class="gz-recover-input" id="gz-pub-thumb" placeholder="https://blogger.googleusercontent.com/... hoặc Telegraph" style="width:100%!important"/>' +
          '</div>' +
          '<div>' +
            '<span class="gz-adm-label">Nhãn chuyên mục (Labels cách nhau dấu phẩy)</span>' +
            '<input type="text" class="gz-recover-input" id="gz-pub-labels" placeholder="lock, ChatGPT, Tutorial…" value="lock" style="width:100%!important"/>' +
            '<div id="gz-pub-label-suggest" style="margin-top:8px;padding:8px 10px;border:1px dashed #bbbaa6;border-radius:10px;background:#fffceb">' +
              '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:6px">' +
                '<span style="font-size:11.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#6e6e62">Nhãn đề xuất</span>' +
                '<button type="button" class="gz-mini-chip" id="gz-pub-btn-apply-suggest" style="height:26px;padding:0 10px">Áp dụng</button>' +
              '</div>' +
              '<div id="gz-pub-suggest-chips" style="display:flex;flex-wrap:wrap;gap:6px;min-height:28px"></div>' +
              '<div style="margin-top:6px;font-size:11px;color:#6e6e62;line-height:1.4">Crumb: <code>MMO &gt; Tutorial &gt; ChatGPT</code> · Labels: <code>ChatGPT, Tutorial, lock</code></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        /* Row 3: Chế độ Khóa nội dung (Segmented Control) */
        '<div style="margin-bottom:14px;background:rgba(14,16,15,.03);padding:10px 14px;border-radius:12px;border:1.5px solid #0e100f">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">' +
            '<span class="gz-adm-label" style="margin:0;width:auto!important">🔒 Khóa nội dung SmartLocker:</span>' +
            '<div class="gz-segmented-group">' +
              '<label class="gz-seg-btn is-active"><input type="radio" name="gz-pub-lock" value="none" checked/> <span>Mở hoàn toàn</span></label>' +
              '<label class="gz-seg-btn"><input type="radio" name="gz-pub-lock" value="comment"/> <span>💬 Bình luận mở</span></label>' +
              '<label class="gz-seg-btn"><input type="radio" name="gz-pub-lock" value="price"/> <span>💰 Trả phí</span></label>' +
              '<label class="gz-seg-btn"><input type="radio" name="gz-pub-lock" value="vip"/> <span>⚡ VIP only</span></label>' +
            '</div>' +
            '<input type="number" class="gz-recover-input" id="gz-pub-price" placeholder="Giá (VNĐ)" style="max-width:130px;display:none;height:36px"/>' +
          '</div>' +
        '</div>' +
        /* Row 4: Nội dung bài viết (Full width, rộng rãi) */
        '<div style="margin-bottom:12px">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">' +
            '<span class="gz-adm-label" style="margin:0;width:auto!important">Nội dung bài viết (HTML hoặc văn bản)</span>' +
            '<span style="font-family:var(--gz-mono);font-size:11px;color:#6e6e62">Chuẩn: 2 đoạn đầu Preview → &lt;a name=&quot;more&quot;&gt; → Khóa</span>' +
          '</div>' +
          '<textarea class="gz-adm-textarea" id="gz-pub-content" rows="12" style="min-height:260px!important" placeholder="Dán nội dung vào đây...&#10;&#10;Hệ thống tự động:&#10;1. Nhúng ảnh đại diện thành &lt;img class=\'hidden-image\'&gt; ẩn trong bài&#10;2. Giữ 2 đoạn văn đầu làm Preview xem trước&#10;3. Chèn Jump Break &lt;a name=\'more\'&gt; trước nội dung khóa&#10;4. Đóng gói chuẩn thẻ &lt;div id=\'tgtPost\'&gt;"></textarea>' +
        '</div>' +
        /* Row 5: Actions bar */
        '<div class="gz-adm-action-bar">' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-pub-btn-publish" style="font-size:13.5px;padding:0 22px!important">🚀 Đăng lên Blogger</button>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-pub-btn-preview">👁 Xem trước bài mẫu</button>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-pub-btn-ai-format">✨ Chuyển qua AI Format</button>' +
          '</div>' +
          '<div style="display:flex;align-items:center;gap:8px">' +
            '<span class="gz-adm-label" style="margin:0;width:auto!important">Trạng thái:</span>' +
            '<select class="gz-adm-select" id="gz-pub-state" style="min-width:160px">' +
              '<option value="LIVE" selected>🌐 Đăng ngay (Live)</option>' +
              '<option value="DRAFT">📝 Lưu nháp (Draft)</option>' +
            '</select>' +
          '</div>' +
        '</div>' +
        /* Preview area */
        '<div id="gz-pub-preview-wrap" style="display:none;margin-top:16px">' +
          '<span class="gz-adm-label">👁 Xem trước kết quả xuất bản chuẩn BlogPost:</span>' +
          '<div class="gz-adm-preview-box" id="gz-pub-preview-box"></div>' +
        '</div>' +
      '</div>';
    }

    /* ── TAB: Media ── */
    function renderTabMedia(){
      var thumbsHtml = '';
      for(var m=0;m<_mediaItems.length;m++){
        var mi = _mediaItems[m];
        thumbsHtml += '<div style="display:flex;flex-direction:column;gap:4px">' +
          '<div class="gz-adm-media-thumb" data-url="'+mi.url+'" title="Bấm để copy URL">' +
            (mi.type==='video' ?
              '<video src="'+mi.url+'" style="width:100%;height:100%;object-fit:cover"></video>' :
              '<img src="'+mi.url+'" alt="'+mi.name+'" loading="lazy"/>') +
          '</div>' +
          '<div class="gz-adm-media-url" data-copy="'+mi.url+'" title="Copy URL">📋 '+mi.url.split('/').pop()+'</div>' +
        '</div>';
      }
      var statusClass = _mediaStatus ? (_mediaStatus.indexOf('✓')>=0?'is-show':'is-show is-err') : '';
      return '<div class="gz-adm-tab-pane'+(currentAdminTab==='media'?' is-active':'')+'" id="gz-tab-media">' +
        '<div class="gz-adm-status-bar '+statusClass+'" id="gz-med-status">'+(_mediaStatus||'')+'</div>' +
        /* Unified Upload & Quick URL Card */
        '<div class="gz-med-upload-card">' +
          /* Top Dropzone */
          '<div class="gz-med-dropzone" id="gz-med-dropzone">' +
            '<input type="file" id="gz-med-file" accept="image/jpeg,image/png,image/gif,image/webp,video/mp4,video/webm" multiple style="display:none"/>' +
            '<div style="font-size:28px;margin-bottom:6px">📁</div>' +
            '<div style="font-family:var(--gz-mono);font-size:14px;font-weight:700;color:#0e100f;margin-bottom:4px">Kéo thả ảnh/video vào đây hoặc bấm tải lên</div>' +
            '<div style="font-family:var(--gz-mono);font-size:11px;color:#6e6e62;margin-bottom:12px">Upload tự động lên Telegraph/Cloudflare CDN siêu tốc (Tối đa 5MB)</div>' +
            '<div style="display:inline-flex;gap:10px;align-items:center;flex-wrap:wrap;justify-content:center">' +
              '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-med-btn-pick" style="padding:0 22px;height:40px">📂 Chọn File Từ Máy</button>' +
              '<label style="display:inline-flex;align-items:center;gap:6px;background:#fff;border:2px solid #0e100f;border-radius:10px;padding:0 14px;height:40px;cursor:pointer;font-family:var(--gz-mono);font-size:12px;font-weight:700">' +
                '<input type="checkbox" id="gz-med-sharpen" checked style="width:15px;height:15px;cursor:pointer"/> ✨ Tự động làm nét (Canvas 3x3)' +
              '</label>' +
            '</div>' +
          '</div>' +
          /* Bottom URL Strip */
          '<div class="gz-med-url-strip">' +
            '<span class="gz-adm-label" style="margin:0;width:auto!important;white-space:nowrap">🔗 Link trực tiếp:</span>' +
            '<input type="text" class="gz-recover-input" id="gz-med-url-inp" placeholder="https://blogger.googleusercontent.com/img/b/... hoặc link ảnh bất kỳ" style="flex:1;height:40px"/>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-med-btn-add-url" style="height:40px;padding:0 18px">Thêm Vào Thư Viện</button>' +
          '</div>' +
        '</div>' +
        /* Media Library Section Header */
        '<div class="gz-med-library-header">' +
          '<div style="display:flex;align-items:center;gap:8px">' +
            '<span class="gz-adm-label" style="margin:0;width:auto!important;font-size:12px">🖼️ Thư viện Media (' + _mediaItems.length + ' file)</span>' +
            '<span style="font-family:var(--gz-mono);font-size:11px;color:#6e6e62">· Bấm vào ảnh để copy link</span>' +
          '</div>' +
          '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
            '<button type="button" class="gz-mini-chip" id="gz-med-btn-copy-all">📋 Copy tất cả URL</button>' +
            '<button type="button" class="gz-mini-chip" id="gz-med-btn-send-pub" style="background:#0e100f;color:#0ae448">→ Chèn sang Đăng Bài (Tự động Lưới) ↗</button>' +
            '<button type="button" class="gz-mini-chip" id="gz-med-btn-clear" style="color:#ff4d6d">🗑 Xóa hết</button>' +
          '</div>' +
        '</div>' +
        /* Grid */
        (thumbsHtml ? '<div class="gz-adm-media-grid">'+thumbsHtml+'</div>' :
          '<div style="font-family:var(--gz-mono);font-size:12.5px;color:#6e6e62;padding:24px 16px;text-align:center;border:2px dashed #0e100f;border-radius:14px;background:#fff">Chưa có ảnh/video nào trong thư viện · Kéo thả hoặc dán link ở trên</div>') +
      '</div>';
    }

    /* ── TAB: Crawl ── */
    function renderTabCrawl(){
      return '<div class="gz-adm-tab-pane'+(currentAdminTab==='crawl'?' is-active':'')+'" id="gz-tab-crawl">' +
        '<div id="gz-crawl-status-bar" class="gz-adm-status-bar"></div>' +
        /* Unified Crawl Bar */
        '<div class="gz-crawl-bar">' +
          '<span class="gz-adm-label" style="margin:0;width:auto!important;white-space:nowrap">🌐 URL Crawl:</span>' +
          '<input type="text" class="gz-recover-input" id="gz-crawl-url" placeholder="Dán link Telegram (t.me/...), Twitter/X, hoặc bài viết bất kỳ..." style="flex:1;min-width:220px;height:40px"/>' +
          '<select class="gz-adm-select" id="gz-crawl-src" style="height:40px;min-width:140px">' +
            '<option value="jina" selected>Jina Reader (Tự động)</option>' +
            '<option value="telegram">Telegram Public</option>' +
            '<option value="x">Twitter / X</option>' +
            '<option value="web">Web HTML</option>' +
          '</select>' +
          '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-crawl-btn" style="height:40px;padding:0 20px">🕷 Crawl Ngay</button>' +
          '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-crawl-btn-ai" style="height:40px;padding:0 18px">✨ Crawl + AI Format</button>' +
        '</div>' +
        /* Result area */
        '<div style="margin-bottom:8px">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">' +
            '<span class="gz-adm-label" style="margin:0;width:auto!important">Nội dung đã cào dữ liệu (Markdown / Text):</span>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-crawl-btn-topub" style="height:32px;padding:0 14px;font-size:12px">🚀 Gửi sang Đăng Bài ↗</button>' +
          '</div>' +
          '<textarea class="gz-adm-textarea" id="gz-crawl-result" rows="12" style="min-height:260px!important" placeholder="Kết quả crawl hiển thị ở đây...">'+(_crawlResult||'')+'</textarea>' +
        '</div>' +
        '<div style="font-family:var(--gz-mono);font-size:11px;color:#6e6e62;text-align:center">Powered by Jina.ai Reader Engine · Không cần API key · Tự động bóc tách sạch sẽ nội dung cốt lõi</div>' +
      '</div>';
    }

    /* ── TAB: AI Studio ── */
    function renderTabAI(){
      var modelOpts = '';
      var workingModels = [
        {id:'gpt-6-luna', label:'🟢 GPT-6 Luna (Rất nhanh & chuẩn)'},
        {id:'qwen-4-max', label:'🟢 Qwen 4 Max (Mạnh nhất Qwen)'},
        {id:'atria-dawn', label:'🟢 Atria Dawn (Hoạt động tốt)'},
        {id:'deepseek-v4.1-flash-1017', label:'🟢 DeepSeek V4.1 Flash 1017 (Hoạt động)'},
        {id:'sensenova-6.8-flash', label:'🟢 SenseNova 6.8 Flash (Hoạt động)'},
        {id:'solar-pro-4-260806', label:'🟢 Solar Pro 4 (Hoạt động)'},
        {id:'qwen-3.8-27b', label:'🟢 Qwen 3.8 27B (Hoạt động)'},
        {id:'longcat-2.5', label:'🟢 LongCat 2.5 (Hoạt động)'},
        {id:'longcat-2.5:free', label:'🟢 LongCat 2.5 Free (Hoạt động)'},
        {id:'mercury-3', label:'🟢 Mercury 3 (Hoạt động)'},
        {id:'nemotron-3.5-super-vl', label:'🟢 Nemotron 3.5 Super VL (Hoạt động)'},
        {id:'nex/nex-n2.6', label:'🟢 Nex N2.6 (Hoạt động)'},
        {id:'exaone-v2.5', label:'🟢 Exaone V2.5 (Hoạt động)'}
      ];
      var pendingModels = [
        {id:'deepseek-4.1-flash', label:'🔴 DeepSeek 4.1 Flash (403 No Permission)'},
        {id:'DeepSeek-V4.1-Flash-1017', label:'🔴 DeepSeek V4.1 Flash 1017 Cap (403)'},
        {id:'ernie-5.5-flash-preview', label:'🔴 Ernie 5.5 Flash Preview (403)'},
        {id:'glm-5.3', label:'🔴 GLM 5.3 (403)'},
        {id:'glm-5.3-flash', label:'🔴 GLM 5.3 Flash (403)'},
        {id:'glm-5.3-vision', label:'🔴 GLM 5.3 Vision (403)'},
        {id:'hy4-flash', label:'🔴 HY4 Flash (403)'},
        {id:'Hy4-preview', label:'🔴 HY4 Preview (403)'},
        {id:'ling-3.2-flash', label:'🔴 Ling 3.2 Flash (403)'},
        {id:'MiMo-V2.6-Pro', label:'🔴 MiMo V2.6 Pro (403)'},
        {id:'muse-spark-open', label:'🔴 Muse Spark Open (403)'},
        {id:'qwen-3.8-flash', label:'🔴 Qwen 3.8 Flash (403)'},
        {id:'step-3.7-flash', label:'🔴 Step 3.7 Flash (403)'}
      ];
      var standardModels = [
        {id:'gpt-4o', label:'🌐 GPT-4o'},
        {id:'gpt-4o-mini', label:'🌐 GPT-4o Mini'},
        {id:'claude-3-5-sonnet-20241022', label:'🌐 Claude 3.5 Sonnet'},
        {id:'gemini-1.5-flash', label:'🌐 Gemini 1.5 Flash'},
        {id:'deepseek-chat', label:'🌐 DeepSeek Chat'}
      ];

      var savedModel = '';
      try{ savedModel = localStorage.getItem('gz_ai_model')||'gpt-6-luna'; }catch(e){ savedModel='gpt-6-luna'; }
      var savedKey = '';
      try{ savedKey = localStorage.getItem('gz_darkapi_key')||'sk-ZGdjzvykKrd1pjHe1fxbEQeRSJQLaUGkdTkMlzb9Gt0gkZFq'; }catch(e){ savedKey='sk-ZGdjzvykKrd1pjHe1fxbEQeRSJQLaUGkdTkMlzb9Gt0gkZFq'; }

      modelOpts += '<optgroup label="🟢 13 MODEL ĐÃ TEST HOẠT ĐỘNG THỰC TẾ">';
      for(var w=0; w<workingModels.length; w++){
        modelOpts += '<option value="'+workingModels[w].id+'"'+(workingModels[w].id===savedModel?' selected':'')+'>'+workingModels[w].label+'</option>';
      }
      modelOpts += '</optgroup>';

      modelOpts += '<optgroup label="🔴 13 MODEL DARKAPI BÁO 403 CHƯA MỞ QUYỀN">';
      for(var p=0; p<pendingModels.length; p++){
        modelOpts += '<option value="'+pendingModels[p].id+'"'+(pendingModels[p].id===savedModel?' selected':'')+'>'+pendingModels[p].label+'</option>';
      }
      modelOpts += '</optgroup>';

      modelOpts += '<optgroup label="🌐 MODEL TIÊU CHUẨN KHÁC">';
      for(var s=0; s<standardModels.length; s++){
        modelOpts += '<option value="'+standardModels[s].id+'"'+(standardModels[s].id===savedModel?' selected':'')+'>'+standardModels[s].label+'</option>';
      }
      modelOpts += '</optgroup>';
      var statusClass = _aiStatus ? (_aiStatus.indexOf('✓')>=0?'is-show':'is-show is-err') : '';
      return '<div class="gz-adm-tab-pane'+(currentAdminTab==='ai'?' is-active':'')+'" id="gz-tab-ai">' +
        '<div class="gz-adm-status-bar '+statusClass+'" id="gz-ai-status">'+(_aiStatus||'')+'</div>' +
        /* Command Bar: Key & Model in clean responsive cards */
        '<div style="background:rgba(14,16,15,.03);padding:14px 16px;border-radius:14px;border:2px solid #0e100f;margin-bottom:14px">' +
          /* Key row */
          '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;flex-wrap:wrap">' +
            '<span class="gz-adm-label" style="margin:0;width:auto!important;min-width:120px">🔑 DarkAPI Key:</span>' +
            '<input type="password" class="gz-recover-input" id="gz-ai-key-inp" value="'+savedKey+'" placeholder="sk-..." style="flex:1;min-width:200px"/>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-ai-toggle-key" style="height:38px;padding:0 14px">Hiện</button>' +
            '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-ai-save-key" style="height:38px;padding:0 14px">Lưu Key</button>' +
          '</div>' +
          /* Model row */
          '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">' +
            '<span class="gz-adm-label" style="margin:0;width:auto!important;min-width:120px">🤖 Chọn Model:</span>' +
            '<select class="gz-adm-select" id="gz-ai-model" style="flex:1;min-width:240px;height:38px">'+modelOpts+'</select>' +
            '<button type="button" class="gz-mini-chip" id="gz-ai-test-curr">🧪 Test Model Này</button>' +
            '<button type="button" class="gz-mini-chip" id="gz-ai-test-all">⚡ Test Tất Cả (26)</button>' +
            '<button type="button" class="gz-mini-chip" id="gz-ai-fetch-models">🔄 Tải models</button>' +
          '</div>' +
        '</div>' +
        /* Collapsible System prompt */
        '<details class="gz-adm-details">' +
          '<summary class="gz-adm-summary">📋 Tùy chỉnh System Prompt (Bấm để mở - Mặc định: Giữ nguyên 100% nội dung, chỉ định dạng blog)</summary>' +
          '<div style="margin-top:8px">' +
            '<textarea class="gz-adm-textarea" id="gz-ai-sys" rows="3" style="min-height:75px!important;margin:4px 0!important">Bạn là trợ lý biên tập nội dung chuyên nghiệp. Nhiệm vụ: GIỮ NGUYÊN 100% nội dung và ý tưởng của tác giả, chỉ định dạng lại thành HTML chuẩn blog, thêm thẻ <strong> cho điểm quan trọng, tổ chức đoạn văn rõ ràng. KHÔNG được xóa, tóm tắt hay diễn giải lại nội dung. KHÔNG thêm nội dung mới. Trả về HTML thuần.</textarea>' +
          '</div>' +
        '</details>' +
        /* 2-Column Split Workspace (Input Left, Output Right) */
        '<div class="gz-adm-split-grid">' +
          /* Left: Input */
          '<div class="gz-adm-split-col">' +
            '<div class="gz-adm-col-header">' +
              '<span class="gz-adm-label" style="margin:0;width:auto!important">📝 Nội dung đầu vào (Cần AI Format)</span>' +
            '</div>' +
            '<textarea class="gz-adm-textarea" id="gz-ai-input" rows="12" style="min-height:260px!important" placeholder="Dán nội dung bài viết cần AI định dạng vào đây...&#10;&#10;AI sẽ GIỮ NGUYÊN 100% nội dung và ý tưởng, chỉ định dạng HTML chuẩn blog để sẵn sàng đăng bài."></textarea>' +
            '<div style="display:flex;gap:8px;margin-top:4px">' +
              '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-ai-btn-run" style="flex:1">✨ Chạy AI Định Dạng</button>' +
              '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-ai-btn-clear">🗑 Xóa</button>' +
            '</div>' +
          '</div>' +
          /* Right: Output */
          '<div class="gz-adm-split-col">' +
            '<div class="gz-adm-col-header">' +
              '<span class="gz-adm-label" style="margin:0;width:auto!important">📤 Kết quả AI đã định dạng</span>' +
              '<button type="button" class="gz-mini-chip" id="gz-ai-btn-copy-out">📋 Copy kết quả</button>' +
            '</div>' +
            '<textarea class="gz-adm-textarea" id="gz-ai-output" rows="12" style="min-height:260px!important" placeholder="Kết quả định dạng HTML sẽ xuất hiện ở đây..."></textarea>' +
            '<div style="display:flex;gap:8px;margin-top:4px">' +
              '<button type="button" class="gz-gate-btn gz-gate-btn--primary" id="gz-ai-btn-send-pub" style="flex:1">🚀 Gửi sang tab Đăng Bài ↗</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div style="font-family:var(--gz-mono);font-size:11px;color:#6e6e62;margin-top:10px;text-align:center">API Gateway: darkapi.dev · Bảo toàn 100% nội dung tác giả · Tối ưu cho Blogger SmartLocker</div>' +
      '</div>';
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

      var headBtns = '<div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">' +
        '<span style="font-family:var(--gz-mono);font-size:11px;background:#42433d;color:#0ae448;padding:4px 9px;border-radius:6px">' +
          (vipPass ? ('VIP · Còn ' + vipPass.daysLeft + ' ngày') : 'VIP · Chưa bật') +
        '</span>' +
        (currentAdminTab === 'orders' ? '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-adm-toggle-settings" style="height:30px!important;padding:0 11px!important;font-size:11.5px!important">\u2699 Cấu hình</button>' : '') +
        '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-adm-lock-btn" style="height:30px!important;padding:0 11px!important;font-size:11.5px!important">\uD83D\uDD12 Khóa</button>' +
        (!isDedicatedAdminPage ? '<button type="button" class="gz-gate-btn gz-gate-btn--ghost" id="gz-adm-close" style="height:30px!important;padding:0 11px!important;font-size:11.5px!important">Đóng \u2715</button>' : '') +
      '</div>';

      var tabBodyHtml = '';
      if(currentAdminTab === 'orders'){
        tabBodyHtml =
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
          '</div>';
      }else if(currentAdminTab === 'publish'){
        tabBodyHtml = renderTabPublish();
      }else if(currentAdminTab === 'media'){
        tabBodyHtml = renderTabMedia();
      }else if(currentAdminTab === 'crawl'){
        tabBodyHtml = renderTabCrawl();
      }else if(currentAdminTab === 'ai'){
        tabBodyHtml = renderTabAI();
      }

      hostContainer.innerHTML =
        '<div class="gz-admin-panel">' +
          buildTabNav(headBtns) +
          tabBodyHtml +
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

      /* ── Tab Switcher Listeners ── */
      var tabBtns = hostContainer.querySelectorAll('.gz-adm-tab-btn');
      for(var tb=0;tb<tabBtns.length;tb++){
        tabBtns[tb].addEventListener('click', function(){
          currentAdminTab = this.getAttribute('data-admtab') || 'orders';
          renderAdminModal();
        });
      }

      /* ── Order Tab Listeners (Only when on orders tab) ── */
      var saveCfgBtn = document.getElementById('gz-adm-save-cfg');
      if(saveCfgBtn){
        saveCfgBtn.addEventListener('click', function(){
          var newBank = (document.getElementById('gz-adm-bank-inp').value || 'OCB').trim();
          var newAcc = (document.getElementById('gz-adm-accno-inp').value || '').trim();
          var newCk = (document.getElementById('gz-adm-checksum-inp').value || '').trim();
          var newVp = Number(document.getElementById('gz-adm-vipprice-inp').value) || 500000;
          try {
            localStorage.setItem('gz_locker_cfg', JSON.stringify({ bankId: newBank, accountNo: newAcc, checksumKey: newCk, vipMonthlyPrice: newVp }));
          } catch(e){}
          renderAdminModal('\u2713 Đã lưu cấu hình · Ngân hàng ' + newBank + ' · Giá VIP ' + formatVnd(newVp));
        });
      }

      var checkBtn = document.getElementById('gz-adm-btn-check');
      if(checkBtn){
        checkBtn.addEventListener('click', function(){
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
      }

      var testVipBtn = document.getElementById('gz-adm-btn-test-vip');
      if(testVipBtn){
        testVipBtn.addEventListener('click', function(){
          createPayOSOrder({ type: 'VIP30D', amount: getCfg().vipMonthlyPrice }).then(function(o){
            renderAdminModal('\u2713 Đã tạo đơn Gói VIP 30 ngày #' + o.orderCode + ' · ' + formatVnd(o.amount));
          });
        });
      }

      var testPostBtn = document.getElementById('gz-adm-btn-test-post');
      if(testPostBtn){
        testPostBtn.addEventListener('click', function(){
          createPayOSOrder({ type: 'POST', postId: getCurrentPostId(), amount: 50000 }).then(function(o){
            renderAdminModal('\u2713 Đã tạo đơn Bài lẻ #' + o.orderCode + ' · ' + formatVnd(o.amount));
          });
        });
      }

      /* ── Publish Tab Listeners ── */
      var lockRadios = hostContainer.querySelectorAll('input[name="gz-pub-lock"]');
      for(var lr=0;lr<lockRadios.length;lr++){
        lockRadios[lr].addEventListener('change', function(){
          var prInp = document.getElementById('gz-pub-price');
          if(prInp) prInp.style.display = (this.value === 'price' ? 'inline-block' : 'none');
          var allLabels = hostContainer.querySelectorAll('.gz-seg-btn');
          for(var l=0; l<allLabels.length; l++){
            var r = allLabels[l].querySelector('input');
            if(r && r.checked) allLabels[l].classList.add('is-active');
            else allLabels[l].classList.remove('is-active');
          }
        });
      }
      function refreshPubLabelSuggest(){
        var chipHost = document.getElementById('gz-pub-suggest-chips');
        var titleEl = document.getElementById('gz-pub-title');
        if(!chipHost) return;
        var suggested = suggestLabelsFromTitle(titleEl ? titleEl.value : '');
        if(!suggested.length){
          chipHost.innerHTML = '<span style="font-size:12px;color:#6e6e62">Gõ tiêu đề để phân tích nhãn…</span>';
          return;
        }
        var html = '';
        for(var si=0;si<suggested.length;si++){
          var isPrimary = si === 0;
          html += '<label style="display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:999px;border:1px solid '+(isPrimary?'#0ae448':'#e0ded0')+';background:#fff;font-size:12px;font-weight:600;cursor:pointer">' +
            '<input type="checkbox" class="gz-pub-suggest-cb" value="'+suggested[si].replace(/"/g,'&quot;')+'" checked style="margin:0"/>' +
            '<span>'+suggested[si]+(isPrimary?' · primary':'')+'</span></label>';
        }
        chipHost.innerHTML = html;
      }
      var pubTitleEl = document.getElementById('gz-pub-title');
      if(pubTitleEl){
        pubTitleEl.addEventListener('input', refreshPubLabelSuggest);
        pubTitleEl.addEventListener('change', refreshPubLabelSuggest);
      }
      var pubApplySuggest = document.getElementById('gz-pub-btn-apply-suggest');
      if(pubApplySuggest){
        pubApplySuggest.addEventListener('click', function(){
          var cbs = hostContainer.querySelectorAll('.gz-pub-suggest-cb:checked');
          var labs = [];
          for(var ci=0;ci<cbs.length;ci++){
            var v = (cbs[ci].value || '').trim();
            if(v && labs.indexOf(v) === -1) labs.push(v);
          }
          labs = ensureHubLabels(labs);
          if(labs.map(function(x){ return x.toLowerCase(); }).indexOf('lock') === -1) labs.push('lock');
          var labInp = document.getElementById('gz-pub-labels');
          if(labInp) labInp.value = labs.join(', ');
        });
      }
      refreshPubLabelSuggest();
      var pubPrevBtn = document.getElementById('gz-pub-btn-preview');
      if(pubPrevBtn){
        pubPrevBtn.addEventListener('click', function(){
          var wrap = document.getElementById('gz-pub-preview-wrap');
          var box = document.getElementById('gz-pub-preview-box');
          var title = (document.getElementById('gz-pub-title').value || '').trim();
          var content = (document.getElementById('gz-pub-content').value || '').trim();
          var thumb = (document.getElementById('gz-pub-thumb').value || '').trim();
          var lockMode = 'none';
          var checkedRadio = hostContainer.querySelector('input[name="gz-pub-lock"]:checked');
          if(checkedRadio) lockMode = checkedRadio.value;

          if(!wrap || !box) return;
          var isHidden = wrap.style.display === 'none';
          wrap.style.display = isHidden ? 'block' : 'none';
          if(isHidden){
            var formattedPreview = formatCanonicalPostHtml(title || '(Tiêu đề bài viết)', content || 'Nội dung bài viết mẫu...', thumb, lockMode);
            box.innerHTML = '<h3>' + (title || '(Chưa có tiêu đề)') + '</h3>' + formattedPreview;
          }
        });
      }
      var pubAiBtn = document.getElementById('gz-pub-btn-ai-format');
      if(pubAiBtn){
        pubAiBtn.addEventListener('click', function(){
          var content = (document.getElementById('gz-pub-content').value || '').trim();
          currentAdminTab = 'ai';
          renderAdminModal();
          setTimeout(function(){
            var aiInp = document.getElementById('gz-ai-input');
            if(aiInp && content) aiInp.value = content;
          }, 50);
        });
      }
      var pubSubmitBtn = document.getElementById('gz-pub-btn-publish');
      if(pubSubmitBtn){
        pubSubmitBtn.addEventListener('click', function(){
          var title = (document.getElementById('gz-pub-title').value || '').trim();
          var labels = (document.getElementById('gz-pub-labels').value || '').trim();
          var content = (document.getElementById('gz-pub-content').value || '').trim();
          var thumb = (document.getElementById('gz-pub-thumb').value || '').trim();
          var state = (document.getElementById('gz-pub-state').value || 'LIVE');
          var lockMode = 'none';
          var checkedRadio = hostContainer.querySelector('input[name="gz-pub-lock"]:checked');
          if(checkedRadio) lockMode = checkedRadio.value;
          var priceVal = (document.getElementById('gz-pub-price').value || '').trim();

          if(!title || !content){
            _publishStatus = '⚠ Vui lòng nhập tiêu đề và nội dung bài viết';
            renderAdminModal();
            return;
          }

          // Build labels based on lock mode — server still re-normalizes (extract + lock)
          var finalLabels = labels ? labels.split(',').map(function(s){ return s.trim(); }).filter(Boolean) : [];
          finalLabels = ensureHubLabels(finalLabels);
          if(finalLabels.map(function(x){ return x.toLowerCase(); }).indexOf('lock') === -1) finalLabels.push('lock');
          if(lockMode === 'vip' && finalLabels.map(function(x){ return x.toLowerCase(); }).indexOf('vip') === -1) finalLabels.push('vip');
          else if(lockMode === 'price' && priceVal){
            var priceLab = 'price-' + priceVal;
            if(finalLabels.map(function(x){ return x.toLowerCase(); }).indexOf(priceLab.toLowerCase()) === -1) finalLabels.push(priceLab);
          }

          // Build canonical post HTML matching Đại Ca Tú's sample post structure
          var finalHtml = formatCanonicalPostHtml(title, content, thumb, lockMode);

          _publishStatus = '⏳ Đang đăng bài "' + title + '" lên Blogger theo chuẩn mẫu...';
          renderAdminModal();

          /* Try local MMO Studio Server bridge first (port 5555), then Blogger REST API */
          var studioApiUrl = 'http://127.0.0.1:5555/api/publish';
          var publishPayload = {
            title: title,
            content: finalHtml,
            labels: finalLabels,
            isDraft: state === 'DRAFT'
          };

          fetch(studioApiUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(publishPayload)
          }).then(function(r){ return r.json(); }).then(function(data){
            if(data.success || data.id || data.url){
              _publishStatus = '✓ Đã đăng bài thành công qua Bridge! ' + (data.url ? ('<a href="' + data.url + '" target="_blank" style="color:#0ae448">Xem bài ↗</a>') : '');
            }else{
              _publishStatus = '⚠ Bridge lỗi: ' + (data.error || 'Không rõ') + ' — Hãy chạy: python mmo_studio_server.py';
            }
            renderAdminModal();
          }).catch(function(){
            /* Bridge not running – show HTML to copy */
            var escaped = finalHtml.replace(/</g,'&lt;').replace(/>/g,'&gt;');
            _publishStatus = '📋 Bridge chưa chạy. Copy HTML bên dưới rồi dán thủ công vào Blogger:<br><textarea style="width:100%;height:120px;font-family:monospace;font-size:11px;margin-top:6px" readonly>' + finalHtml + '</textarea><br><small style="color:#888">Mở terminal: <code>python mmo_studio_server.py</code> để đăng tự động</small>';
            renderAdminModal();
          });
        });
      }

      /* ── Media Tab Listeners ── */
      var pickBtn = document.getElementById('gz-med-btn-pick');
      var fileInp = document.getElementById('gz-med-file');
      if(pickBtn && fileInp){
        pickBtn.addEventListener('click', function(){ fileInp.click(); });
        fileInp.addEventListener('change', function(e){
          var files = e.target.files;
          if(!files || !files.length) return;
          var doSharpen = document.getElementById('gz-med-sharpen') && document.getElementById('gz-med-sharpen').checked;

          _mediaStatus = '⏳ Đang tải ' + files.length + ' file lên Telegraph' + (doSharpen ? ' (kèm làm nét ảnh không crop)...' : '...');
          renderAdminModal();

          var uploadFile = function(fileToUpload){
            var fd = new FormData();
            fd.append('file', fileToUpload);
            return fetch('https://telegra.ph/upload', { method: 'POST', body: fd })
              .then(function(r){ return r.json(); })
              .then(function(res){
                if(Array.isArray(res) && res[0] && res[0].src){
                  var fullUrl = 'https://telegra.ph' + res[0].src;
                  _mediaItems.push({ url: fullUrl, name: fileToUpload.name, type: fileToUpload.type.indexOf('video') >= 0 ? 'video' : 'image' });
                }
              });
          };

          var promises = [];
          for(var fi=0; fi<files.length; fi++){
            (function(f){
              if(doSharpen && f.type.indexOf('image') >= 0){
                var p = new Promise(function(resolve, reject){
                  sharpenImageViaCanvas(f, function(sharpFile){
                    uploadFile(sharpFile).then(resolve).catch(reject);
                  });
                });
                promises.push(p);
              } else {
                promises.push(uploadFile(f));
              }
            })(files[fi]);
          }

          Promise.all(promises).then(function(){
            _mediaStatus = '✓ Đã upload thành công ' + files.length + ' file (chuẩn direct link Telegraph/Cloudflare)!';
            renderAdminModal();
          }).catch(function(err){
            _mediaStatus = '⚠ Lỗi upload: ' + (err.message || 'Không thể upload');
            renderAdminModal();
          });
        });
      }

      var addUrlBtn = document.getElementById('gz-med-btn-add-url');
      if(addUrlBtn){
        addUrlBtn.addEventListener('click', function(){
          var uInp = document.getElementById('gz-med-url-inp');
          var url = (uInp ? uInp.value : '').trim();
          if(!url) return;
          var isVid = /\.(mp4|webm|mov|mkv)(\?.*)?$/i.test(url);
          _mediaItems.push({ url: url, name: url.split('/').pop(), type: isVid ? 'video' : 'image' });
          _mediaStatus = '✓ Đã thêm URL vào thư viện media';
          if(uInp) uInp.value = '';
          renderAdminModal();
        });
      }

      var clearMedBtn = document.getElementById('gz-med-btn-clear');
      if(clearMedBtn){
        clearMedBtn.addEventListener('click', function(){
          _mediaItems = [];
          _mediaStatus = '✓ Đã dọn sạch danh sách media';
          renderAdminModal();
        });
      }

      var copyAllMedBtn = document.getElementById('gz-med-btn-copy-all');
      if(copyAllMedBtn){
        copyAllMedBtn.addEventListener('click', function(){
          if(!_mediaItems.length) return;
          var allUrls = _mediaItems.map(function(m){ return m.url; }).join('\n');
          navigator.clipboard.writeText(allUrls).then(function(){
            _mediaStatus = '✓ Đã sao chép tất cả ' + _mediaItems.length + ' URL vào clipboard';
            renderAdminModal();
          });
        });
      }

      var sendMedToPubBtn = document.getElementById('gz-med-btn-send-pub');
      if(sendMedToPubBtn){
        sendMedToPubBtn.addEventListener('click', function(){
          if(!_mediaItems.length) return;
          var htmlImg = '';
          if(_mediaItems.length === 1){
            var m = _mediaItems[0];
            if(m.type === 'video'){
              htmlImg = '<video src="' + m.url + '" controls style="max-width:100%;border-radius:12px;border:2px solid #0e100f"></video><br/>';
            }else{
              htmlImg = '<p><img src="' + m.url + '" alt="' + (m.name||'image') + '" style="max-width:100%;height:auto;border-radius:12px;border:2px solid #0e100f;display:block;margin:16px auto;" loading="lazy"/></p>';
            }
          }else{
            // Smart Auto Gallery Grid
            var itemsHtml = _mediaItems.map(function(m, idx){
              if(m.type === 'video'){
                return '<div class="gz-gallery-item"><video src="' + m.url + '" controls style="width:100%;height:100%;object-fit:cover"></video></div>';
              }
              var caption = m.name ? m.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ') : ('Minh họa ' + (idx + 1));
              return '<figure class="gz-gallery-item">' +
                '<img src="' + m.url + '" alt="' + caption + '" loading="lazy" />' +
                '<figcaption>' + caption + '</figcaption>' +
              '</figure>';
            }).join('\n  ');
            htmlImg = '<div class="gz-post-gallery" data-count="' + _mediaItems.length + '">\n  ' + itemsHtml + '\n</div>';
          }
          currentAdminTab = 'publish';
          renderAdminModal();
          setTimeout(function(){
            var cnt = document.getElementById('gz-pub-content');
            if(cnt){
              cnt.value = (cnt.value ? cnt.value + '\n\n' : '') + htmlImg;
            }
          }, 50);
        });
      }

      /* Copy individual media URL */
      var copyUrlBadges = hostContainer.querySelectorAll('[data-copy]');
      for(var cu=0; cu<copyUrlBadges.length; cu++){
        copyUrlBadges[cu].addEventListener('click', function(){
          var u = this.getAttribute('data-copy');
          if(u) navigator.clipboard.writeText(u);
          this.textContent = '✓ Đã copy!';
          var that = this;
          setTimeout(function(){ that.textContent = '📋 ' + u.slice(-28); }, 1500);
        });
      }

      /* ── Crawl Tab Listeners ── */
      var crawlBtn = document.getElementById('gz-crawl-btn');
      var crawlAiBtn = document.getElementById('gz-crawl-btn-ai');
      var crawlToPubBtn = document.getElementById('gz-crawl-btn-topub');

      function runCrawl(andAi){
        var urlInp = document.getElementById('gz-crawl-url');
        var rawUrl = (urlInp ? urlInp.value : '').trim();
        var statusBar = document.getElementById('gz-crawl-status-bar');
        var resArea = document.getElementById('gz-crawl-result');

        if(!rawUrl){
          if(statusBar){
            statusBar.className = 'gz-adm-status-bar is-show is-err';
            statusBar.textContent = '⚠ Vui lòng nhập URL cần crawl';
          }
          return;
        }

        if(statusBar){
          statusBar.className = 'gz-adm-status-bar is-show';
          statusBar.textContent = '⏳ Đang crawl dữ liệu từ ' + rawUrl + ' qua Jina Reader...';
        }

        var targetUrl = rawUrl;
        if (/^https?:\/\/t\.me\/(?!s\/)([a-zA-Z0-9_]+)\/?$/i.test(targetUrl)) {
          targetUrl = targetUrl.replace(/^https?:\/\/t\.me\//i, 'https://t.me/s/');
        } else if (/^t\.me\/(?!s\/)([a-zA-Z0-9_]+)\/?$/i.test(targetUrl)) {
          targetUrl = 'https://t.me/s/' + targetUrl.replace(/^t\.me\//i, '');
        } else if (/^@([a-zA-Z0-9_]+)$/.test(targetUrl)) {
          targetUrl = 'https://t.me/s/' + targetUrl.replace(/^@/, '');
        }

        var jinaUrl = 'https://r.jina.ai/' + targetUrl;
        fetch(jinaUrl)
          .then(function(r){ return r.text(); })
          .then(function(text){
            _crawlResult = text;
            if(resArea) resArea.value = text;
            if(statusBar){
              statusBar.className = 'gz-adm-status-bar is-show';
              statusBar.textContent = '✓ Crawl hoàn tất! Đã nhận ' + text.length + ' ký tự.';
            }
            if(andAi){
              currentAdminTab = 'ai';
              renderAdminModal();
              setTimeout(function(){
                var aiInp = document.getElementById('gz-ai-input');
                if(aiInp) aiInp.value = text;
              }, 50);
            }
          })
          .catch(function(err){
            if(statusBar){
              statusBar.className = 'gz-adm-status-bar is-show is-err';
              statusBar.textContent = '⚠ Lỗi crawl: ' + (err.message || 'Không thể tải qua mạng');
            }
          });
      }

      if(crawlBtn) crawlBtn.addEventListener('click', function(){ runCrawl(false); });
      if(crawlAiBtn) crawlAiBtn.addEventListener('click', function(){ runCrawl(true); });
      if(crawlToPubBtn){
        crawlToPubBtn.addEventListener('click', function(){
          var text = _crawlResult || (document.getElementById('gz-crawl-result') ? document.getElementById('gz-crawl-result').value : '');
          if(!text) return;
          currentAdminTab = 'publish';
          renderAdminModal();
          setTimeout(function(){
            var cnt = document.getElementById('gz-pub-content');
            if(cnt) cnt.value = text;
          }, 50);
        });
      }

      /* ── AI Studio Tab Listeners ── */
      function getActiveDarkApiKey(){
        var inp = document.getElementById('gz-ai-key-inp');
        var val = inp ? inp.value.trim() : '';
        if(val) return val;
        try{ return localStorage.getItem('gz_darkapi_key') || 'sk-ZGdjzvykKrd1pjHe1fxbEQeRSJQLaUGkdTkMlzb9Gt0gkZFq'; }catch(e){ return 'sk-ZGdjzvykKrd1pjHe1fxbEQeRSJQLaUGkdTkMlzb9Gt0gkZFq'; }
      }

      var toggleKeyBtn = document.getElementById('gz-ai-toggle-key');
      if(toggleKeyBtn){
        toggleKeyBtn.addEventListener('click', function(){
          var inp = document.getElementById('gz-ai-key-inp');
          if(!inp) return;
          var isPwd = inp.type === 'password';
          inp.type = isPwd ? 'text' : 'password';
          toggleKeyBtn.textContent = isPwd ? 'Ẩn' : 'Hiện';
        });
      }

      var saveKeyBtn = document.getElementById('gz-ai-save-key');
      if(saveKeyBtn){
        saveKeyBtn.addEventListener('click', function(){
          var key = getActiveDarkApiKey();
          try{ localStorage.setItem('gz_darkapi_key', key); }catch(e){}
          _aiStatus = '✓ Đã lưu DarkAPI Key mới an toàn!';
          renderAdminModal();
        });
      }

      /* Test 1 Model cụ thể */
      var testCurrBtn = document.getElementById('gz-ai-test-curr');
      if(testCurrBtn){
        testCurrBtn.addEventListener('click', function(){
          var selModel = document.getElementById('gz-ai-model').value || 'gpt-4o-mini';
          var key = getActiveDarkApiKey();
          _aiStatus = '⏳ Đang kiểm tra model [' + selModel + '] trên darkapi.dev...';
          renderAdminModal();

          fetch('https://darkapi.dev/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
            body: JSON.stringify({ model: selModel, messages: [{ role: 'user', content: 'ping' }], max_tokens: 5 })
          }).then(function(r){ return r.json(); }).then(function(data){
            if(data && data.choices && data.choices[0]){
              _aiStatus = '🟢 Model [' + selModel + '] HOẠT ĐỘNG TỐT! Phản hồi: ' + data.choices[0].message.content;
            } else {
              var errMsg = (data && data.error && data.error.message) || JSON.stringify(data);
              _aiStatus = '🔴 Model [' + selModel + '] LỖI: ' + errMsg;
            }
            renderAdminModal();
          }).catch(function(err){
            _aiStatus = '⚠ Lỗi kết nối (CORS/Network): ' + err.message;
            renderAdminModal();
          });
        });
      }

      /* Test Tất Cả Model */
      var testAllBtn = document.getElementById('gz-ai-test-all');
      if(testAllBtn){
        testAllBtn.addEventListener('click', function(){
          var key = getActiveDarkApiKey();
          var testList = [
            'atria-dawn', 'deepseek-4.1-flash', 'deepseek-v4.1-flash-1017', 'DeepSeek-V4.1-Flash-1017',
            'ernie-5.5-flash-preview', 'exaone-v2.5', 'glm-5.3', 'glm-5.3-flash', 'glm-5.3-vision',
            'gpt-6-luna', 'hy4-flash', 'Hy4-preview', 'ling-3.2-flash', 'longcat-2.5', 'longcat-2.5:free',
            'mercury-3', 'MiMo-V2.6-Pro', 'muse-spark-open', 'nemotron-3.5-super-vl', 'nex/nex-n2.6',
            'qwen-3.8-27b', 'qwen-3.8-flash', 'qwen-4-max', 'sensenova-6.8-flash', 'solar-pro-4-260806',
            'step-3.7-flash'
          ];
          _aiStatus = '⏳ Đang quét kiểm tra thực tế ' + testList.length + ' models...';
          renderAdminModal();

          var results = [];
          var runSeq = function(idx){
            if(idx >= testList.length){
              _aiStatus = '📊 Kết quả test: ' + results.join(' | ');
              renderAdminModal();
              return;
            }
            var m = testList[idx];
            fetch('https://darkapi.dev/v1/chat/completions', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
              body: JSON.stringify({ model: m, messages: [{ role: 'user', content: 'ping' }], max_tokens: 5 })
            }).then(function(r){ return r.json(); }).then(function(d){
              if(d && d.choices && d.choices[0]){
                results.push('🟢 ' + m + ': OK');
              } else {
                var em = (d && d.error && d.error.message) || 'Error';
                results.push('🔴 ' + m + ': ' + (em.length > 20 ? em.slice(0, 20) + '...' : em));
              }
              runSeq(idx + 1);
            }).catch(function(){
              results.push('🔴 ' + m + ': CORS/Network');
              runSeq(idx + 1);
            });
          };
          runSeq(0);
        });
      }

      var fetchModelsBtn = document.getElementById('gz-ai-fetch-models');
      if(fetchModelsBtn){
        fetchModelsBtn.addEventListener('click', function(){
          var key = getActiveDarkApiKey();
          _aiStatus = '⏳ Đang tải danh sách model từ darkapi.dev...';
          renderAdminModal();
          fetch('https://darkapi.dev/v1/models', {
            headers: {'Authorization': 'Bearer ' + key}
          }).then(function(r){ return r.json(); }).then(function(data){
            if(data && Array.isArray(data.data)){
              _aiModels = data.data.map(function(m){ return { id: m.id, label: m.id }; });
              _aiStatus = '✓ Đã tải ' + _aiModels.length + ' models từ darkapi.dev!';
            }else{
              _aiStatus = '⚠ darkapi.dev: ' + ((data && data.error && data.error.message) || 'Không thể lấy models');
            }
            renderAdminModal();
          }).catch(function(err){
            _aiStatus = '⚠ Lỗi kết nối darkapi.dev: ' + (err.message || 'CORS hoặc mạng');
            renderAdminModal();
          });
        });
      }

      var runAiBtn = document.getElementById('gz-ai-btn-run');
      if(runAiBtn){
        runAiBtn.addEventListener('click', function(){
          var selModel = document.getElementById('gz-ai-model').value || 'gpt-4o-mini';
          var sysPrompt = (document.getElementById('gz-ai-sys').value || '').trim();
          var userText = (document.getElementById('gz-ai-input').value || '').trim();
          var outArea = document.getElementById('gz-ai-output');
          var key = getActiveDarkApiKey();

          if(!userText){
            _aiStatus = '⚠ Vui lòng nhập nội dung đầu vào';
            renderAdminModal();
            return;
          }

          try{ localStorage.setItem('gz_ai_model', selModel); }catch(e){}

          _aiStatus = '⏳ Đang gửi yêu cầu tới model [' + selModel + '] qua darkapi.dev...';
          renderAdminModal();

          fetch('https://darkapi.dev/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + key
            },
            body: JSON.stringify({
              model: selModel,
              messages: [
                { role: 'system', content: sysPrompt },
                { role: 'user', content: userText }
              ],
              temperature: 0.3
            })
          }).then(function(r){ return r.json(); }).then(function(data){
            if(data && data.choices && data.choices[0] && data.choices[0].message){
              var reply = data.choices[0].message.content;
              if(outArea) outArea.value = reply;
              _aiStatus = '✓ Model ' + selModel + ' đã xử lý xong!';
            }else{
              var errMsg = (data && data.error && data.error.message) || JSON.stringify(data);
              _aiStatus = '⚠ darkapi.dev lỗi: ' + errMsg;
            }
            renderAdminModal();
          }).catch(function(err){
            _aiStatus = '⚠ Lỗi fetch: ' + (err.message || 'CORS block - Hãy dùng Cloudflare Worker proxy');
            renderAdminModal();
          });
        });
      }

      var clearAiBtn = document.getElementById('gz-ai-btn-clear');
      if(clearAiBtn){
        clearAiBtn.addEventListener('click', function(){
          var inEl = document.getElementById('gz-ai-input');
          var outEl = document.getElementById('gz-ai-output');
          if(inEl) inEl.value = '';
          if(outEl) outEl.value = '';
          _aiStatus = '';
          renderAdminModal();
        });
      }

      var sendAiToPubBtn = document.getElementById('gz-ai-btn-send-pub');
      if(sendAiToPubBtn){
        sendAiToPubBtn.addEventListener('click', function(){
          var outEl = document.getElementById('gz-ai-output');
          var reply = outEl ? outEl.value : '';
          if(!reply) return;
          currentAdminTab = 'publish';
          renderAdminModal();
          setTimeout(function(){
            var cnt = document.getElementById('gz-pub-content');
            if(cnt) cnt.value = reply;
          }, 50);
        });
      }

      var copyAiBtn = document.getElementById('gz-ai-btn-copy-out');
      if(copyAiBtn){
        copyAiBtn.addEventListener('click', function(){
          var outEl = document.getElementById('gz-ai-output');
          var text = outEl ? outEl.value : '';
          if(!text) return;
          if(navigator.clipboard && navigator.clipboard.writeText){
            navigator.clipboard.writeText(text);
          } else {
            outEl.select();
            try{ document.execCommand('copy'); }catch(e){}
          }
          copyAiBtn.textContent = '✓ Đã copy!';
          setTimeout(function(){ copyAiBtn.textContent = '📋 Copy kết quả'; }, 2000);
        });
      }

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

    /* Retro Brutalist Gallery Lightbox */
  function initGalleryLightbox(){
    document.addEventListener('click', function(e){
      var img = e.target.closest('.gz-gallery-item img, .post-body img:not(.hidden-image):not([data-no-zoom])');
      if(!img || img.closest('#gz-admin-inline-host') || img.closest('.gz-adm-media-thumb')) return;
      var src = img.getAttribute('src');
      if(!src) return;
      
      var oldLb = document.getElementById('gz-lightbox-overlay');
      if(oldLb && oldLb.parentNode) oldLb.parentNode.removeChild(oldLb);

      var lb = document.createElement('div');
      lb.id = 'gz-lightbox-overlay';
      lb.className = 'gz-lightbox-overlay';
      lb.innerHTML = '<div class="gz-lightbox-wrap">' +
        '<img src="' + src + '" alt="' + (img.alt || '') + '"/>' +
        (img.alt ? '<div class="gz-lightbox-caption">' + img.alt + '</div>' : '') +
        '<button type="button" class="gz-lightbox-close" aria-label="Close">✕</button>' +
      '</div>';
      
      document.body.appendChild(lb);
      requestAnimationFrame(function(){ lb.classList.add('is-open'); });
      
      function closeLb(){
        lb.classList.remove('is-open');
        setTimeout(function(){ if(lb.parentNode) lb.parentNode.removeChild(lb); }, 220);
      }
      lb.addEventListener('click', function(ev){
        if(ev.target === lb || ev.target.closest('.gz-lightbox-close')) closeLb();
      });
      document.addEventListener('keydown', function onEsc(ke){
        if(ke.key === 'Escape'){ closeLb(); document.removeEventListener('keydown', onEsc); }
      });
    });
  }

  function initAaveSmartMenu(){
    var nav = document.getElementById('gz-aave-nav');
    if(!nav || nav.getAttribute('data-gz-ready') === '1') return;
    nav.setAttribute('data-gz-ready', '1');

    var items = Array.prototype.slice.call(nav.querySelectorAll('.gz-aave-item.has-panel'));
    var allItems = Array.prototype.slice.call(nav.querySelectorAll('.gz-aave-item'));
    var openTimer = null, closeTimer = null;

    var HIDDEN = {'lock':1,'vip':1,'chua phan loai':1,'ch\u01b0a ph\u00e2n lo\u1ea1i':1,'uncategorized':1};
    function normKey(s){
      return (s || '').toLowerCase().trim().replace(/\s+/g, ' ');
    }
    function isHiddenLabel(s){
      var k = normKey(s);
      return !k || !!HIDDEN[k] || k.indexOf('price-') === 0;
    }
    function smartAlias(raw){
      var k = normKey(raw);
      if(/^tut(o|r|ro|or)?ial(s)?$/i.test(k) || k === 'tut') return { shortName: 'TUT', group: 'tut', key: 'tutorial' };
      if(/^th[u\u1ee7]\s*thu[a\u1ead]t$/i.test(k)) return { shortName: 'Th\u1ee7 Thu\u1eadt', group: 'tips', key: 'th\u1ee7 thu\u1eadt' };
      if(/^(bug[-\/\s]?trick|tips?)$/i.test(k)) return { shortName: 'Bug & Trick', group: 'tips', key: k };
      if(/^gemini\s*ultra$/i.test(k)) return { shortName: 'Gemini Ultra', group: 'tut', key: k };
      if(/^gemini(\s*ai)?$/i.test(k)) return { shortName: 'Gemini', group: 'tut', key: k };
      return { shortName: raw.trim(), group: '', key: k };
    }
    function classifyGroup(raw){
      var a = smartAlias(raw);
      if(a.group) return a.group;
      var s = normKey(raw);
      if(/^(gemini|google|chatgpt|gpt|openai|claude|grok|heygen|duolingo|youtube|tut|veo|midjourney|cursor|copilot|ai\b|h\u01b0\u1edbng d\u1eabn)/.test(s)) return 'tut';
      if(/^(tool|exa|notion|capcut|script|api|bot|proxy|ext|soft|app)/.test(s)) return 'tools';
      return 'tips';
    }

    function closeAll(){
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
      items.forEach(function(it){
        it.classList.remove('is-open');
        var tr = it.querySelector('.gz-aave-trigger');
        if(tr) tr.setAttribute('aria-expanded', 'false');
      });
    }
    function openItem(it){
      clearTimeout(closeTimer);
      items.forEach(function(other){
        if(other !== it){
          other.classList.remove('is-open');
          var otr = other.querySelector('.gz-aave-trigger');
          if(otr) otr.setAttribute('aria-expanded', 'false');
        }
      });
      it.classList.add('is-open');
      var tr = it.querySelector('.gz-aave-trigger');
      if(tr) tr.setAttribute('aria-expanded', 'true');
    }

    var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
    var lastTouch = false;
    nav.addEventListener('pointerdown', function(e){
      lastTouch = (e.pointerType === 'touch' || e.pointerType === 'pen');
    }, true);
    items.forEach(function(it){
      var tr = it.querySelector('.gz-aave-trigger');
      it.addEventListener('mouseenter', function(){
        if(!canHover || lastTouch) return;
        clearTimeout(closeTimer);
        openTimer = setTimeout(function(){ openItem(it); }, 85);
      });
      it.addEventListener('mouseleave', function(){
        if(!canHover || lastTouch) return;
        clearTimeout(openTimer);
        closeTimer = setTimeout(closeAll, 145);
      });
      if(tr){
        tr.addEventListener('click', function(e){
          var useDrawer = lastTouch || !canHover || (window.innerWidth <= 768);
          if(useDrawer){
            e.preventDefault();
            if(it.classList.contains('is-open')) closeAll();
            else openItem(it);
          }
        });
      }
    });

    document.addEventListener('click', function(e){
      if(!nav.contains(e.target)) closeAll();
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeAll();
    });

    function applyActiveState(){
      var path = location.pathname || '/';
      var labelMatch = path.match(/\/search\/label\/([^?#\/]+)/);
      var currentLabel = '';
      if(labelMatch){
        try{ currentLabel = decodeURIComponent(labelMatch[1]).replace(/\+/g, ' '); }
        catch(err){ currentLabel = labelMatch[1]; }
      }
      var cards = Array.prototype.slice.call(nav.querySelectorAll('.gz-aave-card'));
      allItems.forEach(function(it){
        var tr = it.querySelector('.gz-aave-trigger');
        if(tr) tr.classList.remove('is-active');
        var ctx = it.querySelector('.gz-aave-badge-ctx');
        if(ctx){ ctx.style.display = 'none'; ctx.textContent = ''; }
      });
      cards.forEach(function(c){ c.classList.remove('is-active'); });

      if((path === '/' || path === '' || path === '/index.html') && !labelMatch){
        var homeTr = nav.querySelector('.gz-aave-item[data-group="home"] .gz-aave-trigger');
        if(homeTr) homeTr.classList.add('is-active');
        return;
      }

      if(path.indexOf('/p/') !== -1){
        var aboutItem = nav.querySelector('.gz-aave-item[data-group="about"]');
        if(aboutItem){
          var atr = aboutItem.querySelector('.gz-aave-trigger');
          if(atr) atr.classList.add('is-active');
          cards.forEach(function(c){
            if(c.getAttribute('href') && c.getAttribute('href').indexOf(path) !== -1) c.classList.add('is-active');
          });
        }
        return;
      }

      var targetLabels = [];
      if(currentLabel){
        targetLabels.push(currentLabel);
      } else if(Array.isArray(window.labelArray) && window.labelArray.length){
        for(var i = 0; i < window.labelArray.length; i++){
          var lb = window.labelArray[i];
          if(!isHiddenLabel(lb) && normKey(lb) !== 'share') targetLabels.push(lb);
        }
        if(!targetLabels.length){
          for(var j = 0; j < window.labelArray.length; j++){
            if(!isHiddenLabel(window.labelArray[j])){ targetLabels.push(window.labelArray[j]); break; }
          }
        }
      }
      if(!targetLabels.length) return;

      var matchedGroup = '';
      var primaryAlias = smartAlias(targetLabels[0]);
      cards.forEach(function(c){
        var dl = normKey(c.getAttribute('data-label') || '');
        if(!dl) return;
        for(var k = 0; k < targetLabels.length; k++){
          var tl = normKey(targetLabels[k]);
          var al = smartAlias(targetLabels[k]);
          if(dl === tl || (al.key && dl === al.key)){
            c.classList.add('is-active');
            var parentIt = c.closest('.gz-aave-item');
            if(!matchedGroup && parentIt) matchedGroup = parentIt.getAttribute('data-group') || '';
          }
        }
      });
      if(!matchedGroup) matchedGroup = classifyGroup(targetLabels[0]);
      var grpItem = nav.querySelector('.gz-aave-item[data-group="' + matchedGroup + '"]');
      if(grpItem){
        var gtr = grpItem.querySelector('.gz-aave-trigger');
        if(gtr) gtr.classList.add('is-active');
        var ctxBadge = grpItem.querySelector('.gz-aave-badge-ctx');
        var trLabel = normKey((gtr && gtr.querySelector('[itemprop="name"]') ? gtr.querySelector('[itemprop="name"]').textContent : '') || '');
        if(ctxBadge && currentLabel && normKey(primaryAlias.shortName) !== trLabel && normKey(primaryAlias.shortName) !== 'th\u1ee7 thu\u1eadt'){
          ctxBadge.textContent = primaryAlias.shortName;
          ctxBadge.style.display = 'inline-block';
        }
      }
    }

    function dynamicCardSvg(grp){
      if(grp === 'tools'){
        return "<svg class='gz-aave-icon' width='40' height='40' viewBox='0 0 40 40' fill='none' aria-hidden='true' style='--active-color-1: var(--aave-purple-4); --active-color-4: var(--aave-purple-6);'><circle cx='20' cy='20' r='5' fill='var(--color-4)'/><path d='M7.4 24.84C5.55 20.02 6.56 14.35 10.45 10.45C13.09 7.82 16.55 6.5 20 6.5C20.83 6.5 21.5 7.17 21.5 8C21.5 8.83 20.83 9.5 20 9.5C17.31 9.5 14.63 10.52 12.58 12.58C9.6 15.55 8.79 19.86 10.12 23.57C9.09 23.74 8.16 24.19 7.4 24.84Z' fill='var(--color-1)'/><path d='M20 33.5C19.17 33.5 18.5 32.83 18.5 32C18.5 31.17 19.17 30.5 20 30.5C22.69 30.5 25.37 29.48 27.42 27.42C30.4 24.45 31.21 20.14 29.88 16.43C30.91 16.27 31.85 15.81 32.6 15.15C34.46 19.98 33.44 25.65 29.55 29.55C26.91 32.18 23.45 33.5 20 33.5Z' fill='var(--color-1)'/><circle cx='11' cy='29' r='3' fill='var(--color-1)'/><circle cx='29' cy='11' r='3' fill='var(--color-1)'/></svg>";
      }
      if(grp === 'tips'){
        return "<svg class='gz-aave-icon' width='40' height='40' viewBox='0 0 40 40' fill='none' aria-hidden='true' style='--active-color-1: var(--aave-purple-4); --active-color-4: var(--aave-purple-6);'><g transform='translate(4 4) scale(2)'><path d='M3.7135 11.5755C3.26054 10.8233 3 9.94207 3 9V4C3 2.89543 3.89543 2 5 2H11C11.2139 2 11.42 2.03359 11.6133 2.09579L3.7135 11.5755Z' fill='var(--color-4)'/><path d='M4.62109 12.6863L12.7157 2.97266C12.896 3.27303 12.9998 3.62467 12.9998 4.0005V9.00049C12.9998 11.7619 10.7612 14.0005 7.99978 14.0005C6.6972 14.0005 5.51094 13.5024 4.62109 12.6863Z' fill='var(--color-1)'/></g></svg>";
      }
      return "<svg class='gz-aave-icon' width='40' height='40' viewBox='0 0 40 40' fill='none' aria-hidden='true' style='--active-color-1: var(--aave-purple-4); --active-color-4: var(--aave-purple-6);'><path d='M19.5 5C21.1569 5 22.5 6.34315 22.5 8C22.5 9.21025 21.7821 10.2503 20.75 10.7246V14C20.75 14.6904 20.1904 15.25 19.5 15.25C18.8096 15.25 18.25 14.6904 18.25 14V10.7246C17.2179 10.2503 16.5 9.21025 16.5 8C16.5 6.34315 17.8431 5 19.5 5Z' fill='var(--color-1)'/><path d='M26 17C29.3137 17 32 19.6863 32 23V28C32 31.3137 29.3137 34 26 34H13C9.68629 34 7 31.3137 7 28V23C7 19.6863 9.68629 17 13 17H26ZM15.5 22C14.3954 22 13.5 22.8954 13.5 24C13.5 25.1046 14.3954 26 15.5 26C16.6046 26 17.5 25.1046 17.5 24C17.5 22.8954 16.6046 22 15.5 22ZM23.5 22C22.3954 22 21.5 22.8954 21.5 24C21.5 25.1046 22.3954 26 23.5 26C24.6046 26 25.5 25.1046 25.5 24C25.5 22.8954 24.6046 22 23.5 22Z' fill='var(--color-4)'/></svg>";
    }

    function applyFeedData(stats){
      if(!stats || !stats.counts) return;
      var counts = stats.counts;
      var exact = stats.exact || {};
      var cards = Array.prototype.slice.call(nav.querySelectorAll('.gz-aave-card[data-label]'));
      var existing = {};
      cards.forEach(function(c){
        var dl = normKey(c.getAttribute('data-label') || '');
        existing[dl] = true;
        var al = smartAlias(dl);
        if(al.key) existing[al.key] = true;
        var realTerm = exact[dl] || exact[al.key];
        var cnt = counts[dl] || (al.key ? counts[al.key] : 0) || 0;
        if(realTerm && c.getAttribute('href')){
          c.setAttribute('href', 'https://www.mmo.team/search/label/' + encodeURIComponent(realTerm));
        }
        if(cnt > 0){
          var row = c.querySelector('.gz-aave-title-row');
          var pill = row ? row.querySelector('.gz-aave-pill') : null;
          if(pill && /\d+\s*b\u00e0i|^\d+$/.test(pill.textContent.trim())){
            pill.textContent = cnt + ' b\u00e0i';
          }
        }
      });

      Object.keys(counts).forEach(function(k){
        if(isHiddenLabel(k) || existing[k]) return;
        var realName = exact[k] || k;
        var al = smartAlias(realName);
        if(existing[al.key]) return;
        var grp = classifyGroup(realName);
        var gridSel = grp === 'tut' ? '[data-grid="tut-apps"]' : (grp === 'tools' ? '[data-grid="tools-core"]' : '[data-grid="tips-core"]');
        var grid = nav.querySelector(gridSel);
        if(!grid) return;
        existing[k] = true;
        var a = document.createElement('a');
        a.className = 'gz-aave-card';
        a.setAttribute('data-label', realName);
        a.setAttribute('href', 'https://www.mmo.team/search/label/' + encodeURIComponent(realName));
        a.setAttribute('title', realName);
        a.innerHTML = dynamicCardSvg(grp) +
          "<div class='gz-aave-meta'><div class='gz-aave-title-row'><p class='gz-aave-title'></p><span class='gz-aave-pill'>" + counts[k] + " b\u00e0i</span></div><p class='gz-aave-desc'>Chuy\u00ean m\u1ee5c m\u1edbi c\u1eadp nh\u1eadt</p></div>";
        a.querySelector('.gz-aave-title').textContent = al.shortName;
        grid.appendChild(a);
      });
      applyActiveState();
    }

    function syncLiveFeed(){
      var cacheKey = 'gz_aave_nav_v2';
      try{
        var cached = sessionStorage.getItem(cacheKey);
        if(cached){
          var parsed = JSON.parse(cached);
          if(parsed && (Date.now() - parsed.ts < 600000)){
            applyFeedData(parsed);
            return;
          }
        }
      }catch(e){}
      var runFetch = function(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', location.origin + '/feeds/posts/summary?alt=json&max-results=500', true);
        xhr.onload = function(){
          if(xhr.status !== 200) return;
          try{
            var data = JSON.parse(xhr.responseText);
            var feed = data && data.feed;
            if(!feed) return;
            var counts = {}, exact = {};
            (feed.category || []).forEach(function(cat){
              if(cat && cat.term && !isHiddenLabel(cat.term)){
                var k = normKey(cat.term);
                exact[k] = cat.term;
                if(!counts[k]) counts[k] = 0;
              }
            });
            (feed.entry || []).forEach(function(ent){
              (ent.category || []).forEach(function(cat){
                if(cat && cat.term && !isHiddenLabel(cat.term)){
                  var k = normKey(cat.term);
                  exact[k] = cat.term;
                  counts[k] = (counts[k] || 0) + 1;
                }
              });
            });
            var payload = { ts: Date.now(), counts: counts, exact: exact };
            try{ sessionStorage.setItem(cacheKey, JSON.stringify(payload)); }catch(e){}
            applyFeedData(payload);
          }catch(err){}
        };
        xhr.send();
      };
      if(window.requestIdleCallback) window.requestIdleCallback(runFetch, { timeout: 1500 });
      else setTimeout(runFetch, 350);
    }

    applyActiveState();
    syncLiveFeed();
  }
  function watchAsyncExcerpts(){
    if(!window.MutationObserver) return;
    var roots = [
      document.getElementById('related-post'),
      document.getElementById('related-wrapper'),
      document.getElementById('PopularPosts1'),
      document.querySelector('.blog-posts')
    ];
    var mo = new MutationObserver(function(){
      sanitizeLockedSnippets();
      fixBrokenLabelHrefs();
    });
    for(var i=0;i<roots.length;i++){
      if(roots[i]) mo.observe(roots[i], { childList: true, subtree: true });
    }
  }

  /* Mark .scrollmenu label link matching /search/label/… as current (no fake Home highlight). */
  function markScrollmenuCurrent(){
    var menu = document.querySelector('.scrollmenu');
    if(!menu) return;
    var links = menu.querySelectorAll('a[href*="/search/label/"]');
    var path = '';
    try{ path = decodeURIComponent(location.pathname || ''); }catch(e){ path = location.pathname || ''; }
    var m = path.match(/\/search\/label\/([^\/?#]+)/i);
    var currentLabel = m ? m[1].replace(/\+/g, ' ').trim().toLowerCase() : '';
    for(var i=0;i<links.length;i++){
      var a = links[i];
      a.classList.remove('is-current');
      if(!currentLabel) continue;
      var href = a.getAttribute('href') || '';
      var hm = href.match(/\/search\/label\/([^\/?#]+)/i);
      if(!hm) continue;
      var label = '';
      try{ label = decodeURIComponent(hm[1].replace(/\+/g, ' ')); }catch(e2){ label = hm[1].replace(/\+/g, ' '); }
      if(label.trim().toLowerCase() === currentLabel){
        a.classList.add('is-current');
      }
    }
  }

  /* ── Smart Label Nav: hub bar + related panel (co-tag from Blogger feed) ── */
  /* All how-to / AI product niches live under Tutorial (capital T) — no separate AI Tools hub */
  var GZ_NAV_HUBS = [
    {
      id: 'tutorial',
      label: 'Tutorial',
      feedLabel: 'Tutorial',
      direct: true,
      children: [
        'ChatGPT', 'Gemini Ultra', 'Google AI', 'Grok', 'HeyGen',
        'CapCut', 'Notion', 'YouTube', 'Google Cloud', 'Exa',
        'Domain', 'Duolingo',
        'Gmail', 'Spotify', 'Autodesk', 'Trading View', 'Apple',
        'Lovable', 'Make', 'WisprFlow', 'VPN'
      ]
    },
    { id: 'thu-thuat', label: 'Thủ Thuật', feedLabel: 'Thủ Thuật' },
    { id: 'tools', label: 'Tools', feedLabel: 'Tools', children: ['Muse'] }
  ];

  function isNavHiddenLabel(txt){
    var s = String(txt || '').trim().toLowerCase();
    if(!s) return true;
    if(s === 'share') return true;
    return isHiddenSystemLabel(s);
  }

  function labelPageUrl(name){
    return '/search/label/' + encodeURIComponent(name) + '?m=0';
  }

  function currentPathLabel(){
    var path = '';
    try{ path = decodeURIComponent(location.pathname || ''); }catch(e){ path = location.pathname || ''; }
    var m = path.match(/\/search\/label\/([^\/?#]+)/i);
    if(!m) return '';
    return String(m[1] || '').replace(/\+/g, ' ').trim();
  }

  function hubChildrenById(hubId){
    for(var i=0;i<GZ_NAV_HUBS.length;i++){
      if(GZ_NAV_HUBS[i].id === hubId) return GZ_NAV_HUBS[i].children || [];
    }
    return [];
  }

  function hubFeedLabelNames(){
    var out = [];
    for(var i=0;i<GZ_NAV_HUBS.length;i++){
      if(GZ_NAV_HUBS[i].feedLabel) out.push(GZ_NAV_HUBS[i].feedLabel);
    }
    return out;
  }

  /* Context-aware crumb labels: hub + niche → MMO > Tutorial > ChatGPT */
  function pickDisplayLabels(names, pathLabel){
    var clean = [];
    var seen = {};
    for(var i=0;i<(names || []).length;i++){
      var n = String(names[i] || '').trim();
      if(!n) continue;
      var lc = n.toLowerCase();
      if(lc === 'mmo' || isNavHiddenLabel(n) || isHiddenSystemLabel(n)) continue;
      if(seen[lc]) continue;
      seen[lc] = 1;
      clean.push(n);
    }
    if(!clean.length) return [];
    var byLc = {};
    for(var j=0;j<clean.length;j++) byLc[clean[j].toLowerCase()] = clean[j];
    var pathLc = String(pathLabel || '').trim().toLowerCase();
    var primary = null;
    if(pathLc && byLc[pathLc]) primary = byLc[pathLc];
    function firstOf(list){
      for(var k=0;k<(list || []).length;k++){
        var hit = byLc[String(list[k]).toLowerCase()];
        if(hit) return hit;
      }
      return null;
    }
    if(!primary) primary = firstOf(hubChildrenById('tutorial'));
    if(!primary) primary = firstOf(hubFeedLabelNames());
    if(!primary) primary = clean[0];
    if(!primary) return [];
    var hubFeeds = hubFeedLabelNames();
    var primaryLc = primary.toLowerCase();
    for(var hf=0;hf<hubFeeds.length;hf++){
      if(String(hubFeeds[hf]).toLowerCase() === primaryLc){
        /* Hub match — check if any co-label is a child of this hub → return [hub, child] */
        for(var hhi=0;hhi<GZ_NAV_HUBS.length;hhi++){
          if(String(GZ_NAV_HUBS[hhi].feedLabel||'').toLowerCase()!==primaryLc) continue;
          var hkids=GZ_NAV_HUBS[hhi].children||[];
          for(var hk=0;hk<clean.length;hk++){
            var clc=String(clean[hk]||'').toLowerCase();
            if(clc===primaryLc) continue;
            for(var hkc=0;hkc<hkids.length;hkc++){
              if(String(hkids[hkc]).toLowerCase()===clc) return [primary,clean[hk]];
            }
          }
          break;
        }
        return [primary];
      }
    }
    var tutKids = hubChildrenById('tutorial');
    for(var tc=0;tc<tutKids.length;tc++){
      if(String(tutKids[tc]).toLowerCase() === primaryLc){
        return ['Tutorial', primary];
      }
    }
    return [primary];
  }

  function ensureHubLabels(labs){
    var list = Array.isArray(labs) ? labs.slice() : String(labs || '').split(',');
    var out = [];
    var seen = {};
    function add(lab){
      var s = String(lab || '').trim();
      if(!s) return;
      var lc = s.toLowerCase();
      if(seen[lc]) return;
      seen[lc] = 1;
      out.push(s);
    }
    var tutKids = hubChildrenById('tutorial');
    var hasTutNiche = false;
    for(var i=0;i<list.length;i++){
      var raw = String(list[i] || '').trim();
      if(!raw) continue;
      add(raw);
      var rlc = raw.toLowerCase();
      for(var t=0;t<tutKids.length;t++){
        if(String(tutKids[t]).toLowerCase() === rlc){ hasTutNiche = true; break; }
      }
    }
    if(hasTutNiche && !seen.tutorial){
      var lockIdx = -1;
      for(var j=0;j<out.length;j++){
        if(out[j].toLowerCase() === 'lock'){ lockIdx = j; break; }
      }
      if(lockIdx >= 0) out.splice(lockIdx, 0, 'Tutorial');
      else out.push('Tutorial');
    }
    return out;
  }

  function normalizeHomeCardTags(){
    var pathLabel = currentPathLabel();
    var cards = document.querySelectorAll('.tit-home-tags .post-tags');
    for(var i=0;i<cards.length;i++){
      var box = cards[i];
      var links = Array.prototype.slice.call(box.querySelectorAll('a'));
      var names = links.map(function(a){ return (a.textContent || '').trim(); });
      /* preserve original label set once so re-runs stay stable after rebuild */
      var stored = box.getAttribute('data-gz-all-labels');
      if(stored){
        try{ names = JSON.parse(stored); }catch(eSt){}
      }else if(names.length){
        try{ box.setAttribute('data-gz-all-labels', JSON.stringify(names)); }catch(eSt2){}
      }
      var hrefMap = {};
      for(var L0=0;L0<links.length;L0++){
        hrefMap[(links[L0].textContent || '').trim().toLowerCase()] = links[L0].getAttribute('href') || '';
      }
      var picked = pickDisplayLabels(names, pathLabel);
      if(!picked.length){
        box.textContent = 'MMO';
        continue;
      }
      var html = 'MMO > ';
      for(var p=0;p<picked.length;p++){
        var name = picked[p];
        var href = hrefMap[name.toLowerCase()] || labelPageUrl(name);
        html += '<a href="' + href + '" rel="nofollow" title="' + name.replace(/"/g, '&quot;') + '">' + name + '</a>';
        if(p < picked.length - 1) html += ' > ';
      }
      box.innerHTML = html;
    }
  }

  function reorderBreadcrumbPrimary(){
    var slot = document.querySelector('.gz-bc-label-slot');
    if(!slot) return;
    var labels = Array.prototype.slice.call(slot.querySelectorAll('.gz-bc-label'));
    if(!labels.length) return;
    var names = labels.map(function(el){
      var a = el.querySelector('[itemprop="name"], a, span');
      return a ? (a.textContent || '').trim() : (el.textContent || '').trim();
    });
    var picked = pickDisplayLabels(names, currentPathLabel());
    if(!picked.length) return;
    /* Single-slot CSS: prefer path match, else niche (last), else hub */
    var pathLc = String(currentPathLabel() || '').toLowerCase();
    var showName = picked[picked.length - 1];
    for(var pi=0;pi<picked.length;pi++){
      if(pathLc && picked[pi].toLowerCase() === pathLc){ showName = picked[pi]; break; }
    }
    var primaryLc = showName.toLowerCase();
    var primaryEl = null;
    for(var i=0;i<labels.length;i++){
      if(String(names[i] || '').toLowerCase() === primaryLc){
        primaryEl = labels[i];
        break;
      }
    }
    if(primaryEl && slot.firstElementChild !== primaryEl){
      slot.insertBefore(primaryEl, slot.firstChild);
    }
    /* hide Share / system crumbs still in slot */
    for(var h=0;h<labels.length;h++){
      if(isNavHiddenLabel(names[h]) || isHiddenSystemLabel(names[h])){
        labels[h].style.setProperty('display', 'none', 'important');
      }
    }
  }

  function suggestLabelsFromTitle(title){
    var raw = String(title || '');
    var t = raw.toLowerCase();
    var out = [];
    function add(lab){
      var s = String(lab || '').trim();
      if(!s) return;
      for(var i=0;i<out.length;i++){
        if(out[i].toLowerCase() === s.toLowerCase()) return;
      }
      out.push(s);
    }
    var rules = [
      [/chatgpt|chat\s*gpt|gpt[\s-]?go|\bopenai\b/i, 'ChatGPT'],
      [/gemini\s*ultra/i, 'Gemini Ultra'],
      [/google\s*ai|gemini(?!\s*ultra)/i, 'Google AI'],
      [/\bgrok\b/i, 'Grok'],
      [/heygen/i, 'HeyGen'],
      [/capcut/i, 'CapCut'],
      [/notion/i, 'Notion'],
      [/youtube|yt\s*premium/i, 'YouTube'],
      [/google\s*cloud|\bgcp\b/i, 'Google Cloud'],
      [/\bexa\b/i, 'Exa'],
      [/duolingo/i, 'Duolingo'],
      [/domain|tên miền|\.com\b/i, 'Domain']
    ];
    for(var r=0;r<rules.length;r++){
      if(rules[r][0].test(raw) || rules[r][0].test(t)) add(rules[r][1]);
    }
    var tutKids = hubChildrenById('tutorial');
    var hasTutNiche = out.some(function(x){
      var xl = x.toLowerCase();
      for(var a=0;a<tutKids.length;a++){
        if(String(tutKids[a]).toLowerCase() === xl) return true;
      }
      return false;
    });
    /* Any tool/niche under Tutorial always co-tags hub Tutorial */
    if(hasTutNiche) add('Tutorial');
    if(!out.length){
      if(/thủ thuật|mẹo|trick|tips?/i.test(t)) add('Thủ Thuật');
      else add('Tutorial');
    }
    return out;
  }

  try{
    window.gzNormalizePostTags = normalizeHomeCardTags;
    window.gzSuggestLabelsFromTitle = suggestLabelsFromTitle;
    window.gzEnsureHubLabels = ensureHubLabels;
  }catch(eWin){}

  function hubOwnsLabel(hub, labelName){
    var cur = String(labelName || '').trim().toLowerCase();
    if(!cur) return false;
    if(hub.feedLabel && String(hub.feedLabel).toLowerCase() === cur) return true;
    if(hub.children && hub.children.length){
      for(var i=0;i<hub.children.length;i++){
        if(String(hub.children[i]).toLowerCase() === cur) return true;
      }
    }
    return false;
  }

  /* true if name is feedLabel/children of any hub other than `hub` */
  function labelOwnedByOtherHub(hub, name){
    var cur = String(name || '').trim().toLowerCase();
    if(!cur || !hub) return false;
    for(var i=0;i<GZ_NAV_HUBS.length;i++){
      var other = GZ_NAV_HUBS[i];
      if(other.id === hub.id) continue;
      if(hubOwnsLabel(other, cur)) return true;
    }
    return false;
  }

  function mergeHubRelatedChips(hub, relatedList){
    var seen = {};
    var out = [];
    var selfLc = hub.feedLabel ? String(hub.feedLabel).toLowerCase() : '';
    var related = relatedList || [];
    var liveLc = {};
    for(var i=0;i<related.length;i++){
      var rn = typeof related[i] === 'string' ? related[i] : (related[i] && related[i].name);
      var rc = typeof related[i] === 'string' ? 1 : (related[i] && related[i].count);
      rn = String(rn || '').trim();
      if(!rn) continue;
      if(typeof rc === 'number' && rc <= 0) continue;
      liveLc[rn.toLowerCase()] = 1;
    }
    function pushName(raw){
      var n = typeof raw === 'string' ? raw : (raw && raw.name);
      n = String(n || '').trim();
      if(!n || isNavHiddenLabel(n)) return;
      var lc = n.toLowerCase();
      if(selfLc && lc === selfLc) return;
      if(seen[lc]) return;
      if(labelOwnedByOtherHub(hub, n)) return;
      seen[lc] = 1;
      out.push(n);
    }
    /* Configured children only if they appear in live feed co-tags (count > 0) */
    if(hub.children && hub.children.length){
      for(var c=0;c<hub.children.length;c++){
        var cn = hub.children[c];
        if(liveLc[String(cn).toLowerCase()]) pushName(cn);
      }
    }
    for(var r=0;r<related.length;r++) pushName(related[r]);
    var childLive = 0;
    for(var k in liveLc){ if(Object.prototype.hasOwnProperty.call(liveLc, k)) childLive++; }
    return out.slice(0, Math.max(childLive, 8) + 4);
  }

  function fetchHubRelated(feedLabel){
    var key = 'gz_nav_rel_v1:' + feedLabel;
    try{
      var cached = sessionStorage.getItem(key);
      if(cached) return Promise.resolve(JSON.parse(cached));
    }catch(e0){}
    var url = '/feeds/posts/summary/-/' + encodeURIComponent(feedLabel) + '?alt=json&max-results=150';
    return fetch(url, { credentials: 'same-origin' }).then(function(res){
      if(!res.ok) throw new Error('feed ' + res.status);
      return res.json();
    }).then(function(data){
      var entries = (data && data.feed && data.feed.entry) ? data.feed.entry : [];
      if(!Array.isArray(entries)) entries = entries ? [entries] : [];
      var counts = {};
      var total = entries.length;
      var feedLc = String(feedLabel || '').toLowerCase();
      for(var i=0;i<entries.length;i++){
        var cats = entries[i].category || [];
        if(!Array.isArray(cats)) cats = cats ? [cats] : [];
        for(var j=0;j<cats.length;j++){
          var term = cats[j] && cats[j].term ? String(cats[j].term).trim() : '';
          if(!term || isNavHiddenLabel(term)) continue;
          if(term.toLowerCase() === feedLc) continue;
          counts[term] = (counts[term] || 0) + 1;
        }
      }
      var related = Object.keys(counts).sort(function(a, b){
        return counts[b] - counts[a] || a.localeCompare(b);
      }).slice(0, 16).map(function(name){
        return { name: name, count: counts[name] };
      });
      var payload = { total: total, related: related };
      try{ sessionStorage.setItem(key, JSON.stringify(payload)); }catch(e1){}
      return payload;
    });
  }

  function initSmartLabelNav(){
    var bar = document.getElementById('gz-hub-bar') || document.querySelector('[data-gz-smart-nav="1"]');
    var panel = document.getElementById('gz-hub-panel');
    var nav = bar && (bar.closest('.gz-smart-nav') || bar.parentElement);
    if(!bar || !panel || !nav){
      markScrollmenuCurrent();
      return;
    }

    var openId = null;
    var curLabel = currentPathLabel();

    function closePanel(){
      openId = null;
      panel.hidden = true;
      panel.innerHTML = '';
      nav.classList.remove('is-panel-open');
      var btns = bar.querySelectorAll('.gz-hub-btn');
      for(var i=0;i<btns.length;i++){
        btns[i].classList.remove('is-open');
        btns[i].setAttribute('aria-expanded', 'false');
      }
      markHubCurrent();
    }

    function markHubCurrent(){
      var items = bar.querySelectorAll('[data-hub-id]');
      for(var i=0;i<items.length;i++){
        var el = items[i];
        var hub = null;
        for(var h=0;h<GZ_NAV_HUBS.length;h++){
          if(GZ_NAV_HUBS[h].id === el.getAttribute('data-hub-id')){ hub = GZ_NAV_HUBS[h]; break; }
        }
        /* while a panel is open, only is-open gets the strong underline */
        if(openId){
          el.classList.remove('is-current');
        }else if(hub && hubOwnsLabel(hub, curLabel)){
          el.classList.add('is-current');
        }else{
          el.classList.remove('is-current');
        }
      }
      var chips = panel.querySelectorAll('.gz-hub-chip');
      for(var c=0;c<chips.length;c++){
        var name = chips[c].getAttribute('data-label') || '';
        if(curLabel && name.toLowerCase() === curLabel.toLowerCase()) chips[c].classList.add('is-current');
        else chips[c].classList.remove('is-current');
      }
    }

    function renderChips(names, emptyMsg){
      if(!names || !names.length){
        return '<p class="gz-hub-empty">' + (emptyMsg || 'Chưa có nhãn liên quan') + '</p>';
      }
      var html = '<div class="gz-hub-chips" role="list" aria-label="Nhãn liên quan">';
      for(var i=0;i<names.length;i++){
        var n = typeof names[i] === 'string' ? names[i] : names[i].name;
        if(!n || isNavHiddenLabel(n)) continue;
        var cur = curLabel && n.toLowerCase() === curLabel.toLowerCase() ? ' is-current' : '';
        html += '<a class="gz-hub-chip' + cur + '" role="listitem" data-label="' + n.replace(/"/g,'&quot;') + '" href="' + labelPageUrl(n) + '">' + n + '</a>';
      }
      html += '</div>';
      return html;
    }

    function fillPanel(hub, bodyHtml){
      var top = '';
      if(hub.feedLabel){
        top =
          '<a class="gz-hub-cta" href="' + labelPageUrl(hub.feedLabel) + '">' +
            '<span class="gz-hub-cta-title">Tất cả bài ' + hub.feedLabel + '</span>' +
            '<span class="gz-hub-cta-meta"><span class="gz-hub-count"></span><span class="gz-hub-cta-arrow" aria-hidden="true">→</span></span>' +
          '</a>';
      }else{
        top = '<div class="gz-hub-panel-note">Chọn công cụ</div>';
      }
      panel.innerHTML = top + '<hr class="gz-hub-divider"/>' + bodyHtml;
      panel.hidden = false;
    }

    function openHub(hub, btn){
      if(openId === hub.id){ closePanel(); return; }
      /* clear previous open without remounting current marks yet */
      openId = null;
      panel.hidden = true;
      panel.innerHTML = '';
      var prevBtns = bar.querySelectorAll('.gz-hub-btn');
      for(var p=0;p<prevBtns.length;p++){
        prevBtns[p].classList.remove('is-open');
        prevBtns[p].setAttribute('aria-expanded', 'false');
      }

      openId = hub.id;
      nav.classList.add('is-panel-open');
      if(btn){
        btn.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }

      if(hub.children && hub.children.length && !hub.feedLabel){
        fillPanel(hub, renderChips(hub.children));
        markHubCurrent();
        return;
      }

      fillPanel(hub, '<p class="gz-hub-loading">Đang tải…</p>');
      markHubCurrent();
      fetchHubRelated(hub.feedLabel).then(function(data){
        if(openId !== hub.id) return;
        var countEl = panel.querySelector('.gz-hub-count');
        if(countEl && data && typeof data.total === 'number'){
          countEl.textContent = data.total + ' bài';
        }
        var related = mergeHubRelatedChips(hub, (data && data.related) ? data.related : []);
        var divider = panel.querySelector('.gz-hub-divider');
        var after = divider ? divider.nextSibling : null;
        while(after){
          var n = after.nextSibling;
          after.parentNode.removeChild(after);
          after = n;
        }
        if(divider) divider.insertAdjacentHTML('afterend', renderChips(related));
        else panel.insertAdjacentHTML('beforeend', renderChips(related));
        markHubCurrent();
      }).catch(function(){
        if(openId !== hub.id) return;
        var load = panel.querySelector('.gz-hub-loading');
        if(load) load.outerHTML = renderChips(mergeHubRelatedChips(hub, []), 'Chưa có nhãn liên quan');
      });
    }

    bar.innerHTML = '';
    for(var i=0;i<GZ_NAV_HUBS.length;i++){
      (function(hub){
        if(hub.direct && hub.feedLabel){
          var a = document.createElement('a');
          a.className = 'gz-hub-link';
          a.setAttribute('data-hub-id', hub.id);
          a.href = labelPageUrl(hub.feedLabel);
          a.title = hub.label;
          a.innerHTML = '<span itemprop="name">' + hub.label + '</span>';
          bar.appendChild(a);
          return;
        }
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'gz-hub-btn';
        btn.setAttribute('data-hub-id', hub.id);
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<span>' + hub.label + '</span><span class="gz-hub-chev" aria-hidden="true">▾</span>';
        btn.addEventListener('click', function(ev){
          ev.preventDefault();
          ev.stopPropagation();
          openHub(hub, btn);
        });
        bar.appendChild(btn);
      })(GZ_NAV_HUBS[i]);
    }

    markHubCurrent();

    document.addEventListener('click', function(ev){
      if(!openId) return;
      if(nav.contains(ev.target)) return;
      closePanel();
    });
    document.addEventListener('keydown', function(ev){
      if(ev.key === 'Escape') closePanel();
    });
    panel.addEventListener('click', function(ev){
      var chip = ev.target.closest && ev.target.closest('.gz-hub-chip');
      if(chip) closePanel();
    });
  }

  function bootSmartLocker(){
    initSmartAntiInspect();
    initAaveSmartMenu();
    decorateHomepageCards();
    initSmartLabelNav();
    initSinglePostLocker();
    initAdminDashboard();
    initGalleryLightbox();
    watchAsyncExcerpts();
  }

  /* BFCache / label navigation: re-sanitize so unlock body never flashes into list */
  window.addEventListener('pageshow', function(ev){
    fixBrokenLabelHrefs();
    sanitizeLockedSnippets();
    if(document.getElementById('gz-hub-bar')){
      /* hubs already built; only refresh current marks via re-init is heavy — remount once if persisted */
      if(ev && ev.persisted) initSmartLabelNav();
    }else{
      markScrollmenuCurrent();
    }
    if(ev && ev.persisted) decorateHomepageCards();
  });

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', bootSmartLocker);
  }else{
    bootSmartLocker();
  }
})();
