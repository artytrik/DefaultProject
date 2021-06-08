import * as React from 'react';
import history from '../../history';

const Thirdary: React.FC = () => {
  return (
    <>
      <h1>Thirdary</h1>
      <button type="button" onClick={() => {
        history.push('/');
      }}>
        Перейти
      </button>
    </>
  );
};

export default Thirdary;
