import "./Sidebar.css";

import { links } from "../../data/navigationLinks";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* It contains a collection of links container */}
      <div className="sidebarLinksContainer">
        {/* General and Tools links container */}
        <div className="generalToolsLinks">
          <div className="general-links">
            <p>General</p>
            <ul className="sidebarLinks generalLinks">
              {links.GeneralLinks.map((dic, index) => (
                <li key={index}>
                  <a href={dic.to} className={`sidebarLink ${dic.name}`}>
                    <div className="sidebarLogo">{dic.logo}</div>
                    <div className="sidebarName">{dic.name}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="tools-links">
            <p>Tools</p>
            <ul className="sidebarLinks toolslinks">
              {links.ToolsLinks.map((dic, index) => (
                <li key={index}>
                  <a href={dic.to} className={`sidebarLink ${dic.name}`}>
                    <div className="sidebarLogo">{dic.logo}</div>
                    <div className="sidebarName">{dic.name}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="setting-link">
          <a href={links.SettingLink.to} className={`sidebarLink ${links.SettingLink.name}`}>
            <div className="sidebarLogo">{links.SettingLink.logo}</div>
            <div className="sidebarName">{links.SettingLink.name}</div>
          </a>
        </div>
      </div>
    </div>

  )
}

export default Sidebar;

