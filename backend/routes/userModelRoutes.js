    import express from 'express';
    import { createModel,  getModel, updateModel,deleteModel } from '../controllers/userModelController.js';
    import { authenticateToken } from '../controllers/UserController.js';
    const router = express.Router();

    // Create a new user model
    router.post('/userModel',authenticateToken, createModel);

    // Get a specific user model by userId
    router.get('/userModel/:userId', getModel);

    router.put('/userModel/:userId', updateModel);
    
    router.delete('/delete-model/:id', deleteModel);
    
    // Delete a model by its unique model ID
    // router.delete('/userModel/:id', deleteModel);

    export default router;
