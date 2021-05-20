# C언어

- Reference
  - https://dojang.io/course/view.php?id=2

---

## Chapters

1. Hello, world
2. 기본문법
3. 변수
4. 디버거
5. 정수 자료형
6. 실수 자료형
7. 문자 자료형
8. 상수
9. 입력 값을 변수에 저장
10. 덧셈, 뺄셈
11. 증가, 감소 연산자
12. 곱셈, 나눗셈
13. 나머지 연산
14. 자료형 확장과 축소
15. if
16. else
17. else if
18. 비교 연산자, 삼항 연산자
19. 논리 연산자
20. 불 자료형
21. 비트 연산자
22. 연산자 우선순위
23. switch
24. for
25. while, do while
26. break, continue
27. goto
28. 포인터
29. 메모리
30. 배열
31. 2차원 배열
32. 포인터와 배열 응용
33. 문자열
34. 입력값을 문자열에 저장
35. 문자열 길이를 구하고 비교
36. 문자열 복사 및 붙이기
37. 문자열 만들기
38. 문자열 검색
39. 문자열 자르기
40. 문자열,숫자를 서로 변환
41. 회문 판별과 N-gram
42. 구조체
43. 구조체 포인터
44. 두 점 사이의 거리 구하기
45. 구조체 멤버 정렬
46. 구조체와 메모리 활용
47. 구조체 배열
48. 공용체 사용
49. 구조체와 공용체 활용
50. 구조체와 비트 필드
51. 열거형
52. 자료형 변환
53. 포인터 연산
54. 함수
55. 함수에서 반환값 사용
56. 함수에서 매개변수 사용
57. 함수에서 포인터 매개변수 사용
58. 함수에서 배열 매개변수 사용
59. 함수에서 구조체 매개변수 사용
60. 함수에서 가변 인자 사용
61. 함수에서 재귀호출 사용
62. 함수 포인터 사용
63. 함수 포인터 활용
64. 파일에서 문자열 읽고 쓰기
65. 파일 포인터 활용
66. 파일에서 구조체 읽고 쓰기
67. 배열 정렬
68. 연결리스트 구현
69. 매크로 사용
70. 조건부 컴파일과 파일 포함 사용
71. 여러 소스 파일 사용
72. 전역 변수 사용
73. 기억 부류 지정자 사용
74. 실행 파일 옵션 사용

---

## 1. Hello, world

1. Hello world 출력

```c
#include <stdio.h>

int main()
{
  printf("Hello, world!\n");
  return 0;
}
```

2. 서식 지정자(format specifier)

```c
#include <stdio.h>

int main()
{
  printf("%s, %s\n","Hello","1234");
  return 0;
}
```

## 2. 기본문법

1. 세미콜론

- 구문이 끝날때 세미콜론을 붙여야 함
- 세미콜론을 생략하면 컴파일 에러가 발생함

2. 주석

- 한 줄 주석 : //
- 여러줄 주석 : /\* \*/

3. 중괄호

- 코드의 범위
- if, for 등의 키워드가 영향을 미치는 영역 지정
- 구조체(공용체, 열거형)정의
- 중괄호 뒤에 세미콜론을 붙일때도 있고 붙이지 않을때도 있음

4. 들여쓰기

- 코드 가독성을 위해 들여쓰기 사용

## 3. 변수

1. 변수 생성

- **변수 이름 규칙**
  - 영문 문자와 숫자를 사용할 수 있음
  - 대소문자를 구분
  - 문자부터 시작해야하며 숫자부터 시작하면 안됨
  - 밑줄 문자로 시작할 수 있음
  - C언어 키워드는 사용할 수 없음
- **자료형 종류**
  - chart, short, int, long : 정수
  - float, double : 실수
  - void : 형태가 없는 자료형

2. 변수 생성 후 값 저장

```c
#include <stdio.h>

int main()
{
  int num1;
  int num2;
  int num3;

  num1 = 100;
  num2 = 200;
  num3 = 300;

  printf("%d %d %d\n", num1, num2, num3);

  return 0;
}
```

3. 변수 여러개를 한번에 선언

```c
#include <stdio.h>

int main()
{
  int num1, num2, num3;

  num1 = 100;
  num2 = 200;
  num3 = 300;

  printf("%d %d %d\n", num1, num2, num3);
  return 0;
}
```

4. 변수를 선언하면서 초기화

```c
#include <stdio.h>

int main()
{
  int num1 = 100;
  int num2 = 200, num3 = 300;

  printf("%d %d %d\n", num1, num2, num3);
  return 0;
}
```

## 4. 디버거

## 5. 정수 자료형

1. 정수 자료형 사용

- char, int가 있으며 앞에 부호 키워드(signed, unsigned)와 크기(short,long)를 붙여 특성을 정의할 수 있음
- **정수 자료형의 크기 및 범위**
- **long**
  - 운영체제, 플랫폼마다 크기가 다름

2. 정수형 변수 선언

