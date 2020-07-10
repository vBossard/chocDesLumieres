import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PseudoChoicePage } from './pseudo-choice.page';

describe('PseudoChoicePage', () => {
  let component: PseudoChoicePage;
  let fixture: ComponentFixture<PseudoChoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseudoChoicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PseudoChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
