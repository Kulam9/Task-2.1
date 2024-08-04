import styles from './App.module.css';
import {useState} from "react";
 
function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  const onInputButtonClick = () => {
    const promptValue = prompt('Введите значение');

    if (promptValue.length > 2) {
      setValue(promptValue);
      setError('');
    } else {
      setError('Введенное значение должно содержать минимум 3 символа');
      setValue('');
    }
  };

  let isValueVaild = Boolean;
  if (value.length < 3) {
    isValueVaild = false
  } else {
    isValueVaild = true
  };

  const onAddButtonClick = () => {
    if (value.length > 2) {
      const updatedList = [...list, { id: Date.now(), value }];
      setList(updatedList);
      setValue('');
      setError('');
    }
  };

  

  return (
  <div className={styles['app']}>
    <h1 className={styles['page-heading']}>Ввод значения</h1>
    <p className={styles["no-margin-text"]}>
      Текущее значение: "<output className={styles["current-value"]}>{value}</output>"
    </p>
    {error !== '' && (<div className={styles["error"]}>{error}</div>)}
    <div className={styles["buttons-container"]}>
      <button className={styles["button"]} onClick={() => onInputButtonClick()}>Ввести новое</button>
      <button className={styles["button"]} disabled = {!isValueVaild} onClick={() => onAddButtonClick()}>Добавить в список</button>
    </div>
    <div className={styles["list-container"]}>
      <h2 className={styles["list-heading"]}>Список:</h2>
      {list.length > 0 ? (
        <ul className={styles["list"]}>
          {list.map((updatedList) => 
          <li className={styles["list-item"]} key={updatedList.id} >{updatedList.value}</li>
          )}
        </ul>) : (
          <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
        )
      }
    </div>
  </div>
  )
}

export default App;