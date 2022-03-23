import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {STColumn, STComponent} from '@delon/abc/st';
import {ModalHelper, _HttpClient, DrawerHelper, TitleService} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd';
import format from 'date-fns/format';
import {TriggerEditComponent} from "../components/trigger-edit.component";
import {TaskEditComponent} from "../components/task-edit.component";

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
})
export class TaskDetailComponent implements OnInit, OnDestroy {

  // params
  private id: string;

  constructor(
    private http: _HttpClient,
    public message: NzMessageService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private modalHelper: ModalHelper,
    private drawerHelper: DrawerHelper,
    public title: TitleService,
  ) {
  }


  intervalInstance = null

  ngOnInit() {
    if (!this.id) {
      this.id = this.activatedRouter.snapshot.params['id']
    }
    this.title.setTitle(`Task - Alchemy Furnace`)
    this.loadData()
    this.loadTriggerList()
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
    {title: '触发器', index: 'trigger_name'},
    {
      title: '开始时间', index: 'created_at',
      format: (item) => {
        return format(new Date(item.created_at), 'yyyy-MM-dd  HH:mm:ss');
      },
    },
    {
      title: '耗时',
      index: 'time_elapse_second',
      format: (item) => {
        let s = item.time_elapse_second
        if (s < 60) {
          return `${s} 秒`
        }

        s = (s / 60).toFixed(1)
        if (s < 60) {
          return `${s} 分钟`
        }

        s = (s / 60).toFixed(1)
        if (s < 24) {
          return `${s} 小时`
        }

        s = (s / 24).toFixed(1)
        return `${s} 天`
      }
    },
    {title: '操作', render: 'ops'}
  ];

  task = null;

  editTask() {
    this.drawerHelper.static('编辑', TaskEditComponent, {record: this.task}, {size: document.body.clientWidth * 0.618}).subscribe(() => {
      this.loadData()
    });
  }

  loadData() {
    this.http.get(`/api/v1/tasks/${this.id}`).subscribe((res) => {
      this.task = res.data
      this.title.setTitle(`${this.task.name} - Task - Alchemy Furnace`)
    })
  }

  trigger_list = [];

  loadTriggerList() {
    this.http.get(`/api/v1/tasks/${this.id}/triggers`).subscribe((res) => {
      this.trigger_list = res.data
    })
  }

  run_list = [];

  loadRunList() {
    this.http.get(`/api/v1/tasks/${this.id}/runs`).subscribe((res) => {
      this.run_list = res.data.list
    })
  }

  runTrigger(e) {
    console.log(e)
    this.http.post(`/api/v1/tasks/${this.id}/triggers/${e.id}/runs`).subscribe(() => {
      this.message.success("success")
    })
  }

  gotoLog(e) {
    window.open(`/tasks/${this.id}/runs/${e.id}`)
  }

  addTrigger() {
    this.modalHelper.createStatic(TriggerEditComponent, {
      task_id: this.id,
      trigger_id: 0
    }, {size: 800}).subscribe(() => {
      this.loadTriggerList()
    });
  }

  editTrigger(e) {
    this.modalHelper.createStatic(TriggerEditComponent, {
      task_id: this.id,
      trigger_id: e.id,
      record: e
    }, {size: 800}).subscribe(() => {
      this.loadTriggerList()
    })
  }

  deleteTrigger(e) {
    console.log(e)
    this.http.delete(`/api/v1/tasks/${this.id}/triggers/${e.id}`).subscribe(() => {
      this.loadTriggerList()
    })
  }
}
