# Linux

---

### References

- https://namu.wiki/w/Linux?from=%EB%A6%AC%EB%88%85%EC%8A%A4
- https://www.youtube.com/playlist?list=PLVsNizTWUw7EJ9z-LW3lv3VC-6HI9I3hN
- https://www.youtube.com/playlist?list=PLq8wAnVUcTFU9zLWK-dHWrvTJ0PF8Y0Sf
- https://www.youtube.com/playlist?list=PLSxm-MRGlRAqJWy3fNotX-modTOCzTLWK

---

## Chapter

0. 배포판
   - CentOS
   - Ubuntu
1. 설치
   - CentOS-7
   - VirtualBox
   - root - r
   - j - j
2. 원격접속
   - ssh-server 설치확인 / 시작
     - rpm -qa | grep ssh (ssh 설치 확인)
     - ps -ef | grep ssh (ssh 실행 확인)
     - ssh root@localhost (내 컴퓨터에서 나한테 접속)
   - putty 다운로드
   - 포트 열기
     - 설정 -> 네트워크 -> 고급 -> 포트 포워딩
       - 호스트 포트, 게스트 포트 22번 추가
   - putty 접속
     - 웹서버 (아파치) ,ssh-server / 웹 클라이언트(브라우저), putty
     - who, whoami, date, cal, clear
   - puttry 환경설정
     - hostname
     - (#) 슈퍼유저, ($) 일반사용자
     - mkdir /ace
       - root에서는 가능함, ls /
       - 일반사용자는 읽기 권한은 대부분 가짐
     - echo ~
       - /home/j
       - /root
3. 기초 명령어
   - who
   - whoami
   - rpm -qa | nl ( package 설치 수)
   - df -h (하드디스크 파티션 정보)
   - w
   - users
   - arch
   - logname
   - uname
   - hostname
   - id
   - mkdir
   - rmdir
   - ~(Home Directory)
   - /(System Root Directory)
   - ls
   - cat, nl, more, less, head, tail
   - man info help
   - cd
   - cp, rm
   - mv, rename
   - rpm, yum
   - alias
   - history
   - shell bash
   - ~/.bash_profile, ~/.bashrc
   - PS1, PS2
   - redirection
4. Directory Structure
5. Vim
6. gcc
7. ftp
8. 압축
   - tar, gzip, xz
9. 권한
   - r, w, x permission, chmod
10. 파일 분류
    - char block
11. Link
    - hard link
    - symbolic link
    - i-node

---
