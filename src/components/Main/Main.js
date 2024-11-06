import React, { useContext } from 'react';
import './Main.css';
import User from './user.svg';
import Compass from './compass.svg';
import Message from './message-circle.svg';
import Monitor from './monitor.svg';
import Code from './code.svg';
import Image from './image.svg';
import Send from './send.svg';
import Mic from './mic.svg';
import { Context } from '../../context/Context';

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='main'>
        <div className='nav'>
            <p>ChatterBlast</p>
            <img src={User} />
        </div>
        <div className='main-container'>

            {!showResult
            ?<>
                <div className='greet'>
                    <p><span>Hello!</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={Compass} alt="" />
                    </div>
                    <div className='card'>
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={Monitor} alt="" />
                    </div>
                    <div className='card'>
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={Message} alt="" />
                    </div>
                    <div className='card'>
                        <p>Improve the readability of the following code</p>
                        <img src={Code} alt="" />
                    </div>
                </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={User} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={User} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
            }

            
            <div className='main-bottom'>
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt'/>
                    <div>
                        <img src={Image} alt="" />
                        <img src={Mic} alt="" />
                        <img onClick={()=>onSent()} src={Send} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    ChatterBlast don't fucking care about your privacy
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main