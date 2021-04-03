import React, {useEffect} from 'react';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from 'react-dnd'


function Task({item, setDragging}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'task',
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));

    useEffect(() => {
        setDragging(isDragging);
    }, [isDragging])
    
    return (
        <div className='task' ref={drag} style={{opacity: isDragging ? '0' : '1'}}>
            <div className="heading">
                <span style={{color: 'gray'}}>{item[0]}</span>
                <div className="icon">
                    <FontAwesomeIcon icon={faClock} />
                </div>
            </div>
            <div className="due">
                {item[1]}
            </div>
        </div>
    )
}

export default Task
