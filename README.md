# ember-overridable-computed

The ability to clobber a computed property and override it with a static value has been deprecated as of [RFC 369](https://emberjs.github.io/rfcs/0369-deprecate-computed-clobberability.html) and Ember 3.9. This addon provides a computed property macro that can be used if you still need to be able to override a computed property.

## Compatibility

- Ember.js v3.4 or above
- Ember CLI v2.13 or above
- Node.js v8 or above

## Installation

```
ember install ember-overridable-computed
```

## Usage

Replace your existing usage of the `computed` function with the version provided by this addon:

```js
import { computed as overridable } from "ember-overridable-computed";

const Person = EmberObject.extend({
  firstName: undefined,
  lastName: undefined,

  name: overridable("firstName", "lastName", function() {
    return `${this.firstName} ${this.lastName}`;
  })
});

const person = Person.create({
  firstName: "Peter",
  lastName: "Parker"
});

person.set("name", "Spider-Man"); // No deprecation warning or errors!
```

**Note:** This addon's `computed` does not currently support being used as a decorator.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
