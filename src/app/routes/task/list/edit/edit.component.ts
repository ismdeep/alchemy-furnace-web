import {Component, OnInit, ViewChild} from '@angular/core';
import {SFComponent, SFSchema, SFUISchema} from '@delon/form';
import {_HttpClient} from '@delon/theme';
import {collect} from 'collect.js';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalRef} from 'ng-zorro-antd/modal';

@Component({
  selector: 'task-edit',
  templateUrl: './edit.component.html',
})
export class TaskEditComponent implements OnInit {
  record: any = {};
  i: any;
  @ViewChild('sf') sf: SFComponent;
  schema: SFSchema = {
    properties: {
      name: {type: 'string', title: '任务名称'},
      cron: {type: 'string', title: '定时任务'},
      bash_content: {type: 'string', title: '脚本'},
    },
    required: ['name', 'cron', 'bash_content'],
  };

  type: any;

  ui: SFUISchema = {
    '*': {},
  };

  task_id: any;

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {
  }

  ngOnInit(): void {
    this.task_id = this.record.id;
    this.i = [this.record].map((e) => ({
      name: e.name,
      cron: e.cron,
      bash_content: e.bash,
    }))[0];
  }

  save(value: any) {
    this.http.post(`/api/v1/tasks`, value).subscribe(() => {
      this.msgSrv.success('创建成功');
      this.modal.close(true);
    });
  }

  update(value) {
    this.http
      .put(`/api/v1/tasks/${this.task_id}`, this.i)
      .subscribe(() => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
  }

  close() {
    this.modal.destroy();
  }
}
