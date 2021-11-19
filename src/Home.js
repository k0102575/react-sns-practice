import React, { useEffect } from 'react';

const Home = () => {
  const state = 'RAMDOM_STATE';

  const { REACT_APP_NAVER_CLIENT_ID } = process.env;

  const getResultNaverId = (e) => {
    if (e?.data?.source === 'callback') {
      console.log(e?.data?.code);
    }
  };

  const handleClick = () => {
    const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${REACT_APP_NAVER_CLIENT_ID}&state=${state}&redirect_uri=http://localhost:3000/callback`;
    window.open(url, 'AuthCheck', 'width=500, height=550');
  };

  useEffect(() => {
    window.addEventListener('message', getResultNaverId);
    return () => {
      window.removeEventListener('message', getResultNaverId);
    };
  }, []);

  return (
    <>
      <button type="button" onClick={handleClick}>
        인증
      </button>
    </>
  );
};

export default Home;
