import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsuiteComponent } from './testsuite.component';

describe('TestsuiteComponent', () => {
  let component: TestsuiteComponent;
  let fixture: ComponentFixture<TestsuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsuiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
