import { lazy } from 'react';
import ECommerce from '../pages/Dashboard/ECommerce.jsx';
import ChamadosPage from '../pages/ChamadosPage.jsx';

const Calendar = lazy(() => import('../pages/Calendar.jsx'));
const Profile = lazy(() => import('../pages/Profile.jsx'));
const Settings = lazy(() => import('../pages/Settings.jsx'));
const Tables = lazy(() => import('../pages/Tables.jsx'));

const coreRoutes = [
  {
    path: '/',
    title: 'Início',
    component: ECommerce,
  },
  {
    path: '/chamados',
    'title' : 'Chamados',
    component: ChamadosPage,
  },
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
