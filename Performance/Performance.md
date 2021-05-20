# Web Performance

---

### References

- **Google Web Developer**
  - Web Fundamentals Performance
- **Web Dev**
  - Learn Performance & Lighthouse
- **Conferences**
  - Naver Tech 2019
  - NHN 2018
- **Auto Performacne Testing Pipeline**
- **MISC**
  - HTML
  - CSS
  - JavaScript
  - CloudComputing
  - SSR & CSR & SPA & MPA
  - React
  - Nextjs
  - State Management (Redux, Apollo...)
  - Testing
  - Refactoring (CleanCode, DRY, CleanArchitectrue, OOP, Functional, CodingSkill)

---

### Requirements

---

### Summary

1. Measuring WebVitals(Chapter 1 & 2(WebVitals, Measure))
   - 측정 모델 : RAIL Model (Response, Animation, Idle, Load)
   - 측정 지표 : Web Vitals Metrics (LCP, FID, CLS)
   - 측정 방법 : Chorme DevTools, Lighthouse(Performance Audits), WebPageTest
   - Dev Cycle : Setting RAIL Model Goal -> Measure -> Debug -> Improve(with Best Practices)
2. Loading Performance

   - **Overview**
     - Budgets
     - Culture
     - PRPL Pattern
   - **Measure**
     - Speed 측정
     - Low Bandwidth & High Latency
     - 현장 성능 측정
   - **Optimization**
     - Unnecessary Downloads
     - Images
     - Web Font
     - CSS
     - JavaScript
       - Three Shaking, Code Splitting
     - Resource Delivery
     - Network Quality
     - Third-party resources
     - HTTP
       - Requests, Caching
     - Resources
       - Never Load the Same Resource Twice
       - Lazy Loading Resources
       - Resource Prioritization
       - Navigation & Resource Timing
     - 신중하게 로드
     - Client Hints
     - Save-Data

3. Rendering Performance

- JavaScript 실행 최적화
- Style
- Layout
- Paint
- 합성기 전용 속성에 충실하고 레이어 수 관리
- 입력 핸들러 디바운스

4. Audit Site

- prework
- security
- performance audits
- share the results

---

## Chapter

1. **Web Vitals**
   - Metrics
     - LCP, FID, CLS
   - Measure -> Debug -> Improve
     - Measuring Tools
     - Debug(Layout shifts, Web Vitals)
     - Improve(LCP, FID, CLS)
   - Best Practices
     - Carousels, Cookie Notices, Infinite Scroll
2. **Measure**
   - RAIL Model
     - **Meaure Performance with the RAIL Model**
   - Metrics
3. **Loading**

   - Speed
     - Speed 정의
     - Speed 중요성
     - **Speed Tools**
     - Speed 측정 방법
     - Speed 유지 방법
   - **PRPL Pattern**
   - **Low Bandwidth & High Latency**
   - Set Performance Budgets
   - Optimization
     - **Unnecessary Downloads**
     - Images
       - **Images**
     - **GIF -> Video**
     - Lazy-Load Images & Video
     - Web Fonts
       - **Web Font**
     - Resource Delivery
     - Third-party resources
       - **Third-Party JavaScript**
     - Network Quality
     - CSS
     - JavaScript
       - **JavaScript**
         - **Three Shaking**
         - **Code Splitting**
     - **Client Hints**
     - **Sava-Data**
   - Measure performance in the field
     - **Measuring**
   - Build a performance culture
     - **Webpack**
   - **HTTP**
     - **Requests**
     - **Caching**
   - **Resources**
     - **Never Load the Same Resource Twice**
     - **Lazy Loading Resources**
     - **Resource Prioritization**
     - **Navigation & Resource Timing**
   - **Order Loading Thoughtfully**

4. **Rendering**
   - JavaScript Execution
   - Style
   - Layout
   - Paint
   - Stick to Compositor-Only Properties and Manage Layer Count
   - Debouce Your Input Handlers
5. **Audit**
   - Prework
   - Security
   - Performance
   - LightHouse Performance Audits
   - Share the result
   - Next Steps

---

## 1. **Web Vitals**

### 1-1. Metrics

1. Web Vitals Overview
2. Web Vitals Metrics
   - **LCP(Largest Contentful Paint)**
   - **FID(First Input Delay)**
   - **CLS(Cumulative Layout Shift)**
   - **Defining the Core Web Vitals metrics thresholds**

### 1-2. Measure -> Debug -> Improve

