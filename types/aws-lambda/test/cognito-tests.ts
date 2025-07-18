import {
    CreateAuthChallengeTriggerEvent,
    CreateAuthChallengeTriggerHandler,
    CustomEmailSenderTriggerEvent,
    CustomEmailSenderTriggerHandler,
    CustomMessageTriggerEvent,
    CustomMessageTriggerHandler,
    CustomSMSSenderTriggerHandler,
    DefineAuthChallengeTriggerEvent,
    DefineAuthChallengeTriggerHandler,
    Handler,
    PostAuthenticationTriggerEvent,
    PostAuthenticationTriggerHandler,
    PostConfirmationTriggerEvent,
    PostConfirmationTriggerHandler,
    PreAuthenticationTriggerEvent,
    PreAuthenticationTriggerHandler,
    PreSignUpTriggerEvent,
    PreSignUpTriggerHandler,
    PreTokenGenerationTriggerEvent,
    PreTokenGenerationTriggerHandler,
    PreTokenGenerationV2TriggerEvent,
    PreTokenGenerationV2TriggerHandler,
    PreTokenGenerationV3TriggerEvent,
    PreTokenGenerationV3TriggerHandler,
    UserMigrationTriggerEvent,
    UserMigrationTriggerHandler,
    VerifyAuthChallengeResponseTriggerEvent,
    VerifyAuthChallengeResponseTriggerHandler,
} from "aws-lambda";

type CognitoTriggerEvent =
    | PreSignUpTriggerEvent
    | PostConfirmationTriggerEvent
    | PreAuthenticationTriggerEvent
    | PostAuthenticationTriggerEvent
    | DefineAuthChallengeTriggerEvent
    | CreateAuthChallengeTriggerEvent
    | VerifyAuthChallengeResponseTriggerEvent
    | PreTokenGenerationTriggerEvent
    | PreTokenGenerationV2TriggerEvent
    | PreTokenGenerationV3TriggerEvent
    | UserMigrationTriggerEvent
    | CustomMessageTriggerEvent
    | CustomEmailSenderTriggerEvent;

const baseTest: Handler<CognitoTriggerEvent> = async (event: CognitoTriggerEvent, _, callback) => {
    str = event.version;
    str = event.region;
    str = event.userPoolId;
    str = event.triggerSource;
    str = event.userName;
    str = event.callerContext.awsSdkVersion;
    str = event.callerContext.clientId;

    obj = event.request;
    obj = event.response;

    callback(new Error());
    callback(null, event);
    callback(null, { response: event.response });
    return event;
};

const preSignUp: PreSignUpTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    str = request.validationData!["k1"];
    str = request.clientMetadata!["action"];

    bool = response.autoConfirmUser;
    bool = response.autoVerifyEmail;
    bool = response.autoVerifyPhone;

    triggerSource === "PreSignUp_SignUp";
    triggerSource === "PreSignUp_ExternalProvider";
    triggerSource === "PreSignUp_AdminCreateUser";

    // @ts-expect-error
    triggerSource === "PostConfirmation_ConfirmSignUp";

    // @ts-expect-error
    request.session[0].challengeName === "CUSTOM_CHALLENGE";
};

const postConfirmation: PostConfirmationTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    str = request.clientMetadata!["action"];

    objectOrUndefined = response;

    triggerSource === "PostConfirmation_ConfirmSignUp";
    triggerSource === "PostConfirmation_ConfirmForgotPassword";

    // @ts-expect-error
    triggerSource === "PreSignUp_ExternalProvider";
    // @ts-expect-error
    request.session[0].challengeName === "CUSTOM_CHALLENGE";
    // @ts-expect-error
    str = request.validationData["k1"];
    // @ts-expect-error
    bool = response.autoVerifyEmail;
    // @ts-expect-error
    bool = response.autoVerifyPhone;
};

const defineAuthChallenge: DefineAuthChallengeTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    array = request.session;

    const session = request.session[0];
    session.challengeName === "CUSTOM_CHALLENGE";
    session.challengeName === "PASSWORD_VERIFIER";
    session.challengeName === "SMS_MFA";
    session.challengeName === "DEVICE_SRP_AUTH";
    session.challengeName === "DEVICE_PASSWORD_VERIFIER";
    session.challengeName === "ADMIN_NO_SRP_AUTH";
    session.challengeName === "SRP_A";
    bool = session.challengeResult;
    boolOrUndefined = request.userNotFound;

    strOrUndefined = response.challengeName;
    bool = response.failAuthentication;
    bool = response.issueTokens;

    triggerSource === "DefineAuthChallenge_Authentication";

    // @ts-expect-error
    nullOrUndefined = request.userAttributes;

    objectOrUndefined = request.clientMetadata;
};

