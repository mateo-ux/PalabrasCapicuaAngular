import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapicuaCheckComponent } from './capicua-check.component';

describe('CapicuaCheckComponent', () => {
  let component: CapicuaCheckComponent;
  let fixture: ComponentFixture<CapicuaCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapicuaCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapicuaCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
