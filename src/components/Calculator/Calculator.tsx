import styles from './Calculator.module.css';
import dollarIcon from '../../../images/icon-dollar.svg';

function Calculator() {
  return (
    <main className={styles.container}>
      <section className={styles['card']}>
        <div className={styles['input-container-with-label']}>
          <label htmlFor='bill-input' className={styles['input-label']}>Bill</label>
          <div id={styles['bill-input-wrapper']}>
            <input id={styles['bill-input']} placeholder='0'/>
            <img src={dollarIcon} className={styles.icon}/>
          </div>
          <div className={styles['input-container-with-label']}>
            <label htmlFor='select-tip-input' className={'input-label'}></label>
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