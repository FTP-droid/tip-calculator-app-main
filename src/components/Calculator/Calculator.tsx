import styles from './Calculator.module.css';
import dollarIcon from '../../../images/icon-dollar.svg';
import personIcon from '../../../images/icon-person.svg';
import { useEffect, useState } from 'react';
import TipPercentages from '../TipPercentages/TipPercentages';

function Calculator() {

  const [bill, setBill] = useState(0);
  const onBillChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setBill(parseFloat((e.target as HTMLInputElement).value));
  }

  const [tipPercentage, setTipPercentage] = useState(0);

  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const onNumberOfPeopleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNumberOfPeople(parseInt((e.target as HTMLInputElement).value));
  }

  const [tipAmount, setTipAmount] = useState(0);
  // Rounded using imprecise Math.round function, consider using a currency library in the future
  useEffect(() => {
    if(bill > 0 && tipPercentage > 0 && numberOfPeople > 0){
      setTipAmount(Math.floor((bill * (tipPercentage * 0.01) / numberOfPeople) * 100) / 100);
    }
  }, [bill, tipPercentage, numberOfPeople]);

  return (
    <main className={styles.container}>
      <section className={styles['card']} id={styles['input-card']}>
        {/* Input for the bill */}
        <div className={styles['input-container-with-label']}>
          <label htmlFor='bill-input' className={styles['input-label']}>Bill</label>
          <div className={styles['input-wrapper']}>
            <input className='number-input' id='bill-input' placeholder='0' onChange={onBillChange}/>
            <img src={dollarIcon} className={styles.icon}/>
          </div>
        </div>
        {/* Input for the tip percentage */}
        <TipPercentages setTipPercentage={setTipPercentage} tipPercentage={tipPercentage}/>
        {/* Input for the number of people */}
        <div className={styles['input-container-with-label']}>
          <label htmlFor='number-of-people-input' className={styles['input-label']}>Number of People</label>
          <div className={styles['input-wrapper']}>
            <input className='number-input' id='number-of-people-input' placeholder='0'
            onChange={onNumberOfPeopleChange}/>
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
            <div className={styles['output-value']}>${tipAmount}</div>
          </div>
          <div className={styles['output']}>
            <div className={styles['output-text']}>
              <div>Total</div>
              <div className={styles['person-text']}>/ person</div>
            </div>
            <div className={styles['output-value']}>${bill || 0}</div>
          </div>
        </div>
        <button id={styles['reset-button']} disabled >RESET</button>
      </section>
    </main>
  )
}

export default Calculator