import "../style/Recipe_Header.css"

const Recipe_Header = () => {
    return (
        <>
        <div className="container_header">
            <h1 className="title">Classic Cheesecake Recipe</h1>
            <div className="sub-title">
                <p className="desc">
                    Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.
                </p>
                <img className="cake" src= {require('../images/photo1.png')} />
            </div>
        </div>
        </>
    );
};
export default Recipe_Header;