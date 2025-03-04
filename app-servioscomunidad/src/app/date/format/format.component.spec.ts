import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormatComponent } from './format.component';

describe('FormatComponent', () => {
  let component: FormatComponent;
  let fixture: ComponentFixture<FormatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