```c
#include <stdio.h>

int main()
{
  char num1 = -100; // 1바이트 부호 있는 정수형
  short num2 = 30000; // 2바이트 부호 있는 정수형
  int num3 = -1234567890; // 4바이트 부호 있는 정수형
  long num4 = 1234567890; // 4바이트 부호 있는 정수형
  long long num5 = -1234567890123456789; // 8바이트 부오 있는 정수형

  unsinged char num1 = 200; // 1바이트 부호 없는 정수형
  unsigned short num2 = 60000; // 2바이트 부호 없는 정수형
  unsigned int num3 = 4123456789; // 4바이트 부호 없는 정수형
  unsigned long num4 = 4123456789; // 4바이트 부호 없는 정수형
  unsigned long long num5 = 12345678901234567890; // 8바이트 부호 없는 정수형

  // char, short, int는 %d, long은 %ld, long long은 %lld
  printf("%d %d %d %ld %lld\n", num1, num2, num3, num4, num5);
  // unsigned char, unsigned short, unsigned int는 %u, unsigned long은 %lu, unsigned long long은 %llu
  printf("%u %u %u %lu %llu\n", num1, num2, num3, num4, num5);

  return 0;
}
```

3. 오버플로우와 언더플로우

```c
#include <stdio.h>

int main()
{
  char num1 = 128; // 최댓값 127보다 큰 값
  unsigned char num2 = 256; // 최댓값 255보다 큰 값

  printf("%d %u\n", num1, num2); // -128 0;
}
```

4. 자료형 크기 구하기

- sizeof 표현식
- sizeof(자료형)
- sizeof(표현식)

```c
#include <stdio.h>

int main()
{
  int num1 = 0;
  int size;

  size = sizeof num1;

  printf("num1 자료형 크기 : %d\n", size);
  printf("char: %d, short: %d, int: %d, long: %d, long long: %d\n", sizeof(char), sizeof(short), sizeof(int), sizeof(long), sizeof(long long));

  return 0;
}
```

5. 최솟값과 최댓값

```c
#include <stdio.h>
#include <limits.h> // 자료형 최댓값 최솟값이 정의된 헤더 파일

int main()
{
  char num1 = CHAR_MAX + 1; // 오버플로우
  short num2 = SHRT_MIN - 1; // 언더플로우
  int num3 = INT_MAX + 1; // 오버플로우
  long long num4 = LLONG_MIN - 1; // 언더플로우
  unsigned char num5 = UCHAR_MAX + 1; // 오버플로우
  unsigned short num6 =  0 - 1; // 언더플로우
  unsigned int num7 = UINT_MAX + 1; // 오버플로우
  unsigned long long num8 = 0 - 1; // 언더플로우

  printf("%u %u %u %llu\n",num5,num6,num7,num8);
  return 0;
}
```

6. 크기가 표시된 정수 자료형 사용

```c
#include <stdio.h>
#include <stdint.h> // 크기별로 정수 자료형이 정의된 헤더 파일

int main()
{
  int8_t num1 = -128;  // 8비트(1바이트) 크기의 부호 있는 정수형 변수
  int16_t num2 = 32767; // 16비트(2바이트) 크기의 부호 있는 정수형 변수
  int32_t num3 = 2147483647; // 32비트(4바이트) 크기의 부호 있는 정수형 변수
  int64_t num4 = 9223372036854775807; // 64비트(8바이트) 크기의 부호 있는 정수형

  printf("%d %d %d %lld\n", num1, num2, num3, num4);

  uint8_t num5 = 255;
  uint16_t num6 = 65535;
  uint32_t num7 = 4294967295;
  uint64_t num8 = 18446744073709551615;

  printf("%u %u %u %llu\n", num5, num6, num7, num8);

  return 0;
}
```

## 6. 실수 자료형

1. 실수자료형 사용

- **실수 자료형 크기 및 범위**
- **지수 표기법**
- **long double**

2. 실수형 변수 선언

```c
#include <stdio.h>

int main()
{
  float num1 = 0.1f; // 단정밀도 부동소수점 변수
  double num2 = 3867.215820; // 배정밀도 부동소수점 변수
  long double num3 = 9.327531l; // 배정밀도 부동소수점 변수

  printf("%f %f %Lf\n", num1, num2, num3);

  float num1 = 3.e5f;
  double num2 = -1.3827e-2;
  long double num3 = 5.21e+9l;

  printf("%e %e %Le\n", num4, num5, num6);
  return 0;
}
```

3. 자료형 크기 구하기

```c
#include <stdio.h>

int main()
{
    float num1 = 0.0f;
    double num2 = 0.0;
    long double num3 = 0.0l;

    printf("float: %d, double: %d, long double: %d\n",
        sizeof(num1),     // 4: sizeof로 float 변수의 자료형 크기를 구함
        sizeof(num2),     // 8: sizeof로 double 변수의 자료형 크기를 구함
        sizeof(num3)      // 8: sizeof로 long double 변수의 자료형 크기를 구함
    );

    return 0;
}
```

4. 최솟값과 최댓값 표현

```c
#include <stdio.h>
#include <float.h>    // 실수 자료형의 양수 최솟값, 최댓값이 정의된 헤더 파일

int main()
{
    float num1 = FLT_MIN;           // float의 양수 최솟값
    float num2 = FLT_MAX;           // float의 양수 최댓값
    double num3 = DBL_MIN;          // double의 양수 최솟값
    double num4 = DBL_MAX;          // double의 양수 최댓값
    long double num5 = LDBL_MIN;    // long double의 양수 최솟값
    long double num6 = LDBL_MAX;    // long double의 양수 최댓값

    printf("%.40f %.2f\n", num1, num2);    // 0.0000000000000000000000000000000000000118
                                           // 340282346638528859811704183484516925440.00

    printf("%e %e\n", num3, num4);         // 2.225074e-308 1.797693e+308
    printf("%Le %Le\n", num5, num6);       // 2.225074e-308 1.797693e+308

    return 0;
}
```

