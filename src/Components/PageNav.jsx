/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";


function PageNav({pageCheck}){
    const navigate = useNavigate();
    return(
        <nav className="cursor-pointer sm:px-5 sm:py-2">
                <ul className="sm:flex flex-row justify-around items-center hidden">

                    <li onClick={() =>navigate("/")} className="group w-20 text-center">
                        <p className={
                            pageCheck === 1 ? "px-2 bg-zinc-300" : ""
                        }
                         tabIndex="0">
                            All
                        </p> 
                        <span className="block h-0.5 mt-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    </li>

                <li onClick={() =>navigate("/full-stack-developement")} className="group">
                    <p className={
                    pageCheck === 2 ? "px-2 bg-zinc-300" : ""
                    } 
                    tabIndex="0">
                        Full Stack Development
                    </p>
                    <span className="block h-0.5 mt-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </li>

                <li onClick={() => navigate("/data-science")} className="group">
                    <p className={
                    pageCheck === 3 ? "px-2 bg-zinc-300" : ""
                    } 
                    tabIndex="0">
                        Data Science
                    </p>
                    <span className="block h-0.5 mt-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </li>

                <li onClick={() => navigate("/cyber-security")} className="group">
                    <p className={
                    pageCheck === 4 ? "px-2 bg-zinc-300" : ""
                    } 
                    tabIndex="0">
                        Cyber Security
                    </p>
                    <span className="block h-0.5 mt-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </li>

                <li onClick={() => navigate("/career")} className="group">
                    <p className={
                    pageCheck === 5 ? "px-2 bg-zinc-300" : ""
                    } 
                    tabIndex="0">
                        Career
                    </p>
                    <span className="block h-0.5 mt-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </li>
            </ul>
            <div className="sm:hidden">
                <details className="dropdown bg-slate-200 w-full">
                    <summary className="m-1 mx-2 btn btn-circle swap swap-rotate">  
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" />
                        
                        {/* hamburger icon */}
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        
                        {/* close icon */}
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                        
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 w-full flex flex-column gap-5 bg-slate-200">
                        <li onClick={() => navigate("/")}>
                            All
                        </li>

                        <li onClick={() => navigate("/full-stack-developement")}>
                            Full Stack Development
                        </li>

                        <li onClick={() => navigate("/data-science")}>
                            Data Science
                        </li>

                        <li onClick={() => navigate("/cyber-security")}>
                            Cyber Security
                        </li>

                        <li onClick={() => navigate("/career")}>
                            Career
                        </li>
                    </ul>
                </details>
            </div>
        </nav>
    );
}

export default PageNav;