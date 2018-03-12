import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { GaugeModule } from 'angular-gauge';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule, GaugeModule.forRoot(), NgbAlertModule.forRoot()],
    declarations: [ChartsComponent]
})
export class ChartsModule { }
