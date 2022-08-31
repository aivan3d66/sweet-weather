import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Home from '@/pages/Home';
import { loadDataFromStorage } from '@/utils/loadData';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    loadDataFromStorage(dispatch);
  }, []);

  return <Home />;
};

export default App;
