### 김다님 - 구현 기능

0. 카테고리 태그 표시

- `CategoryTag` 컴포넌트를 생성하여 category값에 따라 다른 컬러가 표시되도록 하였습니다.
<img src="https://user-images.githubusercontent.com/74545780/158935108-58eb5f74-c17e-492c-a68c-1c6f7c105af0.png" width="80px" >

- size props를 달리 주어 게시글 목록과 게시글 조회 페이지에서 다른 모양으로 표시되도록 하였습니다.\
![image](https://user-images.githubusercontent.com/74545780/158935074-62687ceb-1eb3-4d72-a609-b3482e66504d.png)
![image](https://user-images.githubusercontent.com/74545780/158935089-1faa0b12-9b85-4149-9d97-920d5de97f2a.png)

1. 게시글 목록

- 카테고리 태그 표시
- 게시글 제목 혹은 본문 미리보기 내용이 길 경우 ellipsis 처리
- 작성일 표시
  - 작성일 2일 경과 시 YYYY-MM-DD 형식의 작성일이 표시됩니다.

2. 게시글 조회 페이지

- 카테고리 태그 표시
- 작성일시 표시

  - YYYY년 MM월 DD일 오전/오후 HH:MM 형식으로 작성일시가 표시됩니다.
- 공유 URL 새창 열기
- URL 클립보드에 복사
  - Copy버튼을 누르면 버튼의 텍스트가 일시적으로 Copied로 바뀌면서 URL이 클립보드로 복사 됩니다.
<img src="https://user-images.githubusercontent.com/74545780/158940925-5dd36e92-8a9b-4a95-b989-3f41e02a8765.gif" width="600px">


3. 게시글 생성 페이지

- URL 저장
  - 작성버튼을 눌렀을 때, 입력받은 URL이 프로토콜(http:// 혹은 https://) 없이 주소만 있는 경우 `http://`을 붙여서 서버에 저장됩니다.
<img src="https://user-images.githubusercontent.com/74545780/158940949-57233757-eb84-4943-ab1b-7ddf0622b759.gif" width="350px" />
  
