import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import './sidebar.css';

export const Sidebar = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div className="list-search">
      <h1>Cerca</h1>
      <div className="list-item">
        <label>Destinazione</label>
        <input
          type="text"
          placeholder={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="list-item">
        <label>Data per il Chek-in </label>
        <span onClick={() => setOpenDate(!openDate)}>
          {date[0].startDate !== date[0].endDate || !date[0].endDate
            ? `dal ${format(date[0].startDate, 'dd/MM/yyyy')} al ${format(
                date[0].endDate,
                'dd/MM/yyyy'
              )}`
            : `solo il ${format(date[0].startDate, 'dd/MM/yyyy')}`}
        </span>
        {openDate && (
          <DateRange
            className="list-data-item"
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
          />
        )}
      </div>
      <div className="list-item">
        <label>Opzioni </label>
        {/* Start options Item */}
        <div className="list-option-item">
          <span className="list-option-text">
            Prezzo Minimo <small>per notte</small>{' '}
          </span>
          <input type="number" className="list-option-input" min={0} />
        </div>
        {/* -End options item - */}
        {/* Start options Item */}
        <div className="list-option-item">
          <span className="list-option-text">
            Prezzo Massimo <small>per notte</small>{' '}
          </span>
          <input type="number" className="list-option-input" min={0} />
        </div>
        {/* -End options item - */}
        {/* Start options Item */}
        <div className="list-option-item">
          <span className="list-option-text">Adulti</span>
          <input
            min={1}
            type="number"
            placeholder={options.adult || null}
            className="list-option-input"
          />
        </div>
        {/* -End options item - */}
        {/* Start options Item */}
        <div className="list-option-item">
          <span className="list-option-text">Bambini</span>
          <input
            min={0}
            type="number"
            placeholder={options.children}
            className="list-option-input"
          />
        </div>
        {/* -End options item - */}
        {/* Start options Item */}
        <div className="list-option-item">
          <span className="list-option-text">Camere</span>
          <input
            min={1}
            type="number"
            className="list-option-input"
            placeholder={options.room}
          />
        </div>
        {/* -End options item - */}
      </div>
      <button className="btn btn-primary">Inizia la Ricerca</button>
    </div>
  );
};
