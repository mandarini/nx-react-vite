import styles from './deep-imp.module.css';

/* eslint-disable-next-line */
export interface DeepImpProps {}

export function DeepImp(props: DeepImpProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DeepImp!</h1>
    </div>
  );
}

export default DeepImp;
