import { Component, OnInit } from '@angular/core';



import { Job } from './job';

@Component({
    moduleId: module.id,
    // selector: 'app-root',
    styleUrls: ['jobs.component.css'],
    templateUrl: 'jobs.component.html'
})
export class JobsComponent implements OnInit {


    jobs = [
        new Job(1, 'DPS',  'location', 'status'),
        new Job(2, 'Blue Cross Blue Shield',  'location', 'status'),
        new Job(3, 'Carvana',  'location', 'status'),
        new Job(4, 'Prizelogic',  'location', 'status'),
        new Job(5, 'Edupoint',  'location', 'status'),
        new Job(6, 'Nautilus Insurance Group',  'location', 'status'),
        new Job(7, 'ASU',  'location', 'status'),
        new Job(8, 'APS',  'location', 'status'),
        new Job(9, 'iPro',  'location', 'status'),
        new Job(10, 'BuckAZ DataBridge',  'location', 'status'),
        new Job(11, 'Ready Logistics',  'location', 'status'),
        new Job(12, 'Empire CAT',  'location', 'status'),
        new Job(13, 'OfferPad',  'location', 'status'),
        new Job(15, 'Axosoft',  'location', 'status'),
        new Job(16, 'Infinity',  'location', 'status'),
        new Job(17, 'Unviersal Background',  'location', 'status')
    ];


addJob() {

}

    ngOnInit() {

    }
}
