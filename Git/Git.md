# Git

---

### References

- https://www.youtube.com/playlist?list=PLuHgQVnccGMCNJESahrVV-uYGMNYK_vMf
- https://www.youtube.com/playlist?list=PLuHgQVnccGMATJK16UJ9Fjay0ozrSZKiI
- https://www.youtube.com/playlist?list=PLuHgQVnccGMBJr3eVXGvYHDvGNcogEy7v
- https://www.youtube.com/playlist?list=PLuHgQVnccGMDU5eAzOz2dZ9KXJF6dkNg3
- https://www.youtube.com/playlist?list=PLuHgQVnccGMA4LgLoH07e7uEbRbi92Dd2
- https://www.youtube.com/playlist?list=PLuHgQVnccGMAvTJlPGzizAkyqXfZ9IyY8
- https://www.youtube.com/playlist?list=PLuHgQVnccGMAb_nOiego7BqfKTRcXsUrB

---

## Cheat Sheet

    git --version (버전확인)
    git init . (현재 디렉토리 버전관리, .git 디렉토리 생성)

    git remote add origin 원격저장소주소 (원격저장소와 연결)
    git remote -v (원격저장소 주소 확인)

    git status (Git 상태확인)
    git add (Staging Area에 추가, git에서 관리하게 됨)
    git commit -m/-am (버전생성, Repository로 저장)

    git log --stat/-p/--all --graph --oneline (git logging)
    git diff (버전 간 차이점)

    git push
    git push --set-upstream origin master (git push 했을때 기본적으로 올라갈 원격저장소)

    git clone 원격저장소주소 mydir (원격저장소로부터 코드 가져와서 지역저장소 생성)

    git pull (원격저장소로부터 코드 가져옴, git fetch;git merge origin/master, git fetch;git merge FETCH_HEAD)

    git fetch (신중하게 pull하고 싶을때)

- Branch & Conflict
  git branch (브랜치 리스트 확인)
  git branch 브랜치이름 (브랜치 생성)

  git checkout 브랜치이름 (브랜치 변경)

  git merge 브랜치 이름

  git reset --hard 합병전 커밋 ID

  git mergetool (외부 도구 이용해서 merge)

- checkout
  git checkout VersionID (HEAD가 해당 버전 가리킴)
  git checkout master (HEAR가 AMSTER 가리킴, 최신버전)
- reset
  git reset --hard (마지막 버전 삭제)
  git reset --hard VersionID (VersionID로 돌아감)
- revert
  git revert VersionID (되돌리기)
- cherry-pick
- rebase

---

## Chapter

1. 버전관리
   - 설치
   - 버전 관리 시작
   - 버전 생성
   - 여러개 파일 버전 생성
   - 버전간의 차이점 비교
   - checkout
   - 삭제(reset)
   - 되돌리기(revert)
2. 백업
   - git hosting
   - 저장소 생성
   - 공부의 방향
   - push
   - clone
   - pull
   - open source
3. Branch & Conflict
   - 실습준비
   - Branch 기본사용법
   - Merge
   - Merge : 서로 다른 파일
   - Merge : 같은 파일, 다른 부분 병합
   - Merge : 같은 파일, 같은 부분 병합
   - 3 way merge
   - 외부도구를 이용한 병합
   - HEAD Branch Commit & Checkout
   - Checkout vs reset
4. 협업
   - 혼자 작업
   - 같이 작업
   - push & pull
   - 원격브랜치와 Fetch
5. reset & revert
   - head
   - reset vs checkout 이론
   - reset vs checkout 실습
   - reset --soft vs --mixed vs --hard
   - revert 이론
   - revert 이론 : 충돌의 원인
   - revert 실습 : 충돌의 해결
6. cherry-pick & rebase
   - cherry-pick 개념과 기본사용법
   - rebase 개념과 기본 사용법
   - cherry pick 충돌의 원인과 해결
   - rebase 충돌의 원인과 해결
   - 협업에서 rebase를 이용해 로그 정리

---

## 1. 버전관리

