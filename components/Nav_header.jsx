


function Nav_header(props){
    const { arrayElementi } = props;
    
    let headerMapped = arrayElementi.map(el => {
        return <li className="headerLi" key={el.id}><a href="#">{el.title}</a></li>;
    });

    return headerMapped;
}

export default Nav_header