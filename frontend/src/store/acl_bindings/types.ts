export interface AccessControlEntry {
    principal: string;
    host: string;
    permissionType: string;
    operation: string;
    unknown: boolean;
}

export interface ResourcePattern {
    name: string;
    patternType: string;
    resourceType: string;
    unknown: boolean;
}


export interface AclBinding {
    entry: AccessControlEntry;
    pattern: ResourcePattern;
}

