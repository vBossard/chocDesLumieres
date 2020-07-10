import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DualChoicePage } from './dual-choice.page';

describe('DualChoicePage', () => {
  let component: DualChoicePage;
  let fixture: ComponentFixture<DualChoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualChoicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DualChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
