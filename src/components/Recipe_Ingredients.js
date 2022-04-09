import "../style/Recipe_Ingredients.css"

const Recipe_Ingredients = () => {
    return (
        <>
        <div className="recipe">
            <div className="sidebar_menu">
                <div className="side-content">
                    <img className="icon" src= {require('../images/fork.png')} />
                    <div>
                        <p className="icon-desc">YIELDS</p>
                        <p className="icon-time">12 servings</p>
                    </div>
                </div>
                <div className="sides-content">
                    <img className="icon1" src= {require('../images/time.png')} />
                    <div>
                        <p className="icon-desc">PREP TIME</p>
                        <p className="icon1-time">45 minutes</p>
                    </div>
                </div>
                <div className="sides-content">
                    <img className="icon1" src= {require('../images/time.png')} />
                    <div>
                        <p className="icon-desc">COOK TIME</p>
                        <p className="icon1-time">1 hour</p>
                    </div>
                </div>
                <div className="sides-content">
                    <img className="icon1" src= {require('../images/time.png')} />
                    <div>
                        <p className="icon-desc">TOTAL TIME</p>
                        <p className="icon1-time">7,75 hour</p>
                    </div>
                </div>
            </div>


            <div>
                <h1 className="ingredients">Ingredients</h1>
                <div className="cracker">
                    <h3 className="sub_ingred">Graham Cracker Crust</h3>
                    <div className="container">
                        <div className="need">
                            <input type="checkbox" className="check"></input>
                            <label className="details">
                                1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10 full sheet graham crackers)
                            </label>
                        </div>
                        <div className="need">
                            <input type="checkbox" className="check"></input>
                            <label className="details">
                                5 Tablespoons (70g) <b>unsalted butter</b>, melted
                            </label>
                        </div>
                        <div className="need">
                            <input type="checkbox" className="check"></input>
                            <label className="details">         
                                1/4 cup (50g) <b>granulated sugar</b>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="cheesecake">
                    <h3 className="sub_ingred">Cheesecake</h3>
                    <div className="container">
                        <div className="need">
                            <input type="checkbox" className="check"></input>
                            <label className="details">
                                four 8-ounce blocks (904g) full-fat <b>cream cheese</b>, softened to room temperature
                            </label>
                        </div>
                        <div className="need">
                            <input type="checkbox" className="check"></input>
                            <label className="details">
                                1 cup (200g) <b>granulated sugar</b>
                            </label>
                        </div>
                        <div className="need">
                            <input type="checkbox" className="check"></input>
                            <label className="details">         
                                1 cup (240g) full-fat <b>sour cream</b>, at room temperature
                            </label>
                        </div>
                        <div className="need">
                            <input type="checkbox" className="check"></input>
                            <label className="details">         
                                1 teaspoon <b>pure vanilla extract</b>
                            </label>
                        </div>
                        <div className="need">
                            <input type="checkbox" className="check"></input>
                            <label className="details">         
                                2 teaspoons <b>fresh lemon juice</b> (optional, but recommended)
                            </label>
                        </div>
                        <div className="need">
                            <input type="checkbox" className="check"></input>
                            <label className="details">         
                                3 large <b>eggs</b>, at room temperature
                            </label>
                        </div>
                        <div className="need">
                            <input type="checkbox" className="check"></input>
                            <label className="details">         
                                topping suggestions: <i>salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</i> (recipe in notes)
                            </label>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
        </>
    );
};
export default Recipe_Ingredients;