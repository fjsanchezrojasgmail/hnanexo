import { DomainResource } from "@oh/hncommons-services/build/bean/rs/fhir/domain-resource.bean";
import { Identifier } from "@oh/hncommons-services/build/bean/rs/fhir/identifier.bean";
import { Reference } from "@oh/hncommons-services/build/bean/rs/fhir/reference.bean";
export class DeviceRequest extends DomainResource {

    'identifier': Identifier[];
    'context': Reference;
    'status': string;
    'codeReference': Reference;
    'subject': Reference;
    'authoredOn': Date;
    'requester': {
        agent: Reference;
    };
    'supportingInfo': Reference[];
    'reasonReference': Reference[];
    'performer': Reference;
}
