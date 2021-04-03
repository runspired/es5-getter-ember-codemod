import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  foo: inject(),
  bar() {
    this.get('foo.bar');
    this.get('foo.bar.baz');
    this.get('foo.bar.baz.bem').doSomething();
    this.get('model.bar');
    this.get('model.baz.bem');
  }
});
