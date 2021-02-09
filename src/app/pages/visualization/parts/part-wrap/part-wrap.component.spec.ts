import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartWrapComponent } from './part-wrap.component';

describe('PartWrapComponent', () => {
  let component: PartWrapComponent;
  let fixture: ComponentFixture<PartWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
