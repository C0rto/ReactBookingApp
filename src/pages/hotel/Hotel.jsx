import { Header } from '../../components/header/Header';
import { Navbar } from '../../components/navbar/Navbar';
import { MailList } from '../../components/mailList/MailList';
import { Footer } from '../../components/footer/Footer';
import './hotel.css';
import { IoMdPin } from 'react-icons/io';

export const Hotel = () => {
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/319552394.jpg?k=b629dbd28c85e85adca126583efb4c015e2eb58152efb6874e208eeb0d2767d5&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/343664291.jpg?k=0d4c5cf9c16591b45b85a12d3f94273b803d39a6a87d0ab08d3dbbd025d8cbb1&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/311049195.jpg?k=5ed3650d8e998ab33fd04359465336af74ecdea667e8b96958974886a62bc98b&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/310228833.jpg?k=e0bb4dd421bac6e726ad87fc43143bed6228074267239c1965e0bab47dadeb8d&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/319552394.jpg?k=b629dbd28c85e85adca126583efb4c015e2eb58152efb6874e208eeb0d2767d5&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/343664291.jpg?k=0d4c5cf9c16591b45b85a12d3f94273b803d39a6a87d0ab08d3dbbd025d8cbb1&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/311049195.jpg?k=5ed3650d8e998ab33fd04359465336af74ecdea667e8b96958974886a62bc98b&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/310228833.jpg?k=e0bb4dd421bac6e726ad87fc43143bed6228074267239c1965e0bab47dadeb8d&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/310228833.jpg?k=e0bb4dd421bac6e726ad87fc43143bed6228074267239c1965e0bab47dadeb8d&o=&hp=1',
    },
  ];

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotel-main-container">
        <div className="hotel-wrapper">
          <div className="hotel-main-header">
            <div className="hotel-titles">
              <h1 className="hotel-main-title">Bellagio Hotel</h1>
              <div className="hotel-main-address">
                <IoMdPin />
                Via Los casino 13, 3588236 Las Vegas, Nevada
              </div>
              <span className="hotel-main-info">
                Posizione eccellente - 500m dal centro città
              </span>
              <p className="hotel-main-secondinfo">
                Prenota ora ed avrai un taxi in omaggio al tuo arrivo
              </p>
            </div>
            <div>
              <button
                style={{ padding: '0.5em 2.5em' }}
                className="btn btn-primary"
              >
                Conferma prenotazione
              </button>
            </div>
          </div>
          <div className="hotel-main-imgs">
            {photos.map((item) => (
              <div className="hotel-img-wrap">
                <img className="hotel-img" src={item.src}></img>
              </div>
            ))}
          </div>
          <div className="hotel-info-details">
            <div className="hotel-info-text">
              <h3 className="hotel-info-title">
                Soggiorna nel cuore di Venezia
              </h3>
              <p className="hotel-info-desc">
                Situato a Venezia, a pochi passi da Piazza San Marco, dalla
                Basilica e dal Palazzo Ducale, Palazzo Orseolo- Gondola View
                offre camere climatizzate con connessione WiFi gratuita e
                servizio concierge. Ospitata in un edificio del XVI secolo, la
                struttura dista 250 m dal Teatro La Fenice e 500 m dal Ponte di
                Rialto. Tutte le camere del Palazzo Orseolo- Gondola View sono
                dotate di scrivania, TV a schermo piatto, macchina da caffè e
                bagno privato. 10 km dall'Aeroporto di Venezia-Marco Polo.
                Questa zona di Venezia è una delle preferite dai nostri ospiti,
                in base alle recensioni indipendenti. Le coppie apprezzano molto
                la posizione: l'hanno valutata 9,8 per un viaggio a due. Palazzo
                Orseolo- Gondola View dà il benvenuto ai clienti di Booking.com
                dal 15 apr 2019 Gli ospiti vanno pazzi per.Palazzo Orseolo-
                Gondola View dà il benvenuto ai clienti di Booking.com dal 15
                apr 2019 Gli ospiti vanno pazzi l'hanno valutata 9,8 per un
                viaggio a due. Palazzo Orseolo- Gondola View dà il benvenuto ai
                clienti di Booking.com dal 15 apr 2019 Gli ospiti vanno pazzi
                per.Palazzo Orseolo- Gondola View dà il benvenuto ai clienti di
                Booking.com dal 15 apr 2019 Gli ospiti vanno pazzi ...
              </p>
            </div>
            <div className="hotel-info-price">
              <h1>Perfetto per un Weekend</h1>
              <span>
                Situato a Venezia, a pochi passi da Piazza San Marco, dalla
                Basilica e dal Palazzo Ducale
              </span>
              <h2>
                <b>90€</b> (a notte)
              </h2>
              <button className="btn btn-primary">Prenota</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </>
  );
};
