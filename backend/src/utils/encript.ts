import bcrypt from 'bcrypt'

export const crypt = async(plainTextPassword: string) => {
    try {
        const salt = 10;
        const crypt = await bcrypt.hash(plainTextPassword, salt)
        return crypt
    } catch (error) {
        throw new Error('novo erro: ' + error)
    }
}

export const isCorrect =  async(plainTextPassword: string, dbHashedPass: string): Promise<boolean> =>  {
    try {
        return await bcrypt.compare(plainTextPassword, dbHashedPass)
    } catch (error) {
        throw new Error('novo erro: ' + error)
    }
}


