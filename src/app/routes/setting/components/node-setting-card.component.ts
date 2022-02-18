import {Component, OnDestroy, OnInit} from "@angular/core";
import {_HttpClient, DrawerHelper, ModalHelper} from "@delon/theme";
import {NodeEditFormComponent} from "./node-edit-form.component";

@Component({
  selector: 'node-setting-card',
  templateUrl: './node-setting-card.component.html',
})
export class NodeSettingCardComponent implements OnInit, OnDestroy {
  constructor(
    private http: _HttpClient,
    public modalHelper: ModalHelper,
    private drawerHelper: DrawerHelper,
  ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.loadData()
  }

  // data
  nodes = []
  loadData() {
    this.http.get(`/api/v1/nodes`).subscribe((res) => {
      this.nodes = res.data
    })
  }

  add() {
    this.drawerHelper.static('创建', NodeEditFormComponent, {}, {size: document.body.clientWidth * 0.618}).subscribe(() => {
      this.loadData()
    });
  }

  edit(node) {
    this.drawerHelper.static('编辑', NodeEditFormComponent, {record: node}, {size: document.body.clientWidth * 0.618}).subscribe(() => {
      this.loadData()
    })
  }

  delete(node) {
    this.http.delete(`/api/v1/nodes/${node.id}`).subscribe(() => {
      this.loadData()
    })
  }
}