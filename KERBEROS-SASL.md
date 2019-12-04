# Kerberos SASL Guide #

Hooking up a macOS dev environment to a Windows Server DC Kerberos KDC is
a straight up nightmare, so I wrote some notes for my future self to
figure it out when i inevitably forget.

### Notes for myself about GSSAPI ###

I tore all my hair out getting GSSAPI working between all the components. So here's a config dump for future me.
This was based on a Windows Server 2019 DC as the KDC.

Domain joining the machine made it even more mind numbing as the keytab password would get reset for the computer account.

In my case it was necessary to manually specify KRB5 REALMS, because the mac was doing something crazy with the local KDC.

Launch ZooKeeper as:

    KAFKA_OPTS="-Djava.security.auth.login.config=etc/kafka/zookeeper_jaas.conf -Djava.security.krb5.conf=etc/security/krb5.conf" bin/zookeeper-server-start etc/kafka/zookeeper.properties

Launch Broker as:

    sudo KAFKA_OPTS="-Djava.security.auth.login.config=etc/kafka/kafka_client_jaas.conf -Djava.security.krb5.conf=etc/security/krb5.conf" bin/kafka-server-start etc/kafka/server.properties

Command line tool example (kafka-acl):

    KAFKA_OPTS="-Djava.security.auth.login.config=etc/kafka/kafka_client_jaas.conf -Djava.security.krb5.conf=etc/security/krb5.conf" bin/kafka-acls --authorizer-properties zookeeper.connect=zookeeper:2181 --list

KSQL:

    KAFKA_OPTS="-Djava.security.auth.login.config=etc/ksql/ksql_jaas.conf -Djava.security.krb5.conf=etc/security/krb5.conf" bin/ksql-server-start etc/ksql/ksql-server.properties
  
If you still have issues with kerberos, supply the JAAS debugging flag as:

    -Dsun.security.krb5.debug=true


*krb5.conf*:

    [domain_realms]
    myhostname.domain.com = DOMAIN.COM
    domain.com = DOMAIN.COM

*server.properties*

    listeners=PLAINTEXT://host.domain:9092,SASL_PLAINTEXT://host.domain:9093
    sasl.mechanism.inter.broker.protocol=GSSAPI
    security.inter.broker.protocol=SASL_PLAINTEXT
    sasl.enabled.mechanisms=GSSAPI
    #sasl.kerberos.service.name=kafka <- didnt help
    zookeeper.set.acl=true
    advertised.listeners=PLAINTEXT://host.domain:9092,SASL_PLAINTEXT://host.domain:9093

*kafka_jaas.conf*
    
    // ZooKeeper client authentication
    Client {
        com.sun.security.auth.module.Krb5LoginModule required
        useKeyTab=true
        keyTab="/path/to/kafka.ktab"
        storeKey=true
        principal="kafka/host.domain@DOMAIN"
        debug=true;
    };
    // Specifies a unique keytab and principal name for each broker
    KafkaServer {
        com.sun.security.auth.module.Krb5LoginModule required
        refreshKrb5Config=true
        useKeyTab=true
        storeKey=true
        keyTab="/path/to/kafka.ktab"
        serviceName="kafka"
        principal="kafka/host.domain@DOMAIN";
    };


*zookeeper.properties*

    authProvider.1=org.apache.zookeeper.server.auth.SASLAuthenticationProvider
    jaasLoginRenew=3600000
    requireClientAuthScheme=sasl


*zookeeper_jaas.conf*

    // Specifies a unique keytab and principal name for each ZooKeeper node
    Server {
        com.sun.security.auth.module.Krb5LoginModule required
        useKeyTab=true
        keyTab="/path/to/zookeeper.ktab"
        storeKey=true
        principal="zookeeper/host.domain@DOMAIN"
        debug=true;
    };

### See Also ###

- A great walkthrough of SASL ACLs https://github.com/shafiquejamal/kafka-zookeeper-kerberos/blob/master/README-Kafka-brokers-SASL-only.md
