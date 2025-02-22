import {useState} from 'react'
import {assets} from "../../assets/assets"

const Sidebar = () => {
    const [extended,setExtended] = useState(false)

  return (
    <div className='sidebar'>
        {/* Sidebar top */}
        <div className='top'>
            <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended && <p>New Chat</p>}
            </div>
            {extended
            &&
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react ...</p>
                </div>
            </div>
        }
        </div>
        {/* Sidebar bottom */}
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended  && <p>Help</p>}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended  && <p>Activity</p>}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended  && <p>Settings</p>}
            </div>
        </div>
    </div>
  )
}

export default Sidebar