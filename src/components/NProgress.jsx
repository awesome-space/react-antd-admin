import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import { useEffect } from 'react';

const NProgress = () => {
  useEffect(() => {
    nprogress.start()
    return () => {
      nprogress.done()
    }
  }, [])
  return (
    <></>
  );
};


export default NProgress;