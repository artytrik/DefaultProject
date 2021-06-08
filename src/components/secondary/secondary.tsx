import * as React from 'react';
import history from '../../history';

const Secondary: React.FC = () => {
  return (
    <>
      <h1>Secondary</h1>
      <button type="button" onClick={() => {
        history.push('/thirdary');
      }}>
        Перейти
      </button>
    </>
  );
};

export default Secondary;
