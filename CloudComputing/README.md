# 클라우드 컴퓨티 기초 및 AWS 실습
---
### References
- https://www.youtube.com/playlist?list=PLmv2d328i1Q4ZK_7XQYB5SeMqNA4q_Ptq
---
## Chapter
1. 클라우드 컴퓨팅 도입 이유
2. 클라우드 컴퓨팅 개념
3. 클라우드 컴퓨팅 특징 4가지
4. 클라우드 컴퓨팅 종류
5. 클라우드 컴퓨팅 주요 용어
6. 클라우드 컴퓨팅 Provider
7. AWS 소개와 회원가입 실습
8. AWS Manaement console과 예산설정
9. AWS EC2 서비스 개념
10. AWS EC2 서버 생성 실습
11. AWS EC2 서버 접속 실습
12. AWS EC2 Windows 서버 생성 및 접속 실습
13. AWS EC2 활용한 NGINX 웹서버 세팅 실습
---
### 1. 클라우드 컴퓨팅 도입 이유
1. 국내 4대 대기업 자체 클라우드 도입 및 기술 개발
    - 삼성
    - SK
    - 현대차
    - LG
2. LinkedIn Top 5 Hard Skills Companies에 높은 순위
3. Netflix 사례
    초기 비지니스 모델 : 인터넷 DVD 판매
    2008년 데이터베이스 장애로 3일동안 시스템 마비로 주문 받지 못함 -> AWS로 이동함(8년동안) -> 매출액 및 주식가치 상승
4. 인터넷 비지니스 회사에 IT 기술의 중요성
    전통적으로 IT 자원관리가 비효율적이였음. 
    클라우드를 도입해 IT 자원관리를 효율적으로 할 수 있음.
    IT 자원관리는 클라우드에 맡기고 핵심 비지니스에 집중할 수 있음.
    AWS 초기 고객(Netflix, Airbnb, Dropbox)
---
### 2. 클라우드 컴퓨팅 개념
1. Cloud Computing이란
    인터넷을 통해 가상화된 컴퓨터의 IT 리소스(CPU,Memory,Storage,Network 등)를 제공하는 것.
    인터넷에 연결된 다른 컴퓨터로 처리하는 것.
2. Cloud 용어 기원
    존재는 하나 복잡하면서 굳이 알지 않아도 되는 것을 구름으로 추상화(Internet)
3. Cloud의 가장 큰 특징
    원할때 원하는 만큼 사용하고 사용한 만큼 요금 지불
    X As A Service(쏘카:Mobility As A Service, Airbnb: Hosing As A Service, Netflix: Video As A Service)
    Cloud Computing(IT Resource As A Service, Computing Resource As A Service)
5. Computing Resource와 Server
    인터넷은 Server와 Client로 이루어짐
    고객이 많을 수록 많은 Server가 필요함
6. 준비한 양과 실제 사용량의 불일치
    Cloud 도입시 수요에 대해 탄력적으로 자원 공급 가능
---
### 3. 클라우드 컴퓨팅 특징 4가지
1. On Demand
    Water On Demand(수도꼭지)
    Video On Demand(Netflix, 방송 다시보기)
    Computing Resource On Demand(자원을 원할때 언제든지 쓰기)
2. 대규모 확장성
    수요에 따른 대규모 확장 가능(클라우드 사업자가 미리 자원을 구축해놓음)
3. 종량제 과금
    사용한 만큼 비용 지불(초기비용 낮음)
4. 관리의 편의성
    Cloud 사업자들이 IT 자원 관리에 필요한 기능을 제공
    전문적인 운영을 위해서는 Cloud 전문가가 필요해짐
---
### 4. 클라우드 컴퓨팅 종류
1. Service Model
    - **On Premise**
    - **Infrastructure as a Service**
    - **Platform as a Service**
    - **Software as a Service**
2. Deployment Model
    - **Public Cloud**
    - **Private Cloud**
    - **Hybrid Cloud**
    - **Community Cloud**
---
### 5. 클라우드 컴퓨팅 주요 용어
1. Data Center(데이터 센터)
2. Region(지역)
3. Avaliability Zone(가용 영역, AZ)
4. Virtualization(가상화)
---
### 6. 클라우드 컴퓨팅 Provider
1. 국내외 주요 클라우드 사업자
2. Global 시장 점유율
    - AWS -> Azure -> GCP
