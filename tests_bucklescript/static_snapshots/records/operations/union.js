// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


var Raw = { };

var query = "query   {\ndogOrHuman  {\n__typename\n...on Dog   {\nname  \nbarkVolume  \n}\n\n...on Human   {\nname  \n}\n\n}\n\n}\n";

function parse(value) {
  var value$1 = value.dogOrHuman;
  var typename = value$1["__typename"];
  var dogOrHuman;
  switch (typename) {
    case "Dog" :
        var value$2 = value$1.barkVolume;
        var value$3 = value$1.name;
        dogOrHuman = /* `Dog */[
          3406428,
          {
            name: value$3,
            barkVolume: value$2
          }
        ];
        break;
    case "Human" :
        var value$4 = value$1.name;
        dogOrHuman = /* `Human */[
          -1031617139,
          {
            name: value$4
          }
        ];
        break;
    default:
      dogOrHuman = /* `FutureAddedValue */[
        -31101740,
        value$1
      ];
  }
  return {
          dogOrHuman: dogOrHuman
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
  definition: definition
};

var Raw$1 = { };

var query$1 = "query   {\ndogOrHuman  {\n__typename\n...on Dog   {\nname  \nbarkVolume  \n}\n\n...on Human   {\nname  \n}\n\n}\n\n}\n";

function parse$1(value) {
  var value$1 = value.dogOrHuman;
  var typename = value$1["__typename"];
  var dogOrHuman;
  switch (typename) {
    case "Dog" :
        var value$2 = value$1.barkVolume;
        var value$3 = value$1.name;
        dogOrHuman = /* `Dog */[
          3406428,
          {
            name: value$3,
            barkVolume: value$2
          }
        ];
        break;
    case "Human" :
        var value$4 = value$1.name;
        dogOrHuman = /* `Human */[
          -1031617139,
          {
            name: value$4
          }
        ];
        break;
    default:
      dogOrHuman = /* `FutureAddedValue */[
        -31101740,
        value$1
      ];
  }
  return {
          dogOrHuman: dogOrHuman
        };
}

function serialize$1(value) {
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

var definition$1 = /* tuple */[
  parse$1,
  query$1,
  serialize$1
];

var MyQueryNoError = {
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  definition: definition$1
};

exports.MyQuery = MyQuery;
exports.MyQueryNoError = MyQueryNoError;
/* No side effect */
