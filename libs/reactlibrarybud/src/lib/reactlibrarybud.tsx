import styles from './reactlibrarybud.module.css';

/* eslint-disable-next-line */
export interface ReactlibrarybudProps {}

export function Reactlibrarybud(props: ReactlibrarybudProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Reactlibrarybud!</h1>
    </div>
  );
}

export default Reactlibrarybud;
