import CardContainer from "../Components/CardContainer";
import HeaderImages from "../Components/HeaderImage";
import PageNav from "../Components/PageNav";

function CyberSecurity(){
    const details = [
        {
            pic:"https://cdn.pixabay.com/photo/2017/07/16/22/22/bath-oil-2510783_1280.jpg",
            title:"The Role of IT in Shaping the Future of Work",
        },
        {
            pic:"https://cdn.pixabay.com/photo/2018/05/08/08/50/artificial-intelligence-3382521_1280.jpg",
            title:"Full Stack Development: Bridging the Gap between Frontend and Backend",
        },
        {
            pic:"https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
            title:"Demystifying IT: Understanding the Impact of Information Technology in the Workplace",
        },
    ];

    const pageCheck = 4;

    return(
        <div>
            <HeaderImages/>
            <PageNav
            pageCheck = {pageCheck}
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

export default CyberSecurity;