import ViewCard from "../components/ViewCard";

const dummyData = [
  {
    id: 1,
    author: "효순",
    title: "안녕하세요",
    category: "HTML",
    url: "http://www.naver.com",
    content: "유용한거 같아서 공유합니다. 유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.유용한거 같아서 공유합니다.",
    created_date: new Date().toLocaleString(),
  },
//   {
//     id: 2,
//     author: "미진",
//     title: "반가워요",
//     category: "CSS",
//     url: "http://www.google.com",
//     content: "유용한거 같아서 공유합니다.",
//     created_date: new Date().toLocaleString(),
//   },
//   {
//     id: 3,
//     author: "규민",
//     title: "react dom에 관하여",
//     category: "React",
//     url: "http://velog.io",
//     content: "react dom에 관한 글입니다.",
//     created_date: new Date().toLocaleString(),
//   },
//   {
//     id: 4,
//     author: "지윤",
//     title: "javascript es6에 관하여",
//     category: "HTML",
//     url: "http://www.google.com",
//     content: "유용한거 같아서 공유합니다.",
//     created_date: new Date().toLocaleString(),
//   },
];

const ViewPage = () => {
  return (
    <div>
      {dummyData.map((it) => {
        return <ViewCard {...it} />;
      })}
    </div>
  );
};

export default ViewPage;
