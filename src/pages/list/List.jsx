import './list.css';
import { Header } from '../../components/header/Header';
import { Navbar } from '../../components/navbar/Navbar';
import { Sidebar } from '../../components/listSidebar/Sidebar';
import { ListHotels } from '../../components/listHotels/ListHotels';

export const List = () => {
  // hook from react-router

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="main-list">
        <div className="big-list">
          <div className="main-search">
            <Sidebar />
          </div>
          <div className="main-result">
            <ListHotels />
            <ListHotels />
            <ListHotels />
            <ListHotels />
            <ListHotels />
            <ListHotels />
            <ListHotels />
            <ListHotels />
            <ListHotels />
            <ListHotels />
            <ListHotels />
          </div>
        </div>
      </div>
    </>
  );
};
