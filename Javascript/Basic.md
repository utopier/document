# Javascript Basic

- Reference
  - https://poiemaweb.com/
  - https://www.zerocho.com/
  - https://javascript.info/
  - https://developer.mozilla.org/ko/docs/Web/JavaScript

---

## Chapter

1. 동작원리
2. Basic Syntax
3. Data Type & Variable
4. Operator
5. Control Flow
6. Type Coercion
7. Object
8. Immutability
9. Function
10. Type Check
11. Prototype
12. Scope
13. Strict mode
14. this
15. Execution Context
16. Closure
17. Built in Object
18. Global Object
19. Number
20. Math
21. Date
22. Regexp
23. String
24. Array
25. Array Higher Order Function
26. DOM
27. Event
28. Error
29. Lazy evaluation
30. Overriding & Overloading
31. Throttling & Debouncing
32. Syntatic Sugar
33. Recursion & Memoization
34. Object Properties Configuration

- Property flags and descriptors
- Property getters and setters

35. Error Handling

- Error Handling try...catch
- Custom errors, extending Error

36. UI Events

- Mouse Events
- Pointer Events
- Moving the mouse: mouserover/out, mouserenter/leave
- Keyboard: keydown and keyup
- Drag'n'Drop with mouse events
- Scrolling

37. Forms, controls
38. Document & Resource loading

- Page: DOMContentLoaded, load, beforeunload, unload
- Resource loading: onload and onerror
- Scripts: async, defer

39. Mutation observer
40. Event loop: microtasks and macrotasks
41. Selection and Range
42. Frames & Windows

- Popups and window methods
- Cross-window communication
- The clickjacking attack

43. Binary data, files

- ArrayBuffer, binary arrays
- TextDecoder and TextEncoder
- Blob
- File and FileReader

44. Network requests

- Fetch
- FormDate
- Fetch: Download progress
- Fetch: Abort
- Fetch: Cross-Origin Requests
- Fetch API
- URL obejcts
- XMLHttpRequest
- Resumable file upload
- Long polling
- WebSocket
- Server Sent Events

45. Storing data in the browser

- Cookies, document.cookie
- LocalStorage, SessionStorage
- IndexedDB

46. Animation

- Bezier curve
- CSS-animations
- JavaScript animations

47. Web Components

- From the orbital height
- Custom elements
- Shadow DOM
- Template element
- Shadow DOM slots, composition
- Shadow DOM styling
- Shadow DOM and evnets

48. Regular expressions

- Patterns and flags
- Character classes
- Unicode
- Anchors
- Multiline mode of anchors
- Word boundary
- Escaping, special characters
- Sets and ranges
- Quantifiers +,\*,? and {n}
- Greedy and lazy quantifiers
- Capturing groups
- Backreferences in pattern
- Alternation (OR) |
- Lookahead and lookbehind
- Catastrophic backtracking
- Sticky flag "y", seraching at position
- Methods of RefExp and String

---

## 1. 동작원리

- https://medium.com/@vdongbin/javascript-%EC%9E%91%EB%8F%99%EC%9B%90%EB%A6%AC-single-thread-event-loop-asynchronous-e47e07b24d1c

## 2. Basic Syntax

1. 변수
   - 값을 할당하고 저장된 값을 참조하기 위해 사용
   - 변수 이름을 통해 값의 의미를 명확히 해 코드 가독성 높임
   - 위치(메모리상 주소)를 기억하는 저장소
   - 메모리 주소에 접근하기 위해 사람이 이해할 수 있는 언어로 지정한 식별자(Identifier)
2. 값
   - 값은 다양한 방법으로 생성할 수 있음
   - 가장 간단한 방법은 리터럴 표기법(literal notation)
   - 자바스크립트의 모든 값을 데이터 타입(7가지)을 갖는다
     - 원시타입(primitive data type)
       1. number
       2. string
       3. boolean
       4. null
       5. undefined
       6. symbol
     - 객체 타입(Object data type)
       1. object
3. 연산자
   - 하나 이상의 표현식을 대상으로 산술,할당,비교,논리 타입 연산등을 수행해 하나의 값을 만듬.
   - 연산의 대상을 피연산자 함.
   - 피연산자의 타입을 반드시 일치할 필요 없음. 자바스크립트는 암묵적 타입 강제 변환을 통해 연산을 수행함.
4. 키워드
   - 수행할 동작을 규정한 것
5. 주석
   - 작성된 코드의 의미를 설명하기 위해 사용
   - 주석 없이도 읽을 수 있는 코드가 최선
6. 문
   - 프로그램(스크립트)은 컴퓨터에 의해 단계별로 수행될 명령들의 집합
   - 각각의 명령을 문이라 하며 문이 실행되면 무슨 일인가가 일어나게 됨
   - 문은 리터럴, 연산자, 표현식, 키워드 등으로 구현되며 세미콜론으로 끝남
   - 문은 코드블록으로 그룹화할 수 있다
   - 일반적으로 위에서 아래로 순서대로 실행되며, 실행순서는 조건문, 반복문의 사용으로 제어할 수 있다. 또는 함수 호출로 변경될 수 있다.
   - 다른 언어와 달리 자바스크립트는 블록 스코프를 생성하지 않고 함수 스코프만이 생성된다.
7. 표현식
   - 표현식은 하나의 값으로 평가된다
8. 문 vs 표현식
9. 함수
   - 어떤 작업을 수행하기 위해 필요한 문들의 집합을 정의한 코드 블록
   - 코드의 재사용
10. 객체

