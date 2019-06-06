import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAsideComponent } from './layout-aside.component';

describe('LayoutAsideComponent', () => {
  let component: LayoutAsideComponent;
  let fixture: ComponentFixture<LayoutAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
