# HTML

---

### References

- poiemaweb
- MDN
- Wiki
- w3.org

---

## Main Chapter

1. HTML5 기본문법
2. Sementic Web
3. Basic Tag
4. Text Tag
5. Hyperlink
6. List & Table
7. Multimedia
8. Form
9. aria
10. schema.org
11. DOM
12. BOM

---

## Sub Chapter

1. HTML5
   - **HTML5?**
   - **Basic Syntax**
     1. Element
        - Nested Element
        - Empty Element
     2. Attribute
        - HTML Global Attribute
     3. Comments
2. Sementic Web
   - **Sementic Web**
   - **Search Engine**
   - **Non-sementic Element vs Sementic Element**
   - **HTML5 Sementic Element**
3. Basic Tag
   - **DTD, Document Type Definition**
   - **html**
   - **head**
   - **body**
4. Text Tag
   - **Headings**
   - **Text Formatting**
   - **Text Body**
5. Hyperlink
   - **href Attribute**
     1. Directory
     2. File Path
   - **target Attribute**
6. List & Table
   - **List**
     1. Unordered List
     2. Ordered List
     3. Nesting List
   - **Table**
7. Multimedia
   - **Image**
   - **Media**
     1. audio
     2. video
8. Form
   - **form**
   - **input**
   - **select**
   - **textarea**
   - **button**
   - **fieldset/ legend**
9. aria
10. schema.org
11. DOM
12. BOM

---

### 1. HTML5 기본문법

#### 1-1. HTML5란

HTML(HyperText Markup Language)로 웹페이지의 정보를 구조화.
HTML5(2014.10.28) 추가된 기능들

- Multimedia : 플래시 플러그인 없이 비디오, 오디오 기능 지원
- Graphics & Effects : 2d(SVG, Canvas), 3d(CSS3, WebGL)
- Connectivity : Socket 지원(양방향통신)
- Device access : 하드웨어의 카메라, 동작센서등 제어 가능.
- Offline & Storage
- Semantics
- CSS3 지원

#### 1-2. 기본문법

1. Element
   Element = start tag + contents + end tag
   태그는 대소문자를 구별하지 않으나 소문자를 사용하는 것이 일반적.

- Nested Element
  요소는 중첩될 수 있으며 이러한 관계로 정보를 구조화.
- Empty Element or Self-Closing Element
  content를 가질 수 없는 Element
  br, hr, img, input, link, meta

2. Attribute
   Element의 성질, 특징을 정의

- HTML Global Attribute
  id, class, hidden, lang, style, tabindex, title

3. Comments

---

### 2. Sementic Web

#### 2-1. Sementic Web

SEO를 위해 검색엔진의 동작원리를 알 필요가 있다.
검색엔진 로봇의 크롤러가 웹사이트 정보를 수집하고 인덱서가 검색 키워드에 대응하는 인덱스를 만들어 둔다.
검색엔진은 HTML 코드로 의미를 인지해야 하는데 이때 Semeantic Element를 해석하게 된다.

시맨틱 태그란 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명하는 역할을 한다.
시멘틱 웹이란 웹에 존재하는 수많은 웹페이지들에 메타데이터를 부여해 기존의 잡다한 데이터 집합이었던 웹페이지를 의미와 관련성을 가지는 거대한 데이터베이스로 구축하고자 하는 발상이다.

#### 2-2. Search Engine

1. Non-sementic Element vs Sementic Element
   Non-sementic : div, span 등
   Sementic : form, table, img 등
2. HTML5 Sementic Element
   header, nav, aside, section, article, footer

---

### 3. Basic Tag

#### 3-1. DTD, Document Type Definition

    웹페이지의 형식.
    문서의 최상위에 위치.
    대소문자를 구별하지 않음.

#### 3-2. html

    모든 HTML 요소의 부모 요소.
    웹페이지에 단 하나만 존재.
    DTD를 제외한 모든 요소는 html 요소 내부에 기술.

#### 3-3. head

    MetaData를 포함하기 위한 요소.
    웹페이지에 단하나만 존재.
    title, style, link, script, meta

#### 3-4. body

    HTML 문서의 내용.
    웹페이지에 단 하나만 존재.
    대부분의 요소가 body 요소 내에 기술.

---

### 4. Text Tag

#### 4-1. Headings

#### 4-2. Text Formatting

#### 4-3. Text Body

---

### 5. Hyperlink

#### 5-1. href Attribute

1. Directory
2. File Path

#### 5-2. target Attribute

---

### 6. List & Table

#### 6-1. List

1. Unordered List
2. Ordered List
3. Nesting List

#### 6-2. Table

---

### 7. Multimedia

#### 7-1. Image

#### 7-2. Media

1. audio
2. video

---

### 8. Form

#### 8-1. form

#### 8-2. input

#### 8-3. select

#### 8-4. textarea

#### 8-5. button

#### 8-6. fieldset/ legend
