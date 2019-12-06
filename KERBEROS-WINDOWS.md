# Kafka GSSAPI Windows Notes #

## Creating Service Principals ##

The basic workflow is this:

```powershell    
    # Create a User Principal to act as the Service
    PS> New-ADUser -SamAccountName "kafka_connect" -GivenName "Kafka" -Surname "Connect" -DisplayName "Kafka Connect Service Account" -Path 'CN=Users,DC=contoso,DC=private'
    
    # Register a Kerberos Service Principal
    # ... For a service (not necessary for a client)
    # SetSPN -S kafka/kafka.server@CONTOSO.PRIVATE KRB_USR_CONNECT
    
    # Export the keytab for use on the target host
    ktpass -princ kafka_connect@contoso.local -mapUser CONTOSO\kafka_connect -crypto RC4-HMAC-NT -ptype KRB5_NT_PRINCIPAL -pass P@ssw0rd -out C:\Users\Administrator\Documents\kafka_connect.ktab
```