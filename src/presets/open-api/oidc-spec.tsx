/* eslint-disable max-len */
/* eslint-disable quotes */
// import { JsonToAst } from '../../../engine/src/plugins/_base/ast/json'
import React from 'react';
import {
  Components,
  OpenAPISpec,
} from '../../../engine/src/plugins/open-api/core/open-api';

import OpenApiComponent from '../../../engine/src/plugins/open-api/theme/index';

const oidcComps: Components = {
  responses: {
    invalidRequest: {
      description: 'Invalid Request',
      content: {
        'application/json': {
          examples: {
            example1: {
              value: {
                statusCode: 400,
                message: 'invalid_request',
              },
            },
          },
          schema: {
            type: 'object',
            required: ['statusCode', 'message'],
            properties: {
              statusCode: {
                type: 'number',
                enum: [400],
              },
              message: {
                type: 'string',
                enum: ['invalid_request'],
              },
            },
          },
        },
      },
    },
  },
  headers: {
    location302: {
      description: 'The `redirect_url` passed to the request',
      schema: {
        type: 'string',
        format: 'uri',
        'x-ow-redirect': '{$request.query.redirect_uri}',
      },
    },
  },
  securitySchemes: {
    accessToken: {
      type: 'http',
      description: "Bearer auth using the individual user's `Access Token`",
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
    basicAuth: {
      type: 'http',
      description:
        "Basic auth using the OIDC Client's `clientId` and `clientSecret` as the `Username` and `Password` respectively",
      scheme: 'basic',
    },
  },
  schemas: {
    jwtToken: {
      description: 'A standard, encoded and signed JWT token',
      type: 'string',
      pattern: '^(?:[\\w-]+\\.){2}[\\w-]+$',
    },
    idToken: {
      $ref: '#/components/schemas/jwtToken',
    },
    accessToken: {
      description:
        'An Opaque Access Token, used for accessing different APIs on behalf of the user',
      type: 'string',
    },
    refreshToken: {
      description: 'The `Refresh Token` used to obtain an `Access Token`',
      type: 'string',
      pattern: '^(?:[\\w-]+\\.){2}[\\w-]+$',
    },
    clientId: {
      type: 'string',
      pattern: '\\w+',
    },
    clientSecret: {
      type: 'string',
      pattern: '\\w+',
    },
    authorizationCode: {
      description: 'The `Authorization Code` used to obtain an `Access Token`',
      type: 'string',
    },
    scope: {
      type: 'string',
      pattern:
        '^(?:openid|profile|email|subscriptions|offline_access)(/:\\+(?:openid|profile|email|subscriptions|offline_access))$',
    },
  },
  parameters: {
    clientId: {
      name: 'client_id',
      in: 'query',
      required: true,
      description: 'The client ID of the App using the OIDC',
      schema: {
        $ref: '#/components/schemas/clientId',
      },
    },
    idTokenHint: {
      name: 'id_token_hint',
      schema: {
        $ref: '#/components/schemas/idToken',
      },
      in: 'query',
      description: 'The Id Token',
      required: true,
    },
  },
};

const oidcSchema: OpenAPISpec<typeof oidcComps> = {
  openapi: '3.1.0',
  'x-ow-version': '0.0.1',
  info: {
    title: 'Overwolf OIDC',
    description:
      'Overwolf OIDC Service, used for authenticating against the Overwolf accounts system within external Applications/Websites',
    version: '2.0.0',
  },
  components: oidcComps,
  servers: [
    {
      description: 'Overwolf OIDC Server',
      url: 'https://id.overwolf.com/oidc',
    },
  ],
  paths: {
    '/auth': {
      get: {
        tags: ['client'],
        description: 'Initializes the OIDC flow for the user',
        externalDocs: {
          description: 'External link',
          url: 'https://overwolf.github.io',
        },
        parameters: [
          {
            $ref: '#/components/parameters/clientId',
          },
          {
            name: 'redirect_uri',
            in: 'query',
            required: true,
            description:
              'The URI to redirect the user to once they finish the flow (must be pre-configured in the Overwolf backend)',
            schema: {
              type: 'string',
              format: 'uri',
            },
          },
          {
            name: 'scope',
            in: 'query',
            required: true,
            description:
              'The scopes requested by the application (`openid` MUST be requested for the flow to properly work). **Values must be seperated by a `+` sign**',
            schema: {
              $ref: '#/components/schemas/scope',
            },
          },
          {
            name: 'code_challenge',
            in: 'query',
            required: true,
            description: 'The PKCE Code Challenge value',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'code_challenge_method',
            in: 'query',
            required: true,
            description:
              'The PKCE Code Challenge method (currently, only `S256` is supported)',
            schema: {
              type: 'string',
              enum: ['S256'],
            },
          },
          {
            name: 'response_type',
            in: 'query',
            required: true,
            description:
              'The response type for the flow (currently, only `code` is supported)',
            schema: {
              type: 'string',
              enum: ['code'],
            },
          },
          {
            name: 'prompt',
            in: 'query',
            description:
              'Whether or not the user should be guaranteed to be prompted to grant consent (required when using the `offline_access` scope)',
            schema: {
              type: 'string',
              enum: ['consent'],
            },
          },
        ],
        callbacks: {
          redirect: {
            '{$request.body#/redirect_uri}': {
              get: {
                description: 'test',
                parameters: [
                  {
                    name: 'code',
                    in: 'query',
                    description:
                      'The `authorization_code` granted to the client on a succesful authentication',
                    schema: {
                      type: 'string',
                      oneOf: [
                        {
                          $ref: '#/components/schemas/authorizationCode',
                        },
                      ],
                    },
                  },
                  {
                    name: 'error',
                    in: 'query',
                    description:
                      'An `error` given if the authentication failed',
                    schema: { type: 'string' },
                  },
                  {
                    name: 'iss',
                    in: 'query',
                    required: true,
                    description: 'The `Issuing Authority`',
                    schema: {
                      type: 'string',
                      enum: ['https://id.overwolf.com'],
                    },
                  },
                ],
              },
            },
          },
        },
        responses: {
          '302': {
            description:
              'The flow was properly initialized (but may or may not have failed), redirecting',
            headers: {
              location: { $ref: '#/components/headers/location302' },
            },
          },
          '400': {
            $ref: '#/components/responses/invalidRequest',
          },
        },
      },
    },
    '/me': {
      get: {
        security: [
          {
            basicAuth: [],
          },
        ],
        tags: ['client'],
        description:
          'Obtains information about the user from their Access Token',
        externalDocs: {
          description: 'External link',
          url: 'https://overwolf.github.io',
        },
        responses: {
          '200': {
            description: 'Test',
          },
          '401': {
            description: 'Invalid Token',
            content: {
              'application/json': {
                examples: {
                  example1: {
                    value: {
                      error: 'invalid_token',
                      error_description: 'invalid token provided',
                    },
                  },
                },
                schema: {
                  type: 'object',
                  required: ['error', 'error_description'],
                  properties: {
                    error: {
                      type: 'string',
                      enum: ['invalid_token'],
                    },
                    error_description: {
                      type: 'string',
                      enum: ['invalid token provided'],
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal server error',
            content: {
              'application/json': {
                examples: {
                  example1: {
                    value: {
                      statusCode: 500,
                      message: 'Internal Server Error',
                    },
                  },
                },
                schema: {
                  type: 'object',
                  required: ['statusCode', 'message'],
                  properties: {
                    statusCode: {
                      type: 'number',
                      enum: [500],
                    },
                    message: {
                      type: 'string',
                      enum: ['Internal Server Error'],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/token/revocation': {
      // post: {
      //   requestBody: {},
      // },
    },
    '/token': {
      post: {
        tags: ['server'],
        description:
          'Uses an Authorization Code/Refresh Token in order to generate an access token',
        requestBody: {
          required: true,
          content: {
            'application/x-www-form-urlencoded': {
              schema: {
                type: 'object',
                oneOf: [
                  {
                    type: 'object',
                    required: [
                      'client_id',
                      'client_secret',
                      'grant_type',
                      'redirect_uri',
                      'code_verifier',
                      'code',
                    ],
                    properties: {
                      client_id: {
                        $ref: '#/components/schemas/clientId',
                      },
                      client_secret: {
                        $ref: '#/components/schemas/clientSecret',
                      },
                      grant_type: {
                        description:
                          'The grant being used to generate a new set of tokens',
                        type: 'string',
                        enum: ['authorization_code'],
                      },
                      code: {
                        $ref: '#/components/schemas/authorizationCode',
                      },
                      code_verifier: {
                        description: 'The PKCE Code Verifier value',
                        type: 'string',
                      },
                      redirect_uri: {
                        description:
                          "The redirect URI used in the `/auth` endpoint, used as part of the OIDC Client's authentication",
                        type: 'string',
                      },
                    },
                  },
                  {
                    type: 'object',
                    required: [
                      'client_id',
                      'client_secret',
                      'grant_type',
                      'redirect_uri',
                      'refresh_token',
                    ],
                    properties: {
                      client_id: {
                        $ref: '#/components/schemas/clientId',
                      },
                      client_secret: {
                        $ref: '#/components/schemas/clientSecret',
                      },
                      grant_type: {
                        description:
                          'The grant being used to generate a new set of tokens',
                        type: 'string',
                        enum: ['refresh_token'],
                      },
                      redirect_uri: {
                        description:
                          'The URI to redirect to with the tokens on a valid request',
                        type: 'string',
                      },
                      refresh_token: {
                        $ref: '#/components/schemas/refreshToken',
                      },
                    },
                  },
                ],
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Ok',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    access_token: {
                      $ref: '#/components/schemas/accessToken',
                    },
                    expires_in: {
                      type: 'number',
                      description:
                        'Time to live (in seconds) of the returned `Access Token`',
                      examples: [3600],
                    },
                    id_token: {
                      $ref: '#/components/schemas/idToken',
                    },
                    scope: {
                      $ref: '#/components/schemas/scope',
                    },
                    token_type: {
                      type: 'string',
                      description:
                        'The type of the token returned (in this case, only a `Bearer` token is supported)',
                      enum: ['Bearer'],
                    },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Invalid Request',
            content: {
              'application/json': {
                examples: {
                  example1: {
                    value: {
                      statusCode: 400,
                      message: 'invalid_request',
                    },
                  },
                },
                schema: {
                  type: 'object',
                  oneOf: [
                    {
                      type: 'object',
                      description: "Fired when the Request's format is invalid",
                      required: ['error', 'error_description'],
                      properties: {
                        error: {
                          type: 'string',
                          enum: ['invalid_request'],
                        },
                        error_description: {
                          type: 'string',
                          examples: ["missing required parameter 'code'"],
                        },
                      },
                    },
                    {
                      type: 'object',
                      description:
                        'Fired when an invalid `Authorization Code` is given',
                      required: ['error', 'error_description'],
                      properties: {
                        error: {
                          type: 'string',
                          enum: ['invalid_grant'],
                        },
                        error_description: {
                          type: 'string',
                          enum: ['grant request is invalid'],
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
    '/token/introspection': {
      // post: {
      //   tags: ['server'],
      //   security: [
      //     {
      //       accessToken: [],
      //     },
      //   ],
      //   description: 'Used to get information from an id token',
      //   requestBody: {
      //     content: {
      //       'application/x-www-form-urlencoded': {
      //         schema: {
      //           type: 'object',
      //           parameters: {
      //             token: {
      //               $ref: '#/components/schemas/accessToken',
      //             },
      //             token_type_hint: {
      //               type: 'string',
      //               enum: ['access_token'],
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      // },
    },
    '/session/end': {
      post: {
        tags: ['client'],
        description:
          "Uses a user's `Id Token` to log them out from their local session (**must be opened in the users' browser where they logged in to properly erase the session!**)",
        parameters: [
          {
            $ref: '#/components/parameters/idTokenHint',
          },
          {
            name: 'post_logout_redirect_uri',
            in: 'query',
            description:
              'The URI to redirect to once the logout is completed (Must be registered ahead of time)',
            schema: {
              type: 'string',
              format: 'uri',
            },
          },
        ],
        responses: {
          '302': {
            description:
              'The logout operation was properly invoked, redirecting',
            headers: {
              location: { $ref: '#/components/headers/location302' },
            },
          },
        },
      },
    },
  },
};

const OIDCSpec = ({ children }: React.PropsWithChildren<any>) => {
  return <OpenApiComponent data={oidcSchema}>{children}</OpenApiComponent>;
};

export default OIDCSpec;
