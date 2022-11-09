import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import sea from '../assets/sea.png';
import reactLogo from '../assets/react.svg';
const StyledApp = styled.div`
  .sea {
    height: 100px;
    width: 100px;
  }

  .cont {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 40vmin;
  }
`;

export function App() {
  return (
    <StyledApp>
      <div className="cont">
        <p>If you see an image of the sea centered, assets and styles work.</p>
        <img src={sea} className="sea" alt="The sea" />
        <p>If you see the React logo, svg works.</p>
        <img src={reactLogo} className="logo" alt="React logo" />
      </div>
      <NxWelcome title="revite-emot" />
    </StyledApp>
  );
}

export default App;
