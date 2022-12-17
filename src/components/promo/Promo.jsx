import './promo.css';

export const Promo = () => {
  return (
    <ul className="promo">
      <li className="promo-item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/173282684.jpeg?k=e31b490d521194e65d41490f43dc704291ca07eaa762b6f36bca714d3211b9a1&o="
          alt=""
          className="promo-img"
        />
        <div className="promo-header">
          <h4>Risparmia il 15% con le Offerte di Fine Anno</h4>
          <p>Parti per quella meta tanto sognata</p>
          <div className="promo-footer">
            <button className="btn btn-primary">Scopri le offerte</button>
          </div>
        </div>
      </li>
      <li className="promo-item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/182431478.jpeg?k=fcbb6d5552a1d4ff338978206c449077ab8ad696050cfd7e4edef1ddc11225cc&o="
          alt=""
          className="promo-img"
        />
        <div className="promo-header">
          <h4>Anno nuovo, avventure nuove</h4>
          <p>
            Risparmia il 15% o più se prenoti e soggiorni prima del 31 marzo
            2023
          </p>
          <div className="promo-footer">
            <button className="btn btn-primary">Inizia L'avventura</button>
          </div>
        </div>
      </li>
    </ul>
  );
};
