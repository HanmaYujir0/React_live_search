import { useState } from "react";
import style from "./app.module.css";



export default function Card({item}){
  const [active, setActive] = useState(false);
  const [btnText, setBtnText] = useState("Добавить в корзину");
  const [cartText, setCartText] = useState("");
  const [description, setDescription] = useState(false);


  const showDetails = () => {
    setDescription(true);
  };

  const closeDetails = () => {
    setDescription(false);
  };

  const handleCartClick = () => {
    setActive(false);
    setBtnText("Добавить в корзину");
    setCartText("");
  };

  const handleClick = () => {
    setActive(true);
    setBtnText("Уже в корзине");
    setCartText(
      <button className={style.cartBtn} onClick={handleCartClick}>
        удалить из корзины
      </button>
    );
  };
  const btnCartClass = () => (active ? style.cart_btnOff : style.cart_btn);

  return (
    <div className={style.container}>
      <div className={style.img_cont}>
        <img src={item.img} alt="Кроссовки" />
      </div>
      <div className={style.name_price_cont}>
        <div className={style.price_name}>
          <div className={style.name}>{item.name}</div>
          <div className={style.price}>{item.price}</div>
        </div>
        <div className={style.btn_cont}>
          <button className={style.info_btn} onClick={showDetails}>
            Детали
          </button>
          {description && (
            <div className={style.info_Text_btn}>
              <div className={style.infoText}>
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Sit reprehenderit quae incidunt rerum.
              </div>
              <div>
                <button
                  className={style.btnClose}
                  onClick={closeDetails}
                >
                  ❌
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
      <div className={style.info_cont}>
        <div className={style.decription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto libero molestiae a modi, laboriosam numquam illum
          maiores nobis maxime at. Nam nobis excepturi.
        </div>
        <div className={style.btn_cont1}>
          <button
            className={btnCartClass()}
            onClick={handleClick}
            disabled={active}
          >
            {btnText}
          </button>
        </div>
        {cartText}
      </div>
    </div>
  );
}