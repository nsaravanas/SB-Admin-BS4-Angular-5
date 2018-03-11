import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', data: { title: 'Dashboard', type: 'dashboard' } },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'process-menu', loadChildren: './dashboard/dashboard.module#DashboardModule', data: { title: 'Process Dashboard', type: 'process' } },
            { path: 'process-1', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'process-1', type: 'process' } },
            { path: 'process-2', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'process-2', type: 'process' } },
            { path: 'process-3', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'process-3', type: 'process' } },
            { path: 'process-4', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'process-4', type: 'process' } },
            { path: 'server-menu', loadChildren: './dashboard/dashboard.module#DashboardModule', data: { title: 'Server Dashboard', type: 'server' } },
            { path: 'server-1', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'server-1', type: 'server' } },
            { path: 'server-2', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'server-2', type: 'server' } },
            { path: 'server-3', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'server-3', type: 'server' } },
            { path: 'server-4', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'server-4', type: 'server' } },
            { path: 'storage-menu', loadChildren: './dashboard/dashboard.module#DashboardModule', data: { title: 'Storage Dashboard', type: 'storage' } },
            { path: 'storage-database', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'storage-database', type: 'storage' } },
            { path: 'storage-cache', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'storage-cache', type: 'storage' } },
            { path: 'report', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'report' } },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
