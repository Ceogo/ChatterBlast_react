import './Sidebar.css';
import React, {useContext, useState} from 'react';
import Menu from './menu.svg';
import Plus from './plus.svg';
import Message from './message-circle.svg';
import Help from './help-circle.svg';
import Activity from './refresh-cw.svg';
import Settings from './settings.svg'
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [extended,setExtanded] = useState(false)
    const {onSent, prevPrompt,SetRecentPrompt, newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
        SetRecentPrompt(prompt)
        await onSent(prompt)
    }

    return ( 
        <div className="sidebar">
            <div className='top'>
                <img onClick={()=>setExtanded(prev=>!prev)} className='menu' src={Menu} />
                <div onClick={()=>newChat()} className='new-chat'>
                    <img src={Plus}/>
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended
                    ? <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {prevPrompt.map((item, index)=>{
                            return(
                                <div onClick={()=>loadPrompt(item)} className='recent-entry'>
                                    <img src={Message} />
                                    <p>{item.slice(0.18)} ...</p>
                                </div>
                            )
                        })}
                        
                </div>
                :null
                }
                
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={Help} />
                    {extended?<p>Help</p>:null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={Activity} />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={Settings} />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;