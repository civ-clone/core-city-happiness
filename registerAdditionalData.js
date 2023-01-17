"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const city_happiness_1 = require("./AdditionalData/city-happiness");
const AdditionalDataRegistry_1 = require("@civ-clone/core-data-object/AdditionalDataRegistry");
AdditionalDataRegistry_1.instance.register(...(0, city_happiness_1.default)());
//# sourceMappingURL=registerAdditionalData.js.map