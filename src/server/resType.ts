export interface resType {
    code: number,
    msg: string,
    data: {
        code: number,
        message: string, 
        data: {
            userid: number,
            username: string,
            name: string,
            password: string,
            gender: number,
            level: number,
            status: number,
            phone: number,
            email: string
        }
    }
}