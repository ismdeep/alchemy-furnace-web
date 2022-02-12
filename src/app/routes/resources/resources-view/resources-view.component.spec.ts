import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourcesResourcesViewComponent } from './resources-view.component';

describe('ResourcesResourcesViewComponent', () => {
  let component: ResourcesResourcesViewComponent;
  let fixture: ComponentFixture<ResourcesResourcesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesResourcesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesResourcesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