const createAuthChallenge: CreateAuthChallengeTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    str = request.challengeName;
    array = request.session;
    str = request.session[0].challengeName;
    bool = request.session[0].challengeResult;
    strOrUndefined = request.session[0].challengeMetadata;
    boolOrUndefined = request.userNotFound;

    obj = response.publicChallengeParameters;
    str = response.publicChallengeParameters["foo"];
    obj = response.privateChallengeParameters;
    str = response.privateChallengeParameters["bar"];
    str = response.challengeMetadata;

    triggerSource === "CreateAuthChallenge_Authentication";

    objectOrUndefined = request.clientMetadata;

    // @ts-expect-error
    nullOrUndefined = request.userAttributes;
};

const validateAuthChallengeResponse: VerifyAuthChallengeResponseTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    obj = request.privateChallengeParameters;
    str = request.privateChallengeParameters["foo"];
    str = request.challengeAnswer;
    boolOrUndefined = request.userNotFound;

    bool = response.answerCorrect;

    triggerSource === "VerifyAuthChallengeResponse_Authentication";

    objectOrUndefined = request.clientMetadata;
};

const preAuthentication: PreAuthenticationTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    boolOrUndefined = request.userNotFound;

    objectOrUndefined = response;

    triggerSource === "PreAuthentication_Authentication";
};

const postAuthentication: PostAuthenticationTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    bool = request.newDeviceUsed;

    objectOrUndefined = response;

    triggerSource === "PostAuthentication_Authentication";

    objectOrUndefined = request.clientMetadata;
};

const preTokenGeneration: PreTokenGenerationTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    obj = request.groupConfiguration;
    strArrayOrUndefined = request.groupConfiguration.groupsToOverride;
    strArrayOrUndefined = request.groupConfiguration.iamRolesToOverride;
    strOrUndefined = request.groupConfiguration.preferredRole;

    obj = response.claimsOverrideDetails;
    objectOrUndefined = response.claimsOverrideDetails.claimsToAddOrOverride;
    strArrayOrUndefined = response.claimsOverrideDetails.claimsToSuppress;

    const groupOverrideDetails = response.claimsOverrideDetails.groupOverrideDetails!;
    strArrayOrUndefined = groupOverrideDetails.groupsToOverride;
    strArrayOrUndefined = groupOverrideDetails.iamRolesToOverride;
    strOrUndefined = groupOverrideDetails.preferredRole;

    triggerSource === "TokenGeneration_AuthenticateDevice";
    triggerSource === "TokenGeneration_Authentication";
    triggerSource === "TokenGeneration_HostedAuth";
    triggerSource === "TokenGeneration_NewPasswordChallenge";
    triggerSource === "TokenGeneration_RefreshTokens";

    objectOrUndefined = request.clientMetadata;
};

const preTokenGenerationv2: PreTokenGenerationV2TriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    obj = request.groupConfiguration;
    strArrayOrUndefined = request.groupConfiguration.groupsToOverride;
    strArrayOrUndefined = request.groupConfiguration.iamRolesToOverride;
    strOrUndefined = request.groupConfiguration.preferredRole;

    strArrayOrUndefined = request.scopes;

    obj = response.claimsAndScopeOverrideDetails;
    objectOrUndefined = response.claimsAndScopeOverrideDetails.idTokenGeneration;
    objectOrUndefined = response.claimsAndScopeOverrideDetails.accessTokenGeneration;

    objectOrUndefined = response.claimsAndScopeOverrideDetails.idTokenGeneration;
    objectOrUndefined = response.claimsAndScopeOverrideDetails.idTokenGeneration?.claimsToAddOrOverride;
    strArrayOrUndefined = response.claimsAndScopeOverrideDetails.idTokenGeneration?.claimsToSuppress;

    objectOrUndefined = response.claimsAndScopeOverrideDetails.accessTokenGeneration;
    objectOrUndefined = response.claimsAndScopeOverrideDetails.accessTokenGeneration?.claimsToAddOrOverride;
    strArrayOrUndefined = response.claimsAndScopeOverrideDetails.accessTokenGeneration?.claimsToSuppress;
    strArrayOrUndefined = response.claimsAndScopeOverrideDetails.accessTokenGeneration?.scopesToAdd;
    strArrayOrUndefined = response.claimsAndScopeOverrideDetails.accessTokenGeneration?.scopesToSuppress;

    const groupOverrideDetails = response.claimsAndScopeOverrideDetails.groupOverrideDetails!;
    strArrayOrUndefined = groupOverrideDetails.groupsToOverride;
    strArrayOrUndefined = groupOverrideDetails.iamRolesToOverride;
    strOrUndefined = groupOverrideDetails.preferredRole;

    triggerSource === "TokenGeneration_AuthenticateDevice";
    triggerSource === "TokenGeneration_Authentication";
    triggerSource === "TokenGeneration_HostedAuth";
    triggerSource === "TokenGeneration_NewPasswordChallenge";
    triggerSource === "TokenGeneration_RefreshTokens";

    objectOrUndefined = request.clientMetadata;
};

