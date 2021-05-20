# Nodejs Documentation

---

### References

- https://nodejs.org/dist/latest-v14.x/docs/api/

---

## Chapter

0. 동작원리
1. Assertion testing
2. Async hooks
3. Buffer
4. C++ Addons
5. C/C++ addons with N-API
6. C++ embedder API
7. Child processes
8. Cluster
9. Command-line options
10. Console
11. Crypto
12. Debugger
13. Deprecated APIs
14. DNS
15. Domain
16. Errors
17. Events
18. File system
19. Globals
20. HTTP
21. HTTP/2
22. HTTPS
23. Inspector
24. Internationalzation
25. Modules: CommonJS modules
26. Modules: ECMAScript modules
27. Modules: module API
28. Modules: Packages
29. Net
30. OS
31. Path
32. Performance hooks
33. Policies
34. Process
35. Punycode
36. Query strings
37. Readline
38. REPL
39. Report
40. Stream
41. String decoder
42. Timers
43. TLS/SSL
44. Trace events
45. TTY
46. UDP/datagram
47. URL
48. Utilities
49. V8
50. VM
51. WASI
52. Worker threads
53. Zlib

---

## 0. 동작원리

- https://medium.com/@vdongbin/node-js-%EB%8F%99%EC%9E%91%EC%9B%90%EB%A6%AC-single-thread-event-driven-non-blocking-i-o-event-loop-ce97e58a8e21

---

## 1. Assertion testing

- Nodejs에서 제공하는 유닛테스트 테스트 모듈

---

## 2. Async hooks

---

## 3. Buffer

- Binary Data들의 Stream을 직접 다루기 위해 Nodejs API에 Buffer 클래스가 추가됨.
- **Binary Data**
  - 컴퓨터는 이진수로 데이터를 저장,표현함
  - 숫자 12 : 1100
  - 문자 L : 76 (Character Code, Code Point)
    - Character Set(문자 집합)
      - 문자를 숫자로 나타낼 수 있도록 정해놓은 규칙
      - 유니코드, 아스키코드
    - Character Encoding(문자인코딩)
      - 숫자를 바이너리 데이터로 나타내느 규칙, 숫자를 몇 bit로 나타낼 것인지
      - UTF-8, 문자가 바이트단위로 인코딩 되어야 함. 1바이트는 8개 비트의 집합
        - 숫자 12 : 00001100
        - 이미지, 비디오 데이터도 바이너리 데이터로 저장하는 방식이 정해져 있음.
- **Stream**
  - 한 지점에서 다른 지점으로 이동하는 일련의 데이터
  - 기본적으로 큰 데이터는 청크단위로 세분화되어 전송됨
  - 파일 시스템에서 바이너리 데이터들이 이동하는걸 의미함
    - file1.txt 에서 file2.txt로 옮기는 것
  - Streaming 하는동안에 buffer가 바이너리 데이터를 다룰 수 있게 도와줌.
- **Buffer**
  - 한 작업이 특정시간동안 데이터를 받을 수 있는 데이터의 최소량과 최대량이 존재함.
  - 컴퓨터에서 일반적으로 RAM에서 streaming 중에 데이터가 일시적으로 모이고, 기다리며 결국에 데이터가 처리되기 위해 내보내어 짐. 기다리는 영역이 buffer.
  - Nodejs는 데이터가 도착하는 시간이나 전송되는 속도를 제어할 수 없음. Nodejs가 결정할 수 있는건 언제 데이터를 내보내느냐임. 데이터를ㄹ 내보낼 때가 아니면 Nodejs는 데이터들을 일종의 대기영역인 RAM에 작은 영역인 buffer에 데이터를 넣어놓음.
  - buffering : 데이터가 더 모이고 도착할떄 까지 기다린다는 의미
- **Buffer 다루기**

---

4. C++ Addons
5. C/C++ addons with N-API
6. C++ embedder API
7. Child processes
8. Cluster
9. Command-line options
10. Console
11. Crypto
12. Debugger
13. Deprecated APIs
14. DNS
15. Domain
16. Errors
17. Events
18. File system
19. Globals
20. HTTP
21. HTTP/2
22. HTTPS
23. Inspector
24. Internationalzation
25. Modules: CommonJS modules
26. Modules: ECMAScript modules
27. Modules: module API
28. Modules: Packages
29. Net
30. OS
31. Path
32. Performance hooks
33. Policies
34. Process
35. Punycode
36. Query strings
37. Readline
38. REPL
39. Report

---

## 40. Stream

---

41. String decoder
42. Timers
43. TLS/SSL
44. Trace events
45. TTY
46. UDP/datagram
47. URL
48. Utilities
49. V8
50. VM
51. WASI
52. Worker threads
53. Zlib