3. 국내 시장 점유율
    - 인프라(IaaS) : AWS -> KT -> LG
    - 플랫폼(PaaS): MS -> AWS -> 오라클 -> 세일즈포스
    - 소프트웨어 : SAP -> MS -> 더존비즈온
4. Service Model 별 시장 규모
    - IaaS -> SaaS -> PaaS
5. AWS
    - 22개 Resion, 69개 AZ, 서울 Resion에 3개 AZ보유, 212개 서비스 제공
6. Azure
    - 글로벌 점유 2위
    - 수도권,부산 2군데 데이터센터
    - PaaS 및 Devops 서비스 주력
7. GCP
    - Google 운영 노하우 직접 되어 있음
    - 빅데이터, 인공지능 주력
    - 2020.2 서울 Resion
8. Naver Cloud Platform
    - 네이버/라인의 글로벌 운영 노하우(해외 Resion 보유)
    - 국내 서비스 중에서 가장 많은 기능 제공(인공지능 주력)
9. Toast Cloud
    - 게임운영 노하우 반영
10. Alibaba/Tencent Cloud
    - 국내 데이터 센터 존재
    - 중국 진출하는 게임 업체들은 Tencent Cloud 사용
---
### 7. AWS 소개와 회원가입 실습
1. Amazon Web Service
    - amazon.com에서 출시한 cloud 서비스
    - 시장 점유율 세계 1위(39%)
    - 전 세계 22개 Resion, 69개 Availability Zone 보유
    - 212개의 서비스 제공 - 인프라, 플랫폼, 인공지능, 빅데이터, IOT 등
    - 국내에서 IaaS 시장 점유율 1위
    - Cloud 전문 인력 수요 증가하나 공급 부족
2. 주요 AWS Services
    - EC2 : 가상서버
    - S3 : Object 스토리지
    - RDS : 관계형 데이터베이스
    - VPC : 가상 사설 네트워크
    - IAM : 사용자 인증 및 권한 관리
3. AWS Certifications
    - AWS 자체 자격 시험
    - 프로페셔널, 어소시에이트, 기초, 전문분야
4. 회원가입
    - 신용 카드 등록 필수
    - 12개월간 Free Tier 사용 가능 - 저 사양 서버 무료
---
### 8. AWS Manaement console과 예산설정
- 콘솔에 로그인(루트 사용자)
- 우측 상단에 Resion 설정
- AWS 로고 옆 서비스 메뉴 -> AWS Budgets
- 예산 작성 -> 비용 예산 -> 예산 설정(불필요한 과금 막기)
---
### 9. AWS EC2 서비스 개념
1. EC2
    - Elastic Cloud Compute
    - AWS의 가장 기본적인 자원 - 리눅스 서버, 윈도우 서버
    - 가상머신 상에 OS 설치 되어 있는 형태
2. EC2 인스턴스
    - CPU, Memory, Storage, Network 성능에 따라 다양한 인스턴스 타입이 존재
        - 범용, 컴퓨텅 최적화, 메모리 최적화, GPU 가속화
    - 인스턴스 타입
        - https://aws.amazon.com/ko/ec2/instance-types/
3. EC2 가격 정책
    - 인스턴스 타입과 사용 유형에 따라 다양한 가격 정책
        - https://aws.amazon.com/ko/ec2/pricing/
    - 사용 유형
        - 프리티어, 온디맨드, 스팟 인스턴스, 예약 인스턴스, 전용 호스팅
        - 예약 인스턴스
            - 1년 또는 3년 단위로 계약
            - 조건에 따라 30 ~ 75 요금 할인
        - 스팟 인스턴스
            - 경매방식으로 최대 90 저렴하게 이용 가능
            - 입찰 가격을 정해 놓고 조건이 맞으면 인스턴스 사용
            - 인스턴스가 생성되지 않을 수 있으며 사용 중 중단 될 수 있음
            - 배치 처리 등 실시간이 아닌 기능에 사용 가능
