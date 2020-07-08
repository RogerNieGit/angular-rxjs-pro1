import { Component, VERSION, OnInit } from "@angular/core";

import { of, from } from "rxjs";
import { map, tap, take } from "rxjs/operators";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  ngOnInit() {
    of(3, 4, 5, 6, 78)
      .pipe(
        tap( i => console.log(`${i} is emited`)),
        map(i => i * 4),
        map(i => i-1),
        map(i => {

          if (i>100) {throw new Error('Too large');  }
          else return i;
        }



        ),
        take(6)
      )
      .subscribe(
        
      x => console.log(`After Mapped ${x}`),
     y => console.error(`Error: ${y}`),
    () => console.log("completed")

      );
   // of("Apple1", "Apple2", "Apple3").subscribe(
    //  x => console.log(`Apple is emitted ${x}`),
   //   y => console.error(`Error: ${y}`),
    //  () => console.log("completed")
   // );
  }
}
