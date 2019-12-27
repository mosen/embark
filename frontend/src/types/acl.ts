namespace Kafka {

    export enum AclOperation {
        ALL = "ALL",
        ALTER = "ALTER",
        ALTER_CONFIGS = "ALTER_CONFIGS",
        ANY = "ANY",
        CLUSTER_ACTION = "CLUSTER_ACTION",
        CREATE = "CREATE",
        DELETE = "DELETE",
        DESCRIBE = "DESCRIBE",
        DESCRIBE_CONFIGS = "DESCRIBE_CONFIGS",
        IDEMPOTENT_WRITE = "IDEMPOTENT_WRITE",
        READ = "READ",
        UNKNOWN = "UNKNOWN",
        WRITE = "WRITE"
    }

    export enum AclPermissionType {
        ALLOW = "ALLOW",
        ANY = "ANY",
        DENY = "DENY",
        UNKNOWN = "UNKNOWN"
    }

    export interface AccessControlEntry {
        host: string;
        isUnknown: boolean;
        operation: AclOperation;
        principal: string;
        permissionType: AclPermissionType;
    }

    export enum PatternType {
        ANY = "ANY",
        LITERAL = "LITERAL",
        MATCH = "MATCH",
        PREFIXED = "PREFIXED",
        UNKNOWN = "UNKNOWN"
    }

    export enum ResourceType {
        ANY = "ANY",
        CLUSTER = "CLUSTER",
        DELEGATION_TOKEN = "DELEGATION_TOKEN",
        GROUP = "GROUP",
        TOPIC = "TOPIC",
        TRANSACTIONAL_ID = "TRANSACTIONAL_ID",
        UNKNOWN = "UNKNOWN"
    }

    export interface ResourcePattern {
        name: string;
        patternType: PatternType;
        resourceType: ResourceType;
    }

    export interface AclBinding {
        entry: AccessControlEntry;
        isUnknown: boolean;
        pattern: ResourcePattern;
    }

}