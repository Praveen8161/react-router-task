import CardContainer from "../Components/CardContainer";
import HeaderImages from "../Components/HeaderImage";
import PageNav from "../Components/PageNav";

function FullStackDevelopment(){
    const details = [
        {
            pic:"https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg",
            title:"The Impact of Remote Work in Hiring Tech Professionals",
        },
        {
            pic:"https://cdn.pixabay.com/photo/2017/07/16/22/22/bath-oil-2510783_1280.jpg",
            title:"The Role of IT in Shaping the Future of Work",
        },
        {
            pic:"https://cdn.pixabay.com/photo/2018/05/08/08/50/artificial-intelligence-3382521_1280.jpg",
            title:"Full Stack Development: Bridging the Gap between Frontend and Backend",
        },
    ];
    const pageCheck = 2;

    return(
        <div>
            <HeaderImages/>
            <PageNav
            pageCheck={pageCheck}
            />
            <div className="container-card">
                {details.map((data,idx) => 
                <CardContainer
                key={idx}
                pic={data.pic}
                title={data.title}
                />
                )}
            </div>
        </div>
    );
}

export default FullStackDevelopment;