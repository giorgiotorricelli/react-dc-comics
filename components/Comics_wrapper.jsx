

function Comics_wrapper(props) {
    const { arrayComics } = props;
    
    const comicsMapped = arrayComics.map(el => {
        return <div className="single-comic" key={el.id}>
            <div className="comic-thumb-wrapper">
                <img src={el.thumb} alt="" className="comic-thumb" />
            </div>
            <p className="comic-category">{el.series}</p>
        </div>;
    });
    
    return comicsMapped;
    
    
}

export default Comics_wrapper