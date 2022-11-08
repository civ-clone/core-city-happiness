import City from '@civ-clone/core-city/City';
import Rule from '@civ-clone/core-rule/Rule';
import Yield from '@civ-clone/core-yield/Yield';

export class CivilDisorder extends Rule<[City, Yield[]?], void> {}

export default CivilDisorder;
