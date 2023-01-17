import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize.js'

const ProjectMember = sequelize.define('ProjectMember', {
  memberType: {
    type: DataTypes.STRING,
  },
})

export { ProjectMember }
