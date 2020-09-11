import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorycarComponent } from './categorycar.component';

describe('CategorycarComponent', () => {
  let component: CategorycarComponent;
  let fixture: ComponentFixture<CategorycarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorycarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorycarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
