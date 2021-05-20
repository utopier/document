# UX

---

## Chapter

1. Google Web Developers

---

## 1. Google Web Developers

- https://developers.google.com/web/fundamentals/design-and-ux/ux-basics

1. UX 기본
2. 좋은 모바일 사이트란
3. Web Variables Font(가변글꼴)
4. Browser Colors and Icons

---

### 1-1. UX 기본

1. **UX WorkFlow (feat. Google Design Sprint 방법론)**
   - 더블 다이아몬드 -> 목표 설정 -> 문제 확인 -> 프로젝트 맵 -> 와이어 프레임 및 스토리 보드 -> 프로토 타입 생성 -> 디자인 유용성 테스트 -> 디자인 재검토 및 테스트

### 1-2. 좋은 모바일 사이트란

1. **25가지 모바일 사이트 디자인 원칙(feat. Google, AnswerLab 연구결과)**
   - https://developers.google.com/web/fundamentals/design-and-ux/principles

### 1-3. Web Variables Font(가변글꼴)

- https://web.dev/variable-fonts/S

### 1-4. Browser Colors and Icons

- 최신 브라우저의 아이콘 및 타일, 주소 표시줄 색상 등 추가

1. Icons & Tiles

- Icon은 브라우저 탭, 최근 앱 전환, 새 탭 페이지 등 여러 위치에 표시됨.

  ```html
  <!-- icon in the highest resolution we need it for -->
  <link rel="icon" sizes="192x192" href="icon.png" />

  <!-- reuse same icon for Safari -->
  <link rel="apple-touch-icon" href="ios-icon.png" />

  <!-- multiple icons for IE -->
  <meta name="msapplication-square310x310logo" content="icon_largetile.png" />
  ```

  - **Chrome & Opera**
    - sizes 속성 활용
    - 아이콘 크기는 48px를 기준(48, 96, 144, 192)
  - **Safari**
    ```html
    <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
    ```
  - **IE & Windows Phone**
    ```html
    <meta name="msapplication-square70x70logo" content="icon_smalltile.png" />
    <meta
      name="msapplication-square150x150logo"
      content="icon_mediumtile.png"
    />
    <meta name="msapplication-wide310x150logo" content="icon_widetile.png" />
    ```
  - **IE Tiles**
    - MSDN 라이브 타일 생성 방법
      - https://msdn.microsoft.com/en-us/library/ie/dn455115(v=vs.85).aspx

2. Color
   - **Chrome & Opera**
     ```html
     <!-- Chrome, Firefox OS and Opera -->
     <meta name="theme-color" content="#4285f4" />
     ```
   - **Safari**
     1. 시작 이미지 지정
        ```html
        <link rel="apple-touch-startup-image" href="icon.png" />
        ```
     2. 상태 표시줄 모양 변경
        ```html
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        ```
