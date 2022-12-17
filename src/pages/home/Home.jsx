import './home.css';
import { Navbar } from '../../components/navbar/Navbar';
import { Header } from '../../components/header/Header';
import { Featured } from '../../components/featured/Featured';
import { Property } from '../../components/property/Property';
import { Promo } from '../../components/promo/Promo';
import { Lovehome } from '../../components/lovehome/Lovehome';
import { MailList } from '../../components/mailList/MailList';
import { Footer } from '../../components/footer/Footer';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main className="home-container">
        {/* Promo */}
        <h1>Offerte</h1>
        <p>Promozioni, offerte e altri sconti speciali per te</p>
        <Promo />
        {/* Featured */}
        <Featured />
        {/* Types */}
        <h1>Cerca per tipologia di struttura</h1>
        <Property />
        {/* Likes */}
        <h1>Le case che piacciono di più agli ospiti</h1>
        <Lovehome />
        <MailList />
        <Footer />
      </main>
    </>
  );
};
