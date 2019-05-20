const mongoose = require('mongoose');
const moment = require('moment');

const {getPokemonIdByAny} = require('../utils/pokemonUtils');

const Raid = mongoose.model('raid');

exports.run = (client, message, args) => {
  const [raidName] = args;
  Raid.findOne({name: raidName}).then(existingRaid => {
    if (!existingRaid) {
      const raid = createRaidFromArgs(args, message.author);
      const errorMessage = validatedRaid(raid);
      if (errorMessage) {
        message.channel.send(errorMessage).catch(console.error);
      } else {
        addRaidToDatabase(raid, message);
      }
    } else {
      message.channel.send(`${raidName} already exists`).catch(console.error);
    }
  });
};

const createRaidFromArgs = (args, author) => {
  const [raidName, raidTime] = args;
  if (raidTime) {
    return createFullRaid(args, author);
  }
  return {name: raidName, user: {id: author.id, username: author.username}};
};

const createFullRaid = (args, author) => {
  const [name, raidTime, pokemon, guests] = args;
  const formatedTime = raidTime.replace(/,|;|\./g, ':');
  const time = moment(formatedTime, 'H:mm').toISOString();
  const pokemonId = getPokemonIdByAny(pokemon);
  const user = {id: author.id, username: author.username};
  return {name, time, pokemonId, guests, user};
};

const validatedRaid = raid => {
  if (!raid.time) {
    return 'Could not understand that time';
  }

  if (!raid.pokemonId) {
    return 'Could not understand that pokemon';
  }
  return '';
};

const addRaidToDatabase = (raid, message) => {
  new Raid(raid)
    .save()
    .then(savedRaid => {
      message.channel.send(`${savedRaid.name} has been created`);
    })
    .catch(console.error);
};
