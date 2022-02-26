import ViewCard from "../components/ViewCard";

const ViewPage = ({dataList}) => {

    const data = dataList[0];

    return (
    <div>
        <ViewCard {...data} />
    </div>
  );
};

export default ViewPage;
