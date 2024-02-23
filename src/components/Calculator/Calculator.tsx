import styles from './Calculator.module.css';
import dollarIcon from '../../../images/icon-dollar.svg';

function Calculator() {
  return (
    <main className={styles.container}>
      <section className={styles['card']}>
        <div id={styles['bill-input-container']}>
          <label htmlFor='bill-input' id={styles['bill-input-label']}>Bill</label>
          <div id={styles['bill-input-wrapper']}>
            <input id={styles['bill-input']} placeholder='0'/>
            <img src={dollarIcon} className={styles.icon}/>
          </div>
        </div>
      </section>
      <section className={styles['card']}>
        Output
      </section>
    </main>
  )
}

export default Calculator