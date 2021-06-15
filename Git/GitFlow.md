# Git-flow

---

### References

- https://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html
- https://gist.github.com/ihoneymon/a28138ee5309c73e94f9

---

## chapter

1. Git이란
2. git flow 사용 이유
3. git repository 구성
4. 작업 시 지켜야할 약속
5. git flow 브랜치 전략
6. 개발과정을 기준으로 한 깃 사용방법
7. 로컬-개발서버-테스트서버-운영서버 전략

---

## 1. Git이란

무료 오픈 소스 분산현 변경이력 관리시스템.
브랜칭 관리기능을 제공해 변경이력관리에 도움을 줌.

## 2. git flow 사용 이유

개발 프로세스는 기획-디자인-개발-QA-출시.
개발자가 늘어날 경우 우선순위가 높은 작업부터 하나씩 선택해 작업을 나눠 갖음.
이번 버전에 포함될 필수 작업과 다음에 해도될 작업들을 병렬로 진행함.
병렬로 진행되면 작업들이 완료되면 가까운 배포 주기에 포함시켜 출시함.
이러한 개발 프로세스를 가장 잘 반영할 수 있는 브랜치 관리 전략이 git-flow.

## 3. git repository 구성

## 4. 작업 시 지켜야할 약속

## 5. git flow 브랜치 전략

1. 주요 브랜치
   - **배포 master**
     - 배포준비된 코드는 origin/master에 두고 관리
     - master 브랜치에 병합한다는 것은 새버전을 배포한다는 것을 의미함
     - master에 커밋될때 git hook 스크립트를 걸어서 자동으로 빌드해 운영서버로 배포하는 형식을 취한다
   - **개발 develop**
     - 배포하기 위해 개발하는 코드는 origin/develop에서 관리
     - 프로젝트를 진행하는 개발자들이 함께 보며 업무를 진행하는 브랜치이며 가장 역동적인 브랜치
     - develop 브랜치 코드가 안정화되고 배포할 준비가 되면 master로 병합하고 배포버전으로 태그를 단다
2. 보조 브랜치
   - **기능 feature**
     - 배포하려고 하는 기능을 개발하는 브랜치로 스프린트 기간 동안 개발해야할 브랜치
     - feature 브랜치는 그 기능을 다 완성할 떄까지 유지하고 있다가 다 완성되면 개발 develop 브랜치로 병합한다.
     - 시작브랜치 : develop
     - 병합대상 브랜치 : develop
     - 브랜치이름 규칙 : master, develop, release-, hotfix-를 제외한 것
       - git-flow 이용시 feature/{branch-name}
       - 이슈추적 사용시 feature/{issue-number}-{feature-name}
   - **출시 release**
     - 시작 브랜치 : develop
     - 병합 대상 브랜치 : develop, master
     - 브랜치 이름 규칙 : release-\*
     - release브랜치는 실제 배포할 상태가 된 경우에 생성하는 브랜치
     - master 브랜치를 통해 배포하기로 했으므로 먼저 release를 master로 병합한다.
     - 나중에 이 배포버전을 찾기 쉽도록 태그를 만들어 현재 병합되는 커밋을 가리키도록 한다. 이때 배포된 기능에 반영될 수 있도록 develop 브랜치에도 함께 병합한다.
   - **긴급수정 hotfix**
     - 시작 브랜치 : master
     - 병합대상 브랜치 : develop, master
     - 브랜치이름 규칙 : hotfix-\*
     - 미리 계획되지 않은 배포를 위한 브랜치. 기본동작방식은 release와 비슷하다. 운영버전에 생긴 버그는 즉시 해결하기 때문에 master 브랜치에 만들어둔 tag로 부터 hotfix 브랜치를 생성한다.

## 6. 개발과정을 기준으로 한 깃 사용방법

1. 사전 확인사항
   - 깃설정에서 사용자명,이메일 확인
   - 깃저장소에 master 브랜치 존재
2. git flow 시작하기
3. 기능개발
4. 출시
5. 긴급수정

## 7. 로컬-개발서버-테스트서버-운영서버 전략

- 로컬, 개발서버는 develop을 기준으로 빌드-배포
- 테스트, 운영서버는 master를 기준으로 빌드-배포

1. 브랜치 이용 관리전략
   - 개발자들은 develop 브랜치 기준으로 업무 진행
   - master는 아키텍트, 프로젝트리더, 선입개발자가 관리
   - 사전에 협의되지 않은 내용은 master에 반영하지 않는다.
