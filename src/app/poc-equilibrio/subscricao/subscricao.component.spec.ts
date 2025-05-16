import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscricaoComponent } from './subscricao.component';

describe('SubscricaoComponent', () => {
  let component: SubscricaoComponent;
  let fixture: ComponentFixture<SubscricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscricaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
