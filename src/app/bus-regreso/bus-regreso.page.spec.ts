import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusRegresoPage } from './bus-regreso.page';

describe('BusRegresoPage', () => {
  let component: BusRegresoPage;
  let fixture: ComponentFixture<BusRegresoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BusRegresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