1. 설치
   - git-scm.com
   - git --version
2. 버전 관리 시작
   - mkdir hello-git-cli
   - cd hello-git-cli
   - ls -al
   - git init .
     - 현재 디렉토리를 버전관리.
     - .git 디렉토리 생성됨.
   - cd .git
   - ls -al
3. 버전 생성
   - Working tree - Staging Area - Repository
   - nano hello1.txt
     - 1 입력 후 저장
   - cat hello1.txt
   - git status
     - Untracked files에 hello1.txt (아직 git에서 관리하지 않음)
   - git add hello1.txt
     - Staging Area에 올라감
   - git status
     - Changed to be committed
   - git commit -m 'Message 1'
     - 버전 생성됨.
     - Repository로 hello1.txt 저장
   - git status
     - nothing to commit, working tree clean
   - git log
4. 여러개 파일 버전 생성
   - nano hello1.txt
   - nano hello2.txt
   - git status
     - hello1.txt는 버전관리 한 적이 있어서 git에서 기억하고 있음
   - git add hello1.txt
   - git add hello2.txt
   - git status
   - git commit -m 'Message 3'
   - git status
   - git log
   - git log --stat
     - 버전에 관련된 파일 확인
5. 버전간의 차이점 비교
   - nano hello1.txt
     - four
   - git status
   - git diff
   - git reset --hard
     - 마지막 버전 삭제
   - cat hello1.txt
   - git log -p
     - 바뀐 부분 확인
6. checkout
   - git log
     - 시간여행하고 싶은 버전 ID 복사
   - ls -al
   - cat hello1.txt
   - cat hello2.txt
   - git checkout 버전ID
   - ls -al
   - cat hello1.txt
   - git log
     - HEAD가 해당 버전을 가리킴
   - git checkout master
     - 최신 버전으로 돌아감
   - git log
     - HEAD가 master를 가리킴
7. 삭제(reset)
   - git log
     - 돌아가고 싶은 버전 ID 복사
   - git reset --hard 버전ID
     - 버전ID로 되겠다는 뜻
   - git log
   - git reset --help
8. 되돌리기(revert)
   - git log
   - nano hello1.txt
   - git add hello1.txt
   - git commit -m 'R3'
   - nano hello1.txt
   - git add hello1.txt
   - git commit -m 'R4'
   - git log
     - R4를 삭제하고 R3가 되고 싶을때 R4를 revert해야함 R4 버전 ID 복사
   - git config --global core.editor "nano"
   - git revert 버전ID
   - git log
     - 기존 버전 살아있음
   - git diff
   - Message1으로 돌아가고 싶으면 순서대로 하나씩 revert해야함.(그렇지 않으면 충돌이 일어남)

## 2. 백업

1. git hosting
   - Github, GitLab, Beanstalk
   - open-source, Open-source repositories, Space(GB), Free private repositories
2. 저장소 생성
   - github 회원가입
   - New Repository -> Repository name 입력, Public or Private(과금) -> Create Repository
3. 공부의 방향
   - HTTP or SSH
   - Local -> Remote, Remote -> Local
4. 원격저장소와 연결
   - git remote add origin 원격저장소주소
     - origin이 해당 원격저장소 name
   - git remote -v
     - 원격저장소 주소 확인
5. push
   - git push
     - 원격저장소에 코드 업로드
   - git push --set-upstream origin master
     - git push를 했을때 기본적으로 올라갈 원격저장소
     - github ID 및 비번 입력
   - github.com에서 push 되었는지 확인
6. clone
   - git clone 원격저장소주소 mydir
     - 현재 디렉토리에 mydir 디렉토리명으로 코드 가져옴
     - 원격저장소로부터 코드를 가져와서 지역 저장소가 생김
   - cd mydir
   - ls -al
7. pull
   - git remote -v
   - git pull
     - 원격저장소로부터 코드 가져옴
   - git log
   - 작업시 pull -> 작업 -> commit -> push
8. open source

## 3. Branch & Conflict

