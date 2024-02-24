import styles from './Calculator.module.css';
import dollarIcon from '../../../images/icon-dollar.svg';
import personIcon from '../../../images/icon-person.svg';

function Calculator() {
  const tipPercentages = [5, 10, 15, 25 , 50];

  return (
    <main className={styles.container}>
      <section className={styles['card']} id={styles['input-card']}>
        {/* Input for the bill */}
        <div className={styles['input-container-with-label']}>
          <label htmlFor='bill-input' className={styles['input-label']}>Bill</label>
          <div className={styles['input-wrapper']}>
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
        {/* Input for the number of people */}
        <div className={styles['input-container-with-label']}>
          <label htmlFor='number-of-people-input' className={styles['input-label']}>Number of People</label>
          <div className={styles['input-wrapper']}>
            <input className={styles['number-input']} id='number-of-people-input' placeholder='0'/>
            <img src={personIcon} className={styles.icon}/>
          </div>
        </div>
      </section>
      <section className={styles['card']} id={styles['output-card']}>
        <div id={styles['outputs-container']}>
          <div className={styles['output']}>
            <div className={styles['output-text']}>
              <div>Tip Amount</div>
              <div className={styles['person-text']}>/ person</div>
            </div>
            <div className={styles['output-value']}>$0.00</div>
          </div>
          <div className={styles['output']}>
            <div className={styles['output-text']}>
              <div>Total</div>
              <div className={styles['person-text']}>/ person</div>
            </div>
            <div className={styles['output-value']}>$0.00</div>
          </div>
        </div>
        <button id={styles['reset-button']}>RESET</button>
      </section>
    </main>
  )
}

export default Calculator