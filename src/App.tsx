import './App.css'
import {useState} from "react";
import Toggler from "./Toggler.tsx";

function App() {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const toggle = () => {
        setIsToggled(!isToggled);
    };

  return (
      <>
          <div>
              <button onClick={toggle}>
                  {isToggled ? 'Выключено' : 'Включено'}
              </button>
              <p>Состояние: {isToggled ? 'Включено' : 'Выключено'}</p>
          </div>
          <Toggler/>
      </>
  )
}

export default App