5. 오버플로우와 언더플로우

```c
#include <stdio.h>
#include <float.h>    // 실수 자료형의 양수 최솟값, 최댓값이 정의된 헤더 파일

int main()
{
    float num1 = FLT_MIN;    // float의 양수 최솟값
    float num2 = FLT_MAX;    // float의 양수 최댓값

    // float의 양수 최솟값을 100000000.0으로 나누면 아주 작은 수가 되면서 언더플로우 발생
    num1 = num1 / 100000000.0f;

    // float의 양수 최댓값에 1000.0을 곱하면 저장할 수 있는 범위를 넘어서므로 오버플로우 발생
    num2 = num2 * 1000.0f;

    printf("%e %e\n", num1, num2);    // 0.000000e+00 inf: 실수의 언더플로우는 0
                                      // 오버플로우는 무한대가 됨

    return 0;
}
```

## 7. 문자 자료형

1. 문자 자료형 사용

- **char의 크기 및 범위**
- **정수 10진수, 16진수와 문자 대응표**

2. 문자 변수 선언

```c
#include <stdio.h>

int main()
{
  char c1 = 'a';
  char c2 = 'b';
  char c3 = '0';
  char c4 = 0;

  printf("%c, %d 0x%x\n", c1, c1) // a, 97, 0x61
  printf("%c, %d 0x%x\n", c2, c2) // b, 98, 0x62
  printf("%c %d\n", c3, c3) // 0 48
  printf("%c %d\n", c4, c4) //   0

  return 0;
}
```

3. 문자로 연산

```c
#include <stdio.h>

int main()
{
  printf("%c %d\n",'a'+1, 'a'+1); // b 98
  printf("%c %d\n",97+1, 97+1); // b 98

  return 0;
}
```

4. 제어문자 사용

- **LF, CR, TAB 제어문자의 ASCII코드**

```c
#include <stdio.h>

int main()
{
  char lineFeed = '\n';

  printf("%d 0x%x\n", lineFeed, lineFeed);

  return 0;
}
```

## 8. 상수

1. 상수 사용

- 상수는 변하지 않는 값
- 상수는 변수처럼 리터럴이 저장된 공간

```c
const int con1 = 10; // con1은 상수, 10은 리터럴
```

2. 리터럴 사용

```c
#include <stdio.h>

int main()
{
  printf("%d\n", 10); // 10
  printf("%0%o\n", 017); // 017
  printf("0x%X\n", 0x1F);
  printf("%f\n",0.1f); // 0.10000
  printf("%c\n",'a'); // a
  printf("%s\n","Hello, world!"); // Hello, world!

  return 0;
}
```

3. 상수 사용

- const 자료형 상수이름 = 값;
- 자료형 const 상수이름 = 값;

```c
#include <stdio.h>

int main()
{
  const int con1 = 1;
  const float con2 = 0.1f;
  const char con3 = 'a';

  printf("%d %f %c\n", con1, con2, con3);

  return 0;
}
```

4. 정수 리터럴 접미사 사용

- **정수 리터럴 접미사**

```c
#include <stdio.h>

int main()
{
  printf("%ld\n", -10L);
  printf("%lld\n", -1234567890123456789LL);
  printf("%u\n", 10U);
  printf("%lu\n", 1234567890UL);
  printf("%lu\n", 10UL);
  printf("%llu\n",1234567890123456789ULL);

  printf("0%lo\n", 017L);
  printf("0%lo\n", 017UL);
  printf("0x%lX\n", 0x7FFFFFL);
  printf("0x%lX\n", 0xFFFFFFFFUL);

  return 0;
}
```

5. 실수 리터럴 접미사 사용

- **실수 리터럴 접미사**

```c
#include <stdio.h>

int main()
{
    printf("%f\n", 0.1f);     // 0.100000: float 크기의 실수 리터럴
    printf("%f\n", 0.1F);     // 0.100000: float 크기의 실수 리터럴
    printf("%f\n", 0.1);      // 0.100000: double 크기의 실수 리터럴
    printf("%Lf\n", 0.1l);    // 0.100000: long double 크기의 실수 리터럴
    printf("%Lf\n", 0.1L);    // 0.100000: long double 크기의 실수 리터럴

    printf("%f\n", 1.0e-5f);     // 0.000010: float 크기의 실수 리터럴
    printf("%f\n", 1.0e-5F);     // 0.000010: float 크기의 실수 리터럴
    printf("%f\n", 1.0e-5);      // 0.000010: double 크기의 실수 리터럴
    printf("%Lf\n", 1.0e-5l);    // 0.000010: long double 크기의 실수 리터럴
    printf("%Lf\n", 1.0e-5L);    // 0.000010: long double 크기의 실수 리터럴

    return 0;
}
```

## 9. 입력 값을 변수에 저장

1. 정수 입력 받기

