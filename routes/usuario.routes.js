const { Router } = require('express');
const { check } = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js')

const Role = require('../models/Role.js')
const { getUsers,
        postUsers,
        deleteUsers,
        putUsers,
        patchUsers } = require('../controllers/usuario.controllers.js');

        
const router = Router();

router.get('/', getUsers);
router.post('/', [
    check('nombre', 'Name invalid').not().isEmpty(),
    check('nombre', 'Password invalid, 6 characters minimum').isLength({min: 6}),
    check('email', 'Email invalid').isEmail(),
    /* check('rol', 'Role invalid').isIn(['ADMIN', 'USER']), */
    check('rol').custom(async(rol='')=>{
        const roleExists = await Role.findOne({rol});
        if(!roleExists){
            throw new Error(`Role ${rol} not found on the database`);
        }
    }),
    validateDocuments
],postUsers);
router.delete('/', deleteUsers);
router.put('/', putUsers);
router.patch('/', patchUsers);

module.exports = router;