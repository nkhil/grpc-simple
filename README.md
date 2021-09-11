# Simple gRPC server

My attempts at creating grpc methods and clients.

## Setup

1. Install dependencies

```bash
npm i
```

2. Use @grpc/proto-loader to generate TS files automatically

```bash
npm run build:proto
```

## Running the app

1. Build the code

```
npm run build
```

2. Start the server

```
npm run start:server
```

3. Run the client (you will most likely need to provide arguments)

```bash
npm run start:client 23 # 23 is the argument in this example
```

