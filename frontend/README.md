# embark-ui

> A UI Implementation for the Embark Kafka Console Project.

This application presents a UI as a cohesive product that calls API's that are part of the embark-api-* family.

## Features

- Topic management (create/update/delete).
- View topic partitions and configuration
- View consumer groups and consumers.
- View available kafka-connect plugins.
- View configured connectors.
- View subjects and schemas registered in the kafka schema registry.


## Building

Install dependencies using

    yarn install
    
Then build the minified distribution file:

    yarn run build

If for some reason, the KSQL grammar has changed (which is almost never), 
you can copy the new grammar file into this repo and rebuild using:

    yarn run lexer

## Developing

Install dependencies using

    yarn install
    
Then start the development server by running:

    yarn run serve
    
See the file, [.env.local.example](.env.local.example) For configuring Backend URLs.


### KSQL Parsing

KSQL uses Antlr4 for parsing. Antlr4 also has a JavaScript runtime which may be able to be incorporated with the UI.
The grammar for KSQL comes from 
[ksql-parser/src/main/antlr4/io/confluent/ksql/parser/SqlBase.g4](https://github.com/confluentinc/ksql/blob/13fde334fdeb267488db6802c881453cc9ce8e3f/ksql-parser/src/main/antlr4/io/confluent/ksql/parser/SqlBase.g4)

The lexer/parser may be used for auto suggestion/code completion of KSQL, and to highlight syntax errors prior to posting
the KSQL to the KSQL REST API.

### Confluent Hub Datasource

Confluent hub uses a request similar to this for Plugin metadata:

    curl 'https://www.confluent.io/wp-admin/admin-ajax.php' \
         --compressed -H 'Referer: https://www.confluent.io/hub/' \
         -H 'Content-Type: application/x-www-form-urlencoded' \
         -H 'Origin: https://www.confluent.io' \
         --data 'action=ajax_get_v2_connectors&term=all&type=all&owner=null&name=null&version=null'

### Ideas

topics UI

important actions:

- manage permissions
- operational health


