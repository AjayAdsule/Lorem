import React, { useState } from "react";
import Data from "./Data";
const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
   let amount=parseInt(count);
   if(amount<=0){
    amount=1;
   }
   if(amount>8){
    amount=8
   }
  setText(Data.slice(0,amount))
  }
  return (
    <React.Fragment>
      <section className="section-center">
        <h3>Alternate of lorem</h3>
        <form className="lorem-form">
          <label htmlFor="number">No of Paragraph :</label>
          <input
            type="number"
            name="number"
            id="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button onClick={handleSubmit} className="btn">Generate</button>
        </form>
        <article className="lorem-text">
          {
            text.map((item,index)=>{
              return <p key={index}>{item}</p>
            })
          }
        </article>
      </section>
    </React.Fragment>
  );
};

export default App;
