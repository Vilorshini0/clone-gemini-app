import {useState} from 'react'
import {assets} from "../../assets/assets"
import useThemeStore from "../../stores/themeStore"

const SidebarView = () => {
    const [extended,setExtended] = useState(false);
    const {updateThemeDark, updateThemeLight, updateThemeOriginal} = useThemeStore();

    function closeSetting() {
        document.querySelector(".settingLightbox")?.classList.remove("actif");
    }

    function openSetting() {
        document.querySelector(".settingLightbox")?.classList.add("actif");
    }


    return (
        <div className='sidebar'>
            {/* Sidebar top */}
            <div className='top'>
                <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
                
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
                <button className="bottom-item recent-entry about">
                    <img src={assets.question_icon} title="About" />
                    {extended  && <p>Help</p>}
                </button>
                <button className="bottom-item recent-entry setting" onClick={openSetting}>
                        <img src={assets.setting_icon} title="Setting" />
                    {extended  && <p>Settings</p>}
                </button>
            </div>
            <div className="settingLightbox">
                <button className="closebutton" onClick={closeSetting}>X</button>
                <button className="delete">
                    <p>Delete search history</p>
                        <img src={assets.delete_icon} title="Delete Search History" />
                </button>
                <div className="theme">
                    <p>Change the Theme</p>
                    <div>
                        <button className="changeColor" onClick={updateThemeLight}>
                            <p>Light mode</p>
                                <img src={assets.light_mode_icon} alt="" />
                        </button>
                        <button className="changeColor" onClick={updateThemeDark}>
                            <p>Dark mode</p>
                                <img src={assets.dark_mode_icon} alt="" />
                        </button>
                        <button className="changeColor" onClick={updateThemeOriginal}>
                            <p>Original</p>
                                <img src={assets.original_icon} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default SidebarView