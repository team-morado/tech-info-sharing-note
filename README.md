# <span id="top">tech-info-sharing-note</span>
<details>
<summary><h2>목차</h2></summary>
<div markdown="1">

1. 프로젝트 소개
     - [개요](https://github.com/team-morado/tech-info-sharing-note/edit/hyosoon/README.md#pencil-%EA%B0%9C%EC%9A%94)
     - [팀원](https://github.com/team-morado/tech-info-sharing-note/edit/hyosoon/README.md#-%ED%8C%80%EC%9B%90%EA%B5%AC%EC%84%B1)
2. 개발 환경 및 배포
     - [사용 기술](https://github.com/team-morado/tech-info-sharing-note/edit/hyosoon/README.md#-%EC%82%AC%EC%9A%A9%EA%B8%B0%EC%88%A0)
     - [개발 환경](https://github.com/team-morado/tech-info-sharing-note/edit/hyosoon/README.md#-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD)
     - [배포 바로가기](https://tech-info-sharing-note.web.app/home)
3. 전체 구조 및 시안
     -  [프로젝트 구조](https://github.com/team-morado/tech-info-sharing-note/edit/hyosoon/README.md#-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%A1%B0)
     -  [시안](https://github.com/team-morado/tech-info-sharing-note/edit/hyosoon/README.md#pencil2-%EC%8B%9C%EC%95%88)
4. [세부 기능](https://github.com/team-morado/tech-info-sharing-note/edit/hyosoon/README.md#-%EC%84%B8%EB%B6%80-%EA%B8%B0%EB%8A%A5)
5. [작업상세내용](https://github.com/team-morado/tech-info-sharing-note/edit/hyosoon/README.md#%EF%B8%8F-%EC%9E%91%EC%97%85%EC%83%81%EC%84%B8%EB%82%B4%EC%9A%A9)     
<br>
     
</div>
</details>


## :pencil: 개요
- ✨ 공유노트는 개발과 관련된 유용한 정보를 공유하고, 편하게 찾아볼 수 있도록 만든 **`URL 아카이빙 서비스`** 입니다.
- 🙌 프론트엔드 개발자가 목표인 팀원들에게 HTML, CSS, JS, React 등 카테고리 별로 정렬된 정보를 제공합니다.
- 🔗 공유된 URL은 새창열기로 직접적인 내용확인이 가능하고, URL 자체를 복사하여 저장할 수도 있습니다.
- 👀 또한, 해당 URL을 공유한 이유를 확인하여 사용자가 URL 이동 여부를 결정할 수 있도록 하였습니다. 
- 📆 기간 : 2022.02.23 - 2022.03.14 
<br>

## 🧑‍🤝‍🧑 팀원      

| 강지윤 | 김다님 | 이규민 | 장효순 | 조미진 |
|--|--|--|--|--|
|![image](https://user-images.githubusercontent.com/93389773/159386627-dcfb67cc-4e33-40a8-b467-c78ac752de0a.png)|![image](https://user-images.githubusercontent.com/93389773/159386561-30c199f2-aa16-4d44-a762-14ad0b24fff8.png)|![image](https://user-images.githubusercontent.com/93389773/159386526-681728de-d61f-423e-9382-056db2c555f9.png)|![image](https://user-images.githubusercontent.com/93389773/159386611-b18a6e66-3f3b-4446-b04a-facb56efb1bd.png)|![image](https://user-images.githubusercontent.com/93389773/159386713-a0d944b3-aab5-4c4b-bfec-04178b72a88d.png)|
| [kangjiyoun](https://github.com/kangjiyoun) | [dahhnym](https://github.com/dahhnym) | [Kyoo130](https://github.com/Kyoo130) | [sooonlog](https://github.com/sooonlog) | [mmcho122](https://github.com/mmcho122)|
<br>
<p align="right"><a href="#top">[TOP]</a></p>

## 💻 사용기술
- **JavaScript**
- 웹앱 구현과 폭넓은 커뮤니티로 원활한 디버깅이 가능한 **React**
- 효율적이고 간단한 상태관리를 위한 **Redux**
- 로딩 없이 페이지 별 컴포넌트 라우팅을 위한 **React-Router-Dom**
- 자유로운 css 컴포넌트 사용과 scss 적용을 위한 **Styled-components**
- 빠른 백엔드 작업과 간단한 데이터베이스 작업을 위한 **Firebase**
<br>

## 🏚 개발 환경
- **OS** : Mac, Window
- **Frontend**: React
- **Backend** : Firebase
- **IDE** : VS Code
- **Team Collaboration Tool** : Git, Git Projects, Discord
- **Platform** : WebApp
- **Test Browser** : Chrome v.99.0.4844.74, Samsung Internet Browser v.16.2.1.56
- **Test Device** : iPhone 8/12 mini/13 Pro, Gallaxy S20 FE 
<br>

## 🔗 배포 URL
https://tech-info-sharing-note.web.app/home
<br>
<br>
<p align="right"><a href="#top">[TOP]</a></p>

## 💬 프로젝트 구조
```bash

├─.firebase
├─node_modules
├─public
│  │  favicon.ico
│  │  index.html
│  │  logo192.png
│  │  logo512.png
│  │  manifest.json
│  │  robots.txt
│  │
│  └─images
│          header_logo.png
│          icon-arrow-down.svg
│          icon-arrow-left.svg
│          icon-edit.png
│          logo.svg
│
└─src
    │  App.css
    │  App.js
    │  index.css
    │  index.js
    │
    ├─components
    │      ClipboardCopy.js
    │      Footer.js
    │      Header.js
    │      index.js
    │      ListItem.js
    │      ListOption.js
    │      ListOptionGroup.js
    │      Spinner.js
    │      Svg.js
    │
    ├─elements
    │      Button.js
    │      CategoryTag.js
    │      index.js
    │      NextBtn.js
    │      Text.js
    │
    ├─pages
    │      Edit.js
    │      Home.js
    │      index.js
    │      Loading.js
    │      New.js
    │      NotFound.js
    │      Splash.js
    │      ViewPage.js
    │
    ├─shared
    │  │  firebase.js
    │  │
    │  └─redux
    │      │  configStore.js
    │      │
    │      └─modules
    │              techInfo.js
    │
    └─Util
            Common.js
            timeForToday.js
```
<br>
<p align="right"><a href="#top">[TOP]</a></p>

## :pencil2: 시안
🔗 [Figma Link](https://www.figma.com/file/4U8qranTUhhKW1vFeNWrav/%EC%B4%88%EC%95%88?node-id=0%3A1)   
- Version 1 (Demo)      
![시안0](https://user-images.githubusercontent.com/93389773/155470792-00c78710-1ef1-4329-a118-13dc00a65f29.png)     
![시안1](https://user-images.githubusercontent.com/93389773/155470807-d791fb92-9de8-45e5-83d9-70e902d7b266.png)      

- **Version 2** (Final)   
![시안3 1](https://user-images.githubusercontent.com/93389773/159384411-9e3c75e3-6084-49a0-b4e3-8fa8702a133a.PNG)
![시안3 2](https://user-images.githubusercontent.com/93389773/159384421-7b78caa2-aa53-48f2-b169-0c2451bf30f9.PNG)
<br>
<p align="right"><a href="#top">[TOP]</a></p>

## 🛠 세부 기능
| splash | Main page | Write page |
|--|--|--|
|![splash](https://user-images.githubusercontent.com/93389773/159398760-6bb711a3-dcfb-49cf-9747-b65ec73b0ab1.gif)|![main-sorting](https://user-images.githubusercontent.com/93389773/159398774-d5e3cff3-f2ca-44da-93b2-dcbc0b8e1b51.gif)|![write](https://user-images.githubusercontent.com/93389773/159398791-0dfbd432-fca7-4c89-811b-ac93ae2304fb.gif)|
| View page | Error | Loading |
|![view](https://user-images.githubusercontent.com/93389773/159398848-cbdb63e7-feef-4505-8f67-d2aec6f762f7.gif)|![error](https://user-images.githubusercontent.com/93389773/159398861-1a6c593b-2e39-4ffc-ad5b-fe093f16ab65.gif)|![loading](https://user-images.githubusercontent.com/93389773/159398878-42e58d82-3320-4405-a3ad-5f4181210bdf.gif)|
<br>
<p align="right"><a href="#top">[TOP]</a></p>

## 🖐️ 작업상세내용
| 담당 | 구분 | 상세내용 | URL | 경로 |
|--|--|--|--|--|
|강지윤|pages|카테고리별 게시글 필터링 기능 개발|src/pages/Home.js|/home|
||components|작성자, 스킬 카테고리 그룹 컴포넌트 개발|src/components/ListOptionGroup.js||
|||작성자, 스킬 카테고리 옵션 컴포넌트 개발|src/components/ListOption.js||
||util|고정 헤더 및 푸터 제외한 컨텐츠 영역 조절 관련 코드 개발|src/util/Common.js||
||UX/UI|1차 시안 화면 기획 및 디자인 생성|||
|김다님|pages|게시글 상세 조회 페이지 개발|src/pages/ViewPage.js|/view|
||components|아이콘 이미지 SVG 컴포넌트화|src/components/Svg.js||
|||카테고리 태그 모듈화 코드 개발|src/elements/CategoryTag.js||
|||URL 클립보드 복사 컴포넌트 개발|src/elements/ClipboardCopy.js||
||util|URL 프로토콜 유효성 검사|src/pages/New.js|/new|
|||게시글 목록 카테고리 및 작성일 표시 기능|src/components/ListItem.js||
|이규민|pages|게시글 작성 페이지 개발|src/pages/New.js|/new|
|||게시글 수정 페이지 개발|src/pages/Edit.js|/edit|
||components|버튼 컴포넌트 모듈화 코드 개발|src/elements/Button.js||
|||텍스트 컴포넌트 모듈화 코드 개발|src/elements/Text.js||
||shared|Redux 액션, 액션 생성 함수, 리듀서, 미들웨어 코드 개발|src/shared/redux/techInfo.js||
|||Redux 스토어 코드 개발|src/shared/redux/configStore.js||
|||Firebase 서버 연결 코드 개발|src/shared/firebase.js||
||util|Today 시간 표시 기능 유틸 코드 개발|src/util/timeForToday.js||
||etc|전체 게시글 CRUD 개발 총괄|||
|장효순|pages|게시글 목록 data 출력 기능 개발|src/pages/Home.js|/home|
||etc|README file 작성|/README.md||
|||Git 협업 가이드 작성||||
|조미진|pages|초기 화면 이동 Splash 페이지 개발|src/pages/Splash.js|/|
|||NotFound 페이지 개발|src/pages/NotFound.js|/\*|
|||Loading 페이지 개발|src/pages/Loading.js||
||components|접속 URL에 따른 반응형 Header 컴포넌트 개발|src/components/Header.js||
|||Footer 컴포넌트 코드 개발|src/components/Footer.js||
||UX/UI|2차 시안 화면 및 프로젝트 로고 디자인 생성|||
<br>		


<p align="right"><a href="#top">[TOP]</a></p>
