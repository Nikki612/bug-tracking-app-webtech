import express from 'express'
import * as ProjectController from '../controllers/projectControler.js'
import { Project } from '../models/project.js'
import { User } from '../models/user.js'
import {Sequelize} from 'sequelize';

const router = express.Router()

router.post('/newProject', ProjectController.insertProjectIntoDatabase) // insert
router.get('/projects', ProjectController.getAllProjectsFromDB) // get all
router.get('/projects/:projectId', ProjectController.getProjectFromDBById) // get by id
router.put('/projects/:projectId', ProjectController.updateProjectFromDBById) // update by id
router.delete('/projects/:projectId', ProjectController.deleteProject) // delete

router.post('/addNewProject', async (req, res) => {
  try {
    // create the project
    const project = await Project.create(req.body);
    // get the users to be added to the project from the request body
    const users = await Promise.all(
      req.body.users.map(async (user) => {
        let foundUser = await User.findOne({ where: { email: user.email } })
        if (!foundUser) {
          return res.status(400).send({ message: `User with email ${user.email} does not exist.` });
        }
        return foundUser
      })
    )
    // add the users to the project
    await project.addUsers(users, { through: { memberType: 'pm' } });
    // send a response with the project and the added users
    res.send({ project, users });
  } catch (error) {
    if (error instanceof Sequelize.ValidationError) {
      const invalidAttributes = error.errors.map(({ path }) => path);
      console.log(`Validation error on attribute(s): ${invalidAttributes.join(', ')}`);
    }
    // handle any errors that may occur
    res.status(500).send(error.message)
  }
})


export { router as ProjectRouter }
