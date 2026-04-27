import Nav_header from "./Nav_header";

function Header(){
    return <header className="height-header">
        <div className="container dis-flex align-center space-between" style={{height : '100%'}}>
            <div className="logo-wrapper" style={{height : '85%'}}>
                <img src="/img/dc-logo.png" alt="dc logo" style={{height : '100%'}}/>
            </div>
            <Nav_header/>
        </div>
        
    </header>;
}

export default Header