import './sidebar.css'
import { RssFeed, Chat, PlayCircle, Group, Bookmark, Help, WorkOutline, Event, School } from '@mui/icons-material'

export default function Sidebar(){
    return <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className="sidebarIcon" />
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircle className="sidebarIcon" />
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <Group className="sidebarIcon" />
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon" />
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <Help className="sidebarIcon" />
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon" />
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className="sidebarIcon" />
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <School className="sidebarIcon" />
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show more...</button>
            <hr className='sideBarHR' />
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/assets/person/2.png" alt="" className="sidebarFriendImage" />
                    <span className="sidebarFriendName">Frederic Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/3.png" alt="" className="sidebarFriendImage" />
                    <span className="sidebarFriendName">Derek Wolf</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/4.png" alt="" className="sidebarFriendImage" />
                    <span className="sidebarFriendName">Aline Wayne</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/5.png" alt="" className="sidebarFriendImage" />
                    <span className="sidebarFriendName">Sue Dodgers</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/6.png" alt="" className="sidebarFriendImage" />
                    <span className="sidebarFriendName">Deedee Matthews</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/7.png" alt="" className="sidebarFriendImage" />
                    <span className="sidebarFriendName">Marcel Andrews</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/8.png" alt="" className="sidebarFriendImage" />
                    <span className="sidebarFriendName">Aminata Oumarou</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/9.png" alt="" className="sidebarFriendImage" />
                    <span className="sidebarFriendName">Sheldon Cooper</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/10.png" alt="" className="sidebarFriendImage" />
                    <span className="sidebarFriendName">Marcus Wedge</span>
                </li>
            </ul>
        </div>
    </div>
}