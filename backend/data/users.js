import bcrypt from 'bcryptjs'

const users=[
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Dhiraj So',
        email: 'Dhiraj@example.com',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: 'Suraj So',
        email: 'Suraj@example.com',
        password: bcrypt.hashSync('123456',10)
    }
]

export default users