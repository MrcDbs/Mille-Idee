import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaFotoDettaglioComponent } from './moda-foto-dettaglio.component';

describe('ModaFotoDettaglioComponent', () => {
  let component: ModaFotoDettaglioComponent;
  let fixture: ComponentFixture<ModaFotoDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaFotoDettaglioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaFotoDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
