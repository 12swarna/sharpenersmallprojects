function updateLastUserActivityTime(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        console.log(`User ${user.name} last activity time ${user.lastActivityTime}`);
        resolve();
      }, 1000);
    });
  }
  
  function createPost(user, post) {
    return new Promise((resolve, reject) => {
      // Simulate creating a post by adding it to the user's list of posts
      user.posts.push(post);
      console.log(`New post created for ${user.name}: ${post}`);
      resolve();
    });
  }
  
  function deleteLastPost(user) {
    return new Promise((resolve, reject) => {
      // Simulate deleting the last post by removing it from the user's list of posts
      const deletedPost = user.posts.pop();
      console.log(`Last post deleted for ${user.name}: ${deletedPost}`);
      resolve();
    });
  }
  
  // Example usage
  const user = { name: "John", lastActivityTime: new Date(), posts: [] };
  
  Promise.all([
    createPost(user, "Hello world!"),
    updateLastUserActivityTime(user),
    createPost(user, "This is my second post"),
    updateLastUserActivityTime(user),
    deleteLastPost(user)
  ])
    .then(() => console.log(`Current posts for ${user.name}: ${user.posts}`))
    .catch((error) => console.error(error));
  