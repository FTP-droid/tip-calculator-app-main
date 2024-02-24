import styles from './InputField.module.css';
import dollarIcon from '../../assets/images/icon-dollar.svg';
import personIcon from '../../assets/images/icon-person.svg';

function InputField({inputLabel, inputValue, valueChangeFunc}: 
    {
        inputLabel: string,
        inputValue: number, 
        valueChangeFunc: (e: React.FormEvent<HTMLInputElement>) => void},
    ) {
  return (
    <div className={styles['input-container-with-label']}>
      <label htmlFor={inputLabel === 'Bill'? 'bill-input': 'number-of-people-input'} 
        className={styles['input-label']}>
          {inputLabel}
        </label>
      <div className={styles['input-wrapper']}>
        <input className='number-input' 
          id={inputLabel === 'Bill'? 'bill-input': 'number-of-people-input'} 
          placeholder='0' 
          onChange={valueChangeFunc}
          value={inputValue || ''} type='number'/>
        <img src={inputLabel === 'Bill'? dollarIcon: personIcon} className={styles.icon} 
          alt='icon for the input field'/>
      </div>
    </div>
  )
}

export default InputField