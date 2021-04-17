import store from '../store/store';
import CardsBody from './CardsBody';
import Filter from './FIiter';

function App() {

  const handlerWrapper = (e) => {
    if (!e.target.classList.contains('filter__box')) {
      store.setFilterItemId(null)
    }
  }

  return (
    <div onClick={handlerWrapper} className="wrapper">
      <div className="container">
        <Filter />
        <CardsBody />
      </div>
    </div>
  );
}

export default App;
