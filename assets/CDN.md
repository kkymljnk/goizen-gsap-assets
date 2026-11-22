# Host CSS/JS trên GitHub + jsDelivr (sau khi có repo)

Phase hiện tại (**2C**): file nằm local trong `assets/`, được nhúng lại vào `goizen_theme_clean.xml` bởi `_sync_assets_into_xml.py` mỗi lần `_prep_xml.py` chạy. Blog không cần CDN để hoạt động.

## Cấu trúc

```
assets/
  css/goizen-gsap-tokens.css   # :root GSAP + pre/code/blockquote/a
  css/goizen-layout.css        # layout Goizen đã remap var(--gz-*)
  js/goizen-ui.js              # Popular hide, tick wrap, hide dup image
  js/goizen-related.js         # Related Posts engine
  CDN.md                       # file này
```

## Quy trình đúng khi Đại Ca Tú có repo

1. Tạo repo GitHub (public), ví dụ `dai-ca-tu/goizen-gsap-assets`.
2. Push thư mục `assets/` (và có thể cả theme) lên `main`.
3. Tạo **git tag** phiên bản, ví dụ `v1.0.0` (pin version — tránh cache `@main`).
4. URL jsDelivr:

```
https://cdn.jsdelivr.net/gh/USER/REPO@v1.0.0/assets/css/goizen-gsap-tokens.css
https://cdn.jsdelivr.net/gh/USER/REPO@v1.0.0/assets/css/goizen-layout.css
https://cdn.jsdelivr.net/gh/USER/REPO@v1.0.0/assets/js/goizen-ui.js
https://cdn.jsdelivr.net/gh/USER/REPO@v1.0.0/assets/js/goizen-related.js
```

5. Trong `goizen_theme_clean.xml`, thay marker CSS bằng:

```xml
<link href='https://cdn.jsdelivr.net/gh/USER/REPO@v1.0.0/assets/css/goizen-gsap-tokens.css' rel='stylesheet'/>
<link href='https://cdn.jsdelivr.net/gh/USER/REPO@v1.0.0/assets/css/goizen-layout.css' rel='stylesheet'/>
```

6. Thay marker JS bằng `<script src='…'></script>` (đặt cuối `body`, sau jQuery nếu cần).
7. Xóa / bỏ qua `_sync_assets_into_xml.py` trong `_prep_xml.py`.
8. Mỗi lần sửa CSS/JS: commit → tag mới (`v1.0.1`) → đổi `@v1.0.1` trong XML → restore theme.

## Lưu ý Blogger

- `b:skin` vẫn giữ Font Awesome (Theme Designer / FA glyphs).
- External `<link>` trong `<head>` hoạt động bình thường trên Blogger Layout v3.
- jsDelivr cache theo **tag/commit**; đổi file trên `@main` có thể trễ vài phút–vài giờ — luôn pin version.
- Không commit secret / credential vào repo assets.
