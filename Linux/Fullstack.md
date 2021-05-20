### References
- https://www.youtube.com/playlist?list=PLEOnZ6GeucBWaUzqrMvrl-_ernhNwLHOr
---
### Chapter
1. AWS CentOS 서버 생성 및 설정
2. CentOS에 Nginx 웹서버 설치
3. Linux 서버에 Volta, node, pm2 설치
4. CentOS에 MySQL8 설치
5. Nginx 셋팅 및 무료 HTTPS 인증서 설치
6. docker image 만들기
7. 리눅스 명령어와 쉘스크립트
8. 실무에서 필요한 기술
9. MySQL 
    - DCL, DDL
    - DML, TCL
    - View, Trigger, Function, Procedure
    - With-CTE로 복잡한 쿼리도 쉽게 코딩
    - 윈도우 함수 사용
    - JSON 데이터 타입 사용
    - rollup, pivot
    - 메이터 모델 설계
    - X DevAPI를 이용한 NoSQL 구현 및 채팅 데이터 모델 구성
    - 성능 향상(Index, Fulltext Search, Partition)
    - 백업, 복수 , 이관, 리플리케이션
---
## 1. AWS Ubuntu에 서버 생성 및 설정
---
## 2. Ubuntu에 Nginx 웹서버 설치
1. 설치 할것들
    - Server(AWS)
        - Nginx, volta, PM2, Node, NPM, MySQL8
        - rsync, rcp setting
        - Let's Encrypt SSL(HTTPS) Agent
    - PC(docker)
        - Nginx, volta, PM2, node, NPM, MySQL8
        - rsync, rcp setting
        - Let's Encrypt SSL(HTTPS) Agent    
    - PC(host)
        - VSCode
        - MySQL Workbench
        - Git Client
2. YUM(Yellodog Updater, Modified)
    - 레드햇 계열 리눅스 배포판에서 사용하는 프로그램 설치 및 관리도구
    - 설치 : yum install
    - 삭제 : yum remove
    - 업그레이드 : yum update
    - 조회 : yum search
    - 목록 : yum list
    - yum 데이터베이스 동기화 업데이트 : yum update
    - cf
        - ubuntu's apt-get
        - node's npm
3. Nginx 설치
    - yum 외부 저장소 추가
        - vi /etc/yum.repos.d/nginx.repo
    - install by using YUM
        - yum install nginx -y
    - start & stop
        - nginx
        - ngixn -s stop
    - process 확인
        - ps -ef | grep nginx
    - service 등록
        - systemctl start nginx
        - systemctl enalbe nginx
        - systemctl stop nginx
    - 리눅스 서버
        - /sbin/ifconfig
            - 내부 IP만 가지고 있음
        - cd /etc/yum.repost.d/
        - ll
---
## 3. Linux 서버에 Volta, node, pm2 설치
1. Set up the Nodejs
    - volta
        - https://docs.volta.sh/guide/getting-started
    - nodejs
    - pm2
2. Install
    - pwd(/root)
    - ll
    - ls -algs
    - ls -l
    - cat .bashrc
    - curl https://get.volta.sh | bash
    - cat .bash_profile
        - export VOLTA_HOME
        - export PATH 
    - echo "alias ll='ls -al'" >> .bash_profile
    - cat .bash_profile
    - . .bash_profile(메모리에 올라감)
    - ll
    - echo $VOLTA_HOME
    - pwd
    - ll .volta/
    - volta install node@14
    - node
    - node --version
    - npm --version
    - voltal install pm2
    - pm2 list(ls)s
---
## 4. Ubuntu에 MySQL8 설치
- https://dejavuqa.tistory.com/317
- uname -a
- sudo apt-get update
- sudo apt-get install mysql-server
- ps -ef | grep mysql
- ls /etc/mysql
- sudo systemctl start mysql
- sudo systemctl enable mysql
- sudo /usr/bin/mysql -u root -p
- PC MySQL Workbench에서 접속하기
    - Hostame, Username, Password
- 무료도메인 신청 -> 공인IP로 DNS Setting
---
## 5. Nginx 셋팅 및 무료 HTTPS 인증서 설치
1. Domain Setting
    - freenom
