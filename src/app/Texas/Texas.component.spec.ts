import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAboutTexasComponent } from './Texas.component';

describe('AllAboutTexasComponent', () => {
  let component: AllAboutTexasComponent;
  let fixture: ComponentFixture<AllAboutTexasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAboutTexasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAboutTexasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
