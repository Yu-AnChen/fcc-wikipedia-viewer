import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSmartComponent } from './wiki-smart.component';

describe('WikiSmartComponent', () => {
  let component: WikiSmartComponent;
  let fixture: ComponentFixture<WikiSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
