# www
## 웹 포트폴리오 (2022.06 ~ 2022.12)


## 1. 금호문화재단 기업형 PC 웹사이트 리뉴얼 제작
![image](https://user-images.githubusercontent.com/87026989/209488804-8ebecac0-ac9a-4414-9ee6-9134837a5135.png)

### 금호문화재단 기업형 PC
- http://oilpaintingkim.cafe24.com/
- 기존 금호문화재단 웹사이트를 새로 리뉴얼 하여 제작한 PC형 웹사이트입니다.

### 웹 접근성 / 표준성
- W3C 웹표준 통합 마크업 검사(html/css) 및 php 를 제외한 웹 접근성 검사를 완료했습니다.
- 리더기가 읽는 순서를 고려하여 마크업을 작성하였습니다.
- heading을 목차에 맞추어 작성하였습니다.
- 크롬, 오페라, 파이어폭스, 엣지, 웨일 마지막으로 IE(인터넷 익스플로러) 까지 총 6개의 크로스브라우징을 완료했습니다.

### HTML / CSS
- 시맨틱 태그를 사용하였습니다. 
- 불필요한 div 태그를 남발하지 않았습니다.
- IE 와의 크로스 브라우징을 위해 flex / grid 를 쓰지 않고 오직 float와 position 만을 이용하여 레이아웃을 완성했습니다.

### javascript / jquery
- javascript 와 jquery 를 이용한 다양한 이벤트를 구성하였습니다.
- jquery 를 이용한 네비게이션, 스크롤 스파이 등을 구현하였습니다. *[재단소개 - 연혁]*
- svg 를 이용한 스크롤 이벤트를 작성하였습니다. *[미술사업 - 창작공간지원]*
- javascript 를 사용하여 각 문화재단의 입장시간을 알려주는 시계를 완성하였습니다. *[아트센터]*

### json / ajax
- json 과 ajax 기능을 이용한 갤러리를 구현하였습니다. *[미술사업 - 소장품사업]*
- json 과 ajax 기능을 이용한 모달창을 구현하였습니다. *[음악사업 - 음악교육 및 지원 - 음악 지원]*

### php / mysql
- php 의 inclue 를 이용하여 header 과 footer를 분리하였습니다.
- php 와 mysql 을 사용하여 회원가입과 로그인 및 탈퇴 로직을 완성하였습니다.
- php 와 mysql 을 이용한 세가지 형태의 검색 기능이 있는 게시판을 완성하였습니다.
  - 기본 글 게시판 *[커뮤니티 - 공지사항]*
  - 글 + 이미지 게시판 *[음악사업 - 금호아카이브]*
  - 글 + 이미지 + 댓글 게시판 *[커뮤니티 - NEWS]*

## 2. 금호문화재단 모바일형
![image](https://user-images.githubusercontent.com/87026989/209492105-608622a5-ca9c-4fec-806f-4da687a41aa3.png)

### 금호문화재단 모바일형
- http://oilpaintingkim.cafe24.com/mobile/
- PC형 웹사이트를 모바일형으로 리뉴얼하여 제작하였습니다.

### 웹 접근성 / 표준성
- W3C 웹표준 통합 마크업 검사(html/css (swiper.js 제외)) 및 php 를 제외한 웹 접근성 검사를 완료했습니다.
- 리더기가 읽는 순서를 고려하여 마크업을 작성하였습니다.
- heading을 목차에 맞추어 작성하였습니다.
- 다양한 mobile 디바이스에 맞추어 크로스 체크를 완료하였습니다.

### HTML / CSS
- 시맨틱 태그를 사용하였습니다. 
- 불필요한 div 태그를 남발하지 않았습니다.
- flex / grid 및 다양한 css 를 사용하여 모바일에 최적화 되게 구성하였습니다.

### javascript / jquery
- javascript 와 jquery 를 이용하여 다양한 이벤트를 구현하였습니다.
- jquery 를 이용한 네비게이션을 구현하였습니다. 

### json / ajax
- json 과 ajax 기능을 이용한 모달창을 구현하였습니다. *[문화사업 - 아티스트]*

### php / mysql
- php 의 inclue 를 이용하여 header 과 footer를 분리하였습니다.
- php 와 mysql 을 사용하여 회원가입과 로그인 및 탈퇴 로직을 완성하였습니다.
- php 와 mysql 을 이용하여 두가지 형태의 검색 기능이 있는 게시판을 완성하였습니다. (pc 와 동일하게 연동)
  - 기본 글 게시판 *[커뮤니티 - 공지사항]*
  - 글 + 이미지 + 댓글 게시판 *[커뮤니티 - NEWS]*

### PWA
- progressive web app 기술을 적용시켜 웹에서도 앱처럼 다운받을 수 있게 구현했습니다.
- 현재 cors 이슈로 잠시 중단시켜놓은 상태입니다.

## 3. 아티스트 BLACK PINK 반응형 웹사이트
![image](https://user-images.githubusercontent.com/87026989/209496521-a3339d42-6400-45fe-8d85-c82941254a5e.png)

### BLACK PINK 반응형
- http://oilpaintingkim.cafe24.com/media/
- k-pop 아티스트 블랙핑크를 주제로 한 반응형 웹사이트입니다.

### 웹 접근성 / 표준성
- W3C 웹표준 통합 마크업 검사(html/css (swiper.js 제외)) 를 완료했습니다.
- 리더기가 읽는 순서를 고려하여 마크업을 작성하였습니다.
- heading을 목차에 맞추어 작성하였습니다.
- 다양한 pc, tablet, mobile 디바이스에 맞추어 크로스 체크를 완료하였습니다.

### HTML / CSS
- 시맨틱 태그를 사용하였습니다. 
- 불필요한 div 태그를 남발하지 않았습니다.
- 전체 v 단위를 사용하여 풀 반응형으로 어느 디바이스에도 완벽하게 적응되도록 완성하였습니다.

### javascript
- jquery 를 사용하지 않고 순수 javascript 만을 
- javascript 를 이용하여 module화 작업을 진행했습니다. 
  - tabModule.js 로 탭 기능을 모듈화 하여 재사용하였습니다.
- 

### json / ajax
- json 과 ajax 기능을 이용한 모달창을 구현하였습니다. *[문화사업 - 아티스트]*

### php / mysql
- php 의 inclue 를 이용하여 header 과 footer를 분리하였습니다.
- php 와 mysql 을 사용하여 회원가입과 로그인 및 탈퇴 로직을 완성하였습니다.
- php 와 mysql 을 이용하여 두가지 형태의 검색 기능이 있는 게시판을 완성하였습니다. (pc 와 동일하게 연동)
  - 기본 글 게시판 *[커뮤니티 - 공지사항]*
  - 글 + 이미지 + 댓글 게시판 *[커뮤니티 - NEWS]*

## 4. 아티스트 BLACK PINK 반응형 웹사이트
![image](https://user-images.githubusercontent.com/87026989/209496521-a3339d42-6400-45fe-8d85-c82941254a5e.png)

### BLACK PINK 반응형
- http://oilpaintingkim.cafe24.com/media/
- k-pop 아티스트 블랙핑크를 주제로 한 반응형 웹사이트입니다.

### 웹 접근성 / 표준성
- W3C 웹표준 통합 마크업 검사(html/css (swiper.js 제외)) 를 완료했습니다.
- 리더기가 읽는 순서를 고려하여 마크업을 작성하였습니다.
- heading을 목차에 맞추어 작성하였습니다.
- 다양한 pc, tablet, mobile 디바이스에 맞추어 크로스 체크를 완료하였습니다.

### HTML / CSS
- 시맨틱 태그를 사용하였습니다. 
- 불필요한 div 태그를 남발하지 않았습니다.
- 전체 v 단위를 사용하여 풀 반응형으로 어느 디바이스에도 완벽하게 적응되도록 완성하였습니다.

### javascript
- jquery 를 사용하지 않고 순수 javascript 만을 
- javascript 를 이용하여 module화 작업을 진행했습니다. 
  - tabModule.js 로 탭 기능을 모듈화 하여 재사용하였습니다.
- 

### json / ajax
- json 과 ajax 기능을 이용한 모달창을 구현하였습니다. *[문화사업 - 아티스트]*





