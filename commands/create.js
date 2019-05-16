const mongoose = require('mongoose');

const Raid = mongoose.model('raid');

exports.run = (client, message, args) => {
  const [raidName, raidTime, raidBoss, guests] = args;

  Raid.findOne({ name: raidName })
    .then(existingRaid => {
      if (!existingRaid) {
        new Raid({ name: raidName }).save();
        message.channel.send(`${raidName} has been created`).catch(console.error);
      } else {
        message.channel.send(`${raidName} already exists`).catch(console.error);
      }
    });
};
