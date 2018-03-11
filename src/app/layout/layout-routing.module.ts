import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'process-menu', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'process-menu' } },
            { path: 'process-1', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'process-1' } },
            { path: 'process-2', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'process-2' } },
            { path: 'process-3', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'process-3' } },
            { path: 'process-4', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'process-4' } },
            { path: 'server-menu', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'server-menu' } },
            { path: 'server-1', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'server-1' } },
            { path: 'server-2', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'server-2' } },
            { path: 'server-3', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'server-3' } },
            { path: 'server-4', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'server-4' } },
            { path: 'storage-menu', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'storage-menu' } },
            { path: 'storage-database', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'storage-database' } },
            { path: 'storage-cache', loadChildren: './charts/charts.module#ChartsModule', data: { name: 'storage-cache' } },
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
