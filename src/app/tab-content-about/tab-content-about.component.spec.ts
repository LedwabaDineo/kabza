import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentAboutComponent } from './tab-content-about.component';

describe('TabContentAboutComponent', () => {
  let component: TabContentAboutComponent;
  let fixture: ComponentFixture<TabContentAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabContentAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabContentAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
