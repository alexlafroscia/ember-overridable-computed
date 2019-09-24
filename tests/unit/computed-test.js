import { module, test } from "qunit";
import EmberObject from "@ember/object";
import { computed } from "ember-overridable-computed";

const ClassicTestClass = EmberObject.extend({
  first: 1,
  second: 2,

  sum: computed("first", "second", function() {
    return this.first + this.second;
  })
});

module("Unit | computed", function() {
  module("with a classic Ember class", function() {
    test("it initially works as a normal computed property", function(assert) {
      const object = ClassicTestClass.create();
      assert.equal(object.sum, 3, "Computed the initial value correctly");

      object.set("first", 2);

      assert.equal(
        object.sum,
        4,
        "Updated the value when the first dependent changed"
      );

      object.set("second", 3);

      assert.equal(
        object.sum,
        5,
        "Updated the value when the second dependent changed"
      );
    });

    test("it can be overwritten with a new value", function(assert) {
      const object = ClassicTestClass.create();
      object.set("sum", 42);

      assert.equal(object.sum, 42, "Uses the overwritten value");
    });
  });
});
