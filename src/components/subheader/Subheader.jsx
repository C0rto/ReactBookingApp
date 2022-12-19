import './subheader.css';

export const Subheader = () => {
  return (
    <div className="subheader">
      <img
        src="https://q-xx.bstatic.com/xdata/images/xphoto/2880x750/183939625.jpeg?k=f06b6ea8458f9377cc1293e39f6b3218d13c4a6576d61d51b989438e667d68fc&o="
        alt=""
        className="subheader-img"
      />
      <div className="subheader-sub">
        <h1 className="subheader-title">
          Scopri l'Abruzzo in tutta la sua bellezza
        </h1>
        <p className="subheader-description">
          Prenota facilmente e soggiorna in tutta serenità
        </p>
        <button className="btn btn-primary">Accedi/registrati</button>
      </div>
    </div>
  );
};
