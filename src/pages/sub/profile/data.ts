import { ProfileNavigatorE } from "./type";

export const profileMenus = [
    { label: "My Profile", icon: "person", navigator: ProfileNavigatorE.MyProfile },
    { label: "Manage Access", icon: "settings", navigator: ProfileNavigatorE.ManageAccess },
    { label: "Log out", icon: "logout", navigator: ProfileNavigatorE.Logout },
]