import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const NaverButton = styled.div`
  display: none;
`;

function App() {
  const { naver } = window;

  const naverRef = useRef();

  const handleClick = () => {
    naverRef.current.children[0].click();
  };

  useEffect(() => {
    const { REACT_APP_NAVER_CLIENT_ID, REACT_APP_NAVER_CALLBACK_URL } =
      process.env;

    const naverLogin = new naver.LoginWithNaverId({
      clientId: REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: REACT_APP_NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: 60 },
    });

    naverLogin.init();
    naverLogin.logout();
  }, [naver]);

  return (
    <>
      <NaverButton id="naverIdLogin" ref={naverRef}></NaverButton>
      <button type="button" onClick={handleClick}>
        인증
      </button>
    </>
  );
}

export default App;
