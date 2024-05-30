import './Root.css';

import Header from '../layout/Header/Header.jsx';
import Aside from '../layout/Aside/Aside.jsx';
import Main from '../layout/Main/Main.jsx';

const Root = () => {
  return (
    <div className="layout">
      <Header />
      <Aside />
      <Main />
    </div>
  );
};

export default Root;