1. 실습준비
   - mkdir manual
   - cd manual
   - git init
   - ls -al
   - nano work.txt
   - git status
   - git add work.txt
   - git commit -m 'work 1'
   - git log -p
     - content 1, 2, 3 추가
2. Branch 기본사용법
   - git log -all --graph --oneline
   - git branch
     - master : 저장소 만들때 기본 브랜치
   - git branch apple
   - git branch
     - master\*, apple
   - git log -all --graph --oneline
     - HEAD -> master, apple
   - git branch google
   - git branch ms
     - 모든 브랜치가 work3라는 기본 base를 가짐
   - nano work.txt
     - master content4
   - git commit -am 'master work4'
   - git log --all --graph --oneline
   - git chekcout apple
     - HEAD가 apple을 가리킴
     - 브랜치 전환은 checkout으로
   - cat work.txt
   - git checkout master
   - git chekcout apple
   - nano work.txt
     - apple work4
   - nano apple.txt
     - apple work4
   - git add .
   - git commit -am 'apple work 4'
   - git log --all --graph --oneline
   - git checkout google
   - nano work.txt
     - google content4
   - nano google.txt
     - google content4
   - git add .
   - git commit -m 'google work4'
   - git log --all --graph --oneline
   - git chekcout ms
   - nano work.txt
     - ms content 4
   - nano ms.txt
     - ms content 4
   - git add .
   - git commit -m 'ms work 4'
   - git log --all --graph --oneline
3. Merge
   - 합치려고 하는 공통의 조상을 base라고 함
   - 합친 버전을 merge commit이라고 함
4. Merge : 서로 다른 파일
   - git checkout master
   - ls -al
   - git init manual-merge
   - nano work.txt
     - work 1
   - git add work.txt
   - git commit -m 'work 1'
   - git log
   - git branch o2
   - nano master.txt
     - 2
   - git add master.txt
   - git commit -m 'work 2'
   - git commit --amend
     - master work 2
   - git checkout o2
   - nano o2.txt
     - o2 2
   - git add o2.txt
   - git commit -m 'o2 work 2'
   - git log --all --graph --oneline
   - git checkout master
   - git merge o2
   - git log --all --graph --oneline
   - git reset --hard 합병전커밋ID
5. Merge : 같은 파일, 다른 부분 병합
   - git init manual-merge
   - cd manual-merge
   - nano work.txt
     - title content
     - title content
   - git add work.txt
   - git commit -m '1'
   - git branch o2
   - nano work.txt
     - 첫번째줄 master content
   - git commit -am 'master work2'
   - git checkout o2
   - nanow work.txt
     - 두번째줄 o2 content
   - git add work.txt
   - git commit -m 'o2 work 2'
   - git chekcout master
   - git merge o2
   - cat work.txt
6. Merge : 같은 파일, 같은 부분 병합
   - git init manual-merge
   - cd manual-merge
   - nano work.txt
     - title content
     - title content
   - git add work.txt
   - git commit -m 'work 1'
   - git branch o2
   - git log
   - nano work.txt
     - title content master
   - git commit -am 'master work 2'
   - git chekcout o2
   - nano work.txt
     - title content o2
   - git add work.txt
   - git commit -m 'o2 work 2'
   - git log --all --graph --oneline
   - git checkout master
   - git merge o2
     - CONFLICT 발생
     - 자동 merge 실패
   - git status
     - both modified
   - nano work.txt
     - =====가 구분자
     - 수동으로 수정
   - git add work.txt
   - git status
     - modified
   - git commit
   - git log --all --graph --oneline
   - nano work.txt
7. 3 way merge
   - here (A, B, C, D)
   - there (A, B, T, T)
   - 2 way merge (A, ?, ?, ?)
   - ..
   - base (A, B, C, D)
   - here (A, H, C, H)
   - there (A, B, T, T)
   - 3 way merge (A, H, T, ?)
   - 3 way merge가 2way merge보다 더 많은 것을 자동화
