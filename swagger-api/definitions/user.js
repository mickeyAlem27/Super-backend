/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - phoneNo
 *         - email
 *         - password
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the user
 *         firstName:
 *           type: string
 *           description: The user's first name
 *           example: John
 *         lastName:
 *           type: string
 *           description: The user's last name
 *           example: Doe
 *         phoneNo:
 *           type: string
 *           description: The user's phone number
 *           example: "+1234567890"
 *         email:
 *           type: string
 *           description: The user's email
 *           example: john.doe@example.com
 *         password:
 *           type: string
 *           description: The user's password (hashed, not returned in responses)
 *         otp:
 *           type: string
 *           description: One-time password for verification
 *         isVerified:
 *           type: boolean
 *           description: Whether the user account is verified
 *           default: false
 *         isDeleted:
 *           type: boolean
 *           description: Whether the user account is soft deleted
 *           default: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the user was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the user was last updated
 *       example:
 *         _id: 507f1f77bcf86cd799439011
 *         firstName: John
 *         lastName: Doe
 *         phoneNo: "+1234567890"
 *         email: john.doe@example.com
 *         isVerified: false
 *         isDeleted: false
 *         createdAt: 2022-01-01T00:00:00.000Z
 *         updatedAt: 2022-01-01T00:00:00.000Z
 */