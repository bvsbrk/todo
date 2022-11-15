import './App.css';
import Header from './Header';
import Task from './Task';
import {useState, useEffect} from 'react';
import AcceptInput from './AcceptInput';
import { useDrop } from 'react-dnd'

const getSample = () => [['Complete ten push ups', 'Due Fri Aug 8'], ['Interview scheduled for Mike', 'Due Sun Aug 10']]

function App() {
  const [underAdd, setUnderAdd] = useState(false);
  const [content, setContent] = useState('');
  const [items, setItems] = useState(getSample());
  const [isDragging, setIsDragging] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: () => {},
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), []);

  const btnClick = () => {
    if (!underAdd) {
      setUnderAdd(true);
    } else {
      setItems(items => {
        let cp = [...items];
        cp.push([content, 'Temp due']);
        return cp;
      });
      setContent('');
      setUnderAdd(false);
    }
  }

  let [style, setStyle] = useState({});
  useEffect(() => {
    if (underAdd) {
      setStyle({width: '100%', borderRadius: '0'});
      console.log(style);
    } else {
      setStyle({});
    }
    if (isDragging) {
      setStyle({backgroundColor: 'red'})
    }
  }, [underAdd, isDragging]);


  return (
    <div className="App">
    <a href="paypal://helpcenter/showEducationCenter?returnToHomeOnComplete=true&returnToHomeOnCancel=false"/>
      {
        !underAdd && <>
        <Header count={items.length}/>
        <div className="tasks">
          {items.map((item, idx) => <Task key={idx + ""} item = {item} setDragging={setIsDragging}/>)}
        </div>
      </>
      }
      {
        underAdd && <AcceptInput content={content} setContent={setContent} setAdd={setUnderAdd}/>
      }
      <div className='multibtn' onClick={btnClick} style={style} ref={drop}></div>
  </div>
  );
}

export default App;
