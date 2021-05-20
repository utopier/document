# Chapter

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

---

## 28. 포인터

1. 포인터 사용
   - 변수는 컴퓨터 메모리에 생성됨. 메모리에 일정한 공간을 확보해두고 값을 저장하거나 가져오는 방식
   - 변수는 변수이름으로 사용하지만 메모리의 특정 주소에 위치하고 있으므로 메모리 주소로도 표현할 수 있음
   - &변수
   - 메모리주소는 16진수 형태, 서식지정사 %p를 사용해 출력함

```c
#include <stdio.h>

int main()
{
    int num1 = 10;
    printf("%p\n", &num1); // 008AF7FC, 컴퓨터마다 실행할때마다 달라짐

    return 0;
}
```

- **32비트, 64비트와 메모리 주소**
  - 32비트: 16진수 8자리
  - 64비트: 16진수 16자리
- **리눅스,OS X에서 %p**
  - 리눅스, OS X에서 서식 지정사 %p를 사용하면 메모리주소 008AF7FC는 0x8af7fc와 같이 앞에 0x가 붙고, A~F는 소문자로 출력됨. 높은 자릿수의 0은 생략됨

2. 포인터 변수 선언

- 자료형 \*포인터이름;
- 포인터 = &변수;

```c
#include <stdio.h>

int main()
{
    int *numPtr;
    int num1 = 10;

    numPtr = &num1;

    printf("%p\n", numPtr);
    printf("%p\n", &num1);

    return 0;
}
```

- **32비트와 64비트와 포인터 크기**
  - 32비트: 16진수 8자리
  - 64비트: 16진수 16자리
  - sizeof(포인터), sizeof(자료형 \*)
    - 32비트에서는 4바이트, 64비트에서는 8바이트

3. 역참조 연산자 사용

- \*포인터
- 포인터변수에는 메모리주소가 저장되어 있음. 메모리주소가 있는 곳으로 이동해서 값을 가져오고 싶으면 역참조 연산자 \*를 사용해야함.

```c
#include <stdio.h>

int main()
{
    int *numPtr;
    int num1 = 10;

    numPtr = &num1;

    *numPtr = 20;

    printf("%d\n", *numPtr);

    return 0;
}
```

4. 디버거에서 포인터 확인

- 디버거를 사용해 변수 메모리 주소, 포인터, 역참조를 쉽게 확인할 수 있음

5. 다양한 자료형의 포인터 선언

```c
#include <stdio.h>

int main()
{
    long long *numPtr1;
    float *numPtr2;
    char *cPtr1;

    long long num1 = 10;
    float num2 = 3.5f;
    char c1 = 'a';

    numPtr1 = &num1;
    npmPtr2 = &num2;
    cPtr1 = &c1;

    printf("%lld\n", *numPtr1);
    printf("%f\n", *numPtr2);
    printf("%c\n", *cPtr1);

    return 0;
}
```

- **상수와 포인터**
  - 포인터에도 const 키워드를 붙일 수 있는데 const 위치에 따라 특성이 달라짐.
  1. 상수를 가리키는 포인터
  2. 포인터 자체가 상수인 상황
  3. 포인터가 상수이면서 상수를 가리키는 상황

6. void 포인터 선언

   - void 포인터로 자료형이 정해지지 않은 포인터를 선언함

7. 이중포인터 사용

   - 포인터를 선언할때 \*를 두번 사용하면 포인터의 포인터를 선언함

8. 잘못된 포인터 사용
   - 포인터는 메모리 주소를 저장하는 용도이므로 값을 직접 저장하면 안되나 실제로 존재하는 메모리 주소라면 포인터에 직접 저장할 수 있음

## 29. 메모리

1. 메모리 사용
   - 포인터에 원하는 만큼 메모리 공간을 할당받아 사용하는 방법
   - malloc -> 사용 -> free 패턴
2. 메모리 할당
   - 메모리를 사용하려면 malloc 함수로 사용할 메모리 공간을 확보해야함.
   - 이때 필요한 메모리 크기는 바이트 단위로 지정해야 함(stdlib.h)

