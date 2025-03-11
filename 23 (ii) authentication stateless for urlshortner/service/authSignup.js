const uniqueIDToUserMap = new Map();

function setUser2(id,user){
    uniqueIDToUserMap.set(id,user);
}


function getUser2(id){
    uniqueIDToUserMap.set(id);
}

module.exports ={
    setUser2,getUser2
};