4. AMI
    - Amazon Machine Image
    - 가상머신은 Image를 활용하여 생성
    - 이미지 - OS, 설치된 프로그램, 설정 등이 포함된 파일
    - 이미지를 가상 서버에 적용해 동일한 환경을 구성 가능
    - Pre-Configured OS라고 이해할 수 있음
    - 다양한 AMI 제공
        - OS별, 목적별, Market Place
5. Security Group
    - EC2 인스턴스에 대한 보안 설정
    - default로 EC2는 모든 Port가 막혀 있음
    - Inbound, outbound에 대해 접석 허용 설정 가능
    - 어떤 Port를 접속 허용 할지 설정
    - 접속 허용 할 Source 설정
6. Key Pair
    - EC2 인스턴스에 접속하기 위한 암호화 된 파일
    - AWS 처음 사용 시 새로운 Key Pair 생성 해야함
    - Key Pair는 타인과 공유하면 안됨
    - Mac 환경에서는 pem 사용 가능, 윈도우 환경에서는 ppk로 변환 필요
7. 인스턴스의 상태
    - EC2 인스턴스를 생성하면 실행 상태
    - 인스턴스를 중지 가능 -> 재실행 가능
    - 인스턴스 종료(Terminate)하면 인스턴스 삭제됨
8. Elastic IP
    - EC2 인스턴스는 Private IP와 Public IP를 보유
    - 기본적으로 할당되는 Public IP는 인스턴스 재실행 후에는 변경됨
    - 영구적인 Public IP를 설정하려면 Elastic IP 사용
    - Elastic IP는 실행 중인 인스턴스에 연동해 사용하면 무료
        - 생성 후 사용하지 않는 경우 비용 발생
9. 실습
    - EC2 Ubuntu 인스턴스 생성
    - EC2 Ubuntu 인스턴스 접속
        - Puttygen
        - MobaXterm
    - EC2 Windows 인스턴스 생성 후 접속
    - Ubuntu 인스턴스에 html 파일 호스팅을 위한 nginx 설치/설정
---
### 10. AWS EC2 서버 생성 실습
- Console -> EC2 -> 인스턴스 시작
- AMI 선택 - Ubuntu Server 16.04
- 인스턴스 유형 선택 - 프리티어
- 인스턴스 구성 
- 스토리지 추가(외장하드)
    - EBS 볼륨 추가
- 태그 추가
- 보안 그룹 구성
---
### 11. AWS EC2 서버 접속 실습
- Public IP로 접속
- MobaXterm Download(putty같은 프로그램)
- Puttygen Download(pem to ppk)
    - puttygen으로 pen 파일 ppk로 generate
- MobaXterm
    - Session -> SSH 
    - Remote Host에 EC2 Public IP 
    - Specitify username은 AMI마다 다름
- 인스턴스 중지 후 실행시 Public IP 변경됨
- 탄력적 IP
    - 탄력적 IP 주소 할당 
---
### 12. AWS EC2 Windows 서버 생성 및 접속 실습
- 인스턴스 시작 -> AMI 선택 -> MS Window 19
- 접속은 SSH가 아닌 Remote Desktop으로 접속
- 인스턴스에 연결 -> RDP 클라이언트 -> 원격 데스크톱 파일 다운로드
- 암호 가져오기(windows.pem) -> 암호 해독 -> 암호 복사
- rdp 파일 실행
- Windows Shut Down시 Stopped
- 인스턴스 상태 -> 인스턴스 종료(삭제)
---
### 13. AWS EC2 활용한 NGINX 웹서버 세팅 실습
- Nginx.org
- MobaXterm로 ubuntu server 접속
- sudo apt-get update
- sudo apt-get upgrade
- sudo apt-get install nginx
- ls /var/www/html
    - Public IP:80으로 접속하면 해당 html 파일이 보여야함
    - 현재는 port가 막혀 있음
- 보안 그룹 -> 인바운드 규칙 편집 
    - 80, HTTP, 위치무관, webserver
- Public IP:80 접속시 해당 html 파일 보임
- cat /var/www/html/index.nginx-debian.html
- cd /var/www/html
- ls
- sudo rm -f index.nginx-debian.html
- sudo vi index.html
    - a(INSERT)
- ls
- 브라우저에서 새로고침하면 index.html 볼 수 있음