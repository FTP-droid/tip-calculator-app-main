import styles from './OutputField.module.css';

function OutputField({outputText, numberValue}: {outputText: string, numberValue: string}) {
  return (
    <div className={styles['output']}>
      <div className={styles['output-text']}>
        <div>{outputText}</div>
        <div className={styles['person-text']}>/ person</div>
      </div>
      <div className={styles['output-value']}>${numberValue || '0.00'}</div>
    </div>
  )
}

export default OutputField