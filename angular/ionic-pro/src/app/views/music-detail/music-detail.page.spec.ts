import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicDetailPage } from './music-detail.page';

describe('MusicDetailPage', () => {
  let component: MusicDetailPage;
  let fixture: ComponentFixture<MusicDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
