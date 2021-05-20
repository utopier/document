# Responsive

---

## Chapter

1. Google Web Developer

---

## 1. Google Web Developer

1. Overview
2. Pattern
3. Responsive Image
4. Multi Device Content

---

### 1. Overview

1. Set the viewport
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       …
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       …
     </head>
     …
   </html>
   ```
2. Size content to the viewport
    - https://web.dev/content-width/
    - 이미지
        ```css
        img {
            max-width: 100%;
            display: block;
        }
        ```
    - 레이아웃
        - flex
        - grid
        - multicol
3. Use CSS media queries for responsiveness
    - 뷰포트 크기 기반
        - width( min-width, max-width)
        - height( min-height, max-height)
        - orientation
        - aspect-ratio
    - 장치 기능 기반
        - hover
        - pointer
        - any-hover
        - any-pointer
4. How to choose breakpoints
5. View media query breakpoints in Chrome DevTools

### 2. Pattern

### 3. Responsive Image

### 4. Multi Device Content

---
