import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'user',
  password: 'password',
  database: 'cashforce_db',
  models: ['./../models'],
});

export default sequelize;