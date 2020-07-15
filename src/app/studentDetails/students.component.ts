import { Component, OnInit } from "@angular/core";
@Component({
    selector: 'app-students',
    // templateUrl: './students.component.html',
    // styleUrls: ['./students.component.css']
    template: `<h1>Students Component</h1>`,
    styles: [
        ` h1 {
            color: red
        }`
    ]
})

export class StudentsComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    }
}