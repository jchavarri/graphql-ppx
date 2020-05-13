[@ocaml.ppx.context
  {
    tool_name: "migrate_driver",
    include_dirs: [],
    load_path: [],
    open_modules: [],
    for_package: None,
    debug: false,
    use_threads: false,
    use_vmthreads: false,
    recursive_types: false,
    principal: false,
    transparent_modules: false,
    unboxed_types: false,
    unsafe_string: false,
    cookies: [],
  }
];
module MyQuery = {
  module Raw = {
    type t_v1 = {
      __typename: string,
      nullableString: Js.Nullable.t(string),
      string: Js.Nullable.t(string),
    };
    type t_v2 = {
      __typename: string,
      nullableString: Js.Nullable.t(string),
      string: Js.Nullable.t(string),
    };
    type t = {
      v1: t_v1,
      v2: t_v2,
    };
    type t_variables = {var: bool};
  };
  let query = "query ($var: Boolean!)  {\nv1: variousScalars  {\n__typename  \nnullableString @skip(if: $var) \nstring @skip(if: $var) \n}\n\nv2: variousScalars  {\n__typename  \nnullableString @include(if: $var) \nstring @include(if: $var) \n}\n\n}\n";
  type t_v1 = {
    __typename: string,
    nullableString: option(string),
    string: option(string),
  };
  type t_v2 = {
    __typename: string,
    nullableString: option(string),
    string: option(string),
  };
  type t = {
    v1: t_v1,
    v2: t_v2,
  };
  type t_variables = {var: bool};
  let parse: Raw.t => t =
    (value) => (
      {
        v1: {
          let value = (value: Raw.t).v1;
          (
            {
              __typename: {
                let value = (value: Raw.t_v1).__typename;
                value;
              },
              nullableString: {
                let value = (value: Raw.t_v1).nullableString;
                switch (Js.toOption(value)) {
                | Some(value) => Some(value)
                | None => None
                };
              },
              string: {
                let value = (value: Raw.t_v1).string;
                switch (Js.toOption(value)) {
                | Some(value) => Some(value)
                | None => None
                };
              },
            }: t_v1
          );
        },
        v2: {
          let value = (value: Raw.t).v2;
          (
            {
              __typename: {
                let value = (value: Raw.t_v2).__typename;
                value;
              },
              nullableString: {
                let value = (value: Raw.t_v2).nullableString;
                switch (Js.toOption(value)) {
                | Some(value) => Some(value)
                | None => None
                };
              },
              string: {
                let value = (value: Raw.t_v2).string;
                switch (Js.toOption(value)) {
                | Some(value) => Some(value)
                | None => None
                };
              },
            }: t_v2
          );
        },
      }: t
    );
  let serialize: t => Raw.t =
    (value) => (
      {
        let v2 = {
          let value = (value: t).v2;
          (
            {
              let string = {
                let value = (value: t_v2).string;
                switch (value) {
                | Some(value) => Js.Nullable.return(value)
                | None => Js.Nullable.null
                };
              }
              and nullableString = {
                let value = (value: t_v2).nullableString;
                switch (value) {
                | Some(value) => Js.Nullable.return(value)
                | None => Js.Nullable.null
                };
              }
              and __typename = {
                let value = (value: t_v2).__typename;
                value;
              };
              {__typename, nullableString, string};
            }: Raw.t_v2
          );
        }
        and v1 = {
          let value = (value: t).v1;
          (
            {
              let string = {
                let value = (value: t_v1).string;
                switch (value) {
                | Some(value) => Js.Nullable.return(value)
                | None => Js.Nullable.null
                };
              }
              and nullableString = {
                let value = (value: t_v1).nullableString;
                switch (value) {
                | Some(value) => Js.Nullable.return(value)
                | None => Js.Nullable.null
                };
              }
              and __typename = {
                let value = (value: t_v1).__typename;
                value;
              };
              {__typename, nullableString, string};
            }: Raw.t_v1
          );
        };
        {v1, v2};
      }: Raw.t
    );
  let serializeVariables: t_variables => Raw.t_variables =
    inp => {var: (a => a)((inp: t_variables).var)};
  let makeVariables = (~var, ()) =>
    serializeVariables({var: var}: t_variables);
  let definition = (parse, query, serialize);
  module Z__INTERNAL = {
    type root = t;
    type nonrec graphql_module;
    /****--- GraphQL PPX Module ---**

The contents of this module are automatically generated by `graphql-ppx`.
The following is simply an overview of the most important variables and types that you can access from this module.

```
module MyQuery {
  // This is the stringified representation of your query, which gets sent to the server.
  let query: string;

  // This is the main type of the result you will get back.
  // You can hover above the identifier key (e.g. query or mutation) to see the fully generated type for your module.
  type t;

  // This function turns your raw result from the server into the reason/ocaml representation of that result.
  // Depending on your graphql client library, this process should happen automatically for you.
  let parse: Raw.t => t;

  // This function will prepare your data for sending it back to the server.
  // Depending on your graphql client library, this process should happen automatically for you.
  let serialize: t => Raw.t;

  // The definition tuple is primarily used to interact with client libraries.
  // The types are equivalent to: (parse, query, serialize).
  // Your client library will use these values to provide the properly parsed / serialized data for you.
  let definition: (
    Raw.t => t,
    string,
    t => Raw.t
  );

  // This is the representation of your raw result coming from the server.
  // It should not be necessary to access the types inside for normal use cases.
  module Raw: { type t; };
}
```*/
    let graphql_module: graphql_module = Obj.magic(0);
  };
};