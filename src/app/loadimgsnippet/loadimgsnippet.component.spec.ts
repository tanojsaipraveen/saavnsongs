import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadimgsnippetComponent } from './loadimgsnippet.component';

describe('LoadimgsnippetComponent', () => {
  let component: LoadimgsnippetComponent;
  let fixture: ComponentFixture<LoadimgsnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadimgsnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadimgsnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
