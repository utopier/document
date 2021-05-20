# Linux Overview
- https://www.youtube.com/watch?v=6r4KddqJcto&list=PLSxm-MRGlRAqJWy3fNotX-modTOCzTLWK&index=4
---
## Chapter
1. 리눅스란
    - 리눅스란?
    - 리눅스로 할 수 있는 것
    - 서버/클라이언트
2. 리눅스 공부 순서
    - 리눅스 기본
    - 리눅스 공부 순서
3. 리눅스 탄생
    - open program
    - open source
4. 리눅스 배포판
    - CentOS/RedHat
    - Ubuntu/Debian
5. 일반 사용자/관리자
    - #, $의 차이
    - 권한이 있는가
6. 리눅스 명령어 형식
    - 도움말 보는 방법
    - 명령어 해석 방법
7. 리눅스 파일 다루기
    - 생성/삭제/이동/이름변경
    - 조심해야 할것
8. 리눅스 파일 분류
    - 파일/디렉터리/장치 파일
    - 하드 링크/심볼릭 링크
---
## 1. 리눅스란
1. 리눅스란?
    - 웹서비스(www)
        - 클라이언트(브라우저) <- 서버(WebServer)
    - 서버가 동작하려면 OS가 있어야함. 이럴때 리눅스가 필요함.
2. 리눅스로 할 수 있는 것
    - 웹, 메일, 채팅, FTP ...
        - 서비스를 하기 위해 OS가 필요함
        - NOS(Network OS) : Linux, Unix, Windows Serveㄴ
3. 서버/클라이언트
    - 서비스를 제공하면 Server
    - 서비스를 받으면 Client
    - 전문적으로 서비스를 하려면 OS를 알아야함.
## 2. 리눅스 공부 순서
1. 리눅스 기본
2. 리눅스 공부 순서
    - 일반 사용자 : 파일, vi, 기초명령어, 쉘
        - GUI환경이 아닌 CLI환경
    - 관리자(root): 설치, 프로세스, 패키지, 사용자(일반 사용자)
    - 서비스 : 웹, 메일, DNS, FTP...
    - 보안 : 로그...
    - 프로그래밍 : gcc, make, shell...
## 3. 리눅스 탄생
UNIX(69) -> C(71) -> UNIX(74) -> Minix(학습용) -> 커널(리눅스 토발스,91년도에 공개)
GNU(84) : GNU 재단 프로그래머들이 만든 커널과 리눅스 토발스 커널이 합쳐져서 Linux가 탄생함
1. open program
2. open source
## 4. 리눅스 배포판
1. CentOS/RedHat
    - 엔터프라이즈용
    - CentOS -> RedHat -> Fedora
2. Ubuntu/Debian
    - 개인용
## 5. 일반 사용자/관리자
1. #, $의 차이
    - #(root)
    - $(일반사용자)
2. 권한이 있는가
    - 일반사용자는 home 디렉토리안에서만 사용할 수 있음
## 6. 리눅스 명령어 형식
1. 도움말 보는 방법
    - ls [option](대괄호 생략가능) ...(중복허용)
    - cp src(무엇을) des(어디로)
    - man 명령어
    - 명령어 --help
    - info 명령어
        - 종료는 q
2. 명령어 해석 방법
## 7. 리눅스 파일 다루기
- 파일 > 디렉토리(폴더)
    - 리눅스는 모든 것을 파일로 간주함.
1. 생성/삭제/이동/이름변경
    - 생성 : mkdir, rmdir, vi,cat,touch
        - cat > aa (ctrl+D)
        - touch a
        - rmdir보다 rm -r을 사용함
    - 복사 : cp
        - cp a ../
        - cp -i aa bb(복사하면서 이름바꾸기, 이동하면서 이름바꾸기)
    - 삭제 : rm
    - 이동 : mv
    - 이름바꾸기 : rename
        - rename aa bb aa (잘안쓰임)
        - mv aa bb (이동기능에 이름 바꾸는기능이 포함되어 있음)
    - 옵션
        - -r recursive : 하위 dir 포함
        - -i interactive : 대화형모드
        - -f force : 강제
2. 조심해야 할것
## 8. 리눅스 파일 분류
1. 파일/디렉터리/장치 파일
    - **file** 
        - 일반
            - text
            - binary
        - 특수
            - directory
            - 장치
                - block: HDD,CD...
                - char: 키보드...
2. 하드 링크/심볼릭 링크
    - cp a b(b는 10M)
    - **link file**
        - hard link
            - reference 변수
            - lb a c(a,c가 같이 공간을 씀, 10M)
        - soft link(symbolic link)
            - pointer 변수
            - 바로가기 아이콘
            - ln -s a d(d는 1kb)