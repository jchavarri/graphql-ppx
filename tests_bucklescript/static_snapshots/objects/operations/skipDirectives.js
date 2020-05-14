// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


var Raw = { };

var query = "query ($var: Boolean!)  {\nv1: variousScalars  {\nnullableString @skip(if: $var) \nstring @skip(if: $var) \n}\n\nv2: variousScalars  {\nnullableString @include(if: $var) \nstring @include(if: $var) \n}\n\n}\n";

function parse(value) {
  var value$1 = value.v2;
  var value$2 = value$1.string;
  var string = (value$2 == null) ? undefined : value$2;
  var value$3 = value$1.nullableString;
  var nullableString = (value$3 == null) ? undefined : value$3;
  var v2 = {
    nullableString: nullableString,
    string: string
  };
  var value$4 = value.v1;
  var value$5 = value$4.string;
  var string$1 = (value$5 == null) ? undefined : value$5;
  var value$6 = value$4.nullableString;
  var nullableString$1 = (value$6 == null) ? undefined : value$6;
  var v1 = {
    nullableString: nullableString$1,
    string: string$1
  };
  return {
          v1: v1,
          v2: v2
        };
}

function serialize(value) {
  var value$1 = value.v2;
  var value$2 = value$1.string;
  var string = value$2 !== undefined ? value$2 : null;
  var value$3 = value$1.nullableString;
  var nullableString = value$3 !== undefined ? value$3 : null;
  var v2 = {
    nullableString: nullableString,
    string: string
  };
  var value$4 = value.v1;
  var value$5 = value$4.string;
  var string$1 = value$5 !== undefined ? value$5 : null;
  var value$6 = value$4.nullableString;
  var nullableString$1 = value$6 !== undefined ? value$6 : null;
  var v1 = {
    nullableString: nullableString$1,
    string: string$1
  };
  return {
          v1: v1,
          v2: v2
        };
}

function serializeVariables(inp) {
  return {
          var: inp.var
        };
}

function makeVariables($$var, param) {
  return serializeVariables({
              var: $$var
            });
}

var definition = /* tuple */[
  parse,
  query,
  serialize
];

var MyQuery = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  definition: definition
};

exports.MyQuery = MyQuery;
/* No side effect */