8. 외부도구를 이용한 병합
   - cat work.txt
     - A B C D
   - git chekcout here
   - cat work.txt
     - A H C H
   - git checkout there
   - cat work.txt
     - A B T T
   - git checkout here
   - git merge there
   - cat work.txt
   - p4Merge 다운로드
   - p4Merge git config 검색
   - git config --global merge.tool p4mergetool
   - cat ~/.gitconfig
   - git mergetool
     - mergetool 실행됨
     - 수동으로 수정 후 저장
   - git status
   - cat work.txt.orig
   - cat work.txt
   - rm work.txt.orig
   - git commit
   - git log --all --graph --oneline
9. HEAD Branch Commit & Checkout
10. Checkout vs reset

## 4. 협업

1. 혼자 작업
   - git init a
   - ls -al
   - cd a
   - nano work.txt
     - work 1
   - git add work.txt
   - git commit -m 'work 1'
   - git remote add origin 원격저장소주소
   - git push -u origin master
2. 같이 작업
   - settings -> collaborators
3. push & pull

- cd ..
  - git clone 원격저장소주소
  - cd b
  - ls -al
  - A
    - nano work.txt
    - git commit -am 'work 2a'
    - git push
    - git log
  - B
    - nano work.txt
    - git commit -am 'work 2b'
    - git log
    - git push
      - rejected
    - git pull
  - A
    - cat work.txt
  - B
    - cat work.txt
      - 에러 발생
    - git mergetool
    - nano work.txt
      - 에러 수동 수정
    - git add work.txt
    - git status
    - git commit
    - git log --all --graph --oneline
    - git push
  - A
    - git pull
      git log --all --graph --oneline

4. 원격브랜치와 Fetch(신중하게 pull 하고 싶을때 fetch 사용)
   - git fetch -> git merge FETCH_HEAD -> commit -> push
   - git log --all --graph --oneline
   - nano work.txt
   - git commit -am 'work 3a'
   - git log --all --graph --oneline
   - git status
   - git push
   - git log --all --graph --oneline
   - B
     - git fetch
   - A
     - work.txt
   - B
     - cat work.txt
     - git log --all --graph --oneline
     - git status
     - git pull or git merge origin/master
     - git log --all --graph --onelien
     - git pull = git fetch; git merge origin/master
     - git은 fetch를 할때마다 .git/FETCH_HEAD 파일을 만듬
     - cat .git/FETCH_HEAD
     - git pull = git fetch; git merge FETCH_HEAD

## 5. reset & revert

1. head
   - git log --all --graph --oneline
   - a -> b -> c(head -> master)
     - head가 b를 가리키면 b버전의 스냅샷을 현재 Working 디렉토리로 바꿈
2. reset vs checkout 이론
   - git checkout b vs git reset b
     - checkout은 head가 b를 가리킴, master는 c를 가리킴
     - reset은 head는 master를 가리키고 master는 b를 가리킴
     - reset을 하든 checkout을 하든 워킹 디렉토리는 b를 가리킴
     - log시 reset에서는 c는 delete됨
     - log시 checkout에서는 log --all을 하면 c는 아직 있음
   - git reset master vs git checkout master
     - reset는 안바뀜 여전히 master가 b를 가리킴
     - checkout은 head가 master를 가리킴. master는 c를 가리킴
   - git reset c
     - master는 c를 가리킴
     - log시 c는 복원됨
   - git checkout c
     - head가 c를 직접 가리킴, master는 c를 가리킴
     - head는 브랜치를 가리키지 않고 커밋을 직접 가리키는 경우 Detatched HEAD라고 함(warning).
3. reset vs checkout 실습
   - git init git4-reset-revert-1
   - cd git4-reset-revert-1
   - vim work.txt
   - git add work.txt
   - git commit -am 'init'
   - commit work1 ~ work3 까지 만들기
   - A
     - git --no-pager log --oneline --all
     - git reset --hard work2버전ID
       - log시 work3는 보이지 않음
     - git reset --hard master
       - 변화없음
   - B
     - git --no-pager log --oneline --all
     - git checkout work2버전ID
       - HEAD가 WORK2를 가리킴
     - git checkout master
       - HEAD가 master 브랜치를 가리킴, C를 가리킴
   - A
     - git reset --hard work3버전ID
       - 지워진줄 알았던 work3 복원됨
     - git reflog
       - 이미 지워진 커밋 ID 나옴
