import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicianSearchComponent } from './magician-search.component';

describe('MagicianSearchComponent', () => {
  let component: MagicianSearchComponent;
  let fixture: ComponentFixture<MagicianSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicianSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicianSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