2. Setting Nginx
    - ps -ef | grep nginx
    - cd /etc/nginx
    - ll
    - ps -ef | grep nginx | grep -v grep
    - cat nginx.conf
        - error_log
        - pid(process id) 
            - cat /var/run/nginx.pid
            - kill processid
        - worker_connections : 동시접속자
            - 동시접속자 이상되면 큐에 쌓임
        - include mimetypes
            - vi /etc/nginx/mime.types
        - log_format
        - access_log 
            - tail -10 /var/log/nginx/access.log
            - tail -f -10 /var/log/nginx/access.log
        - gzip
        - include
            - Nginx Setting 다른파일로 분리 해놓음 
            - listen
            - server_name
            - root
                - ll /usr/share/nginx/html
                - vi /usr/share/nginx/html/index.html
            - index
            - error_page
    - curl http://...
        - 301(Redirect)
    - vi conf.d/mydeal.conf
        - server
            - listen 80;
            - server_name Domain Name;
            - location / 
                - root /var/www/mydeal;
                - index index.html
                - try_files $uri /index.html; (없는 주소 일때)
    - ll /var
    - mkdir -p /var/www/mydeal
    - ll /var/www
    - echo "This is MyDeal Homepage" > /var/www/mydeal/index.html
    - nginx -t
    - systemctl reload nginx
    - !ps
3. HTTPS
    - yum install certbot -y
    - systemctl stop nginx
    - !ps
    - certbot --standalone -d mydeal.topician.com certonly
    - vi conf.d/mydeal.conf
    - systemctl start nginx
    - 자동으로 2달마다 갱신(crontab, Let's Encrypt는 90일로 기간이 한정되어있음)
    - certbot renew
    - crontab -l
    - which certbot
    - crontab -e
    - while ture; do ll; sleep 2; done
    - tail -f cert.log
4. System Deployments
    - 개발환경(Local PC)
        - VSCode
        - MySQL Workbench
        - Git Client
    - 개발서버(Docker)
        - Nginx
        - Node
        - Flask
        - MySQL
    - 스테이징 서버(Docker/Cloud)
        - Nginx
        - Node
        - Flask
        - MySQL
    - 서비스 서버(Cloud)
        - Nginx
        - Node
        - Flask
        - MySQL
---
## 6. docker image 만들기
- docker system info
- docker images
- docker images ls
- docker container run --name centos2 centos:latest /bin/echo 'Hello docker!'
- docker ps
- docker ps -a
- docker ps -aq
- docker stop $(docker ps -aq)
1. Set up the CentOS Container: mydealdev
    - Set the file sharing(preference)
        - /Users/jade/workspace/sfd
    - Run by centos image
        - docker container run -it --name "mydealdev" --hostname mydealdev -v /User/jade/workspace/sfd:/home/workspace -p 80:80 -p 7101:7101 centos /bin/bash
        - mydealdev: port
            - Nginx: 80
            - volta
            - PM2 by volta
            - Node, NPM(express): 7101
            - MySQL 8: 3306
            - rsync, rcp setting: 22
    - Install base package
        - yum install epel-release -y
        - yum install telnet -y
        - telnet ip 3306
        - curl https://mydeal.topician.com
        - yum install which rsync openssh-clients -y
    - Install Nginx
        1. yum 외부 저장소
            - vi /etc/yum.repos.d/nginx.repo
                - name=nginx repo
                - baseurl=http://nginx.org/packages/centos/7/$basearch/
                - gpgcheck=0
                - enalbed=1
        2. install by using yum
            - yum install nginx -y
                - whitch nginx
                - ps -ef | grap nginx
        3. start & stop
            - nginx
                - !ps
            - nginx -s stop
        4. process 확인
            - ps -ef | grep nginx
        5. service 등록
            - systemctl start nginx
            - systemctl enable nginx
            - systemctl stop nginx
    - Install volta, node, pm2
        - docker attach mydealdev
        - ps -ef | grep nginx
        - curl https://get.volta.sh | bash
        - volta install node@12
        - volta install pm2
        - yum install python3 -y
        - 
    - Install python3
    - Commit this image
    - Rerun with ports & volumes
---
## 7. 리눅스 명령어와 쉘스크립트
---
## 8. 실무에서 필요한 기술
---
## 9. MySQL 
### 9-1. DCL, DDL
### 9-2. DML, TCL
### 9-3. View, Trigger, Function, Procedure
### 9-4. With-CTE로 복잡한 쿼리도 쉽게 코딩
### 9-5. 윈도우 함수 사용
### 9-6. JSON 데이터 타입 사용
### 9-7. rollup, pivot
### 9-8. 메이터 모델 설계
### 9-9. X DevAPI를 이용한 NoSQL 구현 및 채팅 데이터 모델 구성
### 9-10. 성능 향상(Index, Fulltext Search, Partition)
### 9-11. 백업, 복수 , 이관, 리플리케이션