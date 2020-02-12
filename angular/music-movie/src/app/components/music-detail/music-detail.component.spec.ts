import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDetailComponent } from './music-detail.component';

describe('MusicDetailComponent', () => {
  let component: MusicDetailComponent;
  let fixture: ComponentFixture<MusicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