- scanf(서식,변수의 주소);
  - int scanf(char const\* const_Format, ...);
  - 성공하면 가져온 값의 개수를 반환, 실패하면 EOF(-1)를 반환

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
  int num1;

  printf("정수를 입력하세요: ");
  scanf("%d", &num1);

  printf("%d\n", num1);

  return 0;
}
```

2. 한번에 정수 두개 입력 받기

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
  int num1, num2;

  printf("정수를 두 개 입력하세요: ");
  scanf("%d %d", &num1, &num2);

  printf("%d %d\n", num1, num2);

  return 0;
}
```

3. 실수 입력 받기

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
  float num1;

  printf("실수를 입력하세요: ");
  scanf("%f", &num1);

  printf("%f\n", num1);

  return 0;
}
```

4. 문자 입력 받기

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
  char c1;

  printf("문자를 입력하세요: ");
  scanf("%c", &c1);

  printf("%c\n", c1);

  return 0;
}
```

- **getchar, putchar**

```c
#include <stdio.h>

int main()
{
  chat c1 = getchar();
  putchat(c1);
  return 0;
}
```

## 10. 덧셈, 뺄셈

1. 덧셈 뺄셈

- a + b
- a - b

2. 변수 하나에서 값을 더하거나 빼기

- 변수1 = 변수1 + 값
- 변수1 = 변수1 - 값
- 변수 += 값
- 변수 -= 값

## 11. 증가, 감소 연산자

1. 증가, 감소 연산자
2. 변수의 값을 1증가, 감소

- 변수++, 변수++, --변수, 변수--

3. 실수 자료형에 증감연산자

- 실수에서도 ++,-- 연산자 사용가능

4. 문자자료형에 증감연산자

- 문자자료형도 실제로 정수이므로 ++,--연산자가 동작해 ASCII 코드대로 바뀜.

```c
#include <stdio.h>

int main()
{
  char c1 = 'b';
  char c2 = 'b';

  c1++;
  c2--;

  printf("%c %c\n", c1, c2) // c a
}
```

5. 증감연산자의 위치에 따른 차이점

- 증감연산자를 변수 앞에 사용한 것을 전위연산자.
- 증감연산자를 변수 뒤에 사용한 것을 후위연산자.

```c
#include <stdio.h>

int main()
{
  int num1 = 2;
  int num2 = 2;

  printf("%d %d\n", num1++, num2--); // 2 2
  printf("%d %d\n", num1, num2); // 3 1
}
```

## 12. 곱셈, 나눗셈

1. 곱셈,나눗셈

- a\*b
- a/b
- 정수 계산
  - 0으로 직접 나누면 컴파일 에러가 발생함
- 실수 계산
  - 덧셈,뺄셈,곱셈,나눗셈에서 계산 오차가 발생함
  - 0으로 직접 나누면 컴파일 에러가 발생함
  - 0.0으로 나누면 inf(무한대)가 나옴

2. 변수하나에서 값을 곱하거나 나누기

- 변수1 = 변수1\*값
- 변수1 = 변수1/값
- 변수 \*= 값
- 변수 /= 값

## 13. 나머지 연산

1. 나머지 연산

- a%b
- **실수의 나머지 구하기**
  - fmod, fmodf, fmodl

2. 변수하나에서 나머지 연산

- 변수1 = 변수1%값

## 14. 자료형 확장과 축소

1. 자료형 확장

- 자료형을 섞어서 사용하면 컴파일러에서 암시적 형 변환을 하게되어 자료형 크기가 큰 쪽, 표현 범위가 넓은 쪽으로 자동 변환됨. 이를 형 확장이라고 하며 값이 버려지지 않고 그대로 보전됨.
- 정수와 실수를 함께 연산하면 결과값은 실수로 나옴.

2. 자료형 축소

- 자료형의 크기가 작은 쪽, 표현 범위가 좁은쪽으로 변환되는 것을 형축소라고 함. 형 축소가 일어나면 컴파일할 때 값 손실이 일어날 수 있다고 경고가 나옴. C언어에서 자료형을 섞어쓸때 이 부분을 항상 주의해야하며 예상치 못한 버그가 발생하기 쉬움.
- 컴파일 경고가 나오지 않으려면 형변환을 해야함. 보통 형 변환은 자료손실을 감안해 구현하거나 자료형을 숨기고 싶을때 등 다양한 방식으로 활용함.

## 15. if

1. if조건문으로 특정조건일때 코드 실행

- **의사코드**
  - 실제 프로그래밍 언어가 아닌 사람의 언어로 프로그래밍 언어를 표현한 것. 알고리즘이나 컴퓨터 명령을 기술할때 사용.

2. if조건문 사용

```c
#include <stdio.h>

int main()
{
  int num1 = 10;

  if(num1 == 10){
    printf("10입니다\n");
  }

  return 0;
}
```

3. if조건문과 세미콜론
4. if조건문에서 중괄호 생략
5. if 조건문에서 실수와 문자비교

```c
#include <stdio.h>

int main()
{
  float num1 = 0.1f;
  char c1 = 'a';

  if(num1 == 0.1f)
    printf("0.1입니다\n");

  if(c1 == 'a')
    printf("a입니다\n");

  if(c1 == 97)
    printf("a입니다\n");

  return 0;
}
```

6. 사용자가 입력한 값에 if 조건문 사용

## 16. else

1. else를 사용해 두방향으로 분기
2. else사용

