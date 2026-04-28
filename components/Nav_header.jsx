const headerElements = [
    {
        title : 'CHARACTERS',
        id : 1
    },
    {
        title : 'COMICS',
        id : 2
    },
    {
        title : 'MOVIES',
        id : 3
    },
    {
        title : 'TV',
        id : 4
    },
    {
        title : 'GAMES',
        id : 5
    },
    {
        title : 'COLLECTIBLES',
        id : 6
    },
    {
        title : 'VIDEOS',
        id : 7
    },
    {
        title : 'FANS',
        id : 8
    },
    {
        title : 'NEWS',
        id : 9
    },
    {
        title : 'SHOP',
        id : 10
    }
];


function Nav_header(){

    let headerMapped = headerElements.map(el => {
        return <li className="headerLi" key={el.id}><a href="#">{el.title}</a></li>;
    });

    return headerMapped;
}

export default Nav_header