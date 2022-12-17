import './featured.css';

export const Featured = () => {
  return (
    <section className="featured">
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/641765.webp?k=7ff35a4159b2bfde4f3861733608b4ab083831a90b3c21587062be6f809e4c4d&o="
          alt=""
          className="featured-image"
        />
        <div className="featured-title">
          <h3>Roccaraso</h3>
          <h4>Meraviglia Italiana</h4>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://www.tesoridabruzzo.com/wp-content/uploads/2018/07/apertura-1-900x601.jpg"
          alt=""
          className="featured-image"
        />
        <div className="featured-title">
          <h3>Rocca Calascio</h3>
          <h4>Meraviglia Italiana</h4>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/01/7b/df/fe/the-hotel-is-just-below.jpg"
          alt=""
          className="featured-image"
        />
        <div className="featured-title">
          <h3>Alba Fucens</h3>
          <h4>Meraviglia Italiana</h4>
        </div>
      </div>
    </section>
  );
};