1. Measure
   - **Getting Started**
   - **Tools**
   - **Best practices**
2. Debug
   - **Debug Layout shifts**
   - **Debug Web Vitals in the field**
3. Improve
   - **LCP(Largest Contentful Paint)**
   - **FID(First Input Delay)**
   - **CLS(Cumulative Layout Shift)**

### 1-3. Best Practices

1. Carousels
2. Cookie Notices
3. Infinite Scroll without Layout shifts

---

## 2. **Measure**

### 2-1. RAIL Model

1. 사용자에 집중
2. 목표 및 지침
   - **Response: 50ms 이내에 이벤트 처리**
     - **50ms or 100ms**
   - **Animation: 10ms 안에 프레임 생성**
   - **Idle: idle 시간 최대화**
   - **Load: 5초 이내에 콘텐츠 제공 및 상호작용**
3. RAIL 측정 도구
   - **Chrome DevTools**
   - **Lighthouse**
   - **WebPageTest**

### 2-2. Metrics

1. User-centric performance metrics
2. Improtant metrics
   - **FCP(First Contentful Paint)**
   - **LCP(Largets Contentful Paint)**
   - **FID(First Input Delay)**
   - **TTI(Time to Interactive)**
   - **TBT(Total Blocking Time)**
   - **CLS(Cumulative Layout Shift)**
3. Custom Metrics

---

## 3. **Loading**

### 3-1. Speed

1. Speed 정의
2. Speed 중요성

- 성능은 사용자 유지
- 성능은 전환율 개선
- 성능은 사용자 경험 개선
- 성능은 사람에 관한 것
- 웹사이트 속도 개선 시작

3. **Speed Tools**

- **실험실과 필드 데이터**
  - 실험실 데이터
  - 필드 데이터
- **성능 도구**
  - Lighthouse
  - WebPageTest
  - TestMySite
  - PageSpeed Insights
  - Speed Scorecard
  - Impact Calculator
  - Chrome Developer Tools

4. Speed 측정 방법

- 실험실 데이터와 필드 데이터
- 측정 도구

5. Speed 유지 방법

### 3-2. **PRPL Pattern**

1. Lighthouse 페이지 감사
2. 중요한 리소스 미리로드
3. 가능한 한 빨리 초기 경로 렌더링
4. 사전 캐시 자산
5. 지연로드

### 3-3. **Low Bandwidth & High Latency**

1. 낮은 대역폭과 높은 지연 시간으로 테스트

- **네트워크 조절 에뮬레이션**
- **다른 위치 및 네트워크에서 테스트**
- **손상된 네트워크에서 테스트**

2. 불안정한 연결 및 lie-fi 처리

- **lie-fi란?**
- **시간 제한을 사용하여 간헐적인 연결처리**

### 3-4. Set Performance Budgets

1. Performance budgets 101
2. first performance budget
3. 성능 예산을 빌드 프로세스에 통합
4. 성능 예산에 Lighthouse 사용
5. Travis CI와 함께 bundlesize 사용
6. Lighthouse Bot을 사용해 성능 예산 설정
7. Lighthouse CI로 성능 모니터링

### 3-5. Optimization

1. **Unnecessary Downloads**

2. Images

- **올바른 이미지 형식 선택**
  - 올바른 이미지 형식 선택
  - 고해상도 화면이란
  - 다양한 래스터 이미지 형식의 기능
- **올바른 압축 수준 선택**
  - 벡터 이미지 최적화
  - 무손실 및 손실 이미지 압축
  - 이미지 최적화 체크리스트
- **Imagemin을 사용해 이미지 압축**
  - Measure
  - Imagemin
  - Plugins
  - Imagemin CLI
  - Imagemin npm module
- **반응형 이미지 제공**
  - Resize Images
  - sharp
  - ImageMagick
  - How many image versions should you create?
  - Other options
  - Multiple image versions
  - src attribute
  - srcset attribute
  - sizes attribute
  - Extra Credit
  - Verify
- **올바른 크기로 이미지 제공**
  - 잘못된 크기의 이미지 식별
  - 올바른 이미지 크기 결정
  - CSS 단위에 대한 빠른 참고
  - 좋은 접근 방식
  - 더 나은 접근 방식
  - 이미지 크기 조정
  - 검증
- **WebP 이미지 사용**
  - Image -> WebP
  - cwebp
  - Imagemin
  - WebP 이미지 제공
  - picture
  - source
  - img
  - Verify WebP usage
