class Things {
  objectLookup() {
    let chancancode = Person.create({ firstName: 'Godfrey', lastName: 'Chan' });

    chancancode.fullName;
  }

  modelLookup() {
    let model = Person.create({ firstName: 'Godfrey', lastName: 'Chan' });

    model.fullName;
  }

  routeLookup() {
    let route = Person.create({ firstName: 'Godfrey', lastName: 'Chan' });

    route.fullName;
  }

  controllerLookup() {
    let controller = Person.create({ firstName: 'Godfrey', lastName: 'Chan' });

    controller.fullName;
    controller.get('foo.bar');
    controller['foo-bar'];
  }
}
