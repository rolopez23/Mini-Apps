function samePlayer(array) {
  if(array[0] === '') {
    return false;
  }
  return array.every((value, index, array)=>value === array[0])
}

export {
  samePlayer
}