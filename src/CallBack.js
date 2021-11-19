import { useEffect } from 'react';
import { useLocation } from 'react-router';

const CallBack = () => {
  const location = useLocation();

  useEffect(() => {
    if (location) {
      window.opener.postMessage(
        {
          source: 'callback',
          code: new URLSearchParams(location.search).get('code'),
        },
        '*'
      );
      window.close();
    }
  }, [location]);

  return null;
};

export default CallBack;
