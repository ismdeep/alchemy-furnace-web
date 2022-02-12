import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {STColumn, STComponent, STPage} from '@delon/abc/st';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'task-detail',
  templateUrl: './detail.component.html',
})
export class TaskDetailComponent implements OnInit {
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


  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.loadData()
  }

  @ViewChild('st', {static: false}) st: STComponent;
  columns: STColumn[] = [
    {title: '状态', index: 'exit_code'},
    {title: '定时任务', index: 'created_at'},
  ];

  task = null;
  run_list = [];
  loadData() {
    this.http.get(`/api/v1/tasks/${this.id}`).subscribe((res) => {
      this.task = res.data
    })
    this.http.get(`/api/v1/tasks/${this.id}/runs`).subscribe((res) => {
      this.run_list = res.data.list
    })
  }
}