```c
#include <stdio.h>

int main()
{
  int num1 = 5;

  if(num1 == 10)
  {
    printf("10입니다\n");
  }
  else
  {
    printf("10이 아닙니다\n");
  }

  return 0;
}
```

3. else와 세미콜론
4. else에서 중괄호 생략

- 실행 코드가 한줄이면 생략가능

5. if조건문의 동작방식
6. 조건식을 여러개 지정

```c
int num1 = 10;
int num2 = 20;

if (num1 == 10)
    if (num2 == 20)
        printf("참\n");
    else
        printf("거짓\n");
else
    printf("거짓\n");
```

## 17. else if

1. else if를 사용해 여러방향으로 분기
2. else if사용
3. if,else if,else를 모두 사용

```c
#include <stdio.h>

int main()
{
    int num1 = 30;

    if (num1 == 10)        // num1이 10일 때
        printf("10입니다.\n");
    else if (num1 == 20)   // num1이 20일 때
        printf("20입니다.\n");
    else                   // 앞의 조건식에 모두 만족하지 않을 때
        printf("10도 20도 아닙니다.\n");

    return 0;
}
```

## 18. 비교 연산자, 삼항 연산자

1. 비교연산자와 삼항연산자

- **C 언어 비교 연산자**
  - ==, !=, >, <, >=, <=
- **C 언어 삼항 연산자**
  - ? :
- **단항, 이항, 삼항 연산자**
  - 단항 연산자 : +x, -x, ++x, --x
  - 이항 연산자 : a + b, a += b, a = b, a == b
  - 삼항 연산자 : x ? a : b

2. 비교연산자

- ==, !=, >, <, >=, <=

```c
#include <stdio.h>

int main()
{
    int num1 = 10;

    printf("%d\n", num1 == 10);    // 1: num1이 10과 같은지
    printf("%d\n", num1 != 5);     // 1: num1이 5와 다른지

    printf("%d\n", num1 > 10);     // 0: num1이 10보다 큰지
    printf("%d\n", num1 < 10);     // 0: num1이 10보다 작은지

    printf("%d\n", num1 >= 10);    // 1: num1이 10보다 크거나 같은지
    printf("%d\n", num1 <= 10);    // 1: num1이 10보다 작거나 같은지

    return 0;
}
```

3. 삼항연산자

```c
#include <stdio.h>

int main()
{
    int num1 = 5;
    int num2;

    num2 = num1 ? 100 : 200;    // num1이 참이면 num2에 100을 할당, 거짓이면 num2에 200을 할당

    printf("%d\n", num2);    // 100: num1이 5이므로 참. num2에는 100이 할당됨

    return 0;
}
```

4. if조건문과 비교연산자 사용

```c
#include <stdio.h>

int main()
{
    int num1 = 10;

    if (num1 == 10)    // num1이 10과 같은지 검사
        printf("10입니다.\n");

    if (num1 != 5)     // num1이 5와 다른지 검사
        printf("5가 아닙니다.\n");

    if (num1 > 10)     // num1이 10보다 큰지 검사
        printf("10보다 큽니다.\n");

    if (num1 < 10)     // num1이 10보다 작은지 검사
        printf("10보다 작습니다.\n");

    if (num1 >= 10)    // num1이 10보다 크거나 같은지 검사
        printf("10보다 크거나 같습니다.\n");

    if (num1 <= 10)    // num1이 10보다 작거나 같은지 검사
        printf("10보다 작거나 같습니다.\n");

    return 0;
}
```

5. 함수안에서 삼항연산자 사용

```c
#include <stdio.h>

int main()
{
    int num1 = 5;

    // 함수 안에서 삼항 연산자 사용
    printf("%s\n", num1 == 10 ? "10입니다." : "10이 아닙니다."); // num1은 5이므로 "10이 아닙니다."
                                                                // 출력

    return 0;
}
```

## 19. 논리 연산자

1. 논리연산자 사용

- **C언어 논리 연산자**
  - && : 논리곱
  - || : 논리합
  - ! : 논리부정

2. AND 연산자 사용

- a && b

3. OR 연산자 사용

- a || b

4. NOT 연산자 사용

- !x

5. 조건식과 논리연산자 사용
6. if조건문과 논리연산자 사용
7. 삼항연산자에 논리연산자 사용

## 20. 불 자료형

1. stdbool.h 헤더파일 사용

```c
#include <stdio.h>
#include <stdbool.h>

int main()
{
  bool b1 = true;

  if(b1 == true)
    printf("참\n");
  else
    printf("거짓\n");

  return 0;
}
```

2. 불자료형 크기

- bool의 크기는 1바이트

3. 불자료형과 논리연산자

```c
#include <stdio.h>
#include <stdbool.h>    // bool, true, false가 정의된 헤더 파일

int main()
{
    printf("%d\n", true && true);      // 1: true AND true는 1
    printf("%d\n", true && false);     // 0: true AND false는 0
    printf("%d\n", false && true);     // 0: false AND true는 0
    printf("%d\n", false && false);    // 0: false AND false는 0

    printf("%d\n", true || true);      // 1: true OR true는 1
    printf("%d\n", true || false);     // 1: true OR false는 1
    printf("%d\n", false || true);     // 1: false OR true는 1
    printf("%d\n", false || false);    // 0: false OR false는 0

    return 0;
}
```

