import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  foo: inject(),
  bar() {
    this.foo.bar;
    this.foo.bar?.baz;
    this.foo.bar.baz.bem.doSomething();
    this.controller.bar;
    this.controller.baz;
    this.controller.bar?.baz;
  }
});
