# ES6+

### References

- https://tc39.es/ecma262/
- https://github.com/tc39/proposals
- MDN
- https://junhobaik.github.io/es2016-es2020/
- https://loowin.medium.com/es2021-es12-%EC%83%88%EB%A1%9C%EC%9A%B4-%EA%B8%B0%EB%8A%A5-9eb24a0749f5
- poiemaweb.com
- zerocho.com

---

## Chapter

0. Overview
   - TC39
   - ECMAScript
   - Javascript History
   - Proposal
1. let,const
2. template riteral
3. arrow function
4. extended parameter handling
5. enahnced obejct property
6. distructuring
7. classes
8. module
9. promise
10. symbol
11. iterator, for...of
12. generator, async/await
13. Proxy
14. Reflect API
15. Map,Set,WeakMap,WeakSet
16. Decorator
17. ES2016
    - Array.prototype.includes
    - Exponentiation operator
18. ES2017
    - String Padding
    - Object.values()
    - Object.entries()
    - Object.getOwnPropertyDescriptors()
    - Trailing commas
    - async/await
19. ES2018
    - Rest/Spread Properties
    - Promise.prototype.finally()
    - Asynchronous iteration
20. ES2019
    - String.trimStart() & trimEnd()
    - Optional Catch Binding
    - Object.fromEntries()
    - Array.flat() & flatMap()
21. ES2020
    - Dynamic Import
    - Bigint
    - Promise.allSettled
    - Nullish Coalescing Operator
    - Optional Chaining
22. ES2021
    - String.prototype.replaceAll()
    - Promise.any()
    - WeakRef
    - Logical Assignment Operators
    - Numeric Separators

---

## 0. Overview

1. TC39
2. ECMAScript
3. Javascript History
4. Proposals

---

## 1. let,const
1. var
    ES5 이전 유일한 변수 선언 키워드
    - **Function Level Scope**
        전역 함수 외부에서 생성한 변수는 모두 전역 변수로 전역 변수 남발 높음.
        for 문의 변수 선언문에서 선언한 변수를 for문 코드 블록 외부에서 참조가능.
    - **var 키워드 생략 허용**
        암묵적 전역 변수 양산할 가능성이 큼
    - **변수 중복 선언 허용**
        의도하지 않은 변수값 변경이 일어날 가능성이 큼
    - **변수 호이스팅**
        변수 선언이전에 참조 가능
2. let
    - **Block Level Scope**
        대부분 언어는 Block Level Scope이나 자바스크립트 Function Level Scope
        - Block Level Scope 
            모든 코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서 참조 할 수 없다. 
            코드 블록 내부에서 선언한 변수는 지역변수이다.
        ```javascript
        var num1 = 11;
        {
            var num1 = 22;
        }
        console.log(num1); // 22
        ```
        ```javascript
        let num1 = 11;
        {
            let num1 = 22;
            let num2 = 33;
        }
        console.log(num1); // 11
        console.log(num2); // ReferenceError: num2 is not defined
        ```
    - **변수 중복 선언 금지**
        let 키워드는 동일한 이름을 갖는 변수를 선언할 수 없다.
        변수를 중복 선언하면 문법에러(SyntaxError)가 발생한다.
    - **Hoisting**
    - **Closure**
    - **전역객체와 let**
3. const
    - **선언과 초기화**
    - **상수**
    - **const와 객체**
4. var vs let vs const

---

## 2. template riteral

---

## 3. arrow function
1. 선언
2. 호출
3. this
    - **일반함수 this**
    - **화살표 함수 this**
4. 화살표 함수를 사용하면 안되는 경우
    - **메소드**
    - **prototype**
    - **생성자 함수**
    - **addEventLisenter 함수의 콜백 함수**

---

## 4. extended parameter handling
1. Default Parameter value
2. Rest 파라미터
    - **기본문법**
    - **arguments와 rest 파라미터**
3. Spread 문법
    - **함수의 인자로 사용하는 경우**
    - **배열에서 사용하는 경우**
        - concat
        - push
        - splice
        - copy
4. Rest/Spread 프로퍼티
---

## 5. enahnced obejct property
1. 프로퍼티 축약 표현
2. 프로퍼티 키 동적 생성
3. 메소드 축약 표현
4. __proto__프로퍼티에 의한 상속

---

## 6. distructuring
1. Array Distructuring
2. Object Distructuring
---

## 7. classes
1. Class Definition
2. 인스턴스 생성
3. constructor
4. 클래스 필드
5. Class field declarations proposal
6. getter, setter
    - getter
    - setter
7. 정적 메소드
8. 클래스 상속
    - extends
    - super
    - static 메소드와 prototype 메소드의 상속

---

## 8. module
1. Module Scope
2. export
3. import
---

## 9. promise
1. 프로미스란
2. 콜백 패턴의 단점
3. 프로미스 생성
4. 프로미스 후속 처리 메소드
5. 프로미스 에러 처리
6. 프로미스 체이닝
7. 프로미스 정적 메소드
    - **Promise.resolve/Promise.reject**
    - **Promise.all**
    - **Promise.race**
---

## 10. symbol
1. Symbol이란
2. Symbol 생성
3. Symbol 사용
4. Symbol 객체
    - Symbol.iterator
    - Symbol.for
---

## 11. iterator, for...of

---

## 12. generator, async/await

---

## 13. Proxy

---

## 14. Reflect API

---

## 15. Map,Set,WeakMap,WeakSet

---

## 16. Decorator

---

## 17. ES2016

1. Array.prototype.includes
2. Exponentiation operator

---

## 18. ES2017

1. String Padding
2. Object.values()
3. Object.entries()
4. Object.getOwnPropertyDescriptors()
5. Trailing commas
6. async/await

---

## 19. ES2018

1. Rest/Spread Properties
2. Promise.prototype.finally()
3. Asynchronous iteration

---

## 20. ES2019

1. String.trimStart() & trimEnd()
2. Optional Catch Binding
3. Object.fromEntries()
4. Array.flat() & flatMap()

---

## 21. ES2020

1. Dynamic Import
2. Bigint
3. Promise.allSettled
4. Nullish Coalescing Operator
5. Optional Chaining

---

## 22. ES2021

1. String.prototype.replaceAll()
2. Promise.any()
3. WeakRef
4. Logical Assignment Operators
5. Numeric Separators
