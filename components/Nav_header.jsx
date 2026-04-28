


function Nav_header(){
    const headerElements = ['CAHRACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES',
     'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOP'];

    let headerMapped = headerElements.map(el => {
        return <li className="headerLi"><a href="#">{el}</a></li>;
    });

    return headerMapped;
}

export default Nav_header