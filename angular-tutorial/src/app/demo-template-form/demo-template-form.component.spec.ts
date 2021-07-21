import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTemplateFormComponent } from './demo-template-form.component';

describe('DemoTemplateFormComponent', () => {
  let component: DemoTemplateFormComponent;
  let fixture: ComponentFixture<DemoTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
