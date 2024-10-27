import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCelebrityComponent } from './compare-celebrity.component';

describe('CompareCelebrityComponent', () => {
  let component: CompareCelebrityComponent;
  let fixture: ComponentFixture<CompareCelebrityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareCelebrityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareCelebrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
