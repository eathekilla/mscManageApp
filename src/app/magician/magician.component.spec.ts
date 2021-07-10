import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicianComponent } from './magician.component';

describe('MagicianComponent', () => {
  let component: MagicianComponent;
  let fixture: ComponentFixture<MagicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
