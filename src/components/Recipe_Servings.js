import "../style/Recipe_Servings.css"

const Recipe_Servings = () => {
    return (
        <>
        <div className="sidebar_menu">
            <div className="side-content">
                <img className="icon" src= {require('../images/fork.png')} />
                <div className="side_desc">
                    <p className="icon-desc">YIELDS</p>
                    <p className="icon-time">12 servings</p>
                </div>
            </div>
            <div className="sec_div">
                <div className="side-content">
                    <img className="icon1" src= {require('../images/time.png')} />
                    <div className="side_desc">
                        <p className="icon-desc">PREP TIME</p>
                        <p className="icon1-time">45 minutes</p>
                    </div>
                </div>
                <div className="side-content">
                    <img className="icon1" src= {require('../images/time.png')} />
                    <div className="side_desc">
                        <p className="icon-desc">COOK TIME</p>
                        <p className="icon1-time">1 hour</p>
                    </div>
                </div>
                <div className="side-content">
                    <img className="icon1" src= {require('../images/time.png')} />
                    <div className="side_desc">
                        <p className="icon-desc">TOTAL TIME</p>
                        <p className="icon1-time">7,75 hour</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Recipe_Servings;