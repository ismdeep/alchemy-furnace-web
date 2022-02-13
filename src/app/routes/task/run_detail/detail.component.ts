import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {STColumn, STComponent, STPage} from '@delon/abc/st';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd';
import {tap} from 'rxjs/operators';
import format from 'date-fns/format';
import * as moment from "moment";
import {webSocket} from 'rxjs/webSocket';


@Component({
  selector: 'run-detail',
  templateUrl: './detail.component.html',
})
export class RunDetailComponent implements OnInit, OnDestroy {
  private id: string; // Task ID
  private run_id: string; // Run ID


  constructor(
    private http: _HttpClient,
    public message: NzMessageService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private modalHelper: ModalHelper,
  ) {
  }


  intervalInstance = null

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.params['id']
    this.run_id = this.activatedRouter.snapshot.params['run_id']
    this.loadData()
  }

  ngOnDestroy() {
  }

  logContent=''
  loadData() {
    this.http.get(`/api/v1/tasks/${this.id}/runs/${this.run_id}`).subscribe((res) => {
      console.log(res)
    })


    webSocket({
      url: `ws://127.0.0.1:8000/api/v1/tasks/${this.id}/runs/${this.run_id}/log`,
      deserializer: (msg) => msg,
    }).subscribe((msg) => {
      console.log(msg)
      this.logContent = this.logContent + msg.data
    })
  }

}
