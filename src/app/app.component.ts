import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pageTitle: string = "pipes in angular";
  search: string = "";
  users: any[] = [
    {
      id: 103,
      name: "chandra",
      city: "Mumbai",
      salary: 1100000,
      dob: new Date("01/01/1991")
    },
    {
      id: 101,
      name: "alan",
      city: "Delhi",
      salary: 200000,
      dob: new Date("11/09/1989")
    },

    {
      id: 105,
      name: "fana",
      city: "Delhi",
      salary: 800000,
      dob: new Date("05/03/1993")
    },

    {
      id: 104,
      name: "dora",
      city: "Mumbai",
      salary: 700000,
      dob: new Date("03/02/1992")
    },
    {
      id: 102,
      name: "baba",
      city: "Mumbai",
      salary: 1000000,
      dob: new Date("12/10/1990")
    }
  ];
}
