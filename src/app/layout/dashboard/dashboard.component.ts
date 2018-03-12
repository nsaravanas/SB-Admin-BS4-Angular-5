import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor(private route: ActivatedRoute) {
        // this.sliders.push(
        //     {
        //         imagePath: 'assets/images/slider1.jpg',
        //         label: 'First slide label',
        //         text:
        //             'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        //     },
        //     {
        //         imagePath: 'assets/images/slider2.jpg',
        //         label: 'Second slide label',
        //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        //     },
        //     {
        //         imagePath: 'assets/images/slider3.jpg',
        //         label: 'Third slide label',
        //         text:
        //             'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        //     }
        // );

        // this.alerts.push(
        //     {
        //         id: 1,
        //         type: 'success',
        //         message: `Server 2 back online`
        //     },
        //     {
        //         id: 2,
        //         type: 'warning',
        //         message: `server 1 high memory utilization`
        //     },
        //     {
        //         id: 3,
        //         type: 'danger',
        //         message: `DB connection reached max`
        //     },
        //     {
        //         id: 4,
        //         type: 'primary',
        //         message: `cache 2 is standby`
        //     }            
        // );
    }

    ngOnInit() {
        this.route.data.subscribe((data: { routeData: any }) => {
            this.title = data['title'] || 'Dashboard Statistics Overview';
            this.isDashboard = data['type'] !== 'dashboard';
            this.isProcess = data['type'] !== 'process';
            this.isServer = data['type'] !== 'server';
            this.isStorage = data['type'] !== 'storage';
        })
    }

    private title: string;
    private type: string = 'dashboard';
    private isDashboard: boolean = false;
    private isProcess: boolean = true;
    private isServer: boolean = true;
    private isStorage: boolean = true;

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
