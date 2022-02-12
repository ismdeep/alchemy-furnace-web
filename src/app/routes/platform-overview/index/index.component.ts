import {Component, OnInit} from '@angular/core';
import {_HttpClient, ModalHelper} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'platform-overview',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class PlatformOverviewIndexComponent implements OnInit {

  constructor(
    private http: _HttpClient,
    private modal: ModalHelper,
    private message: NzMessageService
  ) {

  }

  ngOnInit() {

  }
}
