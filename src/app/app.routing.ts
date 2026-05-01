import { Routes } from '@angular/router';
import { HomeAccount } from './accounts/home-account/home-account';
import { Add } from './add/add';
import { Cv } from './cv/cv';
import { Edit } from './edit/edit';
import { Infos } from './infos/infos';
import { Login } from './login/login';
import { ManageServers } from './manage-servers/manage-servers';
import { NotFound } from './not-found/not-found';
import { HomeProducts } from './products/home-products/home-products';

// export let myroutes: Routes = [
//   { path: '', component: Accueil },
//   {
//     path: 'cv',
//     component: Cv,
//     children: [
//       { path: 'add', component: Add },
//       {
//         path: ':id',
//         children: [
//           { path: '', component: Infos },
//           { path: 'edit', component: Edit },
//         ],
//       },
//     ],
//   },
//   { path: 'accounts', component: HomeAccount },
//   { path: 'servers', component: ManageServers },
//   { path: '404', component: NotFound },
//   { path: '**', redirectTo: '404' }, // Wild Route
// ];
export let myroutes: Routes = [
  { path: '', loadComponent: () => import('./accueil/accueil').then((c) => c.Accueil) },
  {
    path: 'cv',
    children: [
      { path: '', component: Cv },
      { path: 'add', component: Add },
      {
        path: ':id',
        children: [
          { path: '', component: Infos },
          { path: 'edit', component: Edit },
        ],
      },
    ],
  },
  { path: 'accounts', component: HomeAccount },
  { path: 'products', component: HomeProducts },
  { path: 'servers', component: ManageServers },
  { path: 'login', component: Login },
  { path: '404', component: NotFound },
  { path: '**', redirectTo: '404' }, // Wild Route
];
// export let myroutes: Routes = [
//   { path: '', component: Accueil },
//   { path: 'cv', component: Cv },
//   { path: 'cv/add', component: Add },
//   { path: 'cv/:id', component: Infos },
//   { path: 'cv/:id/edit', component: Edit },
//   { path: 'accounts', component: HomeAccount },
//   { path: 'servers', component: ManageServers },
//   { path: '404', component: NotFound },
//   { path: '**', redirectTo: '404' }, // Wild Route
// ];
