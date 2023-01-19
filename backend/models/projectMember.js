import { DataTypes } from 'sequelize'
import { sequelize } from '../sequelize.js'
import { Project } from './Project.js'
import { User } from './User.js'

const ProjectMember = sequelize.define('ProjectMember', {
  memberType: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
  freezeTableName: true
});

ProjectMember.belongsTo(Project, { foreignKey: 'projectId' });
ProjectMember.belongsTo(User, { foreignKey: 'userId' });

export { ProjectMember }