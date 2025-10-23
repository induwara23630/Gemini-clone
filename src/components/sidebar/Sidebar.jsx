import React, { useContext, useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extented, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt,newChat } = useContext(Context);
  const loadPrompt = async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt="menu"
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div onClick={()=>newChat()} className="newchat">
          <img src={assets.plus_icon} alt="plus" />
          {extented ? <p>New Chat</p> : null}
        </div>
        {extented ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="message" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="botttom-item recent-entry">
          <img src={assets.question_icon} alt="question" />
          {extented ? <p>Help</p> : null}
        </div>
        <div className="botttom-item recent-entry">
          <img src={assets.history_icon} alt="question" />
          {extented ? <p>Activity</p> : null}
        </div>
        <div className="botttom-item recent-entry">
          <img src={assets.setting_icon} alt="question" />
          {extented ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