4. true, false를 문자열로 출력
5. if조건문에서 불자료형 사용

## 21. 비트 연산자

1. 비트연산자 사용

- **C언어 비트 연산자**
  - &, |, ^, ~, <<, >>, &=, ^=, <<=, >>=

2. 비트 AND,OR,XOR 연산자 사용

- a & b, a | b, a ^ b

3. 비트 NOT 연산자 사용

- ~x

4. 시프트 연산자 사용

- a << b
- a >> b

5. 비트연산 후 할당

- a &= b
- a |= b
- a ^= b
- a <<= b
- a >>= b

6. 시프트 연산과 2의 거듭제곱

```c
#include <stdio.h>

int main()
{
    unsigned char num1 = 1;    //   1: 0000 0001

    printf("%u\n", num1 << 1);    //   2: 0000 0010: 2
    printf("%u\n", num1 << 2);    //   4: 0000 0100: 22
    printf("%u\n", num1 << 3);    //   8: 0000 1000: 23
    printf("%u\n", num1 << 4);    //  16: 0001 0000: 24
    printf("%u\n", num1 << 5);    //  32: 0010 0000: 25
    printf("%u\n", num1 << 6);    //  64: 0100 0000: 26
    printf("%u\n", num1 << 7);    // 128: 1000 0000: 27

    return 0;
}
```

7. 시프트연산으로 자릿수를 넘어서는 경우

```c
#include <stdio.h>

int main()
{
    unsigned char num1 = 240;    // 240: 1111 0000
    unsigned char num2 = 15;     //  15: 0000 1111

    unsigned char num3, num4;

    num3 = num1 << 2;    // num1의 비트 값을 왼쪽으로 2번 이동
    num4 = num2 >> 2;    // num2의 비트 값을 오른쪽으로 2번 이동

    printf("%u\n", num3);    // 192: 1100 0000: 맨 앞의 11이 사라져서 11000000이 됨
    printf("%u\n", num4);    //   3: 0000 0011: 맨 뒤의 11이 사라져서 00000011이 됨

    return 0;
}
```

- **최상위 비트, 최하위 비트**
  - 비트에서 첫번째 비트를 최상위 비트, 마지막 비트를 최하위 비트

8. 부호있는 자료형의 비트 연산

9. 비트연산자로 플래그 처리

## 22. 연산자 우선순위

1. 연산자 우선순위

- **C언어 연산자 우선순위**

2. 괄호사용

- 연산자 우선순위가 낮더라도 괄호로 묶어 먼저 계산할 수 있음

3. 연산자의 결합방향

- 보통 연산자는 -> 방향으로 계산하나 <- 방향인 것들도 있음

4. 결합 방향이 다른 연산자와 괄호 사용
5. 논리,비교,시프트 연산자에 괄호사용

- 논리 연산자 우선순위 : !, &&, ||
- 비교 연산자 우선순위 : <, ==
- 산술 연산자 - 시프트 연산자 순

## 23. switch

1. switch분기문으로 다양한 조건 처리

- 형식이 균일하며 처리해야할 조건이 많을때 사용

```c
switch (버튼)
{
  case 1: // 콜라 버튼
    콜라를 내보냄
    break;
  case 2: // 사이다 버튼
    사이다를 내보냄
    break;
  case 3: // 환타 버튼
    환타를 내보냄
    break;
  default:
    제공하지 않는 메뉴
    break;
}
```

2. 사용자가 입력한 값에 따라 문자열 출력

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
  int num1;

  scanf("%d", &num1);

  switch(num1)
  {
    case 1:
      printf("1입니다.\n");
      break;
    case 2:
      printf("2입니다.\n");
      break;
    default:
      printf("default\n");
      break;
  }
}
```

3. case에서 break를 사용하지 않을때의 동작

- case에서 break로 중단해주지 않으면 그 다음에 있는 case, default가 계속 실행됨

4. case에서 break생략 응용

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
  int num1;
  scanf("%d", &num1);

  switch(num1)
  {
    case 1:
    case 2:
      printf("1 또는 2입니다.\n");
      break;
    case 3:
    case 4:
      printf("3 또는 4입니다.\n");
      break;
    default:
      printf("default\n");
  }

  return 0;
}
```

5. case안에서 변수 선언

- case 안에서 변수를 선언하려면 중괄호로 묶어줘야함

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
  int num1;
  scanf("%d", &num1);

  switch(num1)
  {
    case 1:
    {
      int num2 = num1;
      printf("%d입니다.\n", num2);
      break;
    }
    case 2:
      printf("2입니다.\n);
      break;
    default:
      printf("default\n");
      break;
  }

  return 0;
}
```

6. switch에서 판별할 수 있는 자료형

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
  char c1;
  scanf("%c", &c1);

  switch(c1)
  {
    case 'a':
      printf("a입니다.\n");
      break;
    case 'b':
      printf("b입니다.\n");
      break;
    default:
      printf("default\n");
      break;
  }

  return 0;
}
```

## 24. for

1. for 반복문으로 hello,world 100번 출력

```c
for(초기식; 조건식; 변화식)
{
  반복할 코드
}
```

2. for 반복문

```c
#include <stdio.h>

int main()
{
  for(int i = 0; i < 100; i++)
  {
    printf("Hello\n");
  }

  return 0;
}
```

