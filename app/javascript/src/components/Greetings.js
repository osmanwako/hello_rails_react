import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../store/features/greeting/greetingSlice';

function Greetings() {
  const message = useSelector((state) => state.greeting.message);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMessage());
  }, []);
console.log(message);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Greetings;
