import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about.component';
import { MathBoxComponent } from './math-box/math-box.component';

fdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ AboutComponent, MathBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    component.items = [1, 2, 3];
    fixture.detectChanges();
  });

  it('should push an item', () => {
    component.pushItem();
    expect(component.items.length).toBe(4);
  });

  it('should unshift an item', () => {
    component.unshiftItem();
    expect(component.items[0]).toEqual({title: 'Item3'});
  });

  it('should remove last item', () => {
    component.removeItemLast();
    expect(component.items).toEqual([1, 2]);
  });

  it('should remove first item', () => {
    component.removeItemFirst();
    expect(component.items).toEqual([2, 3]);
  });
});
