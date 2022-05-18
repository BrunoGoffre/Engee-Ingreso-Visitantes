import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaComponent } from './grilla.component';

describe('GrillaComponent', () => {
  let component: GrillaComponent;
  let fixture: ComponentFixture<GrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
