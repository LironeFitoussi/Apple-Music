import './Root.css';

import Header from '../layout/Header/Header.jsx';
import Aside from '../layout/Aside/Aside.jsx';

const Root = () => {
  return (
    <div className="layout">
      <Header />
      <Aside />
      <main>sdg</main>
    </div>
  );
};

export default Root;
