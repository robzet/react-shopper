import React, {FunctionComponent, useState} from "react";
import {Bread} from "components/Bread";
import {Milk} from "components/Milk";
import {ShoppingBasket} from "components/ShoppingBasket";

const App: FunctionComponent = () => {
    const [groceries, setGroceries] = useState([]);
    return (
        <>
            <div>
                <Bread priceUsd={1.5} />
                <button onClick={() => setGroceries([...groceries, 1.5])}>Add to basket</button>
            </div>
            <div>
                <Milk priceUsd={1} />
                <button onClick={() => setGroceries([...groceries, 1])}>Add to basket</button>
            </div>
            <hr />
            <div>
                <ShoppingBasket prices={groceries} />
            </div>
        </>
    );
};

export default App;
