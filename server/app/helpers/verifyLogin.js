import bcrypt from 'bcrypt';

const verifyPassword = async (password, rightPassword) => {
    return await bcrypt.compare(password, rightPassword);
}

export default verifyPassword;