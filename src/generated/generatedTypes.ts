import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewPropertyToUser?: Maybe<User>;
  createNewParcel?: Maybe<Parcel>;
  createNewProperty?: Maybe<Property>;
  createNewUser?: Maybe<User>;
};


export type MutationAddNewPropertyToUserArgs = {
  propertyId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationCreateNewParcelArgs = {
  parcel: ParcelInput;
};


export type MutationCreateNewPropertyArgs = {
  property: PropertyInput;
};


export type MutationCreateNewUserArgs = {
  user: UserInput;
};

export type Parcel = {
  __typename?: 'Parcel';
  _id?: Maybe<Scalars['String']['output']>;
  vertices?: Maybe<Array<Vertex>>;
};

export type ParcelInput = {
  propertyId: Scalars['String']['input'];
  vertices: Array<VertexInput>;
};

export type Property = {
  __typename?: 'Property';
  _id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parcelIds?: Maybe<Array<Scalars['String']['output']>>;
};

export type PropertyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  parcelIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Query = {
  __typename?: 'Query';
  parcels?: Maybe<Array<Parcel>>;
  properties?: Maybe<Array<Property>>;
  user?: Maybe<Array<User>>;
};


export type QueryParcelsArgs = {
  propertyId: Scalars['String']['input'];
};


export type QueryUserArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  memberProperties?: Maybe<Array<Property>>;
};

export type UserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Vertex = {
  __typename?: 'Vertex';
  latitude: Scalars['String']['output'];
  longitude: Scalars['String']['output'];
};

export type VertexInput = {
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Parcel: ResolverTypeWrapper<Parcel>;
  ParcelInput: ParcelInput;
  Property: ResolverTypeWrapper<Property>;
  PropertyInput: PropertyInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  Vertex: ResolverTypeWrapper<Vertex>;
  VertexInput: VertexInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Mutation: {};
  Parcel: Parcel;
  ParcelInput: ParcelInput;
  Property: Property;
  PropertyInput: PropertyInput;
  Query: {};
  String: Scalars['String']['output'];
  User: User;
  UserInput: UserInput;
  Vertex: Vertex;
  VertexInput: VertexInput;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addNewPropertyToUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationAddNewPropertyToUserArgs, 'propertyId' | 'userId'>>;
  createNewParcel?: Resolver<Maybe<ResolversTypes['Parcel']>, ParentType, ContextType, RequireFields<MutationCreateNewParcelArgs, 'parcel'>>;
  createNewProperty?: Resolver<Maybe<ResolversTypes['Property']>, ParentType, ContextType, RequireFields<MutationCreateNewPropertyArgs, 'property'>>;
  createNewUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateNewUserArgs, 'user'>>;
}>;

export type ParcelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Parcel'] = ResolversParentTypes['Parcel']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vertices?: Resolver<Maybe<Array<ResolversTypes['Vertex']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Property'] = ResolversParentTypes['Property']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parcelIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  parcels?: Resolver<Maybe<Array<ResolversTypes['Parcel']>>, ParentType, ContextType, RequireFields<QueryParcelsArgs, 'propertyId'>>;
  properties?: Resolver<Maybe<Array<ResolversTypes['Property']>>, ParentType, ContextType>;
  user?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, Partial<QueryUserArgs>>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  memberProperties?: Resolver<Maybe<Array<ResolversTypes['Property']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VertexResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vertex'] = ResolversParentTypes['Vertex']> = ResolversObject<{
  latitude?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Parcel?: ParcelResolvers<ContextType>;
  Property?: PropertyResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Vertex?: VertexResolvers<ContextType>;
}>;

