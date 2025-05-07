import { DomainResource } from '@oh/hncommons-services/build/bean/rs/fhir/domain-resource.bean';
import { Identifier } from '@oh/hncommons-services/build/bean/rs/fhir/identifier.bean';
import { Reference } from '@oh/hncommons-services/build/bean/rs/fhir/reference.bean';
import { CodeableConcept } from '@oh/hncommons-services/build/bean/rs/fhir/codeable-concept.bean';
import { Coding } from '@oh/hncommons-services/build/bean/rs/fhir/coding.bean';
import { Meta } from '@oh/hncommons-services/build/bean/rs/fhir/meta.bean';
import { Period } from '@oh/hncommons-services/build/bean/rs/fhir/period.bean';
import { TriageMovementBackboneElement } from '@oh/hncommons-services/build/bean/rs/fhir/backbone-element.bean';
import { Quantity } from './quantity.bean';
export class EncounterRS extends DomainResource {


    'identifier': Identifier[];
    'status': string;
    'statusHistory': TriageMovementBackboneElement[];
    'class': Coding;
    'type': CodeableConcept[];
    'priority': CodeableConcept;
    'subject': Reference;
    'episodeOfCare': Reference[];
    'incomingReferral':
        Reference;
    ;
    'participant': [{
        'type': CodeableConcept[];
        'period':
            Period;
        'individual': Reference;
    }];
    'appointment':
        Reference;
    ;
    'period': Period;
    'length':
        Quantity;
    ;
    'reason': CodeableConcept[];
    'diagnosis': [{
        'condition': Reference;
        'role': CodeableConcept;
        'rank': number;
    }];
    'hospitalization': {
        'preAdmissionIdentifier':
            Identifier;

        'origin':
            Reference;

        'admitSource':
            CodeableConcept;

        'reAdmission': CodeableConcept;
        'dietPreference': CodeableConcept[];
        'specialCourtesy': CodeableConcept[];
        'specialArrangement': CodeableConcept[];
        'destination':
            Reference

        'dischargeDisposition': CodeableConcept;
    };
    'location': [{
        'location': Reference;
        'status': string;
    }];
    'serviceProvider': Reference;
    'partOf':
        Reference
    ;

}
