import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  foo: inject(),
  bar() {
    this.foo.bar;
    this.get('foo.bar.baz');
  }
});
