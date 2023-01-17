import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize.js'

const Project = sequelize.define('Project', {
<<<<<<< Updated upstream
  id: {
=======
  projectId: {
>>>>>>> Stashed changes
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
<<<<<<< Updated upstream
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  repository: {
    type: DataTypes.STRING,
    allowNull: false,
    isUrl: true,
  },
})

=======
  userId: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  repository: {
    type: DataTypes.STRING,
    allowNull: false,
    isUrl: true,
  },
})

>>>>>>> Stashed changes
export { Project }
