const buyMovieTickets = async () => {
    console.log('person 1: show tickets');
    console.log('person 2: show tickets');
  
    const wifeBringingTickets = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('tickets bringing');
      }, 3000);
    });
  
    console.log('husband: we should go in');
    console.log('wife: I am hungry');
  
    const popcorn = await new Promise((resolve, reject) => {
      resolve(`${wifeBringingTickets}: popcoren`);
    });
  
    console.log('husband: go now');
    console.log('wife: need some butter');
  
    const butteredPopcorn = await new Promise((resolve, reject) => {
      resolve(`${popcorn} butter`);
    });
  
    console.log('wife: i need colddrink');
    console.log(butteredPopcorn);
  
    console.log('person 4: show tickets');
    console.log('person 5: show tickets');
  };
  
  buyMovieTickets();
  