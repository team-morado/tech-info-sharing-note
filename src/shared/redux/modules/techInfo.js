// techInfo.js

// 액션 생성
const CREATE = 'techInfo/CREATE';
const DELETE = 'techInfo/DELETE'

// 초기값 설정
const initialState = {
  list: [
    {
      id: 0,
      author: "효순",
      title: "0번째 게시글입니다.",
      category: "HTML",
      url: "http://www.naver.com",
      content: "유용한거 같아서 공유합니다.",
      created_date: 1645891761335,
    },
    {
      id: 1,
      author: "미진",
      title: "1번째 게시글입니다.",
      category: "CSS",
      url: "http://www.google.com",
      content: "유용한거 같아서 공유합니다.",
      created_date: 1645891761335,
    },
    {
      id: 2,
      author: "규민",
      title: "3번째 게시글입니다.",
      category: "React",
      url: "http://velog.io",
      content: "react dom에 관한 글입니다.",
      created_date: 1645891761335,
    },
  ],
};

// 액션 생성 함수
export function createTechInfo(techInfo) {
  return {type: CREATE, techInfo: techInfo};
}

export function deleteTechInfo(techInfo_id) {
  return {type: DELETE, techInfo_id};
}


// 리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "techInfo/CREATE": {
      const new_techInfo_list = [...state.list, action.techInfo];
      return {list: new_techInfo_list}
    }
    case "techInfo/DELETE": {
      const new_techInfo_list = state.list.filter((l, idx) => {
        return parseInt(action.techInfo_id) !== idx;
      });
      return {list: new_techInfo_list}
    }
    default: return state;
  }
}