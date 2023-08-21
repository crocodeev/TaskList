
//singleton

class API {

    private static instance: API

    private constructor () {
    }

    public static getInstance(): API {
        if (!API.instance) {
            API.instance = new API();
        }

        return API.instance;
    }

    async getTasks(limits: number, offset: number){

     
        console.log(limits);
        console.log(offset);
        

        const responce = (await fetch('/api/tasks?' + new URLSearchParams({
            limits: limits.toString(),
            offset: offset.toString()
        })))

        const data = await responce.json()

        return data
    }

    async createTask(){

    }

    async updateTask(){

    }
}

export default API