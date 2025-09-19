# Countdown Timer App

## Giới thiệu
Ứng dụng đếm ngược sự kiện (thi cử, sinh nhật, lễ hội...).  
Viết bằng **HTML, CSS, JavaScript**, hỗ trợ chạy **offline** nhờ Service Worker + LocalStorage.

## Cách chạy
1. Giải nén file `countdown-app.zip`.
2. Mở thư mục `countdown-app` trong **VS Code** hoặc bất kỳ editor nào.
3. Chạy file `index.html` trên trình duyệt (Chrome, Edge, Firefox).

## Tính năng
- Thêm sự kiện với tên + ngày/giờ.
- Hiển thị thời gian còn lại (ngày, giờ, phút, giây).
- Xóa sự kiện không cần thiết.
- Lưu sự kiện bằng **LocalStorage** (không mất khi tải lại trang).
- **Hỗ trợ offline** nhờ Service Worker (cache sẵn HTML, CSS, JS).

## Cách cài như ứng dụng (PWA)
- Mở trên Chrome → Menu ⋮ → "Add to Home screen" (hoặc "Cài đặt ứng dụng").
- Sau khi cài, có thể chạy như app riêng, không cần mở trình duyệt.

## Cấu trúc dự án
```
countdown-app/
│── index.html       # Giao diện chính
│── style.css        # CSS
│── app.js           # Logic JS
│── sw.js            # Service Worker (cache offline)
│── manifest.json    # Manifest PWA
│── readme.txt       # Hướng dẫn
```

## Yêu cầu kỹ thuật
- Chỉ cần trình duyệt hiện đại (Chrome/Edge/Firefox).
- Không cần server backend, chạy hoàn toàn offline.