```c
#include <stdio.h>
#include <stdlib.h> // malloc, free

int main()
{
    int num1 = 20;
    int *numPtr1;

    numPtr1 = &num1;

    int *numPtr2;

    numPtr2 = malloc(sizeof(int)); // int의 크기 4바이트만큼 동적 메모리 할당

    printf("%p\n", numPtr1);
    printf("%p\n", numPtr2);

    free(numPtr2); // 동적으로 할당한 메모리 해제

    return 0;
}
```

3. 메모리에 값 저장

```c
#include <stdio.h>
#include <stdlib.h> // malloc, free

int main()
{
    int *numPtr;

    numPtr = malloc(sizeof(int));

    *numPtr = 10;

    printf("%d\n", *numPtr);

    free(numPtr);

    return 0;
}
```

4. 메모리 내용을 한꺼번에 설정

- 포인터를 역참조한 뒤 값을 할당할 때는 해당 자료형 크기만큼만 할당할 수 있음. int형 포인터라면 4바이트 크기만큼 할당
- memset 함수를 사용하면 메모리 내용을 원하는 크기만큼 특정값으로 설정할 수 있으며 함수 이름은 memory set에서 따옴(string.h)

```c
#include <stdio.h>
#include <stdlib.h> // malloc, free
#include <string.h> // memset

int main()
{
    long long *numPtr = malloc(sizeof(long long));

    memset(numPtr, 0x27, 8); // numPtr이 가리키는 메모리를 8바이트만큼 0x27로 설정

    printf("0x%llx\n", *numPtr);

    free(numPtr); // 동적으로 할당한 메모리 해제

    return 0;
}
```

- **자료형 크기와 포인터 크기**

5. 널 포인터 사용

- 메모리가 할당된 포인터도 있으나 메모리가 할당되지 않은 포인터도 있음
- NULL이 들어있는 포인터를 널포인터라도 하며 아무것도 가리키지 않는 상태를 뜻하며 역참조는 할 수 없음

```c
#include <stdio.h>

int main()
{
    int *numPtr1 = NULL;

    printf("%p\n", numPtr1);

    return 0;
}
```

- 실무에서는 포인터가 NULL인지 확인한 뒤 NULL이면 메모리를 할당하는 패턴을 주로 사용함

```c
if(ptr == NULL)
{
    ptr = malloc(1024);
}
```

## 30. 배열

1. 배열 사용
2. 배열을 선언하고 요소에 접근
   - 자료형 배열이름[크기];
   - 자료형 배열이름[크기] = {값, 값, 값};

```c
#include <stdio.h>

int main()
{
    int numArr[10] = {11, 22, 33, 44, 55, 66, 77, 88, 99, 110};

    printf("%d\n", numArr[0]);
    printf("%d\n", numArr[5]);
    printf("%d\n", numArr[9]);

    return 0;
}
```

- **배열 선언과 배열 인덱스**
  - 배열을 선언할 때도 [] 를 사용하고 배열요소에 접근할때도 []를 사용함.
- **배열을 선언할 때 크기 생략**
  - 자료형 배열이름[] = {값,값,값};
  - 배열 선언시 값을 초기화하면 배열크기를 생략할 수 있으나 초기화를 하지 않을때는 생략할 수 없음.

3. 배열을 0으로 초기화

- 자료형 배열이름[크기] = {0,};

```c
#include <stdio.h>

int main()
{
    int numArr[10] = {0,};

    printf("%d\n", numArr[0]);
    printf("%d\n", numArr[5]);
    printf("%d\n", numArr[9]);

    return 0;
}
```

4. 배열의 요소에 값 할당

- 배열[인덱스] = 값;
- 배열 요소에 접근할때 인덱스로 음수를 지정하거나 배열크기를 벗어난 인덱스를 지정해도 컴파일 에러가 발생하지 않음. 실행을 해보면 쓰레기값이 출력됨.
- 배열범위를 벗어난 인덱스에 접근하면 배열이 아닌 다른 메모리 공간에 접근하게 됨.

