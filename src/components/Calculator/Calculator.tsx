import styles from './Calculator.module.css';
import dollarIcon from '../../../images/icon-dollar.svg';

function Calculator() {
  const tipPercentages = [5, 10, 15, 25 , 50];

  return (
    <main className={styles.container}>
      <section className={styles['card']}>
        {/* Input for the bill */}
        <div className={styles['input-container-with-label']}>
          <label htmlFor='bill-input' className={styles['input-label']}>Bill</label>
          <div id={styles['bill-input-wrapper']}>
            <input className={styles['number-input']} id='bill-input' placeholder='0'/>
            <img src={dollarIcon} className={styles.icon}/>
          </div>
        </div>
        {/* Input for the tip percentage */}
        <div className={styles['input-container-with-label']}>
            <div className={styles['input-label']}> Select Tip %</div>
            <div id={styles['tip-percentage-container']}>
              {tipPercentages.map(e => 
                <button className={styles['tip-percentage']}>{e}%</button>
              )}
              <input className={styles['number-input']} id={styles['custom-tip-input']} placeholder='0'/>
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