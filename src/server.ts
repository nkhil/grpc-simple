import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import path from 'path'
import { ProtoGrpcType } from './proto/example'
import { ExampleHandlers } from './proto/example_package/Example'
import { ClientMessage } from './proto/example_package/ClientMessage'
import { ServerMessage } from './proto/example_package/ServerMessage'

const host = process.env.PORT || '0.0.0.0:8080'

const serverFunctions: ExampleHandlers = {
  getExample(
    call: grpc.ServerUnaryCall<ClientMessage, ServerMessage>,
    callback: grpc.sendUnaryData<ServerMessage>,
  ) {
    if (call.request) {
      console.log(`Server: Message received! message: ${call.request.clientMessage}`)
    }
    callback(null, {
      serverMessage: `Server says hello back to message - ${call.request.clientMessage}`
    })
  }
}

function getServer(): grpc.Server {
  const filePath = path.join(__dirname, './proto/example.proto')
  const packageDefinition = protoLoader.loadSync(filePath)
  const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
  const server = new grpc.Server()
  server.addService(proto.example_package.Example.service, serverFunctions)
  return server
}

if (require.main === module) {
  const server = getServer()
  server.bindAsync(
    host,
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        console.error(`Server error: ${err.message}`)
      } else {
        console.log(`Server bound on port: ${port}`)
        server.start()
      }
    }
  )
}
