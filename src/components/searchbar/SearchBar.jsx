import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './searchbar.css';
import { MdBed, MdCalendarToday, MdPerson } from 'react-icons/md';
import { format } from 'date-fns';

export const SearchBar = () => {
  // destination picker
  const [destination, setDestination] = useState('');
  // date picker
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  // options picker
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 1,
    room: 1,
  });

  const counterHandler = (name, operation) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } });
  };

  return (
    <section className="search-bar">
      <div className="search-item">
        <MdBed className="search-icon" />
        <input
          type="text"
          placeholder="Dove Vuoi Andare?"
          className="header-search-input"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="search-item">
        <MdCalendarToday className="search-icon" />
        <span
          className="header-search-text"
          onClick={() => setOpenDate(!openDate)}
        >
          dal
          {` ${format(date[0].startDate, 'dd/MM/yyyy')} al ${format(
            date[0].endDate,
            'dd/MM/yyyy'
          )}`}
        </span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="search-date"
            minDate={new Date()}
          />
        )}
      </div>
      <div className="search-item">
        <MdPerson className="search-icon" />
        <span
          className="header-search-text"
          onClick={() => setOpenOptions(!openOptions)}
        >
          {`${options.adult} ${options.adult > 1 ? 'adulti' : 'adulto'} , ${
            options.children
          } ${options.children > 1 ? 'bambini' : 'bambino'}, ${options.room} ${
            options.room > 1 ? 'camere' : 'camera'
          }`}
        </span>
        {openOptions && (
          <div className="options">
            <div className="options-header">
              <p>Configura la vacanza</p>
            </div>
            {/* item a */}
            <div className="option-item">
              <span className="option-text">Adulti</span>
              <div className="option-counter">
                <button
                  disabled={options.adult <= 1}
                  className="btn btn-counter"
                  onClick={() => counterHandler('adult', 'd')}
                >
                  -
                </button>
                <span className="option-counter-number">{options.adult}</span>
                <button
                  className="btn btn-counter"
                  onClick={() => counterHandler('adult', 'i')}
                >
                  +
                </button>
              </div>
            </div>
            {/* item b */}
            <div className="option-item">
              <span className="option-text">Bambini</span>
              <div className="option-counter">
                <button
                  disabled={options.children <= 0}
                  className="btn btn-counter"
                  onClick={() => counterHandler('children', 'd')}
                >
                  -
                </button>
                <span className="option-counter-number">
                  {options.children}
                </span>
                <button
                  className="btn btn-counter"
                  onClick={() => counterHandler('children', 'i')}
                >
                  +
                </button>
              </div>
            </div>
            {/* item c */}
            <div className="option-item">
              <span className="option-text">Camere</span>
              <div className="option-counter">
                <button
                  disabled={options.room <= 1}
                  className="btn btn-counter"
                  onClick={() => counterHandler('room', 'd')}
                >
                  -
                </button>
                <span className="option-counter-number"> {options.room}</span>
                <button
                  className="btn btn-counter"
                  onClick={() => counterHandler('room', 'i')}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>
        cerca
      </button>
    </section>
  );
};
