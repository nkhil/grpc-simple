import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import path from 'path'
import { ProtoGrpcType } from './proto/example'
import { ServerMessage } from './proto/example_package/ServerMessage'

const host = '0.0.0.0:8080'
const protoFilePath = path.join(__dirname, './proto/example.proto')
const packageDefinition = protoLoader.loadSync(protoFilePath)
const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType

const client = new proto.example_package.Example(
  host,
  grpc.credentials.createInsecure(),
)

function onClientReady() {
  const [, , argument] = process.argv
  if (!argument) {
    throw new Error('No argument provided.')
  }
  const parsedNumberArray: string[] | null = argument.match(/\d+/g)
  if (parsedNumberArray === null) {
    throw new Error('No number found as argument. Please provide a number')
  }

  if (Array.isArray(parsedNumberArray) && parsedNumberArray?.length > 0) {
    client.getExample(
      { clientMessage: parsedNumberArray.join('') },
      (error?: grpc.ServiceError, serverMessage?:ServerMessage) => {
        if (error) {
          console.error(error.message)
        } else if (serverMessage) {
          console.log(
            `Client: I just received a message from server: ${serverMessage.serverMessage}`
          )
        }
      }
    )
  }
}

const deadline = new Date()
deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, (error?: Error) => {
  if (error) {
    console.log(`Client connect error: ${error.message}`)
  } else {
    onClientReady()
  }
})
