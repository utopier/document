# chapter

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

## 54. 함수

1. Hello,world 출력 함수

```c
#include <stdio.h>

void hello()
{
    printf("Hello,world!\n");
}

int main()
{
    hello();

    return 0;
}
```

- **지역변수**
  - 함수 안에 선언된 변수를 지역변수라고 하며 함수가 끝나면 사라짐

```c
#include <stdio.h>

void hello()
{
    int num1 = 10;

    printf("Hello, %d\n", num1);
}

int main()
{
    hello();
    printf("%d", num1); // 컴파일 에러

    return 0;
}
```

2. 함수 선언과 정의 분리

```c
#include <stdio.h>

void hello(); // 함수 원형 선언

int main()
{
    hello();

    return 0;
}

void hello() // 함수 정의
{
    printf("Hello, world\n");
}
```

3. 함수 디버깅

## 55. 함수에서 반환값 사용

1. 정수,실수,불 반환값 사용

```c
#include <stdio.h>
#include <stdbool.h>

int one()
{
    return 1;
}
float realNumber()
{
    return 1.234567f;
}
bool truth()
{
    return true;
}

int main()
{
    float num1;
    bool b1;

    num1 = realNumber();
    b1 = truth();

    printf("%f\n", num1); // 1.234567
    printf("%d\n", b1); // 1

    return 0;
}
```

- **반환값의 자료형과 자료형 변환**

```c
int one()
{
    float a = 1.1f;

    return (int)a;
}

int main()
{
    int num1;
    num1 = one();

    printf("%d\n", num1); // 1

    return 0;
}
```

```c
#include <stdio.h>

float onePointOne()
{
    return 1.1f;
}

int main()
{
    int num1;
    num1 = (int)onePointOne();

    printf("%d\n", num1); // 1

    return 0;
}
```

2. 포인터 반환

```c
#include <stdio.h>
#include <stdlib.h> // malloc, free

int *ten()
{
    int *numPtr = malloc(sizeof(int));

    *numPtr = 10;

    return numPtr;
}

int main()
{
    int* numPtr;

    numPtr = ten();

    printf("%d\n", *numPtr); // 10

    free(numPtr);

    return 0;
}
```

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h> // malloc, free
#include <string.h> // strcpy

char *helloLiteral()
{
    char *s1 = "Hello, world";

    return s1;
}
char *helloDynamicMemory()
{
    char *s1 = malloc(sizeof(char)* 20);

    strcpy(s1, "Hello, world");

    return s1;
}
int main()
{
    char *s1;
    char *s2;

    s1 = helloLiteral();
    s2 = helloDynamicMemory();

    printf("%s\n", s1);
    printf("%s\n", s2);

    free(s2);

    return 0;
}
```

3. void 포인터 반환

- 자료형에 상관없이 값을 가져오고 싶을때는 void 포인터를 활용

```c
#define _CRT_SECURE_NO_WARNINGS
// strcpy 보안경고로 인한 컴파일 에러 방지
#include <stdio.h>
#include <stdlib.h> // malloc, free
#include <string.h> // strcpy

void *allocMemory()
{
    void *ptr = malloc(100);

    return ptr;
}

int main()
{
    char *s1 = allocMemory();
    strcpy(s1, "Hello, world");
    printf("%s\n", s1);
    free(s1);

    int *numPtr1 = allocMemory();
    numPtr[0] = 10;
    numPtr[1] = 20;
    printf("%d %d\n", numPtr1[0], numPtr1[1]); // 10 20
    free(numPtr1); // 동적 메모리 해제

    return 0;
}
```

4. 구조체와 구조체 포인터 반환

- 여러값을 반환하고 싶을때는 구조체를 활용

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

struct Player {
    char name[20];
    int age;
    char team[100];
};

struct Player getPlayer()
{
    struct Player p;

    strcpy(p.name, "손흥민");
    p.age = 29;
    strcpy(p.team, "레알 마드리드");

    return p;
}

int main()
{
    struct Player p1;

    p1 = getPlayer();

    printf("이름: %s\n", p1.name);
    printf("나이: %s\n", p1.age);
    printf("팀: %s\n", p1.team);

    return 0;
}
```

- **구조체 변수의 메모리 주소 반환**
  - 함수가 끝나면 구조체변수도 사라지므로 &로 구조체변수의 메모리주소를 반환하면 안됨
- **구조체 별칭 사용**
  - 구조체 포인터 별칭을 정의했으면 함수의 반환값 자료형에 구조체 포인터 별칭을 지정해주면 됨

```c
typedef struct _Player{
    char name[20];
    int age;
    char team[100];
} Player, *PPlayer;

PPlayer allocPlayer()
{
    PPlayer p = malloc(sizeof(Player));

    strcpy(p->name, "손흥민");
    p->age = 29;
    strcpy(p->address, "레알 마드리드");

    return p;
}
```

- **공용체와 열거형 반환**

```c
#include <stdio.h>

union
```

## 56. 함수에서 매개변수 사용

1. 함수에서 매개변수 사용
2. 매개변수 사용
3. 덧셈 함수 만들기
4. 디버거에서 매개변수와 반환값 확인

## 57. 함수에서 포인터 매개변수 사용

1. 함수에서 포인터 매개변수 사용
2. 포인터 매개변수 사용
3. void 포인터 매개변수 사용
4. 이중포인터 매개변수 사용
5. 문자열 매개변수 사용

## 58. 함수에서 배열 매개변수 사용

1. 배열 매개변수 사용
2. 2차원 배열 매개변수 사용

## 59. 함수에서 구조체 매개변수 사용

1. 구조체 매개변수 사용
2. 구조체 포인터 매개변수 사용

## 60. 함수에서 가변 인자 사용

1. 가변인자 함수 생성
2. 자료형이 다른 가변인자 함수 생성

## 61. 함수에서 재귀호출 사용

1. 재귀호출 사용
2. 재귀호출로 팩토리얼 생성

## 62. 함수 포인터 사용

1. 함수포인터 사용
2. 함수포인터 생성
3. 반환값과 매개변수가 있는 함수 포인터

## 63. 함수 포인터 활용

1. 함수포인터 배열 사용
2. 함수포인터를 구조체 멤버로 사용
3. 함수 포인터를 함수 매개변수로 사용
4. 함수 포인터를 함수 반환값으로 사용
5. typedef로 함수 포인터 별칭 정의

## 64. 파일에서 문자열 읽고 쓰기

## 65. 파일 포인터 활용

## 66. 파일에서 구조체 읽고 쓰기

## 67. 배열 정렬

## 68. 연결리스트 구현

## 69. 매크로 사용

## 70. 조건부 컴파일과 파일 포함 사용

## 71. 여러 소스 파일 사용

## 72. 전역 변수 사용

## 73. 기억 부류 지정자 사용

## 74. 실행 파일 옵션 사용
