import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifterTemplateComponent } from './fifter-template.component';

describe('FifterTemplateComponent', () => {
  let component: FifterTemplateComponent;
  let fixture: ComponentFixture<FifterTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifterTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
