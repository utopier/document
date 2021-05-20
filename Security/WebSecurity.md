# WebSecurity

---

## Summary

---

## References

- **Google Developer Web**
- **OWASP TOP 10**

---

## Chapter

- **Google Developer Web Security**

1. Content Security Policy
2. Encrypting Data In Transit
   - Why HTTPS matters
   - Important Security Terminology
   - Enabling HTTPS on Your Servers
3. Preventing Mixed Content
   - What Is Mixed Content
   - Preventing Mixed Content
4. Help, I've been hacked
   - Overview
   - How do I know if my site is hacked?
   - Top ways websites get hacked by spammers
   - Build a support team
   - Quarantine your site
   - Use Search Console
   - Access spam damage
     - Overview
     - Fixing the Japanese keyword hack
     - Fixing the gibberish hack
     - Fixing the cloaked keywords and links hack
   - Hacked with malware
   - Identify teh vulnerability
   - Clean and maintain your site
   - Request a review
   - Glossary for hacked sites
   - FAQs for hacked sites

- **OWASP TOP 10(2017)**

1. Injection(인젝션)
2. Broken Authentication(취약한 인증)
3. Sensitive Data Exposure(민간함 데이터 노출)
4. XML External Entities(XXE)(XML 외부 개체)
5. Broken Access Control(취약한 접근 통제)
6. Security Misconfiguration(잘못된 보안 구성)
7. Cross-Site Scripting(XSS, 크로스 사이트 스크립팅)
8. Insecure Deserialization(안전하지 않은 역직렬화)
9. Using Components with Known Vulnerabilites(알려진 취약점이 있는 구성요소 사용)
10. Insufficient Loggin & Monitoring(불충분한 로깅 및 모니터링)

---

**Google Developer Web Security**

## 1. Content Security Policy

1. 소스 허용 목록
   - 정책은 다양한 자원에 적용
   - 구현 세부 정보
   - 샌드 박싱
   - 메타 태그
2. 인라인 코드는 유해한 것으로 간주됨
3. 평가도
4. 보고
5. 실제 사용
   - 소셜 미디어 위젯
   - 잠금
   - SSL 전용

## 2. Encrypting Data In Transit

1. Why HTTPS matters
   - HTTPS는 웹 사이트의 무결성을 보호
   - HTTPS는 사용자 개인 정보와 보안을 보호
   - HTTPS는 웹의 미래
2. Important Security Terminology
   - 공개 및 개인 키 쌍이란?
   - 인증 기관이란?
   - 인증서 서명 요청 이란?
3. Enabling HTTPS on Your Servers
   - 키 및 인증서 서명 요청 생성
     - 공개/개인 키 쌍 생성
     - 인증서 서명 요청 생성
     - CSR을 인증 기관에 제출
   - 서버에서 HTTPS 활성화
   - 사이트 내 URL을 상대적으로 만들기
   - HTTP를 HTTPS로 리디렉션
   - 엄격한 전송 보안 및 보안 쿠키 켜기
     - 검색 순위
     - 공연
     - 리퍼러 헤더
     - 광고 수익

## 3. Preventing Mixed Content

1. What Is Mixed Content
   - 두 가지 유형의 혼합 콘텐츠
   - 패시브 혼합 콘텐츠
   - 활성 혼합 콘텐츠
   - 혼합 콘텐츠 사양
2. Preventing Mixed Content
   - 사이트를 방문해 혼합 콘텐츠 찾기
   - 사이트에서 혼합 콘텐츠 찾기
   - 혼합 콘텐츠 수정
   - 비표준 태그 사용주의
   - 대규모 혼합 콘텐츠 처리
   - 콘텐츠 보안 정책
   - 콘텐츠 보안 정책으로 혼합 콘텐츠 찾기
   - CSP를 사용한 보고의 대안
   - 안전하지 않은 요청 업그레이드
   - 모든 혼합 콘텐츠 차단

## 4. Help, I've been hacked

1. Overview
2. How do I know if my site is hacked?
3. Top ways websites get hacked by spammers
4. Build a support team
5. Quarantine your site
6. Use Search Console
7. Access spam damage

- Overview
- Fixing the Japanese keyword hack
- Fixing the gibberish hack
- Fixing the cloaked keywords and links hack

8. Hacked with malware
9. Identify teh vulnerability
10. Clean and maintain your site
11. Request a review
12. Glossary for hacked sites
13. FAQs for hacked sites

---

**OWASP TOP 10(2017)**

## 1. Injection(인젝션)

## 2. Broken Authentication(취약한 인증)

## 3. Sensitive Data Exposure(민간함 데이터 노출)

## 4. XML External Entities(XXE)(XML 외부 개체)

## 5. Broken Access Control(취약한 접근 통제)

## 6. Security Misconfiguration(잘못된 보안 구성)

## 7. Cross-Site Scripting(XSS, 크로스 사이트 스크립팅)

## 8. Insecure Deserialization(안전하지 않은 역직렬화)

## 9. Using Components with Known Vulnerabilites(알려진 취약점이 있는 구성요소 사용)

## 10. Insufficient Loggin & Monitoring(불충분한 로깅 및 모니터링)
