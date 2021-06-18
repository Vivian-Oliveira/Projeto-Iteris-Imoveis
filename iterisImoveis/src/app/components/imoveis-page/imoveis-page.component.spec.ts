import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveisPageComponent } from './imoveis-page.component';

describe('ImoveisPageComponent', () => {
  let component: ImoveisPageComponent;
  let fixture: ComponentFixture<ImoveisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImoveisPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
