import {useState} from 'react'
import './EightBall.css'

const EightBall = ({answers}) => {

    const randMsg = () => answers[Math.floor(Math.random()*answers.length)]
    const actualRandMsg = randMsg()
    const randColor = actualRandMsg.color
    const [msg, setMsg] = useState("Think of a question")
    const [color, setColor] = useState('black')
    return <div className="EightBall" onClick={()=>{
        if (msg == actualRandMsg.msg){
            const newMsg = randMsg().msg
            if (msg == newMsg){
                setMsg(randMsg())
            }else{
                setMsg(newMsg)
            }
        }else{
        setMsg(actualRandMsg.msg)
        }
        setColor(actualRandMsg.color)
    }} style={{backgroundColor:color}}>
        <p className="EightBall-text" >{msg}</p>
    </div>
}

export default EightBall