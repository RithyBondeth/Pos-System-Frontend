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

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/product',
        name: 'Product',
        component: Product,
    },
    {
        path: '/salereports',
        name: 'Sale Reports',
        component: SaleReports,
    },
    {
        path: '/managestock',
        name: 'Manage Stock',
        component: ManageStock,
    },
    {
        path: '/managestaff',
        name: 'Manage Staff',
        component: ManageStaff,
    },
    {
        path: '/managestaff/:id',
        name: 'Detail Staff',
        component: DetailStaff,
    },
    {
        path: '/setting',
        name: 'Setting',
        component: Setting,
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;