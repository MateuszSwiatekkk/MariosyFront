import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecipientsComponent } from './user-recipients.component';

describe('UserRecipientsComponent', () => {
  let component: UserRecipientsComponent;
  let fixture: ComponentFixture<UserRecipientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRecipientsComponent]
    });
    fixture = TestBed.createComponent(UserRecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
