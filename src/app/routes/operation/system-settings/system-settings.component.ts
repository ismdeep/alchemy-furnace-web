import {Component, OnDestroy} from "@angular/core";
import {_HttpClient, ModalHelper} from "@delon/theme";

@Component({
  selector: 'system-settings',
  templateUrl: './system-settings.component.html',
})
export class SystemSettingsComponent implements OnDestroy {

  constructor(private http: _HttpClient, private modalHelper: ModalHelper) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
