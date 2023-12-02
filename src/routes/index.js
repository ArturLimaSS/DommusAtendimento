import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar.jsx'));
const Profile = lazy(() => import('../pages/Profile.jsx'));
const Settings = lazy(() => import('../pages/Settings.jsx'));
const Tables = lazy(() => import('../pages/Tables.jsx'));

const coreRoutes = [
  {
    path: '/agenda',
    title: 'Agenda',
    component: Calendar,
  },
  {
    path: '/perfil',
    title: 'Perfil',
    component: Profile,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/configuracao',
    title: 'Configuração',
    component: Settings,
  },
];

const routes = [...coreRoutes];
export default routes;
