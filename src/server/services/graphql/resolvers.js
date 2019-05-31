import logger from '../../helpers/logger';

let posts = [{
  id: 2,
  text: 'Lorem ipsum',
  user: {
    avatar: '/uploads/avatar1.png',
    username: 'Test User',
  },
},
{
  id: 1,
  text: 'Lorem ipsum',
  user: {
    avatar: '/uploads/avatar2.png',
    username: 'Test User 2',
  },
}];

export default function resolver() {
  const { db } = this;
  const { Post, User } = db.models;

  const resolvers = {
    RootQuery: {
      posts(root, args, context) {
        return Post.findAll({ order: [['createdAt', 'DESC']] });
      },
    },
    RootMutation: {
      addPost(root, { post }, context) {
        logger.log({
          level: 'info',
          message: 'Post was created',
        });

        // Retrieve all users from the database
        return User.findAll().then((users) => {
          const usersRow = users[0];

          // Ubser the post into database
          return Post.create({
            ...post,
          }).then((newPost) => {
            return Promise.all([
              newPost.setUser(usersRow.id),
            ]).then(() => {
              return newPost;
            });
          });
        });
      },
    },
    Post: {
      user(post, args, context) {
        return post.getUser();
      },
    },
  };

  return resolvers;
}
