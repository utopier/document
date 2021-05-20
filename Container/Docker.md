# Docker
- https://subicura.com/2017/01/19/docker-guide-for-beginners-1.html
- https://pyrasis.com/docker.html
---
### Chapter1
1. 도커란?
2. 설치하고 컨테이너 실행하기
3. 이미지 만들고 배포하기
---
### Chpater2
1. Docker
    1. 가상머신과 Docker
        - 가상머신
        - Docker
        - 리눅스 컨테이너
    2. Docker 이미지와 컨테이너
2. Docker 설치
    1. 리눅스
        - 자동 설치 스크립트
        - 우분투
        - RedHat Enterprise Linux, CentOS
        - 최신 바이너리 사용
    2. Mac OS X
    3. Windows
3. Docker 사용
    1. search 이미지 검색
    2. pull 이미지 받기
    3. images 이미지 목록 출력
    4. run 컨테이너 생성
    5. ps 컨테이너 목록 확인
    6. start 컨테이너 시작
    7. restart 컨테이너 재시작
    8. attach 컨테이너 접속
    9. exec 외부에서 컨테이너 안의 명령 실행
    10. stop 컨테이너 정지
    11. rm 컨테이너 삭제
    12. rmi 이미지 삭제
4. Docker 이미지 생성
    1. Bash 익히기
    2. Dockerfile 작성
    3. build 이미지 생성
5. Docker 살펴보기
    1. history 이미지 히스토리 살펴보기
    2. cp 파일 꺼내기
    3. commit 컨테이너 변경사항 이미지 생성
    4. diff 컨테이너에서 변경된 파일 확인
    5. instpect 세부 정보 확인
6. Docker 활용
    1. Docker 개인 저장소 구축
    2. Docker 컨테이너 연결
    3. 다른 서버 Docker 컨테이너에 연결
    4. Docker 데이터 볼륨 사용
    5. Docker 데이터 볼륨 컨테이너 사용
    6. Docker 베이스 이미지 생성
        - 우분투 베이스 이미지 생성
        - CentOS 베이스 이미지 생성
        - 빈 베이스 이미지 생성
    7. Docker 안에서 Docker 실행
7. Dockerfile 자세히 알아보기
    1. .dockerignore
    2. FROM
    3. MAINTAINER
    4. RUN
    5. CMD
    6. ENTRYPOINT
    7. EXPOSE
    8. ENV
    9. ADD
    10. COPY
    11. VOLUME
    12. USER
    13. WORKDIR
    14. ONBUILD
8. Docker로 애플리케이션 배포하기
    1. 서버 한 대에 애플리케이션 배포
        - 개발자 PC에서 Git 설치 및 저장소 생성
        - 개발자 PC에서 Nodejs로 웹 서버 작성
        - 개발자 PC에서 Dockerfile 작성
        - 개발자 PC에서 SSH키 생성
        - 서버에 Git 설치 및 저장소 생성
        - 서버에 Docker 설치
        - 서버에 SSH 키 설정
        - 서버에 Git Hook 설정
        - 개발자 PC에서 소스 Push
    2. 서버 여러 대에 애플리케이션 배포
        - 개발자 PC에서 Git 설치 및 저장소 생성
        - 개발자 PC에서 Nodejs로 웹 서버 작성
        - 개발자 PC에서 Dockerfile 작성
        - 개발자 PC에서 SSH키 생성
        - 배포 서버에 Git 설치 및 저장소 생성
        - 배포 서버에서 SSH 키 생성
        - 배포 서버에 Docker 설치
        - 배포 서버에 Docker 레지스트리 서버 설정
        - 배포 서버에 SSH 키 설정
        - 배포 서버에 Git Hook 설정
        - 애플리케이션 서버에 Docker 설치
        - 애플리케이션 서버에 SSH키 설정
        - 개발자 PC에서 소스 Push
9. Docker 모니터링
    1. 모니터링 서버 Dockerfile 작성
    2. 애플리케이션 서버 Dockerfile 작성
    3. 웹 브라우저에서 그래프 확인
10. AWS에서 Docker 사용
    1. EC2에서 Docker 사용
    2. ELB에서 Docker 사용
        
11. Azure에서 Docker 사용
12. Docker Hub 사용
13. Docker Remote API 사용
14. CoreOS 사용

---
## 1. 도커란?
---
## 2. 설치하고 컨테이너 실행하기
---
## 3. 이미지 만들고 배포하기
---