```c
#include <stdio.h>

int main()
{
    int numArr[10];

    numArr[0] = 11;    // 인덱스가 0인 배열의 요소에 값 할당
    numArr[2] = 33;    // 인덱스가 2인 배열의 요소에 값 할당
    numArr[1] = 22;    // 인덱스가 1인 배열의 요소에 값 할당
    numArr[3] = 44;    // 인덱스가 3인 배열의 요소에 값 할당
    numArr[4] = 55;    // 인덱스가 4인 배열의 요소에 값 할당
    numArr[5] = 66;    // 인덱스가 5인 배열의 요소에 값 할당
    numArr[6] = 77;    // 인덱스가 6인 배열의 요소에 값 할당
    numArr[7] = 88;    // 인덱스가 7인 배열의 요소에 값 할당
    numArr[8] = 99;    // 인덱스가 8인 배열의 요소에 값 할당
    numArr[9] = 110;   // 인덱스가 9인 배열의 요소에 값 할당

    printf("%d\n", numArr[-1]);    // 음수이므로 잘못된 인덱스
    printf("%d\n", numArr[10]);    // 배열의 범위를 벗어난 인덱스
    printf("%d\n", numArr[20]);    // 배열의 범위를 벗어난 인덱스

    return 0;
}
```

5. 배열의 크기 구하기

```c
#include <stdio.h>

int main()
{
    int numArr[10] = {11, 22, 33, 44, 55, 66, 77, 88, 99, 110};

    printf("%d\n", sizeof(numArr)) // 40
    printf("%d\n", sizeof(numArr)/sizeof(int)) // 10

    return 0;
}
```

- **배열의 크기와 인덱스**
  - C언어에서는 인덱스가 배열 범위를 벗어났는지 검사하지 않으므로 개발자 이를 생각하고 코드를 작성해야함. 배열에 접근하기 전에 인덱스가 요소 수 -1을 넘지 않는지 확인

```c
#include <stdio.h>

int main()
{
    int numArr[10];
    int index = 10;
    int count = sizeof(numArr) / sizeof(int);

    if (index <= count - 1)
    {
        numArr[index] = 999;
    }
}
```

6. 반복문으로 배열의 요소를 모두 출력

```c
#include <stdio.h>

int main()
{
    int numArr[10] = {11, 22, 33, 44, 55, 66, 77 ,88, 99, 110};

    for(int i = sizeof(numArr)/sizeof(int); i >= 0; i--)
    {
        printf("%d\n", numArr[i]);
    }

    return 0;
}
```

7. 배열의 요소 합계구하기

```c
#include <stdio.h>

int main()
{
    int numArr[10] = {11, 22, 33, 44, 55, 66, 77 ,88, 99, 110};
    int sum = 0;

    for(int i = 0; i < sizeof(numArr)/sizeof(int); i++)
    {
        sum += numArr[i];
    }

    printf("%d\n", sum);

    return 0;
}
```

8. 배열의 요소에 저장된 값을 두배로 만들기

```c
#include <stdio.h>

int main()
{
    int numArr[10] = {11, 22, 33, 44, 55, 66, 77 ,88, 99, 110};
    int sum = 0;

    for(int i = 0; i < sizeof(numArr)/sizeof(int); i++)
    {
        numArr[i] *= 2;
    }

    for(int i = 0; i < sizeof(numArr)/sizeof(int); i++)
    {
        printf("%d\n",numArr[i]);
    }

    return 0;
}
```

9. 배열을 포인터에 넣기

```c
#include <stdio.h>

int main()
{
    int numArr[10] = {11, 22, 33, 44, 55, 66, 77, 88, 99, 110};

    int *numArr = numArr;

    printf("%d\n", *numArr); // 11
    printf("%d\n", *numArr); // 11
    printf("%d\n", numPtr[5]); // 66
    printf("%d\n", sizeof(numArr)) // 40
    printf("%d\n", sizeof(numPtr)) // 4

    return 0;
}
```

10. 배열을 활용해 10진수를 2진수로 변환하기

