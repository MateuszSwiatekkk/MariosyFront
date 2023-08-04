import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalaComponent } from './modala.component';

describe('ModalaComponent', () => {
  let component: ModalaComponent;
  let fixture: ComponentFixture<ModalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalaComponent]
    });
    fixture = TestBed.createComponent(ModalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
