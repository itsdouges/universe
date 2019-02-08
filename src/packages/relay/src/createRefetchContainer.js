// @flow

import Relay from 'react-relay';

import type {
  $RelayProps,
  GeneratedNodeMap,
  GraphQLTaggedNode,
} from './types.flow';

type Environment = $FlowFixMe;

type RefetchOptions = {
  force?: boolean,
};

type Disposable = {
  dispose(): void,
};

export type RelayProp = {|
  +environment: Environment,
  // TODO: this is true only for refetch container:
  +refetch: (
    refetchVariables: Object | ((fragmentVariables: Object) => Object),
    renderVariables: ?Object,
    callback: ?(error: ?Error) => void,
    options?: RefetchOptions,
  ) => Disposable,
|};

export default function createRefetchContainer<
  TComponent: React$ComponentType<any>,
>(
  Component: TComponent,
  fragmentSpec: GeneratedNodeMap,
  refetchQuery: GraphQLTaggedNode,
): React$ComponentType<
  $RelayProps<React$ElementConfig<TComponent>, RelayProp>,
> {
  return Relay.createRefetchContainer(Component, fragmentSpec, refetchQuery);
}
