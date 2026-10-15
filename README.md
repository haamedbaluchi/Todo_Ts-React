# 📋 Todo App — TypeScript Architecture

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

یک پیاده‌سازی ماژولار و مبتنی بر معماری تمیز (Clean Architecture) برای مدیریت تسک‌ها با تمرکز بر تفکیک وظایف (**Separation of Concerns**).

---

## 🏗️ ساختار پروژه (Directory Map)
   
Todo-app-Ts
├─ 📄 index.html                  # بدنه اصلی سند HTML
├─ 📦 package.json                # مدیریت وابستگی‌ها و اسکریپت‌ها
├─ ⚙️ tsconfig.json               # تنظیمات کامپایلر TypeScript
├─ 🎨 tailwind.config.js          # تنظیمات استایل‌دهی Tailwind
├─ 📁 public                      # فایل‌های استاتیک و عمومی
└─ 📁 src                         # کدهای اصلی برنامه
   ├─ 📁 core                     #  لایه قراردادها و مدل‌ها(ثابت ها و تایپ ها )
   │  └─ 🧠 models.ts             # اینترفیس‌ها و انواع داده
   ├─ 📁 services                 # لایه منطق بیزینس و داده
   │  └─ ⚙️ todo.service.ts       # عملیات CRUD و LocalStorage
   ├─ 📁 ui                       # لایه تعامل و رندرینگ
   │  └─ 🖥️ todo.ui.ts            # مدیریت DOM و ایونت‌ها
   ├─ 🚀 main.ts                  # نقطه اتصال و راه‌اندازی
   └─ 🎨 style.css                # استایل‌های سراسری پروژه