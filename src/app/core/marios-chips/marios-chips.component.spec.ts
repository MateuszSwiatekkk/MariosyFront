import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariosChipsComponent } from './marios-chips.component';

describe('MariosChipsComponent', () => {
  let component: MariosChipsComponent;
  let fixture: ComponentFixture<MariosChipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MariosChipsComponent]
    });
    fixture = TestBed.createComponent(MariosChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
