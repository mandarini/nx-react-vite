import styles from './revite-lib.module.css';
import { DeepImp } from '@nxvite/deep-imp';

/* eslint-disable-next-line */
export interface ReviteLibProps {}

export function ReviteLib(props: ReviteLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReviteLib!</h1>
      <DeepImp />
    </div>
  );
}

export default ReviteLib;
