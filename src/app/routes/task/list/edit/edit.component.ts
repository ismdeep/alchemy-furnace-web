import {Component, OnInit, ViewChild} from '@angular/core';
import {SFComponent, SFSchema, SFTextareaWidgetSchema, SFUISchema} from '@delon/form';
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
      bash_content: {
        type: 'string',
        title: 'Bash 脚本',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 4 },
        } as SFTextareaWidgetSchema
      },
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
    console.log(value)
    this.http.post(`/api/v1/tasks`, value).subscribe(() => {
      this.msgSrv.success('创建成功');
      this.modal.close(true);
    });
  }

  update(value) {
    this.http.put(`/api/v1/tasks/${this.task_id}`, value).subscribe(() => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close() {
    this.modal.destroy();
  }
}
