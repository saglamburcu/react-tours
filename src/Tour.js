import { useState } from "react";

function Tour({ id, name, image, price, info, onChangeTourList }) {
  const [isShowLetter, setIsShowLetter] = useState(false);

  return (
    <section className="tour">
      <div className="card">
        <img src={image} alt={name} />

        <div className="details">
          <div className="title">
            <h3>{name}</h3>
            <h4>$ {price}</h4>
          </div>

          {
            <p>{isShowLetter ? info : `${info.substring(0, 200)}...`}
              <a href="#" onClick={() => setIsShowLetter(!isShowLetter)}>
                {isShowLetter ? " Show Less" : " Read More"}
              </a>
            </p>
          }

          <span className="button-container">
            <button type="button" onClick={() => onChangeTourList(id)}>Not Interested</button>
          </span>
        </div>
      </div>
    </section>

  )
};

export default Tour;