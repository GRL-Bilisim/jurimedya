import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('../../calendar/calendar.module').then(m => m.CalendarsModule)
  },
  {
    path: 'polivalans',
    loadChildren: () => import('../../polivalans/polivalans.module').then(m => m.polivalansModule)
  },
  {
    path: 'design/:id',
    loadChildren: () => import('../../design/design.module').then(m => m.DesignModule)
  },
  {
    path: 'newrecordrow_proses',
    loadChildren: () => import('../../newrecordrow_proses/newrecordrow_proses.module').then(m => m.NewrecordrowProsesModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('../../charts/charts.module').then(m => m.ChartsNg2Module)
  },
   {
    path: 'forms',
    loadChildren: () => import('../../forms/forms.module').then(m => m.FormModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('../../maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: 'tables',
    loadChildren: () => import('../../tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'listings/:id',
    loadChildren: () => import('../../listings/listings.module').then(m => m.DataTablesModule)
  },
  {
    path: 'uikit',
    loadChildren: () => import('../../ui-kit/ui-kit.module').then(m => m.UIKitModule)
  },
  {
    path: 'components',
    loadChildren: () => import('../../components/ui-components.module').then(m => m.UIComponentsModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('../../pages/full-pages/full-pages.module').then(m => m.FullPagesModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('../../cards/cards.module').then(m => m.CardsModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('../../chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'chat/:id',
    loadChildren: () => import('../../chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'newrecordform/:token',
    loadChildren: () => import('../../newrecordform/newrecordform.module').then(m => m.NewrecordformModule)
  },
  {
    path: 'newrecordform/:formid/:formtanimi',
    loadChildren: () => import('../../newrecordform/newrecordform.module').then(m => m.NewrecordformModule)
  },
  {
    path: 'editrecordform',
    loadChildren: () => import('../../editrecordform/editrecordform.module').then(m => m.EditrecordformModule)
  },
  {
    path: 'editrecordform/:recordid/:formid/:formtanimi',
    loadChildren: () => import('../../editrecordform/editrecordform.module').then(m => m.EditrecordformModule)
  },
  {
    path: 'editrecordrow',
    loadChildren: () => import('../../editrecordrow/editrecordrow.module').then(m => m.EditrecordrowModule)
  },
  {
    path: 'newrecordrow',
    loadChildren: () => import('../../newrecordrow/newrecordrow.module').then(m => m.NewrecordrowModule)
  },
  {
    path: 'newrecordform',
    loadChildren: () => import('../../newrecordform/newrecordform.module').then(m => m.NewrecordformModule)
  },
  {
    path: 'isgucuboard',
    loadChildren: () => import('../../isgucuboard/isgucuboard.module').then(m => m.IsGucuBoardModule)
  },
  {
    path: 'chat-ngrx',
    loadChildren: () => import('../../chat-ngrx/chat-ngrx.module').then(m => m.ChatNGRXModule)
  },
  {
    path: 'tedaviplanlama',
    loadChildren: () => import('../../tedaviplanlama/tedaviplanlama.module').then(m => m.ChatModule)
  },
  {
    path: 'carihesapkarti',
    loadChildren: () => import('../../carihesapkarti/carihesapkarti.module').then(m => m.ChatModule)
  },
  {
    path: 'musterihesapkarti',
    loadChildren: () => import('../../musterihesapkarti/musterihesapkarti.module').then(m => m.ChatModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('../../inbox/inbox.module').then(m => m.InboxModule)
  },
  {
    path: 'taskboard',
    loadChildren: () => import('../../taskboard/taskboard.module').then(m => m.TaskboardModule)
  },
  {
    path: 'app-upk',
    loadChildren: () => import('../../uretimplanlama/upk.module').then(m => m.UPKModule)
  },
  {
    path: 'barcodeform',
    loadChildren: () => import('../../barcodeform/barcodeform.module').then(m => m.BarcodeFormModule)
  },
  {
    path: 'taskboard-ngrx',
    loadChildren: () => import('../../taskboard-ngrx/taskboard-ngrx.module').then(m => m.TaskboardNGRXModule)
  },
  {
    path: 'listings/:id/:filter',
    loadChildren: () => import('../../listings/listings.module').then(m => m.DataTablesModule)
  },
  {
    path: 'ganttchart',
    loadChildren: () => import('../../ganttchart/ganttchart.module').then(m => m.ganttchartModule)
  }
];
