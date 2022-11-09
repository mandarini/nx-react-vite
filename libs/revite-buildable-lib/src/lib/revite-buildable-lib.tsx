import styles from './revite-buildable-lib.module.css';

/* eslint-disable-next-line */
export interface ReviteBuildableLibProps {}

export function ReviteBuildableLib(props: ReviteBuildableLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReviteBuildableLib!</h1>
    </div>
  );
}

export default ReviteBuildableLib;
