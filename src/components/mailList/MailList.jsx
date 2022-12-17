import './mailList.css';
export const MailList = () => {
  return (
    <div className="mail">
      <h1>Visita la regione verde d'Italia</h1>
      <span className="mail-desk">
        Iscriviti e riceverai le proposte migliori
      </span>
      <div className="mail-input-container">
        <input type="text" placeholder="La tua Email" />
        <button className="btn btn-primary" type="submit">
          Iscriviti
        </button>
      </div>
    </div>
  );
};