- 자바스크립트는 객체 기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 모든 것이 객체이다
- 원시타입을 제외한 나머지 값들은 모두 객체이다.
- 데이터를 의미하는 프로퍼티와 데이터를 참조하고 조작할 수 있는 동작을 의미하는 메소드로 구성된 집합니다
- 자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 프로토타입이라고 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다.

11. 배열

- 배열은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다.
- 자바스크립트의 배열은 객체이며 내장메소드를 포함하고 있다.

## 3. Data Type & Variable

1. Data Type
   - **원시타입**
     - number
     - string
     - boolean
     - undefined
     - null
     - symbol
   - **객체타입(Object type, Reference type)**
2. Variable
   - 선언
   - 중복 선언
   - 동적 타이핑
   - 변수 호이스팅
   - var 키워드로 선언된 변수의 문제점

## 4. Operator

1. 표현식과 연산자
2. 문과 표현식
3. 연산자란
4. 산술 연산자
   - 이항 산술 연산자
   - 단항 산술 연산자
   - 문자열 연결 연산자
5. 할당 연산자
6. 비교 연산자
   - 동등 / 일치 비교 연산자
   - 대소 관계 비교 연산자
7. 삼항 조건 연산자
8. 논리 연산자
9. 쉼표 연산자
10. 그룹 연산자
11. typeof 연산자

## 5. Control Flow

1. 블록문
2. 조건문
   - if..else문
   - switch문
3. 반복문
   - for문
   - while문
   - do..while문
4. break문
5. continue문

## 6. Type Coercion

1. 타입 변환이란
2. 암묵적 타입 변환
   - 문자열 타입으로 변환
   - 숫자 타입으로 변환
   - 불리언 타입으로 변환
3. 명시적 타업 변환
   - 문자열 타입으로 변환
   - 숫자 타입으로 변환
   - 불리언 타입으로 변환
4. 단축 평가

## 7. Object

1. 객체란
2. 객체 생성 방법
3. 객체 프로퍼티 접근
4. Pass-by-reference
5. Pass-by-value
6. 객체의 분류

## 8. Immutability

1. immutable value vs mutable value
2. immutable data pattern
   - Object.assign
   - Object.freeze
   - Immutable.js

## 9. Function

1. 함수 정의
   - 함수 선언문
   - 함수 표현식
   - Function 생성자 함수
2. 함수 호이스팅
3. First-class object(일급 객체)
4. 매개변수(Parameter, 인자)
   - 매개변수 vs 인수
   - Call-by-value
   - Call-by-reference
5. 반환값
6. 함수 객체의 프로퍼티
   - arguments
   - caller
   - length
   - name
   - proto 접근자 프로퍼티
   - prototype
7. 함수의 다양한 형태
   - 즉시 실행 함수
   - 내부 함수
   - 재귀 함수
   - 콜백 함수

## 10. Type Check

1. typeof
2. Object.prototype.toString
3. intanceof
4. 유사 배열 객체

## 11. Prototype

## 12. Scope

## 13. Strict mode

## 14. this

## 15. Execution Context

## 16. Closure

## 17. Built in Object

## 18. Global Object

## 19. Number

## 20. Math

## 21. Date

## 22. Regexp

## 23. String

## 24. Array

## 25. Array Higher Order Function

## 26. DOM

## 27. Event

## 28. Error

## 29. Lazy evaluation

## 30. Overriding & Overloading

## 31. Throttling & Debouncing

## 32. Syntatic Sugar

## 33. Recursion & Memoization

## 34. Object Properties Configuration

- Property flags and descriptors
- Property getters and setters

## 35. Error Handling

- Error Handling try...catch
- Custom errors, extending Error

## 36. UI Events

- Mouse Events
- Pointer Events
- Moving the mouse: mouserover/out, mouserenter/leave
- Keyboard: keydown and keyup
- Drag'n'Drop with mouse events
- Scrolling

## 37. Forms, controls

## 38. Document & Resource loading

- Page: DOMContentLoaded, load, beforeunload, unload
- Resource loading: onload and onerror
- Scripts: async, defer

## 39. Mutation observer

## 40. Event loop: microtasks and macrotasks

## 41. Selection and Range

## 42. Frames & Windows

- Popups and window methods
- Cross-window communication
- The clickjacking attack

## 43. Binary data, files

- ArrayBuffer, binary arrays
- TextDecoder and TextEncoder
- Blob
- File and FileReader

## 44. Network requests

- Fetch
- FormDate
- Fetch: Download progress
- Fetch: Abort
- Fetch: Cross-Origin Requests
- Fetch API
- URL obejcts
- XMLHttpRequest
- Resumable file upload
- Long polling
- WebSocket
- Server Sent Events

## 45. Storing data in the browser

- Cookies, document.cookie
- LocalStorage, SessionStorage
- IndexedDB

## 46. Animation

- Bezier curve
- CSS-animations
- JavaScript animations

## 47. Web Components

- From the orbital height
- Custom elements
- Shadow DOM
- Template element
- Shadow DOM slots, composition
- Shadow DOM styling
- Shadow DOM and evnets

## 48. Regular expressions

- Patterns and flags
- Character classes
- Unicode
- Anchors
- Multiline mode of anchors
- Word boundary
- Escaping, special characters
- Sets and ranges
- Quantifiers +,\*,? and {n}
- Greedy and lazy quantifiers
- Capturing groups
- Backreferences in pattern
- Alternation (OR) |
- Lookahead and lookbehind
- Catastrophic backtracking
- Sticky flag "y", seraching at position
- Methods of RefExp and String
