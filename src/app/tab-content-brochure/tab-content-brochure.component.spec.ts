import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentBrochureComponent } from './tab-content-brochure.component';

describe('TabContentBrochureComponent', () => {
  let component: TabContentBrochureComponent;
  let fixture: ComponentFixture<TabContentBrochureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabContentBrochureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabContentBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
