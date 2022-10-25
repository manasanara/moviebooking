import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrillerComponent } from './triller.component';

describe('TrillerComponent', () => {
  let component: TrillerComponent;
  let fixture: ComponentFixture<TrillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
