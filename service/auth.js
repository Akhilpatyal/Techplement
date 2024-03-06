const sessionid=new Map();

function setUser(id,user){
    sessionid.set(id,user)
}
function getUser(id){
   return sessionid.get(id)
}

module.exports={
    setUser,
    getUser,
}