import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/main/dashboard/index.vue";
import ManageStaff from "@/pages/main/manage-staff/index.vue";
import DetailStaff from "@/pages/main/manage-staff/id/index.vue";
import Product from "@/pages/main/product/index.vue";
import SaleReports from "@/pages/main/sale-reports/index.vue";
import ManageStock from "@/pages/main/manage-stock/index.vue";
import Setting from "@/pages/main/setting/index.vue";
import Logout from "@/pages/main/logout/index.vue";
import Profile from "@/pages/sub/profile/index.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Signin from "@/pages/auth/signin/index.vue";
import Signup from "@/pages/auth/signup/index.vue";


const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard,
            },
            {
                path: 'product',
                name: 'Product',
                component: Product,
            },
            {
                path: 'salereports',
                name: 'Sale Reports',
                component: SaleReports,
            },
            {
                path: 'managestock',
                name: 'Manage Stock',
                component: ManageStock,
            },
            {
                path: 'managestaff',
                name: 'Manage Staff',
                component: ManageStaff,
            },
            {
                path: 'managestaff/:id',
                name: 'Manage Staff Detail',
                component: DetailStaff,
            },
            {
                path: 'setting',
                name: 'Setting',
                component: Setting,
            },
            {
                path: 'logout',
                name: 'Logout',
                component: Logout,
            },
            {
                path: 'profile',
                name: 'Profile',
                component: Profile,
            },
        ]
    },
    {
        path: "/auth",
        component: AuthLayout,
        children: [
            {
                path: "signin",
                name: "Signin",
                component: Signin
            },
            {
                path: "signup",
                name: "Signup",
                component: Signup
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;