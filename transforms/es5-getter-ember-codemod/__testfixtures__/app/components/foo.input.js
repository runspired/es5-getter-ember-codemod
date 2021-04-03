import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  foo: inject(),
  bar() {
    this.get('foo.bar');
    this.get('foo.bar.baz');
    this.get('foo.bar.baz.bem').doSomething();
    let a = this.get('foo.bar.baz') + 1;
    let b = 2 + this.get('foo.bar.baz');
    this.get('foo.bar.baz') + 1;
    2 + this.get('foo.bar.baz');
    this.get("audit.soldAmtList").length;
    this.get("audit.soldAmtList")[0];
  }
});
