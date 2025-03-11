const sessionIDToUserMap = new Map();

function setUser(id, user) {
  sessionIDToUserMap.set(id, user);
}

function getUser(id) {
  sessionIDToUserMap.set(id);
}

module.exports = {
  setUser,
  getUser,
};
