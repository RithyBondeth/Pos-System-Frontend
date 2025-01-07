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

export const timing = [
    { label: "Full Time (8AM - 6PM)", value: "fulltime" },
    { label: "Morning (7AM - 12AM)", value: "morning" },
    { label: "Afternoon (12AM - 6PM)", value: "afternoon" },
]