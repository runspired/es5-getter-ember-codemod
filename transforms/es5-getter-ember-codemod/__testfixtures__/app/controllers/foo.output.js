import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  foo: inject(),
  bar() {
    this.foo.bar;
    this.foo.bar?.baz;
    this.foo.bar.baz.bem.doSomething();
    this.model.bar;
    this.model.baz?.bem;
  }
});
