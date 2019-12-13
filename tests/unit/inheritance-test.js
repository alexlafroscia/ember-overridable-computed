import { module, test } from "qunit";
import EmberObject from "@ember/object";
import { computed } from "ember-overridable-computed";

const BaseClass = EmberObject.extend({
  first: 1,
  second: 2,

  sum: computed("first", "second", function() {
    return this.first + this.second;
  })
});

module("Unit | inheritance", function() {
  test("with a classic Ember class", function(assert) {
    const ChildClass = BaseClass.extend({
      sum: 4
    });

    const instance = ChildClass.create({});

    assert.equal(
      instance.get("sum"),
      4,
      "Can override a value in a child class"
    );
  });

  test("with a native Ember class", function(assert) {
    class ChildClass extends BaseClass {
      init(...args) {
        super.init(...args);

        this.set("sum", 4);
      }
    }

    const instance = ChildClass.create({});

    assert.equal(
      instance.get("sum"),
      4,
      "Can override a value in a child class"
    );
  });
});
