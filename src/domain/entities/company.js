const { entity, id, field } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')

const Company =
        entity('Company', {
          id: id(String),
          name: field(String, { validation: { presence: true, length: { minimum: 4 } } }),
        })

module.exports =
  herbarium.entities
    .add(Company, 'Company')
    .entity