4. reset --soft vs --mixed vs --hard
   - vim work.txt
   - git add work.txt
   - git commit -m 'work1'
     - work1 ~ work3 커밋 만들기
   - git --no-pager log --oneline
   - git reset --hard work3버전ID
     - work3 지워짐
   - git reset --hard work3버전ID
     - work3 복원됨
   - git reset --soft work2버전ID
   - git status
     - work.txt가 staging area에 올라가있음
   - cat work.txt
     - 3
     - head는 work2를 가리키나 3이 출력됨
   - soft vs mixed vs hard
     - soft, mixed, hard 모두 master 브랜치는 b를 가리킴
     - repository도 세개 모두 2를 가리킴
     - soft시 working dir, stage area는 3
     - hard시 working dir, stage area는 2
     - mixed시 working dir은 3, stage area는 2
   - git reset --hard work2커밋ID
     - 작업 하다가 git reset --hard HEAD시 working area에서 작업하던 내용 다 지움.
   - git status
     - nothing to commit
   - git reflog
   - git reset --hard work3커밋ID
   - git reset --soft work2커밋ID
   - git status
     - modified: work.txt
     - head는 work2를 가리킴
     - stage area, working dir은 3를 가리킴
   - git reset --soft work1커밋ID
     - work2, work3 변경사항은 stage area, working dir에 남아 있음
   - git status
   - vim work.txt
     - 3 -> 2,3
   - git add work.txt
   - git commit -am 'work 2,3'
   - cat work.txt
     - 2,3
   - git reset 버전ID
     - default값은 mixed
5. revert 이론
   - 되돌리기, 역사가 기록됨.
   - git reset --hard A
     - master가 A를 가리킴
     - B라는 실수가 기록에 남지 않음
   - git revert B
     - B버전 변경사항을 취소한 새로운 버전(C)을 생성함
     - master는 C를 가리킴
     - B버전은 남아있음
6. revert 이론 : 충돌의 원인
7. revert 실습 : 충돌의 해결

## 6. cherry-pick & rebase

1. cherry-pick 개념과 기본사용법
   - git init .
   - touch init.txt
   - git add init.txt
   - git commit - m 'init'
   - git log --oneline --all --graph
   - git branch topic
   - touch m1; git add m1; git commit -m m1;
   - touch m2; git add m2; git commit -m m2;
   - git checkout topic
   - touch t1; git add t1; git commit -m t1;
   - touch t2; git add t2; git commit -m t2;
   - git log --oneline --all --graph
   - ls
     - init t1 t2 t3
   - git checkout master
   - ls
     - init m1 m2
   - t2작업을 master 브랜치에도 적용되게 하려면 cherry-pick을 사용해야함
   - git chekcout master
   - git cherry-pick t2버전ID
   - ls
     - init.txt m1 m2 t2
   - git log --oneline --all --graph
2. rebase 개념과 기본 사용법
   - git checkout master
   - git rebase topic
     - master 브랜치를 topic 브랜치 앞으로 옮김
   - git log --oneline --graph --all
     - init t1 t2 t3(topic) m1 m2(HEAD->master)
   - merge vs rebase
     - merge는 병렬로 처리되어서 mt3가 만들어짐
     - rebase는 직렬로 처리됨
       - m1 + t2가 합쳐져서 m1이 만들어짐
       - 만들어진 m1과 m2가 합쳐져서 m2가 만들어짐
       - rebase는 원격저장소에 있는 것은 하지 않아야함
     - merge와 rebase의 결과는 동일함
3. cherry pick 충돌의 원인과 해결
4. rebase 충돌의 원인과 해결
5. 협업에서 rebase를 이용해 로그 정리
