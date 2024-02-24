import { useState } from 'react';
import styles from './TipPercentages.module.css';

const TIP_PERCENTAGES = [5, 10, 15, 25 , 50];

function TipPercentages({setTipPercentage, tipPercentage}: 
  {setTipPercentage: React.Dispatch<React.SetStateAction<number>>, tipPercentage: number}) {

  const onCustomTipChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTipPercentage(parseFloat((e.target as HTMLInputElement).value));
  }

  const [customInputFocused, setCustomInputFocused] = useState(false);
  
  return (
    <div className={styles['input-container-with-label']}>
      <div className={styles['input-label']}> Select Tip %</div>
        <div id={styles['tip-percentage-container']}>
          {TIP_PERCENTAGES.map(tip => 
            <TipPercentage 
              tip={tip} 
              onClick={() => {setTipPercentage(tip); setCustomInputFocused(false)}} 
              key={tip} 
              tipPercentage={tipPercentage}
              customInputFocused={customInputFocused}
            />
          )}
          <input className='number-input' id={styles['custom-tip-input']} placeholder='CUSTOM'
          onChange={onCustomTipChange} onFocus={() => {setCustomInputFocused(true); setTipPercentage(0)}}
          value={(customInputFocused && tipPercentage) || ''} type='number'/>
      </div>
    </div>
  )
}

function TipPercentage({tip, onClick, tipPercentage, customInputFocused}: {tip: number, 
    onClick: React.MouseEventHandler<HTMLButtonElement>, tipPercentage: number, customInputFocused: boolean}){
  return(
    <button className={tipPercentage === tip && !customInputFocused? `${styles['selected-tip']} ${styles['tip-percentage']}`: styles['tip-percentage']} onClick={onClick}>
      {tip}%
    </button>
  )
}

export default TipPercentages
