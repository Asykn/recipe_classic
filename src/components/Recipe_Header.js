import "../style/Recipe_Header.css"

const Recipe_Header = () => {
    return (
        <>
        <div className="container_header">
            <div className="title">Classic Cheesecake Recipe</div>
            <div className="sub-title">
                <i>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</i>
            </div>
            <img className="cake" src= {require('../images/photo1.png')} /> 
        </div>
        </>
    );
};
export default Recipe_Header;