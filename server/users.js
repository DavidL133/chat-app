const users = [];

const addUser = ({ id, name, room }) => {
name = name.trim().lowerCase()
room = room.trim().lowerCase()

const exsitingUser = user.find((user) => user.room === room && user.name === name);
    if(exsitingUser) {
        return { error: 'Username already in use' }
    }

    const user = { id, name, room };
    user.push(user);
    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if(index !== -1) {
        return user.splice(index, 1)[0];
    }

}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };