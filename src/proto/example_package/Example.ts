// Original file: src/proto/example.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ClientMessage as _example_package_ClientMessage, ClientMessage__Output as _example_package_ClientMessage__Output } from '../example_package/ClientMessage';
import type { ServerMessage as _example_package_ServerMessage, ServerMessage__Output as _example_package_ServerMessage__Output } from '../example_package/ServerMessage';

export interface ExampleClient extends grpc.Client {
  getExample(argument: _example_package_ClientMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  getExample(argument: _example_package_ClientMessage, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  getExample(argument: _example_package_ClientMessage, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  getExample(argument: _example_package_ClientMessage, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  getExample(argument: _example_package_ClientMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  getExample(argument: _example_package_ClientMessage, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  getExample(argument: _example_package_ClientMessage, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  getExample(argument: _example_package_ClientMessage, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  
}

export interface ExampleHandlers extends grpc.UntypedServiceImplementation {
  getExample: grpc.handleUnaryCall<_example_package_ClientMessage__Output, _example_package_ServerMessage>;
  
}

export interface ExampleDefinition extends grpc.ServiceDefinition {
  getExample: MethodDefinition<_example_package_ClientMessage, _example_package_ServerMessage, _example_package_ClientMessage__Output, _example_package_ServerMessage__Output>
}
