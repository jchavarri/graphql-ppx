// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var Raw = { };

function parse(value) {
  var value$1 = value.dogOrHuman;
  var typename = value$1["__typename"];
  var tmp;
  switch (typename) {
    case "Dog" :
        tmp = /* `Dog */[
          3406428,
          {
            name: value$1.name,
            barkVolume: value$1.barkVolume
          }
        ];
        break;
    case "Human" :
        tmp = /* `Human */[
          -1031617139,
          {
            name: value$1.name
          }
        ];
        break;
    default:
      tmp = /* `FutureAddedValue */[
        -31101740,
        value$1
      ];
  }
  return {
          dogOrHuman: tmp
        };
}

function serialize(value) {
  var value$1 = value.dogOrHuman;
  var variant = value$1[0];
  var dogOrHuman;
  if (variant !== -31101740) {
    if (variant >= 3406428) {
      var value$2 = value$1[1];
      var value$3 = value$2.barkVolume;
      var value$4 = value$2.name;
      dogOrHuman = {
        __typename: "Dog",
        name: value$4,
        barkVolume: value$3
      };
    } else {
      var value$5 = value$1[1].name;
      dogOrHuman = {
        __typename: "Human",
        name: value$5
      };
    }
  } else {
    dogOrHuman = value$1[1];
  }
  return {
          dogOrHuman: dogOrHuman
        };
}

function makeVariables(param) {
  
}

function makeDefaultVariables(param) {
  
}

var Z__INTERNAL = {
  graphql_module: 0
};

var Normal = {
  Raw: Raw,
  query: "query   {\ndogOrHuman  {\n__typename\n...on Dog   {\nname  \nbarkVolume  \n}\n\n...on Human   {\nname  \n}\n\n}\n\n}\n",
  parse: parse,
  serialize: serialize,
  makeVariables: makeVariables,
  makeDefaultVariables: makeDefaultVariables,
  Z__INTERNAL: Z__INTERNAL
};

var Raw$1 = { };

function parse$1(value) {
  var value$1 = value.dogOrHuman;
  var typename = value$1["__typename"];
  var tmp;
  switch (typename) {
    case "Dog" :
        tmp = /* `Dog */[
          3406428,
          {
            name: value$1.name,
            barkVolume: value$1.barkVolume
          }
        ];
        break;
    case "Human" :
        tmp = /* `Human */[
          -1031617139,
          {
            name: value$1.name
          }
        ];
        break;
    default:
      throw Caml_builtin_exceptions.not_found;
  }
  return {
          dogOrHuman: tmp
        };
}

function serialize$1(value) {
  var value$1 = value.dogOrHuman;
  var dogOrHuman;
  if (value$1[0] >= 3406428) {
    var value$2 = value$1[1];
    var value$3 = value$2.barkVolume;
    var value$4 = value$2.name;
    dogOrHuman = {
      __typename: "Dog",
      name: value$4,
      barkVolume: value$3
    };
  } else {
    var value$5 = value$1[1].name;
    dogOrHuman = {
      __typename: "Human",
      name: value$5
    };
  }
  return {
          dogOrHuman: dogOrHuman
        };
}

function makeVariables$1(param) {
  
}

function makeDefaultVariables$1(param) {
  
}

var Z__INTERNAL$1 = {
  graphql_module: 0
};

var ByConfig = {
  Raw: Raw$1,
  query: "query   {\ndogOrHuman  {\n__typename\n...on Dog   {\nname  \nbarkVolume  \n}\n\n...on Human   {\nname  \n}\n\n}\n\n}\n",
  parse: parse$1,
  serialize: serialize$1,
  makeVariables: makeVariables$1,
  makeDefaultVariables: makeDefaultVariables$1,
  Z__INTERNAL: Z__INTERNAL$1
};

var Raw$2 = { };

function parse$2(value) {
  var value$1 = value.dogOrHuman;
  var typename = value$1["__typename"];
  var tmp;
  switch (typename) {
    case "Dog" :
        tmp = /* `Dog */[
          3406428,
          {
            name: value$1.name,
            barkVolume: value$1.barkVolume
          }
        ];
        break;
    case "Human" :
        tmp = /* `Human */[
          -1031617139,
          {
            name: value$1.name
          }
        ];
        break;
    default:
      throw Caml_builtin_exceptions.not_found;
  }
  return {
          dogOrHuman: tmp
        };
}

function serialize$2(value) {
  var value$1 = value.dogOrHuman;
  var dogOrHuman;
  if (value$1[0] >= 3406428) {
    var value$2 = value$1[1];
    var value$3 = value$2.barkVolume;
    var value$4 = value$2.name;
    dogOrHuman = {
      __typename: "Dog",
      name: value$4,
      barkVolume: value$3
    };
  } else {
    var value$5 = value$1[1].name;
    dogOrHuman = {
      __typename: "Human",
      name: value$5
    };
  }
  return {
          dogOrHuman: dogOrHuman
        };
}

function makeVariables$2(param) {
  
}

function makeDefaultVariables$2(param) {
  
}

var Z__INTERNAL$2 = {
  graphql_module: 0
};

var ByDirective = {
  Raw: Raw$2,
  query: "query   {\ndogOrHuman  {\n__typename\n...on Dog   {\nname  \nbarkVolume  \n}\n\n...on Human   {\nname  \n}\n\n}\n\n}\n",
  parse: parse$2,
  serialize: serialize$2,
  makeVariables: makeVariables$2,
  makeDefaultVariables: makeDefaultVariables$2,
  Z__INTERNAL: Z__INTERNAL$2
};

exports.Normal = Normal;
exports.ByConfig = ByConfig;
exports.ByDirective = ByDirective;
/* No side effect */
