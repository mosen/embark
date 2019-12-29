import {htmlize, tokenize} from "@/ksql/pseudo-prism";
import ksqlGrammar from "@/ksql/prism-ksql";

describe("pseudo-prism", () => {

    it("parses KSQL statements", () => {
        const ksql = `SELECT 
           title,
           COUNT(*) AS rating_count,
           WINDOWSTART() AS window_start,
           WINDOWEND() AS window_end
        FROM ratings
        WINDOW TUMBLING (SIZE 6 HOURS)
        GROUP BY title
        LIMIT 11;`;

        const matches = tokenize(ksql, ksqlGrammar);
        console.log(matches);
        expect(matches).toHaveLength(1);
    });

    it("parses KSQL create statement", () => {
        const ksql = `CREATE TABLE rating_count
    WITH (kafka_topic='rating_count') AS
    SELECT title,
           COUNT(*) AS rating_count,
           WINDOWSTART() AS window_start,
           WINDOWEND() AS window_end
    FROM ratings
    WINDOW TUMBLING (SIZE 6 HOURS)
    GROUP BY title;`;

        const matches = tokenize(ksql, ksqlGrammar);
        console.log(matches);
        expect(matches).toHaveLength(1);
    });

    it("spits out HTML", () => {
        const ksql = `CREATE TABLE rating_count
    WITH (kafka_topic='rating_count') AS
    SELECT title,
           COUNT(*) AS rating_count,
           WINDOWSTART() AS window_start,
           WINDOWEND() AS window_end
    FROM ratings
    WINDOW TUMBLING (SIZE 6 HOURS)
    GROUP BY title;`;

        const matches = tokenize(ksql, ksqlGrammar);
        const html = htmlize(matches);

        console.log(html);
        expect(html).not.toBeNull();
        expect(html).toHaveLength(1);
    });
});