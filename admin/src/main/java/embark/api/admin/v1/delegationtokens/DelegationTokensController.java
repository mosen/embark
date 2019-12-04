package embark.api.admin.v1.delegationtokens;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Post;
import io.reactivex.Single;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.common.KafkaFuture;
import org.apache.kafka.common.security.token.delegation.DelegationToken;


@Controller("${api.base-path:}/v1/delegation-tokens")
public class DelegationTokensController {

  private final AdminClient adminClient;

  public DelegationTokensController(AdminClient adminClient) {
    this.adminClient = adminClient;
  }

  @Operation(summary = "Create a delegation token", description = "Creates a delegation token for use with Kafka clients")
  @ApiResponse(responseCode = "502", description = "Unable to connect to Kafka broker(s) or connection was disconnected")
  @Tag(name = "delegation-tokens")
  @Post()
  public Single<DelegationToken> createToken(

  ) {
    KafkaFuture<DelegationToken> kafkaFuture = this.adminClient
          .createDelegationToken()
          .delegationToken();

    return Single.fromFuture(kafkaFuture);
  }
}