```c
#include <stdio.h>

int main()
{
    int decimal = 15;
    int binary[20] = {0,};

    int position = 0;

    while(1)
    {
        binary[position] = decimal % 2;
        decimal = decimal / 2;

        position++;

        if(decimal == 0)
            break;
    }

    for(int i = position - 1; i >= 0; i--)
    {
        printf("%d", binary[i];)
    }

    printf("\n");

    return 0;
}
```

## 31. 2차원 배열

1. 2차원 배열 사용
2. 2차원 배열을 선언하고 요소에 접근하기

```c
#include <stdio.h>

int main()
{
    int numArr[3][4] = {
        {11, 22, 33},
        {44, 55, 66},
        {77, 88, 99}
    }

    printf("%d\n", numArr[0][0]); // 11
    printf("%d\n", numArr[1][2]); // 66
    printf("%d\n", numArr[2][1]); // 88

    return 0;
}
```

3. 2차원 배열을 초기화하기

```c
#include <stdio.h>

int main()
{
    int numArr[3][4] = {0,};

    printf("%d\n", numArr[0][0]); // 0
    printf("%d\n", numArr[2][2]); // 0

    return 0;
}
```

4. 2차원 배열의 요소에 값 할당하기

- 2차원 배열 요소를 접근할때 인덱스로 음수를 지정하거나 배열 크기를 벗어난 인덱스를 지정해도 컴파일 에러가 발생하지 않으나 쓰레기값이 출력됨
- 배열의 범위를 벗어난 인덱스에 접근하면 배열이 아닌 다른 메모리 공간에 접근하게 됨

```c
#include <stdio.h>

int main()
{
    int numArr[3][4];

    numArr[0][0] = 11;
    numArr[2][2] = 121;

    return 0;
}
```

5. 2차원 배열의 크기 구하기

```c
#include <stdio.h>

int main()
{
    int numArr[3][4] = {0,};

    printf("%d\n", sizeof(numArr)); // 48
    printf("col : %d\n", sizeof(numArr[0])/ sizeof(int)); // 4
    printf("row: %d\n", sizeof(numArr)/ sizeof(numArr[0])); // 3

    return 0;
}
```

6. 반복문으로 2차원 배열의 요소를 모두 출력하기

```c
#include <stdio.h>

int main()
{
    int numArr[2][3] = {
        {11,22,33},
        {44,55,66}
    };

    int col = sizeof(numArr[0])/ sizeof(int); // 3
    int row = sizeof(numArr)/ sizeof(numArr[0]); // 2

    for(int i = 0; i < col; i++)
    {
        for(int j = 0; j < row; j++)
        {
            printf("%d", numArr[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

7. 2차원 배열을 포인터에 넣기

- 자료형(\*포인터이름)[가로크기]

```c
#include <stdio.h>

int main()
{
    int numArr[2][3] = {
        {11, 22, 33},
        {44, 55, 66}
    };

    int(*numPtr)[3] = numArr;

    printf("%p\n", *numPtr);
    printf("%p\n", *numArr);
    printf("%d\n", numPtr[1][2]); // 66
    printf("%d\n", sizeof(numArr)); // 24
    printf("%d\n", sizeof(numPtr)); // 3

    return 0;
}
```

8. 3차원 배열

```c
#include <stdio.h>

int main()
{
    int numArr[2][3][4] = {
        {
            {1,2,3,4},
            {5,6,7,8},
            {9,10,11,12}
        },
        {
            {13,14,15,16},
            {17,18,19,20},
            {21,22,23,24}
        }
    };

    int depth = sizeof(numArr)/ sizeof(numArr[0]); // 2
    int row = sizeof(numArr[0])/ sizeof(numArr[0][0]); // 3
    int column = sizeof(numArr[0][0])/ sizeof(int); // 4

    int (*numPtr)[3][4] = numArr;
}
```

## 32. 포인터와 배열 응용

1. 포인터와 배열 응용

   - 배열의 크기를 동적으로 지정하기 위해 포인터를 선언하고 메모리를 할당한 뒤 메모리를 배열처럼 사용

2. 포인터에 할당된 메모리를 배열처럼 사용

- 자료형 _포인터이름 = malloc(sizeof(자료형)_ 크기);

```c
#include <stdio.h>
#include <stdlib.h> // malloc, free