- **이미지 CDN을 사용해 이미지 최적화**
  - image CDN 사용 이유
  - image CDN 이란
  - image CDN이 URL을 사용해 최적화 옵션을 나타내는 방법
  - Origin
  - Image
  - Security Key
  - Transformations
  - Type of Image CDNs
  - Self-managed image CDNs
  - Third-party image CDNs
  - image CDN 선택

3. Encoding & Transfer Size of Text-based Assets

- 데이터 압축 101
- 축소 : 전처리 및 상황별 최적화
- GZIP을 사용한 텍스트 압축

4. **GIF -> Video**

- Measure
- MPEG videos
- WebM videos
- Compare the difference
- GIF img -> Video

5. Lazy-Load Images & Video

- 지연로딩을 사용해 로딩 속도 향상
- 지연로딩 이미지
- 지연로딩 비디오
- 웹용 브라우저 수준 이미지 지연로딩
- lazysizes를 사용해 이미지 지연로드

6. Web Fonts

- 글꼴로드 중 보이지 않는 텍스트 ㅂ아지
- WebFont 로딩 및 렌더링 최적화
- WebFont 크기 줄이기

7. Resource Delivery

- 콘텐츠 전송 네트워크(CDN)
- 리소스 우선 순위 지정
- 중요한 자산을 미리로드해 로드 속도 향상
- 인지 된 페이지 속도를 향상시키기 위해 네트워크 연결 일찍 설정
- 향후 탐색 속도를 높이기 위해 리소스 미리 가져오기
- 오디오 및 비디오 사전로드로 빠른 재생

8. Third-party resources

- 타사 JavaScript 성능
- 느린 타사 JavaScript 식별
- 타사 JavsCRIPT를 효율적으로 로드
- **Third-Party JavaScript**
  - 타사 스크립트란
  - 페이지에서 타사 스크립트를 식별하는 방법
  - 페이지에서 타사 스크립트 영향 측정 방법
  - 타사 스크립트를 효율적으로 로드 하는 방법
  - 피해야할 타사 스크립트 패턴
  - 완화 전략
  - 결론

9. Network Quality

- 네트워크 품질에 따른 적응형 서비스

10. CSS

- 중요하지 않은 CSS 연기
- CSS 축소
- 중요한 CSS 추출
- 미디어 쿼리로 CSS 배경 이미지 최적화

11. JavaScript

- PRPL 패턴으로 즉시 로딩 적용
- 코드 분할로 JavaScript 페이로드 감소
- 사용하지 않는 코드 제거
- 네트워크 페이로드 축소 및 압축
- 더 빠른 페이지로드를 위해 최신 코드를 최신 브라우저에 제공
- 더 빠른 애플리케이션을 위해 최신 JavaScript를 게시, 제공 및 설치
- CommonJS가 번들을 더 크게 만드는 방법
- **JavaScript**

  - **Three Shaking**

    - Three Shaking이란
    - Three Shaking Point 찾기
    - Babel이 ES6 모듈을 CommonJS 모듈로 트랜스파일하지 못하도록 하기
    - 부작용 염두
    - 필요한 것만 가져오기
    - 작업이 어려울때

  - **Code Splitting**

12. **Client Hints**

- 콘텐츠 협상에 관한 모든 것
- Opting in
- All the client hints
  - Device Hint
  - Network Hint
- Tying it all together
  - Responsive Images
  - Helping users on slow networks
- Mind those caches
- Client hints in service workers

13. **Sava-Data**

- 경량 페이지 필요성
- Save-Data 요청 헤더
- 브라우저 지원
- Save-Data 설정 감지
- 구현 팁 및 모범 사례
- 조리법
  - 서버 측 코드에서 저장 데이터 확인
  - 고해상도 화면에 저해상도 이미지 제공
  - 중요하지 않은 이미지 생략
  - 필수가 아닌 웹 글꼴 생략
  - 서버 푸시 옵트 아웃

### 3-6. Measure performance in the field

1. Chrome UX 보고서를 사용해 현장 성능 확인
2. 데이터 스튜디오에서 CrUX 대시보드 사용
3. PageSpeed Insights에서 Chrome UX 보고서 사용
4. BigQuery에서 Chrome UX 보고서 사용
5. Chrome UX 보고서 API 사용

### 3-7. Build a performance culture

1. 속도 가치
2. 성능이 어떻게 전환을 개선 할 수 있는지
3. 성능 향상을 위해 무엇을 측정해야 하는지
4. 메트릭을 보고하고 성과 문화를 구축하는 방법
5. 기능 간 웹 사이트 속도 수정
6. 사이트 속도 및 비지니스 메트릭 관련