const preTokenGenerationv3: PreTokenGenerationV3TriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    obj = request.groupConfiguration;
    strArrayOrUndefined = request.groupConfiguration.groupsToOverride;
    strArrayOrUndefined = request.groupConfiguration.iamRolesToOverride;
    strOrUndefined = request.groupConfiguration.preferredRole;

    strArrayOrUndefined = request.scopes;

    obj = response.claimsAndScopeOverrideDetails;
    objectOrUndefined = response.claimsAndScopeOverrideDetails.idTokenGeneration;
    objectOrUndefined = response.claimsAndScopeOverrideDetails.accessTokenGeneration;

    objectOrUndefined = response.claimsAndScopeOverrideDetails.idTokenGeneration;
    objectOrUndefined = response.claimsAndScopeOverrideDetails.idTokenGeneration?.claimsToAddOrOverride;
    strArrayOrUndefined = response.claimsAndScopeOverrideDetails.idTokenGeneration?.claimsToSuppress;

    objectOrUndefined = response.claimsAndScopeOverrideDetails.accessTokenGeneration;
    objectOrUndefined = response.claimsAndScopeOverrideDetails.accessTokenGeneration?.claimsToAddOrOverride;
    strArrayOrUndefined = response.claimsAndScopeOverrideDetails.accessTokenGeneration?.claimsToSuppress;
    strArrayOrUndefined = response.claimsAndScopeOverrideDetails.accessTokenGeneration?.scopesToAdd;
    strArrayOrUndefined = response.claimsAndScopeOverrideDetails.accessTokenGeneration?.scopesToSuppress;

    const groupOverrideDetails = response.claimsAndScopeOverrideDetails.groupOverrideDetails!;
    strArrayOrUndefined = groupOverrideDetails.groupsToOverride;
    strArrayOrUndefined = groupOverrideDetails.iamRolesToOverride;
    strOrUndefined = groupOverrideDetails.preferredRole;

    triggerSource === "TokenGeneration_ClientCredentials";

    objectOrUndefined = request.clientMetadata;
};

const userMigration: UserMigrationTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    str = request.password;
    objectOrUndefined = request.validationData;
    str = request.validationData!.foobar;

    obj = response.userAttributes;
    str = response.userAttributes.email;
    strOrUndefined = response.finalUserStatus;
    response.finalUserStatus === "UNCONFIRMED";
    response.finalUserStatus === "CONFIRMED";
    response.finalUserStatus === "ARCHIVED";
    response.finalUserStatus === "COMPROMISED";
    response.finalUserStatus === "UNKNOWN";
    response.finalUserStatus === "RESET_REQUIRED";
    response.finalUserStatus === "FORCE_CHANGE_PASSWORD";
    boolOrUndefined = response.forceAliasCreation;
    boolOrUndefined = response.enableSMSMFA;
    response.messageAction === "RESEND";
    response.messageAction === "SUPPRESS";
    response.desiredDeliveryMediums[0] === "EMAIL";
    response.desiredDeliveryMediums[0] === "SMS";

    triggerSource === "UserMigration_Authentication";
    triggerSource === "UserMigration_ForgotPassword";

    objectOrUndefined = request.clientMetadata;
};

const customMessage: CustomMessageTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    str = request.codeParameter;
    str = request.linkParameter;
    strOrNull = request.usernameParameter;

    strOrNull = response.smsMessage;
    strOrNull = response.emailMessage;
    strOrNull = response.emailSubject;

    triggerSource === "CustomMessage_AdminCreateUser";
    triggerSource === "CustomMessage_Authentication";
    triggerSource === "CustomMessage_ForgotPassword";
    triggerSource === "CustomMessage_ResendCode";
    triggerSource === "CustomMessage_SignUp";
    triggerSource === "CustomMessage_UpdateUserAttribute";
    triggerSource === "CustomMessage_VerifyUserAttribute";

    objectOrUndefined = request.clientMetadata;
};

const customEmailSender: CustomEmailSenderTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    str = request.type;
    strOrNull = request.code;
    obj = request.userAttributes;
    objectOrUndefined = request.clientMetadata;

    triggerSource === "CustomEmailSender_AdminCreateUser";
    triggerSource === "CustomEmailSender_VerifyUserAttribute";
    triggerSource === "CustomEmailSender_UpdateUserAttribute";
    triggerSource === "CustomEmailSender_ResendCode";
    triggerSource === "CustomEmailSender_SignUp";
    triggerSource === "CustomEmailSender_AccountTakeOverNotification";
};

const customSmsSender: CustomSMSSenderTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    str = request.type;
    strOrNull = request.code;
    obj = request.userAttributes;
    objectOrUndefined = request.clientMetadata;

    triggerSource === "CustomSMSSender_AdminCreateUser";
    triggerSource === "CustomSMSSender_VerifyUserAttribute";
    triggerSource === "CustomSMSSender_ForgotPassword";
    triggerSource === "CustomSMSSender_UpdateUserAttribute";
    triggerSource === "CustomSMSSender_ResendCode";
    triggerSource === "CustomSMSSender_SignUp";
    triggerSource === "CustomSMSSender_Authentication";
};
