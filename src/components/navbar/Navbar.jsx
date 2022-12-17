import './navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav container">
        <span className="logo">AbruzzoBooking</span>
        <div className="button">
          <button className="btn btn-nav">Registrati</button>
          <button className="btn btn-nav">Login</button>
        </div>
      </div>
    </div>
  );
};
