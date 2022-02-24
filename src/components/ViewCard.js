import "../view.css";

const ViewCard = ({ id, author, title, category, url, content, created_date,}) => {
    return (
        <section className="ViewCard">
            <div>
                <h1>{title}</h1>
                <p className="category">{category}</p>
                <p>{author} &middot; {created_date}</p>
            </div>
                <p><strong>공유 URL</strong></p>
                <div>
                    <input type="text" placeholder={url}/>
                    <button>copy</button>
                </div>
                <a href="#">공유페이지 새창 열기</a>
                <p>공유하고 싶은 이유 or 상세정보</p>
                <p>{content}</p>
                <button>수정</button>
                <button>삭제</button>
        </section>
    )
}

export default ViewCard;

