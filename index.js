const client = require("./classes/client");
const command = require("./classes/command");
const manager = require("./classes/manager");

const CommandOptionTypes = {
  SUB_COMMAND: 1,
  SUB_COMMAND_GROUP: 2,
  STRING: 3,
  INTEGER: 4,
  BOOLEAN: 5,
  USER: 6,
  CHANNEL: 7,
  ROLE: 8,
  MENTIONABLE: 9,
  NUMBER: 10,
}

module.exports = {
  ...client,
  ...command,
  ...manager,
  CommandOptionTypes
};
