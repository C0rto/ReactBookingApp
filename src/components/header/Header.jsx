import './header.css';
import {
  MdHotel,
  MdWeekend,
  MdLocalDining,
  MdMuseum,
  MdLocalTaxi,
  MdStorefront,
} from 'react-icons/md';
import { SearchBar } from '../searchbar/SearchBar';

export const Header = ({ type }) => {
  return (
    <div className="header">
      <div className="head container">
        <div className="header-list">
          {/* single icon Navbar */}
          <div className="header-list-item">
            <MdHotel />
            <span>Hotel</span>
          </div>
          {/* single icon Navbar */}
          <div className="header-list-item active">
            <MdWeekend />
            <span>B&b</span>
          </div>
          {/* single icon Navbar */}
          <div className="header-list-item ">
            <MdMuseum />
            <span>Museum</span>
          </div>
          {/* single icon Navbar */}
          <div className="header-list-item">
            <MdLocalDining />
            <span>Food</span>
          </div>
          {/* single icon Navbar */}
          <div className="header-list-item">
            <MdStorefront />
            <span>Market</span>
          </div>
          {/* single icon Navbar */}
          <div className="header-list-item ">
            <MdLocalTaxi />
            <span>Car Renting</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            {/* Sub-Header */}
            <div className="subheader">
              <h1 className="header-title">
                Scopri l'Abruzzo in tutta la sua bellezza
              </h1>
              <p className="header-description">
                Prenota facilmente e soggiorna in tutta serenità
              </p>
              <button className="btn btn-head">Accedi/registrati</button>
            </div>
            {/* Search Bar */}
            <div className="header-search">
              {/* //TODO implementing the closing tab */}
              <SearchBar />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
