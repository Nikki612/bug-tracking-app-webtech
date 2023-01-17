import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize.js'

const ProjectMember = sequelize.define('ProjectMember', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  projectId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Projects',
      key: 'id',
    },
  },
  memberType: {
    type: DataTypes.STRING,
  },
})

export { ProjectMember }
