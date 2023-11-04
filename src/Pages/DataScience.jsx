import CardContainer from "../Components/CardContainer";
import HeaderImages from "../Components/HeaderImage";
import PageNav from "../Components/PageNav";

function DataScience(){
    const details = [
        {
            pic:"https://cdn.pixabay.com/photo/2017/07/16/11/13/binary-code-2508931_1280.jpg",
            title:"The IT Industry: A Deep Dive into Trends and Innovations",
        },
        {
            pic:"https://cdn.pixabay.com/photo/2019/04/16/11/15/job-4131482_1280.jpg",
            title:"Navigating the Stack: A Comprehensive Guide to Full Stack Development",
        },
        {
            pic:"https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
            title:"Demystifying IT: Understanding the Impact of Information Technology in the Workplace",
        },
    ];

    const pageCheck = 3;

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

export default DataScience;