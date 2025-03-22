import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TBDRepartitionDesAccesComponent } from './tbd-repartition-des-acces.component';

describe('TBDRepartitionDesAccesComponent', () => {
  let component: TBDRepartitionDesAccesComponent;
  let fixture: ComponentFixture<TBDRepartitionDesAccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TBDRepartitionDesAccesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TBDRepartitionDesAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
