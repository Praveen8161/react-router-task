import { useNavigate } from "react-router-dom";

const NoPage = () => {
    const navigate = useNavigate();
    return(
        <div className="grid place-content-center gap-5 w-screen h-screen bg-slate-500">
            <p className="font-semibold">
                This Page Doesn&apos;t Exist
            </p>
            <button className="btn btn-error" onClick={() => navigate("/")}>
                Home
            </button>
        </div>
    );
}

export default NoPage;