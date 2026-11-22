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

## Repo đã publish

- GitHub: https://github.com/kkymljnk/goizen-gsap-assets
- Tag: `v1.0.0`

URL jsDelivr (đang dùng trong theme):

```
https://cdn.jsdelivr.net/gh/kkymljnk/goizen-gsap-assets@v1.0.0/assets/css/goizen-gsap-tokens.css
https://cdn.jsdelivr.net/gh/kkymljnk/goizen-gsap-assets@v1.0.0/assets/css/goizen-layout.css
https://cdn.jsdelivr.net/gh/kkymljnk/goizen-gsap-assets@v1.0.0/assets/js/goizen-ui.js
https://cdn.jsdelivr.net/gh/kkymljnk/goizen-gsap-assets@v1.0.0/assets/js/goizen-related.js
```

## Quy trình cập nhật sau này

1. Sửa file trong `assets/`.
2. Push lên `kkymljnk/goizen-gsap-assets` + tag mới (`v1.0.1`).
3. Đổi `@v1.0.0` → `@v1.0.1` trong `goizen_theme_clean.xml`.
4. `_prep_xml.py` + restore theme.

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
