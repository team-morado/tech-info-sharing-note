import ViewCard from "../components/ViewCard";

const ViewPage = ({dataList}) => {
  return (
    <div>
      {dataList.map((it) => {
        return <ViewCard {...it} />;
      })}
    </div>
  );
};

export default ViewPage;
