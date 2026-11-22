/* GSAP Lite Typography + Resource Card Border (2px solid + 14px radius) + <pre><code> Enhancer & PrismJS */
(function(){
  if(!document.getElementById('gz-gsap-fonts')){
    var fl=document.createElement('link');
    fl.id='gz-gsap-fonts';
    fl.rel='stylesheet';
    fl.href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap';
    (document.head||document.documentElement).appendChild(fl);
  }

  var oldSt=document.getElementById('gz-gsap-card-border');
  if(oldSt&&oldSt.parentNode)oldSt.parentNode.removeChild(oldSt);
  var st=document.createElement('style');
  st.id='gz-gsap-card-border';
  st.textContent=
    ':root{'+
      '--gz-bg:#fffceb;--gz-surface:#ffffff;--gz-surface-2:#f7f4e4;'+
      '--gz-text:#3d3d34;--gz-text-muted:#6e6e62;--gz-heading:#0e100f;--gz-cream:#fffce1;'+
      '--gz-link:#0f7a32;--gz-link-hover:#095422;--gz-pre-bg:#161816;--gz-code-inline-bg:#ece9d8;'+
      '--gz-font:"Plus Jakarta Sans","Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;'+
      '--gz-mono:"JetBrains Mono","Fira Code",SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace'+
    '}'+
    '@font-face{font-family:"Font Awesome 5 Brands";font-style:normal;font-weight:400;font-display:swap;src:url(https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/webfonts/fa-brands-400.woff2) format("woff2"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/webfonts/fa-brands-400.woff2) format("woff2"),url(https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-brands-400.woff2) format("woff2")}'+
    '@font-face{font-family:"Font Awesome 5 Free";font-style:normal;font-weight:400;font-display:swap;src:url(https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/webfonts/fa-regular-400.woff2) format("woff2"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/webfonts/fa-regular-400.woff2) format("woff2"),url(https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-regular-400.woff2) format("woff2")}'+
    '@font-face{font-family:"Font Awesome 5 Free";font-style:normal;font-weight:900;font-display:swap;src:url(https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/webfonts/fa-solid-900.woff2) format("woff2"),url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/webfonts/fa-solid-900.woff2) format("woff2"),url(https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-solid-900.woff2) format("woff2")}'+
    'html body{font-family:var(--gz-font)!important;color:var(--gz-text)!important}'+
    'html body h1,html body h2,html body h3,html body h4,html body h5,html body h6,'+
    'html body .title-postpage .post-title,html body h1.post-title.entry-title,'+
    'html body h2.post-title.entry-title,html body h2.post-title.entry-title a,html body h2.post-title.entry-title a:visited,'+
    'html body .PopularPosts .post-title,html body .PopularPosts .post-title a,html body .PopularPosts .post-title a:visited,'+
    'html body a.related-post-item-title,html body a.related-post-item-title:visited{'+
      'color:var(--gz-heading,#0e100f)!important;font-family:var(--gz-font)!important;font-weight:600!important;letter-spacing:-0.015em!important'+
    '}'+
    'html body h2.post-title.entry-title a:hover,html body .PopularPosts .post-title a:hover,html body a.related-post-item-title:hover{'+
      'color:var(--gz-link,#0f7a32)!important;text-decoration:underline!important;text-decoration-color:var(--gz-link,#0f7a32)!important;text-decoration-thickness:2px!important;text-underline-offset:3px!important'+
    '}'+
    'html body a[href]:link,html body a[href]:visited{color:var(--gz-link,#0f7a32)}'+
    'html body a[href]:hover{color:var(--gz-link-hover,#095422)}'+
    'html body .post-body a[href],html body .entry-content a[href],html body .post-body a,html body .entry-content a{'+
      'color:var(--gz-link,#0f7a32)!important;font-weight:500!important;text-decoration:underline!important;text-decoration-color:var(--gz-link,#0f7a32)!important;text-underline-offset:2px!important'+
    '}'+
    'html body .post-body a[href]:hover,html body .entry-content a[href]:hover,html body .post-body a:hover,html body .entry-content a:hover{'+
      'color:var(--gz-link-hover,#095422)!important'+
    '}'+
    'html body .post-tags,html body .post-tags a,html body .post-tags a:link,html body .post-tags a:visited,html body .post-tags a:hover,'+
    'html body.item .post-header-line-1,html body .item .post-header-line-1,'+
    'html body.item .post-author,html body.item .post-author a,html body.item .post-author span,'+
    'html body .item .post-author,html body .item .post-author a,html body .item .post-author span,'+
    'html body.item .post-timestamp,html body.item .post-timestamp a,html body.item .post-timestamp time,'+
    'html body .item .post-timestamp,html body .item .post-timestamp a,html body .item .post-timestamp time{'+
      'color:var(--gz-link,#0f7a32)!important;font-weight:500!important'+
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
    'html body .post-labels a,html body .post-labels a:visited{'+
      'display:inline-flex!important;align-items:center!important;font-size:12.5px!important;font-weight:600!important;'+
      'padding:4px 14px!important;background:var(--gz-bg,#fffceb)!important;color:var(--gz-heading,#0e100f)!important;'+
      'border:2px solid var(--gz-heading,#0e100f)!important;border-radius:999px!important;text-transform:none!important;text-decoration:none!important'+
    '}'+
    'html body .share-post ul,html body .entry-share-list{'+
      'margin:0!important;padding:0!important;display:flex!important;flex-wrap:wrap!important;align-items:center!important;gap:10px!important;width:100%!important'+
    '}'+
    'html body .share-post li{display:inline-flex!important;width:auto!important;float:none!important;margin:0!important;padding:0!important;border:0!important}'+
    'html body .share-post li a{'+
      'display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;'+
      'height:40px!important;padding:0 16px!important;border:2px solid var(--gz-heading,#0e100f)!important;border-radius:999px!important;'+
      'background:var(--gz-bg,#fffceb)!important;color:var(--gz-heading,#0e100f)!important;font-size:13.5px!important;font-weight:600!important;text-decoration:none!important;box-sizing:border-box!important'+
    '}'+
    'html body .share-post li a:hover{border-color:var(--gz-link,#0f7a32)!important;transform:translateY(-1px)}'+
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
    'html body .author-role-tag{color:var(--gz-link,#0f7a32)!important;font-size:12.5px!important;font-weight:600!important;margin-left:8px!important}'+
    'html body .author-desc{color:var(--gz-text,#3d3d34)!important;font-size:15px!important;line-height:1.6!important;margin-top:4px!important;display:block!important}';
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
    '#top i,#top .fa,#top .fas{display:none!important}';
  (document.head||document.documentElement).appendChild(st);

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
  }

  function enhanceShareAndAuthor(){
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
    var wrap=im.closest('p, .separator, table.tr-caption-container')||im.parentElement;
    if(wrap&&wrap!==body){
      var onlyImg=!wrap.innerText.replace(/\s+/g,'').length;
      if(onlyImg||wrap.tagName==='P'||wrap.classList.contains('separator')||wrap.tagName==='TABLE'){
        wrap.style.display='none';
      }
    }
    break;
  }
})();
