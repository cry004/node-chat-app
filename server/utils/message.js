var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};
var generateLocationMessage = (from, latitude, longitude);
module.exports = { generateMessage };
