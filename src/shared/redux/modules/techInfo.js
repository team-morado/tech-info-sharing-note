// techInfo.js
import {db} from "../../firebase";
import {collection, doc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore";

// 액션 생성
const LOAD = 'techInfo/LOAD';
const CREATE = 'techInfo/CREATE';
const DELETE = 'techInfo/DELETE'
const UPDATE = 'techInfo/UPDATE'


// 초기값 설정
const initialState = {
  list: [],
};


// 액션 생성 함수
export function loadTechInfo(techInfo_list) {
  return {type: LOAD, techInfo_list};
}

export function createTechInfo(techInfo) {
  return {type: CREATE, techInfo: techInfo};
}

export function deleteTechInfo(techInfo_id) {
  return {type: DELETE, techInfo_id};
}

export function updateTechInfo(techInfo_id) {
  return {type: UPDATE, techInfo_id}
}


// 미들웨어
export const loadTechInfoFB = () => {
  return async function (dispatch) {
    const techInfo_data = await getDocs(collection(db, "techInfo"));
    // console.log(techInfo_data)
    let techInfo_list = [];

    techInfo_data.forEach((it) => {
      techInfo_list.push({id: it.id, ...it.data()});
      // console.log(techInfo_list);
    })
    dispatch(loadTechInfo(techInfo_list));
  }
};

export const createTechInfoFB = (techInfo) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "techInfo"), techInfo);
    const techInfo_data = {id: docRef.id, ...techInfo};
    // console.log(techInfo_data)
    dispatch(createTechInfo(techInfo_data));
  }
}

// 수정 필요
export const updateTechInfoFB = (techInfo_id) => {
  return async function (dispatch, getState) {
    console.log(techInfo_id)
    const docRef = doc(db, "techInfo", techInfo_id);
    await updateDoc(docRef, {author: "규민FB"});

    // console.log(`asd`, getState().techInfo)
    const _techInfo_list = getState().techInfo.list;
    const techInfo_index = _techInfo_list.findIndex((it) => {
      return it.id === techInfo_id;
    })
    // dispatch(updateTechInfo(techInfo_index))
  }
}

export const deleteTechInfoFB = (techInfo_id) => {
  return async function (dispatch, getState) {
    if (!techInfo_id) {
      window.alert("아이디가 없습니다.")
      return;
    }

    const docRef = doc(db, "techInfo", techInfo_id);
    await deleteDoc(docRef);

    const _techInfo_list = getState().techInfo.list;
    const techInfo_index = _techInfo_list.findIndex((it) => {
      return it.id === techInfo_id;
    })
    dispatch(deleteTechInfo(techInfo_index));
  }
}


// 리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "techInfo/LOAD": {
      return {list: action.techInfo_list};
    }
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
    case "techInfo/UPDATE": {
      const new_techInfo_list = state.list.map((l, idx) => {
        if (parseInt(action.techInfo_id) === idx) {
          return {...l, complete: true}
        } else {
          return l;
        }
      });
      console.log({list: new_techInfo_list})
      return {list: new_techInfo_list};
    }
    default:
      return state;
  }
}