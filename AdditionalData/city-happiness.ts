import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import AdditionalData from '@civ-clone/core-data-object/AdditionalData';
import CelebrateLeader from '../Rules/CelebrateLeader';
import City from '@civ-clone/core-city/City';
import CivilDisorder from '../Rules/CivilDisorder';

export const getAdditionalData = (
  ruleRegistry: RuleRegistry = ruleRegistryInstance
) => [
  new AdditionalData(City, 'civilDisorder', (city: City) =>
    ruleRegistry
      .process(CivilDisorder, city, city.yields())
      .some((result: boolean): boolean => result)
  ),
  new AdditionalData(City, 'celebrateLeader', (city: City) =>
    ruleRegistry
      .process(CelebrateLeader, city, city.yields())
      .some((result: boolean): boolean => result)
  ),
];

export default getAdditionalData;
