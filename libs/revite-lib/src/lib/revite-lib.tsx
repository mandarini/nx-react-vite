import styles from './revite-lib.module.css';

/* eslint-disable-next-line */
export interface ReviteLibProps {}

export function ReviteLib(props: ReviteLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReviteLib!</h1>
    </div>
  );
}

export default ReviteLib;
