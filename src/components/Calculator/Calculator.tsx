import styles from './Calculator.module.css';
import dollarIcon from '../../../images/icon-dollar.svg';
import personIcon from '../../../images/icon-person.svg';
import { useEffect, useState } from 'react';
import TipPercentages from '../TipPercentages/TipPercentages';
import OutputField from '../OutputField/OutputField';

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

  const [tipAmount, setTipAmount] = useState('');
  const [totalPerPerson, setTotalPerPerson] = useState('');

  const onReset = () => {
    setTipAmount('');
    setBill(0);
    setTipPercentage(0);
    setNumberOfPeople(0);
    setTotalPerPerson('');
  }
  // Rounded using toFixed function, consider using a currency library in the future.
  // Project assumes valid inputs.
  useEffect(() => {
    if(bill > 0 && tipPercentage > 0 && numberOfPeople > 0){
      setTipAmount(((bill * (tipPercentage * 0.01) / numberOfPeople)).toFixed(2));
      setTotalPerPerson((bill * (1 + (tipPercentage / 100)) / numberOfPeople).toFixed(2)); 
    } else {
      setTipAmount('');
      setTotalPerPerson(''); 
    }
  }, [bill, tipPercentage, numberOfPeople, tipAmount]);

  return (
    <main className={styles.container}>
      <section className={styles['card']} id={styles['input-card']}>
        {/* Input for the bill */}
        <div className={styles['input-container-with-label']}>
          <label htmlFor='bill-input' className={styles['input-label']}>Bill</label>
          <div className={styles['input-wrapper']}>
            <input className='number-input' id='bill-input' placeholder='0' onChange={onBillChange}
              value={bill || ''} type='number'/>
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
            onChange={onNumberOfPeopleChange} value={numberOfPeople || ""} type='number'/>
            <img src={personIcon} className={styles.icon}/>
          </div>
        </div>
      </section>
      <section className={styles['card']} id={styles['output-card']}>
        <div id={styles['outputs-container']}>
          <OutputField outputText='Tip Amount' numberValue={tipAmount}/>
          <OutputField outputText='Total' numberValue={totalPerPerson}/>
        </div>
        <button id={styles['reset-button']} onClick={onReset} 
          disabled={bill == 0 || tipPercentage == 0 || numberOfPeople == 0}>RESET</button>
      </section>
    </main>
  )
}

export default Calculator