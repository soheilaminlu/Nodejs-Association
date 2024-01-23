const express = require('express');
const router = express.Router()
const {isAuth} = require('../../middlewares/authentication/isAuth');
const {isGroupOwner} = require("../../middlewares/authentication/isGroupOwner")
const {listJoinRequests , processJoinRequest , removeMember , updateMember} = require('../../controllers/users/OwnerController')

// //-----GET REQUESTS
router.get('/join-requests/:groupId', isAuth ,listJoinRequests);
// //-----POST REQUESTS
router.post('/process-join-request/:requestId/:action', isAuth ,processJoinRequest);
router.post('/remove-member/:groupId/:memberId', isAuth , removeMember);
// //-----PUT REQUESTS

module.exports = router