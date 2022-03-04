import ListOption from "../components/ListOption";
import styled from "styled-components";

const ListOptionGroup = ({addChecked, removeChecked}) => {

  return(
      <>
    <ListOptionRow>
    <ListOptionType>작성자</ListOptionType>
    <ListOptionList>
      <ListOption name="author" value="hg" txt="효순" addChecked={addChecked} removeChecked={removeChecked} />
      <ListOption name="author" value="jy" txt="지윤" addChecked={addChecked} removeChecked={removeChecked} />
      <ListOption name="author" value="tina" txt="다님" addChecked={addChecked} removeChecked={removeChecked} />
      <ListOption name="author" value="mj" txt="미진" addChecked={addChecked} removeChecked={removeChecked} />
      <ListOption name="author" value="km" txt="규민" addChecked={addChecked} removeChecked={removeChecked} />
    </ListOptionList>
  </ListOptionRow>
  <ListOptionRow>
    <ListOptionType>카테고리</ListOptionType>
    <ListOptionList>
      <ListOption name="category" value="html" txt="HTML" addChecked={addChecked} removeChecked={removeChecked} />
      <ListOption name="category" value="css" txt="CSS" addChecked={addChecked} removeChecked={removeChecked} />
    </ListOptionList>
  </ListOptionRow>
  </>
  )
};

export default ListOptionGroup;

const ListOptionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 3%;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
`
const ListOptionType = styled.strong`
  width: 5.375rem;
  padding-right: 0.375rem;
  font-size: 1rem;
  letter-spacing: -0.045rem;
  line-height: 1.8rem;
  box-sizing: border-box;
`
const ListOptionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 5.375rem);
`