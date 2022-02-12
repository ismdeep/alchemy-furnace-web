import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {STColumn, STComponent, STPage} from '@delon/abc/st';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd';
import {tap} from 'rxjs/operators';
import format from 'date-fns/format';

@Component({
  selector: 'task-detail',
  templateUrl: './detail.component.html',
})
export class TaskDetailComponent implements OnInit, OnDestroy {
  private id: string;


  constructor(
    private http: _HttpClient,
    public message: NzMessageService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private modalHelper: ModalHelper,
  ) {
  }


  intervalInstance = null

  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.loadData()
    this.loadRunList()
    this.intervalInstance = setInterval(() => {
      this.loadRunList()
    }, 1000)
  }

  ngOnDestroy() {
    if (this.intervalInstance != null) {
      clearInterval(this.intervalInstance)
    }
  }

  @ViewChild('st', {static: false}) st: STComponent;
  columns: STColumn[] = [
    {title: '状态', render: 'exit_code'},
    {
      title: '开始时间', index: 'created_at',
      format: (item) => {
        return format(new Date(item.created_at), 'yyyy-MM-dd  HH:mm:ss');
      },
    },
    {title: '耗时', index: 'time_elapse'},
  ];

  task = null;
  run_list = [];

  loadData() {
    this.http.get(`/api/v1/tasks/${this.id}`).subscribe((res) => {
      this.task = res.data
    })
  }

  loadRunList() {
    this.http.get(`/api/v1/tasks/${this.id}/runs`).subscribe((res) => {
      this.run_list = res.data.list
    })
  }

  run() {
    this.http.post(`/api/v1/tasks/${this.id}/runs`).subscribe((res) => {
      this.message.success("success")
    })
  }
}
