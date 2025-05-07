import { Comparable } from "../../interface/comparable.bean";
import { CodeableConcept } from "./codeable-concept.bean";

export declare class Communication implements Comparable {
    language: CodeableConcept;
    preferred: boolean;
    equals(e: Communication): boolean;
}
