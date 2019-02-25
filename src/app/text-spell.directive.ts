import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dofTextSpell]'
})
export class TextSpellDirective implements OnInit {

  @Input() appTextSpell: string;

  constructor() {
  }

  ngOnInit() {
    console.log(this.appTextSpell);

  }

}
