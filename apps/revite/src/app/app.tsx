import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import sea from '../assets/sea.png';
import reactLogo from '../assets/react.svg';
import { ReviteBuildableLib } from '@nxvite/revite-buildable-lib';
import { ReviteLib } from '@nxvite/revite-lib';

export function App() {
  return (
    <div className={styles.cont}>
      <p>If you see an image of the sea centered, assets and styles work.</p>
      <img src={sea} className={styles.sea} alt="The sea" />
      <p>If you see the React logo, svg works.</p>
      <img src={reactLogo} className={styles.logo} alt="React logo" />
      <ReviteBuildableLib />
      <ReviteLib />
      <NxWelcome title="revite" />
    </div>
  );
}

export default App;
