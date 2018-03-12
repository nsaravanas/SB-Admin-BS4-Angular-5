import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    public alerts: Array<any> = [];

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    // Doughnut
    public doughnutChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail-Order Sales'
    ];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';

    // Radar
    public radarChartLabels: string[] = [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string = 'radar';

    // Pie
    public pieChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';

    // PolarArea
    public polarAreaChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
        'Telesales',
        'Corporate Sales'
    ];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean = true;

    public polarAreaChartType: string = 'polarArea';

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        // {
        //     // grey
        //     backgroundColor: 'rgba(148,159,177,0.2)',
        //     borderColor: 'rgba(148,159,177,1)',
        //     pointBackgroundColor: 'rgba(148,159,177,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        // },
        // {
        //     // dark grey
        //     backgroundColor: 'rgba(77,83,96,0.2)',
        //     borderColor: 'rgba(77,83,96,1)',
        //     pointBackgroundColor: 'rgba(77,83,96,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(77,83,96,1)'
        // },
        // {
        //     // grey
        //     backgroundColor: 'rgba(148,159,177,0.2)',
        //     borderColor: 'rgba(148,159,177,1)',
        //     pointBackgroundColor: 'rgba(148,159,177,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        // }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

    constructor(private route: ActivatedRoute) { }

    private heading: string;
    private title: string;
    private isDashboard: boolean = true;
    private isProcess: boolean = true;
    private isServer: boolean = true;
    private isStorage: boolean = true;
    private isReport: boolean = true;

    ngOnInit() {
        this.route.data.subscribe((data: { routeData: any }) => {
            this.heading = data['name'];
            this.isDashboard = data['type'] !== 'dashboard';
            this.isProcess = data['type'] !== 'process';
            if (!this.isProcess) {
                this.setProcess();
            }
            this.isServer = data['type'] !== 'server';
            if (!this.isServer) {
                this.setServer();
            }
            this.isStorage = data['type'] !== 'storage';
            if (!this.isStorage) {
                this.setStorage();
            }
            this.isReport = data['type'] !== 'report';
            if (!this.isReport) {
                this.setReport();
            }
        })
    }

    setProcess() {
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = [
            '10:00',
            '10:10',
            '10:20',
            '10:30',
            '10:40',
            '10:50',
            '11:00'
        ];

        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'received' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'transformed' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'processed' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'falied' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'skipped' }
        ];

        this.doughnutChartLabels = [
            'recived',
            'processed',
            'skipped'
        ];
        this.doughnutChartData = [12300, 11000, 1300];

        this.lineChartData = [
            // { data: [100, 100, 100, 100, 100, 100, 100], label: 'Total RAM' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Used' },
            { data: [18, 48, 77, 9, 12, 27, 40], label: 'Cached' }
        ];
        this.lineChartLabels = [
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00'
        ];
    }

    setServer() {

        this.doughnutChartLabels = [
            'used',
            'cached',
            'mounted'
        ];
        this.doughnutChartData = [12300, 11000, 1300];

        this.lineChartData = [
            // { data: [100, 100, 100, 100, 100, 100, 100], label: 'Total RAM' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Used' },
            { data: [18, 48, 77, 9, 12, 27, 40], label: 'Cached' }
        ];
        this.lineChartLabels = [
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00'
        ];
    }

    setStorage() {

        this.lineChartData = [
            // { data: [100, 100, 100, 100, 100, 100, 100], label: 'Total RAM' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Used' },
            { data: [18, 48, 77, 9, 12, 27, 40], label: 'Cached' }
        ];
        this.lineChartLabels = [
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00'
        ];

        this.pieChartLabels = [
            'active',
            'inactive',
            'cached'
        ];
        this.pieChartData = [140, 20, 40];
    }

    setReport() {
        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Server 2 back online`
            },
            {
                id: 2,
                type: 'warning',
                message: `server 1 high memory utilization`
            },
            {
                id: 3,
                type: 'danger',
                message: `DB connection reached max`
            },
            {
                id: 4,
                type: 'primary',
                message: `cache 2 is standby`
            }
        );
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

}
