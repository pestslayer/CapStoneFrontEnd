import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Weather from '../pages/Weather'
import About from '../pages/About'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
        protected: false
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        protected: true
    },
    {
        path: "/Weather",
        component: Weather,
        name: "Weather",
        protected: false
    },
    {
        path: "/about",
        component: About,
        name: "About",
        protected: false
    }
];

export default routes
