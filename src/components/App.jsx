import { useState } from "react";
import style from "./app.module.css";
import Card from "./Card";
import  {dataBase}  from "./fakeDataBase";

function App() {


  const [value, setValue] = useState("");
  const [products, setProducts] = useState(dataBase)

  const filteredCard = products.filter((item) => {
    return item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  });

  return (
    <div className={style.main}>
      <form>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
      </form>
      <div className={style.cartContainer}>
        {filteredCard.map((item, index) => {
          return <Card key={index} item={item} />
        })}
      </div>
    </div>
  );
}

export default App;
