/* eslint-disable max-len */
/* eslint-disable quotes */
// import { JsonToAst } from '../../../engine/src/plugins/_base/ast/json'
import React from 'react';
import {
  Components,
  OpenAPISpec,
} from '../../../engine/src/plugins/open-api/core/open-api';

import OpenApiComponent from '../../../engine/src/plugins/open-api/theme/index';

const storeComps: Components = {
  schemas: {
    utm_param: {
      description: 'A UTM parameter',
      type: 'string',
      pattern: '^[\\w-]+$',
    },
    app_id: {
      description: 'The `app-id` of the relevant App',
      type: 'string',
      pattern: '^[a-z]{40}$',
    },
    channel: {
      description: 'A release channel',
      type: 'string',
      pattern: '^[\\w-]+$',
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
  parameters: {
    app_id: {
      name: 'ExtensionId',
      schema: {
        $ref: '#/components/schemas/app_id',
      },
      in: 'query',
      description: 'The App Id',
      required: true,
    },
  },
};

const oidcSchema: OpenAPISpec<typeof storeComps> = {
  openapi: '3.1.0',
  'x-ow-version': '0.0.1',
  info: {
    title: 'Overwolf Store API',
    description:
      'Overwolf App store API, used for accessing certain store functionality programmatically',
    version: '1.0.0',
  },
  components: storeComps,
  servers: [
    {
      description: 'Overwolf Downloads',
      url: 'https://download.overwolf.com',
    },
  ],
  paths: {
    '/install/Download': {
      get: {
        tags: ['file'],
        description:
          "Creates and returns an App's installer (**should only be opened in a browser, attempting to scrape this endpoint programatically may lead to unexpected results**)",
        // externalDocs: {
        //   description: 'External link',
        //   url: 'https://overwolf.github.io',
        // },
        parameters: [
          {
            $ref: '#/components/parameters/app_id',
          },
          {
            name: 'Channel',
            in: 'query',
            // required: true,
            description:
              'The Overwolf release channel to use (defaults to production)',
            schema: {
              $ref: '#/components/schemas/channel',
            },
          },
          {
            name: 'app_channel',
            in: 'query',
            // required: true,
            description:
              'The App release channel to use (defaults to production)',
            schema: {
              $ref: '#/components/schemas/channel',
            },
          },
          {
            name: 'utm_source',
            in: 'query',
            // required: true,
            description: "The installer's UTM `Source` parameter",
            schema: {
              $ref: '#/components/schemas/utm_param',
            },
          },
          {
            name: 'utm_content',
            in: 'query',
            // required: true,
            description: "The installer's UTM `Content` parameter",
            schema: {
              $ref: '#/components/schemas/utm_param',
            },
          },
          {
            name: 'utm_campaign',
            in: 'query',
            // required: true,
            description: "The installer's UTM `Campaign` parameter",
            schema: {
              $ref: '#/components/schemas/utm_param',
            },
          },
          {
            name: 'utm_term',
            in: 'query',
            // required: true,
            description: "The installer's UTM `Term` parameter",
            schema: {
              $ref: '#/components/schemas/utm_param',
            },
          },
          {
            name: 'utm_medium',
            in: 'query',
            // required: true,
            description: "The installer's UTM `Medium` parameter",
            schema: {
              $ref: '#/components/schemas/utm_param',
            },
          },
          {
            name: 'extra',
            in: 'query',
            // required: true,
            description: "The installer's UTM `Extra` parameter",
            schema: {
              $ref: '#/components/schemas/utm_param',
            },
          },
          // {
          //   name: 'lang',
          //   in: 'query',
          //   // required: true,
          //   description: "The installer's UTM `Extra` parameter",
          //   schema: {
          //     // TODO - add lang schema
          //   },
          // },
        ],
        responses: {
          '200': {
            description:
              'The resulting installer (Passing in invalid parameters will still download a blank Overwolf Client installer!)',
            content: {
              'application/octet-stream': {
                schema: {
                  type: 'string',
                  format: 'binary',
                },
              },
            },
          },
        },
      },
    },
  },
};

const StoreSpec = ({ children }: React.PropsWithChildren<any>) => {
  return <OpenApiComponent data={oidcSchema}>{children}</OpenApiComponent>;
};

export default StoreSpec;
