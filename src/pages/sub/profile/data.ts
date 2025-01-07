import { ProfileNavigatorE } from "./type";

export const profileMenus = [
    { label: "My Profile", icon: "person", navigator: ProfileNavigatorE.MyProfile },
    { label: "Manage Access", icon: "settings", navigator: ProfileNavigatorE.ManageAccess },
    { label: "Log out", icon: "logout", navigator: ProfileNavigatorE.Logout },
]

export const gender = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
]

export const role = [
    { label: "Manager", value: "manager" },
    { label: "Admin", value: "admin" },
    { label: "Cuisher", value: "cuisher" },
    { label: "Staff", value: "staff" }
];