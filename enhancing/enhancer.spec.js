const enhancer = require('./enhancer.js');

// tests:
describe("enhancer.js", () => {
    // test case
    it("should run tests without errors", () => {
      // arrange --> setup the world
      // act --> execute the code we're testing
      // assert --> check our assumptions
      expect(true).toBe(true); // assertion
    });

    describe(".repair()", function () {
        it("should return an item with durability restored to 100 every time.", function () {
            expect(enhancer.repair({ name: "item1", enhancement: 20, durability: 5}))
                .toStrictEqual({ name: "item1", enhancement: 20, durability: 100})
            expect(enhancer.repair({ name: "item2", enhancement: 10, durability: 65}))
                .toStrictEqual({ name: "item2", enhancement: 10, durability: 100})
            expect(enhancer.repair({ name: "item3", enhancement: 18, durability: 92}))
                .toStrictEqual({ name: "item3", enhancement: 18, durability: 100})
            expect(enhancer.repair({ name: "item4", enhancement: 0, durability: 3}))
                .toStrictEqual({ name: "item4", enhancement: 0, durability: 100})
        })
    })

    describe(".succeed()", function () {
        it("should return an item that has enhancement increased by 1", function () {
            expect(enhancer.succeed({ name: "item1", enhancement: 1, durability: 5}))
                .toStrictEqual({ name: "item1", enhancement: 2, durability: 5})
            expect(enhancer.succeed({ name: "item2", enhancement: 17, durability: 65}))
                .toStrictEqual({ name: "item2", enhancement: 18, durability: 65})
            expect(enhancer.succeed({ name: "item3", enhancement: 12, durability: 92}))
                .toStrictEqual({ name: "item3", enhancement: 13, durability: 92})
            expect(enhancer.succeed({ name: "item4", enhancement: 0, durability: 3}))
                .toStrictEqual({ name: "item4", enhancement: 1, durability: 3})
        })

        it("should not change the enhancement level when it is already at 20", function () {
            expect(enhancer.succeed({ name: "item1", enhancement: 20, durability: 5}))
                .toStrictEqual({ name: "item1", enhancement: 20, durability: 5})
            expect(enhancer.succeed({ name: "item2", enhancement: 20, durability: 65}))
                .toStrictEqual({ name: "item2", enhancement: 20, durability: 65})
        })

        it("should not change the durability of an item", function () {
            expect(enhancer.succeed({ name: "item1", enhancement: 1, durability: 5}))
                .toStrictEqual({ name: "item1", enhancement: 2, durability: 5})
            expect(enhancer.succeed({ name: "item2", enhancement: 17, durability: 65}))
                .toStrictEqual({ name: "item2", enhancement: 18, durability: 65})
            expect(enhancer.succeed({ name: "item3", enhancement: 12, durability: 92}))
                .toStrictEqual({ name: "item3", enhancement: 13, durability: 92})
            expect(enhancer.succeed({ name: "item4", enhancement: 0, durability: 3}))
                .toStrictEqual({ name: "item4", enhancement: 1, durability: 3})
        })
    })

    describe(".fail()", function () {
        it("should decrease durability by 5 when when enhancement is less than 15.", function () {
            expect(enhancer.fail({ name: "item1", enhancement: 5, durability: 6}))
                .toStrictEqual({ name: "item1", enhancement: 5, durability: 1})
            expect(enhancer.fail({ name: "item2", enhancement: 14, durability: 65}))
                .toStrictEqual({ name: "item2", enhancement: 14, durability: 60})
            expect(enhancer.fail({ name: "item3", enhancement: 12, durability: 92}))
                .toStrictEqual({ name: "item3", enhancement: 12, durability: 87})
            expect(enhancer.fail({ name: "item4", enhancement: 8, durability: 10}))
                .toStrictEqual({ name: "item4", enhancement: 8, durability: 5})
        })

        it("should decrease durability by 10 when when enhancement is equal to 15.", function () {
            expect(enhancer.fail({ name: "item1", enhancement: 15, durability: 16}))
                .toStrictEqual({ name: "item1", enhancement: 15, durability: 6})
            expect(enhancer.fail({ name: "item2", enhancement: 15, durability: 65}))
                .toStrictEqual({ name: "item2", enhancement: 15, durability: 55})
            expect(enhancer.fail({ name: "item3", enhancement: 15, durability: 92}))
                .toStrictEqual({ name: "item3", enhancement: 15, durability: 82})
            expect(enhancer.fail({ name: "item4", enhancement: 15, durability: 10}))
                .toStrictEqual({ name: "item4", enhancement: 15, durability: 0})
        })

        it("should decrease enhancement by 1 & durability by 10, when enhancement is greater than 16.", function () {
            expect(enhancer.fail({ name: "item1", enhancement: 17, durability: 16}))
                .toStrictEqual({ name: "item1", enhancement: 16, durability: 6})
            expect(enhancer.fail({ name: "item2", enhancement: 18, durability: 65}))
                .toStrictEqual({ name: "item2", enhancement: 17, durability: 55})
            expect(enhancer.fail({ name: "item3", enhancement: 20, durability: 92}))
                .toStrictEqual({ name: "item3", enhancement: 19, durability: 82})
            expect(enhancer.fail({ name: "item4", enhancement: 19, durability: 10}))
                .toStrictEqual({ name: "item4", enhancement: 18, durability: 0})
        })
    })

    describe(".get()", function () {
        it("should update name to include enhancement points", function () {
            expect(enhancer.get({ name: "Axe", enhancement: 10, durability: 16}))
                .toStrictEqual({ name: "[+10] Axe", enhancement: 10, durability: 16})
            expect(enhancer.get({ name: "Sword", enhancement: 18, durability: 65}))
                .toStrictEqual({ name: "[+18] Sword", enhancement: 18, durability: 65})
            expect(enhancer.get({ name: "Knife", enhancement: 20, durability: 92}))
                .toStrictEqual({ name: "[+20] Knife", enhancement: 20, durability: 92})
            expect(enhancer.get({ name: "Dagger", enhancement: 19, durability: 10}))
                .toStrictEqual({ name: "[+19] Dagger", enhancement: 19, durability: 10})
        })
    })

});