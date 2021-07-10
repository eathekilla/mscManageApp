import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicianDetailComponent } from './magician-detail.component';

describe('MagicianDetailComponent', () => {
  let component: MagicianDetailComponent;
  let fixture: ComponentFixture<MagicianDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicianDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicianDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
