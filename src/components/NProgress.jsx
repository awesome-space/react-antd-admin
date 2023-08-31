import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import { useEffect } from 'react';

const NProgress = () => {
  nprogress.start();
  useEffect(() => {
    
    nprogress.done();
  }, [])
  return (
    <></>
  );
};


export default NProgress;