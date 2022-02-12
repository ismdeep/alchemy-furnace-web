import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  subject$ = new Subject();
  k8s$ = new BehaviorSubject('');
  role$ = new Subject()
  clusterLog = '';
  clusterName = ''
}
