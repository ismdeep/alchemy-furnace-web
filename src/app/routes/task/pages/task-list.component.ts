import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {STColumn, STComponent} from '@delon/abc/st';
import {ModalHelper, _HttpClient, DrawerHelper, TitleService} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd';
import {tap} from 'rxjs/operators';
import {TaskEditComponent} from "../components/task-edit.component";
import format from 'date-fns/format';

@Component({
  selector: 'tasks',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  constructor(
    private http: _HttpClient,
    public message: NzMessageService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private router: Router,
    private modalHelper: ModalHelper,
    private drawerHelper: DrawerHelper,
    public title: TitleService,
  ) {
  }

  loading = false;

  @ViewChild('st', {static: false}) st: STComponent;
  columns: STColumn[] = [
    {title: '任务名称', index: 'name'},
    {title: '最后一次运行', render: 'last_status'},
    {
      title: '操作',
      buttons: [
        {
          text: '控制台',
          click: (item: any) => {
            this.router.navigate([`/tasks/${item.id}`]).then()
          }
        },
        {
          text: '编辑',
          type: 'drawer',
          drawer: {
            title: '编辑',
            component: TaskEditComponent,
            size: document.body.clientWidth * 0.618,
          },
          click: (_record) => this.getData(),
        },
        {
          text: '删除',
          pop: '确定要删除吗',
          click: (item: any) => {
            this.http.delete(`/api/v1/tasks/${item.id}`)
              .subscribe(() => {
                this.message.success('操作成功');
                this.getData();
              });
          },
        },
      ],
    },
  ];

  ngOnInit() {
    this.title.setTitle('Tasks - Alchemy Furnace')
    this.getData();
  }

  tasks;
  getData() {
    this.loading = true;
    this.http.get(`/api/v1/tasks`).pipe(tap(() => (this.loading = false)))
      .subscribe(
        (res) => {
          this.tasks = res.data;
        },
        () => {
          this.loading = false;
        },
      );
  }

  formatTime(t) {
    return format(new Date(t), 'yyyy-MM-dd  HH:mm:ss');
  }

  create() {
    this.drawerHelper.static('创建', TaskEditComponent, {}, {size: document.body.clientWidth * 0.618}).subscribe(() => {
      this.getData();
    });
  }
}
