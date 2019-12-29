

const map = {
    "kafka_topics": () => [
        {
            text: "Name",
            value: "name",
        },
        {
            text: "Consumers",
            value: "consumerCount",
        },
        {
            text: "Consumer Groups",
            value: "consumerGroupCount",
        },
        {
            text: "Registered",
            value: "registered",
        }
    ],
    "properties": () => [
        {
            text: "Default",
            value: "default",
        },
        {
            text: "Property",
            value: "property",
        },
        {
            text: "Value",
            value: "value",
        }
    ],
    "streams": () => [
        {
            text: "Name",
            value: "name"
        },
        {
            text: "Topic",
            value: "topic",
        },
        {
            text: "Format",
            value: "format",
        }
    ],
};

export const polyHeaders = (ksqlType: string): any => {
    if (map.hasOwnProperty(ksqlType)) {
        return map[ksqlType]();
    } else {
        return [];
    }
};
