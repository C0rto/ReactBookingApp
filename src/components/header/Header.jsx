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
import { Subheader } from '../subheader/Subheader';
export const Header = ({ type }) => {
  return (
    <div className="header">
      <div className="container">
        <ul className="header-list">
          {/* single icon Navbar */}
          <li className="header-list-item">
            <MdHotel />
            <span>Hotel</span>
          </li>
          {/* single icon Navbar */}
          <li className="header-list-item active">
            <MdWeekend />
            <span>B&b</span>
          </li>
          {/* single icon Navbar */}
          <li className="header-list-item ">
            <MdMuseum />
            <span>Museum</span>
          </li>
          {/* single icon Navbar */}
          <li className="header-list-item">
            <MdLocalDining />
            <span>Food</span>
          </li>
          {/* single icon Navbar */}
          <li className="header-list-item">
            <MdStorefront />
            <span>Market</span>
          </li>
          {/* single icon Navbar */}
          <li className="header-list-item ">
            <MdLocalTaxi />
            <span>Car Renting</span>
          </li>
        </ul>
        {type !== 'list' && (
          <>
            {/* Sub-Header */}
            <Subheader />
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
