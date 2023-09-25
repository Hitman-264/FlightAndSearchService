class CrudService{
    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try{
            const response = await this.repository.create(data);
            return response;
        }catch(error){
            console.log("Something went wrong in crud repo");
        }
    }
    async delete(id){
        try{
            await this.repository.delete(id);
            return true;
        }catch(error){
            console.log("Something went wrong in crud service");
        }
    }
    async get(id){
        try{
            const response = await this.repository.get(id);
            return response;
        }catch(error){
            console.log("Something went wrong in crud service");
        }
    }
    async getAll(){
        try{
            const response = await this.repository.getAll();
            return response;
        }catch(error){
            console.log("Something went wrong in crud service");
        }
    }
    async update(id,data){
        try{
            const response = await this.repository.update(id,data);
            return response;
        }catch(error){
            console.log("Something went wrong in crud service");
        }
    }

}
module.exports = CrudService