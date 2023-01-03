const Company = require('../../../domain/entities/company')
const { herbarium } = require('@herbsjs/herbarium')
const { Repository } = require('@herbsjs/herbs2mongo')
const connection = require('../database/connection')

class CompanyRepository extends Repository {
    constructor(injection){
        super({ 
            entity: Company,
            collection: 'company',
            ids: ['id'],  
            mongodb: connection
        })
    }

    async findAll(options = { filter, project, skip, limit, sort }) {
        return await this.find(options)            
    }
}

module.exports =
    herbarium.repositories
        .add(CompanyRepository, 'CompanyRepository')
        .metadata({ entity: Company })
        .repository