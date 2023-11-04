/* eslint-disable react/prop-types */


function CardContainer({pic,title}){
    return(
        <div className="product-card shadow-xl">
            <figure className="product-image">
                <img src={pic} alt="Images"/>
            </figure>
            <div className="product-details">
                <h2 className="product-title">
                    {title}
                </h2>
                <p>
                    Minima fugiat nostrum id recusandae officiis a!
                </p>
                <p className="text-xs text-green-500 justify-start h-0 font-semibold cursor-pointer">
                        READ MORE »»
                </p>
            </div>
            <div className="px-5 py-3 text-xs card-extra">
                <span>4 November 2023 •</span>
                <span> No Comments</span>
            </div>
        </div>
    );
}

export default CardContainer;