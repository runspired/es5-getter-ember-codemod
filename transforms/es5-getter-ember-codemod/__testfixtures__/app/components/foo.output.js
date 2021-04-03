import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  foo: inject(),
  bar() {
    this.foo.bar;
    this.foo.bar?.baz;
    this.foo.bar.baz.bem.doSomething();
    let a = this.foo.bar.baz + 1;
    let b = 2 + this.foo.bar.baz;
    this.foo.bar.baz + 1;
    2 + this.foo.bar.baz;
    this.audit.soldAmtList.length;
    this.audit.soldAmtList[0];
  }
});
