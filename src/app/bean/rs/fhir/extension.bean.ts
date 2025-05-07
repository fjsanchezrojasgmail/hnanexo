import { Element } from './element.bean';
import { Comparable } from '../../interface/comparable.bean';
import { Coding } from './coding.bean';
import { CodeableConcept } from './codeable-concept.bean';
import { ContactPoint } from './contact-point.bean';
import { Identifier } from './identifier.bean';
import { Reference } from './reference.bean';
import { Address } from './address.bean';
import { Ratio } from './ratio.bean';
import { Schedule } from './schedule.bean';
import { Attachment } from './attachment.bean';
import { Quantity } from './quantity.bean';
import { Period } from './period.bean';
import { HumanName } from './human-name.bean';
import { Range } from './range.bean';

/**
 * Clase que modela el tipo Extension de FHIR
 * @version 2
 */
export class Extension extends Element implements Comparable {
  url: string = '';

  valueInteger?: number;
  valueUnsignedInt?: number;
  valueDecimal?: number;
  valueDateTime?: Date;
  valueDate?: Date | string;
  valueInstant?: Date;
  valueString?: string;
  valueUri?: string;
  valueBoolean?: boolean;
  valueCode?: string;
  valueBase64Binary?: string;
  valueCoding?: Coding;
  valueCodeableConcept?: CodeableConcept;
  valueAttachment?: Attachment;
  valueIdentifier?: Identifier;
  valueQuantity?: Quantity;
  valueRange?: Range;
  valuePeriod?: Period;
  valueRatio?: Ratio;
  valueHumanName?: HumanName;
  valueAddress?: Address;
  valueContactPoint?: ContactPoint;
  valueSchedule?: Schedule;
  valueReference?: Reference;

  constructor(obj?: any) {
    super();
    if (obj) {
      Object.assign(this, obj);
    }
  }

  equals(e: Extension): boolean {
    return this.url === e?.url;
    // Puedes mejorar esta lógica si necesitas comparar valores específicos.
  }
}
