
import mainIcon from "../assets/icons/mainIcon.svg"
import homeIcon from "../assets/icons/homeIcon.svg"
// import notification from "../assets/icons/notification.svg"
import profile from "../assets/icons/profile.svg"
import more from "../assets/icons/more.svg"
import adminSection from "../assets/icons/adminSection.svg"

const sidenavcomponents = [
    {
    name: "TalkEE-Platform",
    route: "/",
    icon: mainIcon, 
    alt:"Platform logo"
    },
    {
    name: "Home",
    route: "/",
    icon: homeIcon, 
    alt:"Home icon"
    },
    // {
    // name: "Notification",
    // route: "/notification",
    // icon: notification, 
    // alt:"notification icon"
    // },
    {
    name: "Profile",
    route: "/profile",
    icon: profile, 
    alt:"profile icon"
    },
    {
    name: "More",
    route: "/more",
    icon: more, 
    alt:"more icon"
    },
    {
    name: "Admin Section",
    route: "/admin",
    icon: adminSection, 
    alt:"admin Section icon"
    }
  ];
  
  export default sidenavcomponents;