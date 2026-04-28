import Jumbo_wrapper from "./Jumbo_wrapper";
import Comics_wrapper from "./Comics_wrapper";

function Main(){
    return <main>
        <Jumbo_wrapper/>
        <div className="container content-wrapper">
            <Comics_wrapper/>
        </div>
    </main>;
}

export default Main