- **Webpack**
  1. Introduction
  2. Decrease Front-end Size
  3. Make Use of Long-term Caching
  4. Monitor and analyze the app
  5. Conclusion

### 3-8. **HTTP**

1. **Requests**

- 텍스트 리소스 결합
- 그래픽 리소스 결합
- 주의 사항
- 자바 스크립트 위치 및 인라인 푸시
  - 스크립트 위치
  - 코드 위치
- 요약

2. **Caching**

- 브라우저 호환성
- HTTP 캐시 작동 방식
- 요청 헤더 : 기본값 유지
- 응답 헤더 : 웹 서버 구성
- 어떤 응답 헤더 값을 사용해야하는지
- 버전이 지정된 URL에 대한 수명이 긴 캐싱
- 버전이 없는 URL에 대한 서버 재 검증
- 요약

### 3-9. **Resources**

1. **Never Load the Same Resource Twice**

- Offline Cookbook
- Web Storage
  - Overview
  - Offline Storage for PWA
  - Cache API
  - IndexedDB
- Offline UX Considerations

2. **Lazy Loading Resources**

- Images & Video

3. **Resource Prioritization**

4. **Navigation & Resource Timing**

- 브라우저 네트워크 요청 API
- 네트워크 요청 수명과시기
  - DNS 조회
  - 연결 협상
  - 요청 및 협상
  - 기타
- 애플리케이션 코드에서 타이밍 획득
  - 타이밍을 수동으로 잡는 다른 방법
  - PerformanceObserver를 사용해 성능 항목 수신
- Phone Home
  - navigator.sendBeacon 사용

### 3-10. **Order Loading Thoughtfully**

1. Critical Rendering Path

- 개요
- 객체 모델 구성
- 렌더링 트리 건설, 레이아웃 및 페인트
- 렌더링 차단 CSS
- JavaScript로 상호 작용 추가
- 중요한 렌더링 경로 측정
- 중요한 렌더링 경로 성능 분석
- 중요한 렌더링 경로 최적화
- PageSpeed 규칙 및 권장 사항

2. Introduction to HTTP/2

---

## 4. **Rendering**

### 4-1. JavaScript Execution

1. 시각적 변경을 위해 requestAnimationFrame 사용
2. 복잡성 감소 또는 웹 작업자 사용
3. JavaScript의 프레임 세금
4. JavaScript를 마이크로 최적화하지 않기

### 4-2. Style

1. 선택기의 복잡성 감소
2. 스타일링되는 요소 수 줄이기
3. 스타일 재계산 비용 측정
4. 블록, 요소, 수정자 사용

### 4-3. Layout

1. 가능한 한 레이아웃 피하기
2. Flexbox 활용
3. 강제 동기 레이아웃 방지
4. 레이아웃 스래싱 방지

### 4-4. Paint

1. 레이아웃 및 페인트 트리거
2. Chrome DevTools를 사용해 페인트 병목 현상을 빠르게 식별
3. 움직이거나 희미해지는 요소 홍보
4. 페인트 영역 줄이기
5. 페인트 복잡성 단순화

### 4-5. Stick to Compositor-Only Properties and Manage Layer Count

1. 애니메이션에 변형 및 불투명도 변경 사용
2. 애니메이션을 적용하려는 요소 홍보
3. 레이어 관리 및 레이어 폭발 방지
4. Chrome DevTools를 사용해 앱의 레이어 이해

### 4-6. Debouce Your Input Handlers

1. 장기 실행 입력 핸들러 방지
2. 입력 처리기에 스타일 변경 방지
3. 스크롤 핸들러 디바운스

---

## 5. **Audit**

### 5-1. Prework

1. 유효성 검사 : 아키텍처 및 코드
2. 다양한 장치 및 컨텍스트로 테스트
3. UI 및 UX 사용해보기

### 5-2. Security

### 5-3. Performance audits

1. 리소스 요청 기록 : 수, 크기, 유형 및 타이밍
2. 메모리 및 CPU 로드 확인
3. 첫번째 및 후속로드 성능 테스트
4. 결과 저장
5. PWA Test
6. 분석, 이벤트 추적 및 비지니스 메트릭을 사용해 실제 성능 추적
7. 실제 경험 : 화면 및 비디호 녹화

### 5-5. Share the result

1. 컨텍스트 제공
2. 잠재력 입증

### 5-6. Next Steps
