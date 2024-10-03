import {useState} from 'react'
import "./Card.css"
const Card = (props) => {
  const [uaerName , setUserName] = useState('Ali');
  const handleClick = (a, b) =>{
    console.log("Button clicked" ,a,b);
  }
  const handleMouseEnter =() =>{
    console.log("Mouse entered");
  }
  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  }
  return (
    <div className='main-card'>
        <h2 className='cardH'>{props.title}</h2>
        <p className='cardP'>{props.content}</p>
        <p>{props.about}</p>
        <img src={props.image} alt="sfsffsfe" />
    </div>
  )
}

export default Card