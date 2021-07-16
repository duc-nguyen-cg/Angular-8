import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetInfoListComponent } from './pet-info-list.component';

describe('PetInfoListComponent', () => {
  let component: PetInfoListComponent;
  let fixture: ComponentFixture<PetInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
