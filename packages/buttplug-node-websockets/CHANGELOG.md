# 0.11.0 - 2019/03/09

## Features

- Updated node-websocket libraries to work with Buttplug.js > 0.10.0
- Add ability to use Device Configuration files, eliminating need to
  change code to add devices to protocols we already support.
- Updated dependencies
- Updated websocket tests to mock-socket 8

## Bugfixes

- Fixed lots of unhandled promises, turning them into exception
  throws. Also now have a linter rule to make sure this doesn't happen
  again.

## Other

- Moved CI to Azure Pipelines
- Moved project to being a monorepo for all buttplug-js core library,
  device subtype manager, connector, and server CLI projects

# 0.0.3 - 2018/02/11

- Migrate to buttplug 0.6.0

# 0.0.2 - 2018/01/24

- Update dependencies
- Add tests

# 0.0.1 - 2017/12/04

- Initial release
- Add Server Implementation and Client Connector