3. 초깃값의 변화

```c
#include <stdio.h>

int main()
{
  int i
  for(i = 0; i < 10; i++)
  {
    printf("Hello\n");
  }

  printf("%d\n",i);

  return 0;
}
```

4. 초깃값을 1부터 시작

```c
#include <stdio.h>

int main()
{
  for(int i = 1; i <= 100; i++)
  {
    printf("Hello %d\n", i);
  }

  return 0;
}
```

5. 초깃값을 감소

```c
#include <stdio.h>

int main()
{
  for(int i = 100; i > 0; i--)
  {
    printf("Hello %d\n", i);
  }

  return 0;
}
```

6. for반복문과 세미콜론

- for반복문은 if조건문과 같이 끝에 세미콜론을 붙이면 안됨

7. for반복문에서 중괄호 생략

- 반복할 코드가 한줄이면 중괄호 생략 가능

8. 입력한 횟수대로 반복

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
  int count;
  scanf("%d", &count);

  for(int i = count; i > 0; i+--)
  {
    printf("Hello %d\n", i);
  }

  return 0;
}
```

9. for반복문에서 변수 두개 사용

```c
#include <stdio.h>

int main()
{
  for(int i = 0; j = 0; i < 10; i++, j += 2)
  {
    printf("i: %d, j: %d\n", i, j);
  }

  return 0;
}
```

10. for반복문으로 무한루프

```c
#include <stdio.h>

int main()
{
  for(;;)
  {
    printf("Hello\n");
  }

  return 0;
}
```

## 25. while, do while

1. while반복문으로 hello,world 100번 출력

```c
while(조건식)
{
  반복할 코드
  변화식
}
```

2. while반복문 사용

```c
#include <stdio.h>

int main()
{
  int i = 0;
  while (i < 100)
  {
    printf("Hello\n");
    i++:
  }

  return 0;
}
```

3. 초깃값을 1부터 시작

```c
#include <stdio.h>

int main()
{
  int i = 1;
  while(i<=100)
  {
    printf("Hello %d\n",i);
    i++;
  }

  return 0;
}
```

4. 초깃값을 감소

```c
#include <stdio.h>

int main()
{
  int i = 100;
  while(i>0)
  {
    printf("Hello %d\n",i);
    i--;
  }

  return 0;
}
```

5. while반복문과 세미콜론

```c
#include <stdio.h>

int main()
{
  int i = 0;
  while(i < 100>)
  {
    printf("Hello %d\n",i);
    i++;
  }

  return 0;
}
```

6. 입력한 횟수대로 반복

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
  int count;
  scanf("%d", &count);

  int i = 0;
  while(count > 0)
  {
    print("Hello %d\n", count);
    count--;
  }

  return 0;
}
```

7. 반복횟수가 정해지지 않은 경우

- while 반복문은 반복횟수가 정해져 있지 않을때 유용함

```c
#include <stdio.h>
#include <stdlib.h> // srand, rand
#include <time.h> // time 함수

int main()
{
  srand(time(NULL));

  int i = 0;
  while(i!=3)
  {
    i = rand() % 10;
    printf("%d\n", i);
  }

  return 0;
}
```

8. while 반복문으로 무한 루프

```c
#include <stdio.h>

int main()
{
  while(1)
  {
    printf("Hello\n");
  }

  return 0;
}
```

9. while 반복문에서 중괄호 생략

- 반복할 코드가 한줄이면 중괄호 생략 가능

10. do while 반복문으로 최소한 한번은 실행

```c
do
{
  반복할 코드
  변화식
} while (조건식);
```

11. do while 반복문 사용

- do while은 처음 한번은 실행해야하며 그 이후에 조건에 따라 반복해야하는 코드를 간단하게 표현할 수 있음

```c
#include <stdio.h>

int main()
{
  int i = 0;

  do
  {
    printf("Hello %d\n", i);
    i++;
  } while (i < 100)

  return 0;
}
```

12. 초깃값을 1부터 시작

```c
#include <stdio.h>

int main()
{
  int i = 1;

  do
  {
    printf("Hello %d\n", i);
    i++;
  } while (i<=100);

  return 0;
}
```

13. 초깃값을 감소

```c
#include <stdio.h>

int main()
{
  int i = 100;

  do
  {
    printf("Hello %d\n", i);
    i--;
  } while (i > 0);

  return 0;
}
```

14. 입력한 횟수대로 반복

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
  int count;

  scanf("%d", &count);

  int i = 0;
  do
  {
    printf("Hello %d\n", i);
    i++;
  } while (i< count);

  return 0;
}
```

15. 반복횟수가 정해지지 않은 경우

```c
#include <stdio.h>
#include <stdlib.h>    // srand, rand 함수가 선언된 헤더 파일
#include <time.h>      // time 함수가 선언된 헤더 파일

int main()
{
    srand(time(NULL));    // 현재 시간값으로 시드 설정

    int i = 0;
    do
    {
        i = rand() % 10;    // rand 함수를 사용하여 무작위로 정수를 생성한 뒤 10 미만의 숫자로 만듦
        printf("%d\n", i);
    } while (i != 3);      // 3이 아닐 때 계속 반복

    return 0;
}
```

16. do while 반복문으로 무한루프

```c
#include <stdio.h>