int main()
{
    int *numPtr = malloc(sizeof(int)* 10); // int 10개 크기만큼 동적 메모리 할당

    numPtr[0] = 10;
    numPtr[9] = 20;

    free(numPtr);

    return 0;

}
```

3. 입력한 크기만큼 메모리를 할당해 배열처럼 사용

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h> // malloc, free

int main()
{
    int size;

    scanf("%d", &size);

    int *numPtr = malloc(sizeof(int)* size);

    for(int i = 0; i < size; i++)
    {
        numPtr[i] = i;
    }
    for(int i = 0; i < size; i++)
    {
        printf("%d\n", numPtr[i]);
    }

    free(numPtr)

    return 0;
}
```

4. 포인터에 할당된 메모리를 2차원 배열처럼 사용

- 자료형 \*_포인터이름 = malloc(sizeof(자료형_) \* 세로크기);

5. 입력한 크기만큼 메모리를 할당해 포인터를 2차원 배열처럼 사용

## 33. 문자열

1. 문자열 사용

```c
#include <stdio.h>

int main()
{
    char s1 = "Hello";

    printf("%s", s1);

    return 0;
}
```

2. 문자와 문자열 포인터 알아보기

- char \*변수이름 = "문자열";

```c
#include <stdio.h>

int main()
{
    char c1 = 'a';
    char *s1 = "Hello";

    printf("%c\n", c1); // a
    printf("%s\n", s1); // Hello

    return 0;
}
```

- 문자열의 메모리 주소 출력
- 문자열의 앞 뒤

3. 문자열 포인터에서 인덱스로 문자에 접근

```c
#include <stdio.h>

int main()
{
    char *s1 = "Hello";

    printf("%c\n", s1[2]); // l
    printf("%c\n", s1[4]); // o
    printf("%c\n", s1[5]); // NULL(\0) 출력, NULL은 화면에 표시되지 않음

    return 0;
}
```

- 문자열 포인터에 인덱스로 문자를 할당할 때는 에러가 발생함
- 문자열 리터럴이 있는 메모리 주소는 읽기 전용이기 때문에 문자열 포인터는 인덱스로 접근해 문자를 할당하면 안됨

4. 배열형태로 문자열 선언

- char 배열이름[크기] = "문자열";

```c
#include <stdio.h>

int main()
{
    char s1[] = "Hello";

    printf("%s\n", s1);

    return 0;
}
```

5. 배열 형태의 문자열에서 인덱스로 문자에 접근

```c
#include <stdio.h>

int main()
{
    char s1[10] = "Hello";

    s1[0] = 'A';

    printf("%s\n", s1);

    return 0;
}
```

- 배열 형태의 문자열은 인덱스로 접근해 문자를 할당할 수 있음

## 34. 입력값을 문자열에 저장

1. 입력값을 배열 형태의 문자열에 저장

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    char s1[10];

    printf("문자열을 입력하세요: ");
    scanf("%s", s1);

    printf("%s\n", s1);

    return 0;
}
```

- 공백까지 포함해 입력받기
- EOF

2. 입력값을 문자열 포인터에 저장

- scanf("%s", 문자열포인터);

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h> // malloc, free

int main()
{
    char *s1 = malloc(sizeof(char)* 10);

    printf("문자열을 입력하세요: ");
    scanf("%s", s1);

    printf("%s\n", s1);

    free(s1);

    return 0;
}
```

3. 문자열을 여러개 입력받기

- scanf("%s %s...", 배열1, 배열2, ...);
- scanf("%s %s...", 문자열포인터1, 문자열포인터2, ...);

## 35. 문자열 길이를 구하고 비교

1. 문자열 길이구하기

- strlen(문자열포인터)
- strlen(문자배열)

2. 문자열 비교하기

- strcmp(문자열1, 문자열2)

