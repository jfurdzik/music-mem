
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PracticeNote
 * 
 */
export type PracticeNote = $Result.DefaultSelection<Prisma.$PracticeNotePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PracticeNotes
 * const practiceNotes = await prisma.practiceNote.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PracticeNotes
   * const practiceNotes = await prisma.practiceNote.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.practiceNote`: Exposes CRUD operations for the **PracticeNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PracticeNotes
    * const practiceNotes = await prisma.practiceNote.findMany()
    * ```
    */
  get practiceNote(): Prisma.PracticeNoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PracticeNote: 'PracticeNote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "practiceNote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PracticeNote: {
        payload: Prisma.$PracticeNotePayload<ExtArgs>
        fields: Prisma.PracticeNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PracticeNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PracticeNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeNotePayload>
          }
          findFirst: {
            args: Prisma.PracticeNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PracticeNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeNotePayload>
          }
          findMany: {
            args: Prisma.PracticeNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeNotePayload>[]
          }
          create: {
            args: Prisma.PracticeNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeNotePayload>
          }
          createMany: {
            args: Prisma.PracticeNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PracticeNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeNotePayload>[]
          }
          delete: {
            args: Prisma.PracticeNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeNotePayload>
          }
          update: {
            args: Prisma.PracticeNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeNotePayload>
          }
          deleteMany: {
            args: Prisma.PracticeNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PracticeNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PracticeNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeNotePayload>[]
          }
          upsert: {
            args: Prisma.PracticeNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PracticeNotePayload>
          }
          aggregate: {
            args: Prisma.PracticeNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePracticeNote>
          }
          groupBy: {
            args: Prisma.PracticeNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PracticeNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PracticeNoteCountArgs<ExtArgs>
            result: $Utils.Optional<PracticeNoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    practiceNote?: PracticeNoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model PracticeNote
   */

  export type AggregatePracticeNote = {
    _count: PracticeNoteCountAggregateOutputType | null
    _avg: PracticeNoteAvgAggregateOutputType | null
    _sum: PracticeNoteSumAggregateOutputType | null
    _min: PracticeNoteMinAggregateOutputType | null
    _max: PracticeNoteMaxAggregateOutputType | null
  }

  export type PracticeNoteAvgAggregateOutputType = {
    id: number | null
  }

  export type PracticeNoteSumAggregateOutputType = {
    id: number | null
  }

  export type PracticeNoteMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
  }

  export type PracticeNoteMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
  }

  export type PracticeNoteCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    _all: number
  }


  export type PracticeNoteAvgAggregateInputType = {
    id?: true
  }

  export type PracticeNoteSumAggregateInputType = {
    id?: true
  }

  export type PracticeNoteMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
  }

  export type PracticeNoteMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
  }

  export type PracticeNoteCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type PracticeNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PracticeNote to aggregate.
     */
    where?: PracticeNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeNotes to fetch.
     */
    orderBy?: PracticeNoteOrderByWithRelationInput | PracticeNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PracticeNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PracticeNotes
    **/
    _count?: true | PracticeNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PracticeNoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PracticeNoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PracticeNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PracticeNoteMaxAggregateInputType
  }

  export type GetPracticeNoteAggregateType<T extends PracticeNoteAggregateArgs> = {
        [P in keyof T & keyof AggregatePracticeNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePracticeNote[P]>
      : GetScalarType<T[P], AggregatePracticeNote[P]>
  }




  export type PracticeNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PracticeNoteWhereInput
    orderBy?: PracticeNoteOrderByWithAggregationInput | PracticeNoteOrderByWithAggregationInput[]
    by: PracticeNoteScalarFieldEnum[] | PracticeNoteScalarFieldEnum
    having?: PracticeNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PracticeNoteCountAggregateInputType | true
    _avg?: PracticeNoteAvgAggregateInputType
    _sum?: PracticeNoteSumAggregateInputType
    _min?: PracticeNoteMinAggregateInputType
    _max?: PracticeNoteMaxAggregateInputType
  }

  export type PracticeNoteGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    _count: PracticeNoteCountAggregateOutputType | null
    _avg: PracticeNoteAvgAggregateOutputType | null
    _sum: PracticeNoteSumAggregateOutputType | null
    _min: PracticeNoteMinAggregateOutputType | null
    _max: PracticeNoteMaxAggregateOutputType | null
  }

  type GetPracticeNoteGroupByPayload<T extends PracticeNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PracticeNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PracticeNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PracticeNoteGroupByOutputType[P]>
            : GetScalarType<T[P], PracticeNoteGroupByOutputType[P]>
        }
      >
    >


  export type PracticeNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["practiceNote"]>

  export type PracticeNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["practiceNote"]>

  export type PracticeNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["practiceNote"]>

  export type PracticeNoteSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type PracticeNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt", ExtArgs["result"]["practiceNote"]>

  export type $PracticeNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PracticeNote"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
    }, ExtArgs["result"]["practiceNote"]>
    composites: {}
  }

  type PracticeNoteGetPayload<S extends boolean | null | undefined | PracticeNoteDefaultArgs> = $Result.GetResult<Prisma.$PracticeNotePayload, S>

  type PracticeNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PracticeNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PracticeNoteCountAggregateInputType | true
    }

  export interface PracticeNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PracticeNote'], meta: { name: 'PracticeNote' } }
    /**
     * Find zero or one PracticeNote that matches the filter.
     * @param {PracticeNoteFindUniqueArgs} args - Arguments to find a PracticeNote
     * @example
     * // Get one PracticeNote
     * const practiceNote = await prisma.practiceNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PracticeNoteFindUniqueArgs>(args: SelectSubset<T, PracticeNoteFindUniqueArgs<ExtArgs>>): Prisma__PracticeNoteClient<$Result.GetResult<Prisma.$PracticeNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PracticeNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PracticeNoteFindUniqueOrThrowArgs} args - Arguments to find a PracticeNote
     * @example
     * // Get one PracticeNote
     * const practiceNote = await prisma.practiceNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PracticeNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, PracticeNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PracticeNoteClient<$Result.GetResult<Prisma.$PracticeNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PracticeNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeNoteFindFirstArgs} args - Arguments to find a PracticeNote
     * @example
     * // Get one PracticeNote
     * const practiceNote = await prisma.practiceNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PracticeNoteFindFirstArgs>(args?: SelectSubset<T, PracticeNoteFindFirstArgs<ExtArgs>>): Prisma__PracticeNoteClient<$Result.GetResult<Prisma.$PracticeNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PracticeNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeNoteFindFirstOrThrowArgs} args - Arguments to find a PracticeNote
     * @example
     * // Get one PracticeNote
     * const practiceNote = await prisma.practiceNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PracticeNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, PracticeNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PracticeNoteClient<$Result.GetResult<Prisma.$PracticeNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PracticeNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PracticeNotes
     * const practiceNotes = await prisma.practiceNote.findMany()
     * 
     * // Get first 10 PracticeNotes
     * const practiceNotes = await prisma.practiceNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const practiceNoteWithIdOnly = await prisma.practiceNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PracticeNoteFindManyArgs>(args?: SelectSubset<T, PracticeNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PracticeNote.
     * @param {PracticeNoteCreateArgs} args - Arguments to create a PracticeNote.
     * @example
     * // Create one PracticeNote
     * const PracticeNote = await prisma.practiceNote.create({
     *   data: {
     *     // ... data to create a PracticeNote
     *   }
     * })
     * 
     */
    create<T extends PracticeNoteCreateArgs>(args: SelectSubset<T, PracticeNoteCreateArgs<ExtArgs>>): Prisma__PracticeNoteClient<$Result.GetResult<Prisma.$PracticeNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PracticeNotes.
     * @param {PracticeNoteCreateManyArgs} args - Arguments to create many PracticeNotes.
     * @example
     * // Create many PracticeNotes
     * const practiceNote = await prisma.practiceNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PracticeNoteCreateManyArgs>(args?: SelectSubset<T, PracticeNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PracticeNotes and returns the data saved in the database.
     * @param {PracticeNoteCreateManyAndReturnArgs} args - Arguments to create many PracticeNotes.
     * @example
     * // Create many PracticeNotes
     * const practiceNote = await prisma.practiceNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PracticeNotes and only return the `id`
     * const practiceNoteWithIdOnly = await prisma.practiceNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PracticeNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, PracticeNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PracticeNote.
     * @param {PracticeNoteDeleteArgs} args - Arguments to delete one PracticeNote.
     * @example
     * // Delete one PracticeNote
     * const PracticeNote = await prisma.practiceNote.delete({
     *   where: {
     *     // ... filter to delete one PracticeNote
     *   }
     * })
     * 
     */
    delete<T extends PracticeNoteDeleteArgs>(args: SelectSubset<T, PracticeNoteDeleteArgs<ExtArgs>>): Prisma__PracticeNoteClient<$Result.GetResult<Prisma.$PracticeNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PracticeNote.
     * @param {PracticeNoteUpdateArgs} args - Arguments to update one PracticeNote.
     * @example
     * // Update one PracticeNote
     * const practiceNote = await prisma.practiceNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PracticeNoteUpdateArgs>(args: SelectSubset<T, PracticeNoteUpdateArgs<ExtArgs>>): Prisma__PracticeNoteClient<$Result.GetResult<Prisma.$PracticeNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PracticeNotes.
     * @param {PracticeNoteDeleteManyArgs} args - Arguments to filter PracticeNotes to delete.
     * @example
     * // Delete a few PracticeNotes
     * const { count } = await prisma.practiceNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PracticeNoteDeleteManyArgs>(args?: SelectSubset<T, PracticeNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PracticeNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PracticeNotes
     * const practiceNote = await prisma.practiceNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PracticeNoteUpdateManyArgs>(args: SelectSubset<T, PracticeNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PracticeNotes and returns the data updated in the database.
     * @param {PracticeNoteUpdateManyAndReturnArgs} args - Arguments to update many PracticeNotes.
     * @example
     * // Update many PracticeNotes
     * const practiceNote = await prisma.practiceNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PracticeNotes and only return the `id`
     * const practiceNoteWithIdOnly = await prisma.practiceNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PracticeNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, PracticeNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PracticeNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PracticeNote.
     * @param {PracticeNoteUpsertArgs} args - Arguments to update or create a PracticeNote.
     * @example
     * // Update or create a PracticeNote
     * const practiceNote = await prisma.practiceNote.upsert({
     *   create: {
     *     // ... data to create a PracticeNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PracticeNote we want to update
     *   }
     * })
     */
    upsert<T extends PracticeNoteUpsertArgs>(args: SelectSubset<T, PracticeNoteUpsertArgs<ExtArgs>>): Prisma__PracticeNoteClient<$Result.GetResult<Prisma.$PracticeNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PracticeNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeNoteCountArgs} args - Arguments to filter PracticeNotes to count.
     * @example
     * // Count the number of PracticeNotes
     * const count = await prisma.practiceNote.count({
     *   where: {
     *     // ... the filter for the PracticeNotes we want to count
     *   }
     * })
    **/
    count<T extends PracticeNoteCountArgs>(
      args?: Subset<T, PracticeNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PracticeNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PracticeNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PracticeNoteAggregateArgs>(args: Subset<T, PracticeNoteAggregateArgs>): Prisma.PrismaPromise<GetPracticeNoteAggregateType<T>>

    /**
     * Group by PracticeNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PracticeNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PracticeNoteGroupByArgs['orderBy'] }
        : { orderBy?: PracticeNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PracticeNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPracticeNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PracticeNote model
   */
  readonly fields: PracticeNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PracticeNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PracticeNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PracticeNote model
   */
  interface PracticeNoteFieldRefs {
    readonly id: FieldRef<"PracticeNote", 'Int'>
    readonly content: FieldRef<"PracticeNote", 'String'>
    readonly createdAt: FieldRef<"PracticeNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PracticeNote findUnique
   */
  export type PracticeNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeNote
     */
    select?: PracticeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeNote
     */
    omit?: PracticeNoteOmit<ExtArgs> | null
    /**
     * Filter, which PracticeNote to fetch.
     */
    where: PracticeNoteWhereUniqueInput
  }

  /**
   * PracticeNote findUniqueOrThrow
   */
  export type PracticeNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeNote
     */
    select?: PracticeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeNote
     */
    omit?: PracticeNoteOmit<ExtArgs> | null
    /**
     * Filter, which PracticeNote to fetch.
     */
    where: PracticeNoteWhereUniqueInput
  }

  /**
   * PracticeNote findFirst
   */
  export type PracticeNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeNote
     */
    select?: PracticeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeNote
     */
    omit?: PracticeNoteOmit<ExtArgs> | null
    /**
     * Filter, which PracticeNote to fetch.
     */
    where?: PracticeNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeNotes to fetch.
     */
    orderBy?: PracticeNoteOrderByWithRelationInput | PracticeNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PracticeNotes.
     */
    cursor?: PracticeNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PracticeNotes.
     */
    distinct?: PracticeNoteScalarFieldEnum | PracticeNoteScalarFieldEnum[]
  }

  /**
   * PracticeNote findFirstOrThrow
   */
  export type PracticeNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeNote
     */
    select?: PracticeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeNote
     */
    omit?: PracticeNoteOmit<ExtArgs> | null
    /**
     * Filter, which PracticeNote to fetch.
     */
    where?: PracticeNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeNotes to fetch.
     */
    orderBy?: PracticeNoteOrderByWithRelationInput | PracticeNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PracticeNotes.
     */
    cursor?: PracticeNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PracticeNotes.
     */
    distinct?: PracticeNoteScalarFieldEnum | PracticeNoteScalarFieldEnum[]
  }

  /**
   * PracticeNote findMany
   */
  export type PracticeNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeNote
     */
    select?: PracticeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeNote
     */
    omit?: PracticeNoteOmit<ExtArgs> | null
    /**
     * Filter, which PracticeNotes to fetch.
     */
    where?: PracticeNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PracticeNotes to fetch.
     */
    orderBy?: PracticeNoteOrderByWithRelationInput | PracticeNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PracticeNotes.
     */
    cursor?: PracticeNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PracticeNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PracticeNotes.
     */
    skip?: number
    distinct?: PracticeNoteScalarFieldEnum | PracticeNoteScalarFieldEnum[]
  }

  /**
   * PracticeNote create
   */
  export type PracticeNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeNote
     */
    select?: PracticeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeNote
     */
    omit?: PracticeNoteOmit<ExtArgs> | null
    /**
     * The data needed to create a PracticeNote.
     */
    data: XOR<PracticeNoteCreateInput, PracticeNoteUncheckedCreateInput>
  }

  /**
   * PracticeNote createMany
   */
  export type PracticeNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PracticeNotes.
     */
    data: PracticeNoteCreateManyInput | PracticeNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PracticeNote createManyAndReturn
   */
  export type PracticeNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeNote
     */
    select?: PracticeNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeNote
     */
    omit?: PracticeNoteOmit<ExtArgs> | null
    /**
     * The data used to create many PracticeNotes.
     */
    data: PracticeNoteCreateManyInput | PracticeNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PracticeNote update
   */
  export type PracticeNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeNote
     */
    select?: PracticeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeNote
     */
    omit?: PracticeNoteOmit<ExtArgs> | null
    /**
     * The data needed to update a PracticeNote.
     */
    data: XOR<PracticeNoteUpdateInput, PracticeNoteUncheckedUpdateInput>
    /**
     * Choose, which PracticeNote to update.
     */
    where: PracticeNoteWhereUniqueInput
  }

  /**
   * PracticeNote updateMany
   */
  export type PracticeNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PracticeNotes.
     */
    data: XOR<PracticeNoteUpdateManyMutationInput, PracticeNoteUncheckedUpdateManyInput>
    /**
     * Filter which PracticeNotes to update
     */
    where?: PracticeNoteWhereInput
    /**
     * Limit how many PracticeNotes to update.
     */
    limit?: number
  }

  /**
   * PracticeNote updateManyAndReturn
   */
  export type PracticeNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeNote
     */
    select?: PracticeNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeNote
     */
    omit?: PracticeNoteOmit<ExtArgs> | null
    /**
     * The data used to update PracticeNotes.
     */
    data: XOR<PracticeNoteUpdateManyMutationInput, PracticeNoteUncheckedUpdateManyInput>
    /**
     * Filter which PracticeNotes to update
     */
    where?: PracticeNoteWhereInput
    /**
     * Limit how many PracticeNotes to update.
     */
    limit?: number
  }

  /**
   * PracticeNote upsert
   */
  export type PracticeNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeNote
     */
    select?: PracticeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeNote
     */
    omit?: PracticeNoteOmit<ExtArgs> | null
    /**
     * The filter to search for the PracticeNote to update in case it exists.
     */
    where: PracticeNoteWhereUniqueInput
    /**
     * In case the PracticeNote found by the `where` argument doesn't exist, create a new PracticeNote with this data.
     */
    create: XOR<PracticeNoteCreateInput, PracticeNoteUncheckedCreateInput>
    /**
     * In case the PracticeNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PracticeNoteUpdateInput, PracticeNoteUncheckedUpdateInput>
  }

  /**
   * PracticeNote delete
   */
  export type PracticeNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeNote
     */
    select?: PracticeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeNote
     */
    omit?: PracticeNoteOmit<ExtArgs> | null
    /**
     * Filter which PracticeNote to delete.
     */
    where: PracticeNoteWhereUniqueInput
  }

  /**
   * PracticeNote deleteMany
   */
  export type PracticeNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PracticeNotes to delete
     */
    where?: PracticeNoteWhereInput
    /**
     * Limit how many PracticeNotes to delete.
     */
    limit?: number
  }

  /**
   * PracticeNote without action
   */
  export type PracticeNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeNote
     */
    select?: PracticeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PracticeNote
     */
    omit?: PracticeNoteOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PracticeNoteScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type PracticeNoteScalarFieldEnum = (typeof PracticeNoteScalarFieldEnum)[keyof typeof PracticeNoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PracticeNoteWhereInput = {
    AND?: PracticeNoteWhereInput | PracticeNoteWhereInput[]
    OR?: PracticeNoteWhereInput[]
    NOT?: PracticeNoteWhereInput | PracticeNoteWhereInput[]
    id?: IntFilter<"PracticeNote"> | number
    content?: StringFilter<"PracticeNote"> | string
    createdAt?: DateTimeFilter<"PracticeNote"> | Date | string
  }

  export type PracticeNoteOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type PracticeNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PracticeNoteWhereInput | PracticeNoteWhereInput[]
    OR?: PracticeNoteWhereInput[]
    NOT?: PracticeNoteWhereInput | PracticeNoteWhereInput[]
    content?: StringFilter<"PracticeNote"> | string
    createdAt?: DateTimeFilter<"PracticeNote"> | Date | string
  }, "id">

  export type PracticeNoteOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: PracticeNoteCountOrderByAggregateInput
    _avg?: PracticeNoteAvgOrderByAggregateInput
    _max?: PracticeNoteMaxOrderByAggregateInput
    _min?: PracticeNoteMinOrderByAggregateInput
    _sum?: PracticeNoteSumOrderByAggregateInput
  }

  export type PracticeNoteScalarWhereWithAggregatesInput = {
    AND?: PracticeNoteScalarWhereWithAggregatesInput | PracticeNoteScalarWhereWithAggregatesInput[]
    OR?: PracticeNoteScalarWhereWithAggregatesInput[]
    NOT?: PracticeNoteScalarWhereWithAggregatesInput | PracticeNoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PracticeNote"> | number
    content?: StringWithAggregatesFilter<"PracticeNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PracticeNote"> | Date | string
  }

  export type PracticeNoteCreateInput = {
    content: string
    createdAt?: Date | string
  }

  export type PracticeNoteUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
  }

  export type PracticeNoteUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeNoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeNoteCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
  }

  export type PracticeNoteUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PracticeNoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PracticeNoteCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type PracticeNoteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PracticeNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type PracticeNoteMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type PracticeNoteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}