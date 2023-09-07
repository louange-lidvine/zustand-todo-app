import React from "react";
import Form from "./form";
import List from "./list";
const App = () => {
    return (
        <div className="main-continer">
            <h1>
                My course List
            </h1>
            <Form/>
            <List/>
     </div>
    );
    
}
export default App;