import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img src="C:\Users\MANMAY\Desktop\apna college\blogging-web-app\frontend\news.jpeg" alt=""/>
        <p>
           this is sample text
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">categories</span>
      <ul className="sidebarList">
      <li className="sidebarListItem">Life</li>
      <li className="sidebarListItem">Music</li>
      <li className="sidebarListItem">Style</li>
      <li className="sidebarListItem">Sport</li>
      <li className="sidebarListItem">Tech</li>
      <li className="sidebarListItem">Cinema</li>
      </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}