## 36. 문자열 복사 및 붙이기

1. 문자열 복사

- strcpy(대상문자열, 원본문자열);
- 문자열과 읽기 전용 메모리

2. 문자열 붙이기

- strcat(최종문자열, 붙일문자열)

3. 배열 형태의 문자열을 문자열 포인터에 복사
4. 배열 형태의 문자열을 문자열 포인터에 붙이기

## 37. 문자열 만들기

1. 서식을 지정해 배열 형태로 문자열 만들기

- sprintf(배열, 서식, 값);
- sprintf(배열, 서식, 값1, 값2, ...);

2. 서식을 지정해 문자열 포인터에 문자열 만들기

- sprintf(문자열포인터, 서식, 값);
- sprintf(문자열포인터, 서식, 값1, 값2, ...);

## 38. 문자열 검색

1. 문자열 안에서 문자로 검색

- strchr(대상문자열, 검색할문자);

2. 문자열의 오른쪽 끝부터 문자로 검색

- strrchr(대상문자열, 검색할문자);

3. 문자열 안에서 문자열로 검색

- strstr(대상문자열, 검색할문자열);

## 39. 문자열 자르기

1. 문자를 기준으로 문자열 자르기

- strtok(대상문자열, 기준문자);

2. 문자열 포인터 자르기
3. 날짜와 시간값 자르기
4. 자른 문자열 보관

## 40. 문자열,숫자를 서로 변환

1. 문자열을 정수로 변환

- atoi(문자열)

2. 특정진법으로 표기된 문자열을 정수로 변환

- strtol(문자열, 끝포인터, 진법)

3. 문자열을 실수로 변환

- atof(문자열)

4. 정수를 문자열로 변환

- sprintf(문자열, "%d", 정수);
- sprintf(문자열, "%x", 정수);
- sprintf(문자열, "%X", 정수);

5. 실수를 문자열로 변환

- sprintf(문자열, "%f", 실수);

## 41. 회문 판별과 N-gram

1. 회문 판별
2. N-gram 만들기

## 42. 구조체

1. 구조체 사용
2. 구조체를 만들고 사용
3. typedef로 struct 키워드 없이 구조체 선언
4. 익명구조체 사용

## 43. 구조체 포인터

1. 구조체 포인터를 선언하고 메모리 할당
2. 구조체 별칭으로 포인터를 선언하고 메모리 할당
3. 구조체 포인터에 구조체 변수의 주소 할당

## 44. 두 점 사이의 거리 구하기

1. 두 점 사이의 거리 구하기

## 45. 구조체 멤버 정렬

1. 구조체 멤버 정렬 사용
2. 구조체 크기 알아보기
3. 구조체 정렬 크기 조절

## 46. 구조체와 메모리 활용

1. 구조체와 메모리를 간단하게 0으로 설정
2. 구조체와 메모리 복사하기

## 47. 구조체 배열

1. 구조체 배열 사용
2. 구조체 배열 선언
3. 구조체 포인터 배열 선언

## 48. 공용체 사용

1. 공용체 사용
2. 공용체를 만들고 사용
3. 공용체와 엔디언
4. 공용체 포인터를 선언하고 메모리 할당

## 49. 구조체와 공용체 활용

1. 구조체 안에서 구조체 멤버 사용
2. 구조체 안의 구조체 멤버에 메모리 할당
3. 익명구조체와 익명공용체 활용

## 50. 구조체와 비트 필드

1. 구조체 비트 필드를 만들고 사용
2. 비트 필드와 공용체를 함께 사용

## 51. 열거형

1. 열거형 정의
2. 열거형을 switch에 활용
3. 열거형을 for에 활용

## 52. 자료형 변환

1. 기본 자료형 변환
2. 포인터 변환
3. void 포인터 변환
4. 구조체 포인터 변환

## 53. 포인터 연산

1. 포인터 연산 사용
2. 포인터 연산으로 메모리 주소 조작
3. 포인터 연산과 역참조 사용
4. void 포인터로 포인터 연산
5. 구조체 포인터로 포인터 연산
