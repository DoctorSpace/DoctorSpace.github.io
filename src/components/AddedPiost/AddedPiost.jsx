import React, { useRef } from "react";
import axios from "../../axios";

const AddedPiost = () => {
  const takeName = useRef();
  const takeCategory = useRef();
  const StartNumber = useRef();
  const EndNumber = useRef();

  const createPosts = () => {
    let start = Number(StartNumber.current.value);
    let end = Number(EndNumber.current.value);

    let category = takeCategory.current.value;
    let title = takeName.current.value;

    const price = 0;

    if (start && end && title && category) {
      for (let i = start; i <= end; i++) {
        axios.post("/api/posts", {
          title: `${title} ${i}`,
          category: category,
          price: price,
          url_img: `https://firebasestorage.googleapis.com/v0/b/isadora-shop-a6e7c.appspot.com/o/${title}%20(${i}).jpg?alt=media&token=4ac374a6-8cc2-4b6c-a97e-a6095e29f960`, //url_img[0] + `${i}` + url_img[1]
        });

        console.log("Пост: ", `${title} ${i}`, category, price);
      }
    } else {
      alert("нехватает данных");
    }
  };

  return (
    <div>
      <h2>Добавление много количества фоток</h2>

      <div className="AddedPiost">
        <div className="AddedPiost__Numder">
          <div>
            <p>Начало</p>
            <input
              type="number"
              id="StartNumber"
              placeholder="25"
              ref={StartNumber}
            ></input>
          </div>

          <div>
            <p>Конец</p>
            <input
              type="number"
              id="EndNumber"
              placeholder="50"
              ref={EndNumber}
            ></input>
          </div>

          <div>
            <p>Название:</p>
            <input type="text" list="item-name" ref={takeName}></input>
            <datalist id="item-name">
              {/* Изделия для головы */}
              <option value="Диадема"></option>
              <option value="Украшение на волосы"></option>

              {/* Украшения для тела */}
              <option value="Колье"></option>
              <option value="Серьги"></option>
              <option value="Пояс"></option>
              <option value="Платок"></option>
              <option value="Чокер"></option>
              <option value="Логотип"></option>

              {/* браслет */}
              <option value="Браслет мягкий"></option>
              <option value="Браслет жетский"></option>
              <option value="Браслет фетровый"></option>
              <option value="Браслет треугольный"></option>
              <option value="Браслет на ногу"></option>
            </datalist>
          </div>

          <div>
            <p>Категория:</p>
            <input type="text" list="item" ref={takeCategory}></input>
            <datalist id="item">
              {/* Изделия для головы */}
              <option value="диадемы"></option>
              <option value="украшение на волосы"></option>

              {/* Украшения для тела */}
              <option value="колье"></option>
              <option value="серьги"></option>
              <option value="пояса"></option>
              <option value="платок"></option>
              <option value="чокеры"></option>
              <option value="логотип"></option>
              {/* браслет */}
              <option value="браслет мягкий"></option>
              <option value="браслет жесткий"></option>
              <option value="браслет фетровый"></option>
              <option value="браслет треугольный"></option>
              <option value="браслет на ногу"></option>
            </datalist>
          </div>
        </div>
      </div>

      <div className="AddedPiost">
        <button onClick={createPosts}>Добавить посты</button>
        <a
          href="https://console.firebase.google.com/u/0/project/isadora-shop-a6e7c/storage/isadora-shop-a6e7c.appspot.com/files"
          target="_blank"
          rel="noreferrer"
        >
          firebase
        </a>
      </div>
    </div>
  );
};

export default AddedPiost;
