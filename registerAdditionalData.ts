import cityHappiness from './AdditionalData/city-happiness';
import { instance as additionalDataRegistryInstance } from '@civ-clone/core-data-object/AdditionalDataRegistry';

additionalDataRegistryInstance.register(...cityHappiness());
