"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdditionalData = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const AdditionalData_1 = require("@civ-clone/core-data-object/AdditionalData");
const CelebrateLeader_1 = require("../Rules/CelebrateLeader");
const City_1 = require("@civ-clone/core-city/City");
const CivilDisorder_1 = require("../Rules/CivilDisorder");
const getAdditionalData = (ruleRegistry = RuleRegistry_1.instance) => [
    new AdditionalData_1.default(City_1.default, 'civilDisorder', (city) => ruleRegistry
        .process(CivilDisorder_1.default, city, city.yields())
        .some((result) => result === true)),
    new AdditionalData_1.default(City_1.default, 'celebrateLeader', (city) => ruleRegistry
        .process(CelebrateLeader_1.default, city, city.yields())
        .some((result) => result === true)),
];
exports.getAdditionalData = getAdditionalData;
exports.default = exports.getAdditionalData;
//# sourceMappingURL=city-happiness.js.map