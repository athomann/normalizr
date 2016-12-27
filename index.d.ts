declare namespace schema {
  export class Array {
    constructor(definition: any, bar?: any)
  }

  export class Entity {
    constructor(name: string, foo?: any, bar?: any)
  }

  export class Object {
    constructor(name: string, foo?: any, bar?: any)
  }

  export class Union {
    constructor(name: string, foo?: any, bar?: any)
  }

  export class Values {
    constructor(name: string, foo?: any, bar?: any)
  }
}

export type Schema =
  schema.Array |
  schema.Entity |
  schema.Object |
  schema.Union |
  schema.Values;

export function normalize(
  data: any,
  schema: Schema
): {
  entities: any,
  result: any
};
