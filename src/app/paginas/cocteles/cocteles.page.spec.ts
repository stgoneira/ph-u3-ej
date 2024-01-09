import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoctelesPage } from './cocteles.page';

describe('CoctelesPage', () => {
  let component: CoctelesPage;
  let fixture: ComponentFixture<CoctelesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoctelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
