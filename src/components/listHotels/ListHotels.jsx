import './listHotels.css';

export const ListHotels = () => {
  return (
    <div className="hotel-list-card">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/361069922.jpg?k=2101258eabb384b2f8a7aee0cf58b20901fa3f253bdf50aaa87137d3fcc7d5a6&o=&hp=1"
        alt=""
        className="hotel-img"
      />
      <div className="hotel-desc">
        <h1 className="hotel-title">Hotel Bellagio</h1>
        <span className="hotel-distance">500m dalla stazione</span>
        <span className="hotel-taxi">Trasporto incluso</span>
        <span className="hotel-subtitle">
          Il miglior hotel di Las Vegas, anche quando ci sono le rapine!
        </span>
        <span className="hotel-features">
          Piano Libero - bagno in camera con idromassaggio
        </span>
        <span className="hotel-cancel">Cancellazione gratuita</span>
        <span className="hotel-cancel-subtitle">
          Cancella quando vuoi senza bisogno di pagare nulla
        </span>
      </div>
      <div className="available-container">
        <div className="hotel-rating">
          <span className="hotel-review">Eccellente</span>
          <span className="hotel-rate">89</span>
        </div>
        <div className="hotel-pricing">
          <span className="hotel-price">80 €</span>
          <span className="hotel-price-info">Incluse tasse e spese</span>
          <button className="btn btn-primary">prenota</button>
        </div>
      </div>
    </div>
  );
};
