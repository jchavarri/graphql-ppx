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
    type t = {. "simpleSubscription": t_simpleSubscription}
    and t_simpleSubscription
    and t_simpleSubscription_Human = {. "name": string}
    and t_simpleSubscription_Dog = {. "name": string};
  };
  let query = "subscription   {\nsimpleSubscription  {\n__typename\n...on Dog   {\nname  \n}\n\n...on Human   {\nname  \n}\n\n}\n\n}\n";
  type t = {. "simpleSubscription": t_simpleSubscription}
  and t_simpleSubscription = [
    | `FutureAddedValue(Js.Json.t)
    | `Dog(t_simpleSubscription_Dog)
    | `Human(t_simpleSubscription_Human)
  ]
  and t_simpleSubscription_Human = {. "name": string}
  and t_simpleSubscription_Dog = {. "name": string};
  let parse: Js.Json.t => t =
    value => {
      [@metaloc loc]
      let value = value |> Js.Json.decodeObject |> Js.Option.getExn;
      {

        "simpleSubscription": {
          let value =
            Js.Dict.unsafeGet(Obj.magic(value), "simpleSubscription");

          switch (Js.Json.decodeObject(value)) {

          | None =>
            Js.Exn.raiseError(
              "graphql_ppx: "
              ++ "Expected union "
              ++ "DogOrHuman"
              ++ " to be an object, got "
              ++ Js.Json.stringify(value),
            )

          | Some(typename_obj) =>
            switch (Js.Dict.get(typename_obj, "__typename")) {

            | None =>
              Js.Exn.raiseError(
                "graphql_ppx: "
                ++ "Union "
                ++ "DogOrHuman"
                ++ " is missing the __typename field",
              )

            | Some(typename) =>
              switch (Js.Json.decodeString(typename)) {

              | None =>
                Js.Exn.raiseError(
                  "graphql_ppx: "
                  ++ "Union "
                  ++ "DogOrHuman"
                  ++ " has a __typename field that is not a string",
                )

              | Some(typename) =>
                switch (typename) {
                | "Dog" =>
                  `Dog(
                    {
                      [@metaloc loc]
                      let value =
                        value |> Js.Json.decodeObject |> Js.Option.getExn;
                      {

                        "name": {
                          let value =
                            Js.Dict.unsafeGet(Obj.magic(value), "name");

                          (Obj.magic(value): string);
                        },
                      };
                    },
                  )
                | "Human" =>
                  `Human(
                    {
                      [@metaloc loc]
                      let value =
                        value |> Js.Json.decodeObject |> Js.Option.getExn;
                      {

                        "name": {
                          let value =
                            Js.Dict.unsafeGet(Obj.magic(value), "name");

                          (Obj.magic(value): string);
                        },
                      };
                    },
                  )
                | typename => `FutureAddedValue(value)
                }
              }
            }
          };
        },
      };
    };
  let makeVar = (~f, ()) => f(Js.Json.null);
  let definition = (parse, query, makeVar);
};
