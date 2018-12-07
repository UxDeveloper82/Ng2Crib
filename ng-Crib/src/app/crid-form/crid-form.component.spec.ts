/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CridFormComponent } from './crid-form.component';

describe('CridFormComponent', () => {
  let component: CridFormComponent;
  let fixture: ComponentFixture<CridFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CridFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CridFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
