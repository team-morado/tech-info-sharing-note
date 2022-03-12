// techInfo.js
import {db} from "../../firebase";
import {collection, doc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore";

// 액션 생성
const LOAD = 'techInfo/LOAD';
const CREATE = 'techInfo/CREATE';
const DELETE = 'techInfo/DELETE';
const UPDATE = 'techInfo/UPDATE';
const ADD_CHECKED = 'ADD_CHECKED';
const REMOVE_CHECKED = 'REMOVE_CHECKED';


// 초기값 설정
const initialState = {
  is_loaded: false,
  list: [],
  authorChecked: [],
  catChecked: [],
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

export function updateTechInfo(techInfo_id, techInfo) {
  return {type: UPDATE, techInfo_id, techInfo}
}

export function addCategory(techInfo_list) {
  return {type: ADD_CHECKED, techInfo_list};
}

export function removeCategory(techInfo_list) {
  return {type: REMOVE_CHECKED, techInfo_list};
}


// 미들웨어
export const loadTechInfoFB = () => {
  return async function (dispatch) {
    const techInfo_data = await getDocs(collection(db, "techInfo"));
    let techInfo_list = [];

    techInfo_data.forEach((it) => {
      techInfo_list.push({id: it.id, ...it.data()});
    })
    dispatch(loadTechInfo(techInfo_list));
  }
};

export const createTechInfoFB = (techInfo) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "techInfo"), techInfo);
    const techInfo_data = {id: docRef.id, ...techInfo};
    dispatch(createTechInfo(techInfo_data));
  }
}

export const updateTechInfoFB = (techInfo) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "techInfo", techInfo.id);
    await updateDoc(docRef, {...techInfo});
    const _techInfo_list = getState().techInfo.list;
    const techInfo_index = _techInfo_list.findIndex((it) => {
      return it.id === techInfo.id;
    })
    dispatch(updateTechInfo(techInfo_index, techInfo))
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

export const addCategoryFB = (authorStandard, cateStandard) => {
  return async function (dispatch) {
    const techInfo_data = await getDocs(collection(db, "techInfo"));
    let techInfo_list = [];

    techInfo_data.forEach((it) => {
      techInfo_list.push({id: it.id, ...it.data()});
    })

    let authorChkData = techInfo_list.filter((obj) => {
      return authorStandard.includes(obj.author) !== false
    });
    let cateChkData = techInfo_list.filter((obj) => {
      return cateStandard.includes(obj.category) !== false
    });
    let doubleChkData = authorChkData.filter((obj) => {
      return cateStandard.includes(obj.category) !== false
    });

    if (authorStandard.length !== 0 && cateStandard.length === 0) {
      return dispatch(addCategory(authorChkData))
    } else if (authorStandard.length === 0 && cateStandard.length !== 0) {
      return dispatch(addCategory(cateChkData))
    } else if (authorStandard.length !== 0 && cateStandard.length !== 0) {
      return dispatch(addCategory(doubleChkData))
    }
  };
}

export const removeCategoryFB = (authorStandard, cateStandard, groupName, value) => {
  return async function (dispatch) {
    const techInfo_data = await getDocs(collection(db, "techInfo"));
    let techInfo_list = [];

    techInfo_data.forEach((it) => {
      techInfo_list.push({id: it.id, ...it.data()});
    })

    let authorChkData = techInfo_list.filter((obj) => {
      return authorStandard.includes(obj.author) !== false
    });
    let cateChkData = techInfo_list.filter((obj) => {
      return cateStandard.includes(obj.category) !== false
    });
    let removedData = techInfo_list.filter((obj) => obj[groupName] !== value);

    if (authorStandard.length === 0 && cateStandard.length === 0) {
      return dispatch(removeCategory(techInfo_list))
    } else if (authorStandard.length !== 0 && cateStandard.length === 0) {
      return dispatch(removeCategory(authorChkData))
    } else if (cateStandard.length !== 0 && authorStandard.length === 0) {
      return dispatch(removeCategory(cateChkData))
    } else {
      return dispatch(removeCategory(removedData))
    }
  };
}


// 리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "techInfo/LOAD": {
      return {list: action.techInfo_list, is_loaded: true};
    }
    case "techInfo/CREATE": {
      const new_techInfo_list = [...state.list, action.techInfo];
      return {...state, list: new_techInfo_list}
    }
    case "techInfo/DELETE": {
      const new_techInfo_list = state.list.filter((l, idx) => {
        return parseInt(action.techInfo_id) !== idx;
      });
      return {...state, list: new_techInfo_list}
    }
    case "techInfo/UPDATE": {
      const new_techInfo_list = state.list.map((l, idx) => {
        if (parseInt(action.techInfo_id) === idx) {
          return action.techInfo
        } else {
          return l
        }
      });
      return {...state, list: new_techInfo_list};
    }
    case "ADD_CHECKED": {
      return {...state, list: action.techInfo_list};
    }
    case "REMOVE_CHECKED": {
      return {...state, list: action.techInfo_list};
    }
    default:
      return state;
  }
}