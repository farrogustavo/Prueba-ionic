import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusIdaPage } from './bus-ida.page';

describe('BusIdaPage', () => {
  let component: BusIdaPage;
  let fixture: ComponentFixture<BusIdaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BusIdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
