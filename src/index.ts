import { User } from './models/User';

const user = User.buildUser({ id: 4, name: 'Mary', age: 17 });

user.on('change', () => {
  console.log(user);
});

user.save();
