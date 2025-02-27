import Ember from 'ember';
import { set, get } from '@ember/object'

let foo1 = this.foo;
let foo2 = this.foo?.bar;
let foo3 = this['foo-bar'];
let foo4 = get(this, 42);

let foo5 = this.foo;
let foo6 = this.foo?.bar;
let foo7 = this['foo-bar'];
let foo8 = Ember.get(this, `${'foo'}.bar`);

let obj = { bar: 'baz' };
let bar = obj.bar;
