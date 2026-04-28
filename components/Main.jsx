import Jumbo_wrapper from "./Jumbo_wrapper";
import Comics_wrapper from "./Comics_wrapper";

function Main(){
    return <main>
        <Jumbo_wrapper/>
        <div className="container">
            <div className="comics-wrapper">
                <Comics_wrapper/>
            </div>
            <div className="load-wrapper">
                <a href="#"><button className="load-btn">LOAD MORE</button></a>
                
            </div>
            
        </div>
    </main>;
}

export default Main