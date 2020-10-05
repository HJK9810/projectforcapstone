import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewonePage } from './newone.page';

describe('NewonePage', () => {
  let component: NewonePage;
  let fixture: ComponentFixture<NewonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
