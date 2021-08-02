# docker-logger

A simple server that logs incoming HTTP requests. Useful for debugging nodes in
a Docker network.

## Configurations

These configurations can be given as environment variables.

- `LOG_BODY`. If request body should be logged. Not enabled by default.
- `LOG_HEADERS`. If request body should be logged. Not enabled by default.
- `LOG_RAW`. If raw body should be logged. Not enabled by default.
- `PORT`: Port server runs on. Defaults to 80.
- `SUMMARY`: If request summary should be printed at the of request. Enabled by
  default.
- `VERBOSE`: If logging should be verbose. Not enabled by default.

## Example

The supplied `docker-compose.yml` can be used to create a simple system.
