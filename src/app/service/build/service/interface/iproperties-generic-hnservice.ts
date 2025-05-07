export interface IPropertiesGenericHnService {
    readonly url: string;
    errors: string[];
    urlStream$: any;
    extraModuleLoaded$: any;
    parameters: Map<string, string>;
    onDataFailed(error: any): void;
    getValuePropertieByName(name: string): any;
    loadExtraModuleProperties(nameModule: string): void;
    isLoadedModule(nameModule: string): boolean;
}
