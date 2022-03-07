/**
 * @generated SignedSource<<a7888370f45d74f8ab48d80fbb335e35>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./node_modules/.bin/relay-compiler
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type AnalyticsMostSoldProductsPageLayoutQuery$variables = {||};
export type AnalyticsMostSoldProductsPageLayoutQuery$data = {|
  +analytics: {|
    +mostSoldProducts: $ReadOnlyArray<{|
      +productName: string,
      +productUnits: number,
    |}>,
  |},
|};
export type AnalyticsMostSoldProductsPageLayoutQuery = {|
  variables: AnalyticsMostSoldProductsPageLayoutQuery$variables,
  response: AnalyticsMostSoldProductsPageLayoutQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AnalyticsQuery",
    "kind": "LinkedField",
    "name": "analytics",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AnalyticsSoldProductInfo",
        "kind": "LinkedField",
        "name": "mostSoldProducts",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "productName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "productUnits",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AnalyticsMostSoldProductsPageLayoutQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AnalyticsMostSoldProductsPageLayoutQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3febc9205ef575e29bdf4360a270dd8b",
    "id": null,
    "metadata": {},
    "name": "AnalyticsMostSoldProductsPageLayoutQuery",
    "operationKind": "query",
    "text": "query AnalyticsMostSoldProductsPageLayoutQuery {\n  analytics {\n    mostSoldProducts {\n      productName\n      productUnits\n    }\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "42868c957ed37e75a15526d0e937acdb";
}

module.exports = ((node/*: any*/)/*: Query<
  AnalyticsMostSoldProductsPageLayoutQuery$variables,
  AnalyticsMostSoldProductsPageLayoutQuery$data,
>*/);