int main()
{
    do
    {
        printf("Hello, world!\n");
    } while (1);    // while에 1을 지정하면 무한 루프

    return 0;
}
```

17. 코드를 한번만 실행

```c
#include <stdio.h>

int main()
{
    do
    {
        printf("Hello, world!\n");
    } while (0);    // while에 0을 지정하면 코드가 한 번만 실행됨

    return 0;
}
```

## 26. break, continue

1. break, continue로 반복문 제어
2. break로 반복문 끝내기

```c
#include <stdio.h>

int main()
{
    int num1 = 0;

    for (;;)    // 무한 루프
    {
        num1++;  // num1을 1씩 증가시킴

        printf("%d\n", num1);

        if (num1 == 100)    // num1이 100일 때
            break;          // 반복문을 끝냄. for의 제어흐름을 벗어남
    }

    return 0;
}
```

3. continue로 코드실행건너뛰기

```c
#include <stdio.h>

int main()
{
    for (int i = 1; i <= 100; i++)    // 1부터 100까지 증가하면서 100번 반복
    {
        if (i % 2 != 0)               // i를 2로 나누었을 때 나머지가 0이 아니면 홀수
            continue;                 // 아래 코드를 실행하지 않고 건너뜀

        printf("%d\n", i);
    }

    return 0;
}
```

4. 입력한 횟수대로 반복

```c
#define _CRT_SECURE_NO_WARNINGS    // scanf 보안 경고로 인한 컴파일 에러 방지
#include <stdio.h>

int main()
{
    int count;

    scanf("%d", &count);    // 값을 입력받음

    int i = 1;
    while (1)               // 무한 루프
    {
        printf("%d\n", i);

        if (i == count)     // i가 입력받은 값과 같을 때
            break;          // 반복문을 끝냄

        i++;
    }

    return 0;
}
```

5. 입력한 숫자까지 짝수 출력

```c
#define _CRT_SECURE_NO_WARNINGS    // scanf 보안 경고로 인한 컴파일 에러 방지
#include <stdio.h>

int main()
{
    int count;

    scanf("%d", &count);    // 값을 입력받음

    for (int i = 1; i <= count; i++)    // 1부터 증가하면서 count보다 작거나 같을 때까지 반복
    {
        if (i % 2 != 0)                 // i를 2로 나누었을 때 나머지가 0이 아니면 홀수
            continue;                   // 아래 코드를 실행하지 않고 건너뜀

        printf("%d\n", i);
    }

    return 0;
}
```

## 27. goto

1. goto로 프로그램 흐름을 원하는대로 바꾸기
2. goto와 레이블 사용

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int num1;

    scanf("%d", &num1);

    if (num1 == 1)         // num1이 1이면
        goto ONE;          // 레이블 ONE으로 즉시 이동
    else if (num1 == 2)    // num1이 2이면
        goto TWO;          // 레이블 TWO로 즉시 이동
    else                   // 1도 아니고 2도 아니면
        goto EXIT;         // 레이블 EXIT로 즉시 이동

ONE:    // 레이블 ONE
    printf("1입니다.\n");
    goto EXIT; // 레이블 EXIT로 즉시 이동

TWO:    // 레이블 TWO
    printf("2입니다.\n");
    goto EXIT; // 레이블 EXIT로 즉시 이동

EXIT:    // 레이블 EXIT
    return 0;
}
```

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int num1;

    scanf("%d", &num1);

    if (num1 == 1)         // num1이 1이면
        printf("1입니다.\n");
    else if (num1 == 2)    // num1이 2이면
        printf("2입니다.\n");

    return 0;
}

```

3. 중첩루프 빠져나오기

- break문은 현재 루프만 끝냄
- goto는 중첩루프에서 빠져나오는데 유용함

```c
#include <stdio.h>

int main()
{
    int num1 = 0;

    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            if (num1 == 20)    // num1이 20이라면
                goto EXIT;     // 레이블 EXIT로 즉시 이동

            num1++;
        }
    }

EXIT:    // 레이블 EXIT
    printf("%d\n", num1);    // 20

    return 0;
}
```

4. goto와 에러처리 패턴

- 종료 직전에 항상 실행해야하는 에러 처리코드들을 한 곳에 모아 놓고 goto를 사용하면 중복코드를 없앨 수 있으며 코드의 의도도 명확해짐
- 실무에서는 파일을 열어놓거나 메모리를 할당한 상태에서 에러가 발생하면 파일을 닫거나 메모리를 해제한 뒤 프로그램을 종효하는 패턴을 주로 사용함

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int gender;      // 성별: 남자 1, 여자 2
    int age;         // 나이
    int isOwner;     // 주택 소유 여부: 자가 1, 전월세 0

    scanf("%d %d %d", &gender, &age, &isOwner);

    printf("안녕하세요.\n");
    printf("문을 연다.\n");

    if (gender == 2)
        goto EXIT;    // 에러가 발생했으므로 EXIT로 이동

    if (age < 30)
        goto EXIT;    // 에러가 발생했으므로 EXIT로 이동

    if (isOwner == 0)
        goto EXIT;    // 에러가 발생했으므로 EXIT로 이동

EXIT:
    printf("안녕히계세요.\n");    // 에러 처리 코드를
    printf("문을 닫는다.\n");     // 한 번만 사용함

    return 0;    // 프로그램 종료
}
```
