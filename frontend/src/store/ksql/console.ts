import {KSQLStreamOrTable} from "@/store/ksql/types";

interface ColumnLengths {
    name: number;
    topic: number;
    format: number;
}

//     Stream Name         | Kafka Topic                 | Format
// ------------------------------------------------------------
//     KSQL_PROCESSING_LOG | default_ksql_processing_log | JSON
// ------------------------------------------------------------

// Query ID | Kafka Topic | Query String
// ---------------------------------------
//     ---------------------------------------
//         For detailed information on a Query run: EXPLAIN <Query ID>;



// Table Name | Kafka Topic | Format | Windowed
// ----------------------------------------------
//     ----------------------------------------------

// ksql> LIST PROPERTIES;
//
// Property                                               | Default override | Effective Value
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//     ksql.avro.maps.named                                   |                  | true
// ksql.extension.dir                                     |                  | ext
// ksql.functions.substring.legacy.args                   |                  | false
// ksql.insert.into.values.enabled                        |                  | true
// ksql.internal.topic.replicas                           |                  | 1

export const table = <TRow>(data: Array<TRow>, columns: string[] = [], columnDescriptions: { [name: string]: string } = {}, indent = 3): string[] => {

    const columnSizes = data.reduce((sizes, row: TRow) => {
        for (let column of columns) {
            if (!sizes.hasOwnProperty(column)) {
                sizes[column] = row[column].length > columnDescriptions[column].length
                    ? row[column].length
                    : columnDescriptions[column].length;
            } else {
                if (sizes[column] < row[column].length) {
                    sizes[column] = row[column].length;
                }
            }
        }

        return sizes;
    }, {});

    console.log(columnSizes);

    const totalSize: number = columns.reduce((total, col) => total + columnSizes[col], 0);

    const header: string = columns.reduce((memo, column): string => {
        let heading = columnDescriptions[column];
        let border = '|';
        const grow = columnSizes[column] - heading.length;
        if (grow > 0) { heading += ' '.repeat(grow); }

        return memo + ` ${heading} ${border}`;
    }, ' '.repeat(indent));

    const padding = 3;
    const hr = ' '.repeat(indent) + '-'.repeat(totalSize + (columns.length * padding));

    const body: string[] = data.map((row) => {
        let text = ' '.repeat(indent);
        let border = '|';

        for (let column of columns) {
            const grow = columnSizes[column] - row[column].length;

            if (grow > 0) {
                text += ` ${row[column]}${' '.repeat(grow)} ${border}`;
            } else {
                text += ` ${row[column]} ${border}`;
            }
        }

        return text;
    });

    return [header, hr].concat(body);
};