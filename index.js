
function distanceFromHqInBlocks(location) {
    // calculate distance in blocks
    return Math.abs(location - 42);
  }
  function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    // 1 block = 264 feet
    return blocks * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start) * 264;
    return distance;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // free sample
    } else if (distance > 400 && distance <= 2000) {
      // 2 cents per foot after the first 400 feet
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // fixed fare for distance over 2000 feet
    } else {
      // Do not allow rides over 2500 feet
      return 'cannot travel that far';
    }
  }
  