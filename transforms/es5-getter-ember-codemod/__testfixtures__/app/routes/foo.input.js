import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  foo: inject(),
  bar() {
    this.get('foo.bar');
    this.get('foo.bar.baz');
    this.get('foo.bar.baz.bem').doSomething();
    this.get('controller.bar');
    this.get('controller.baz');
    this.get('controller.bar.baz');
  }
});
