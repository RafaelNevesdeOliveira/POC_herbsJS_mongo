const {usecase, step, Ok} = require('@herbsjs/herbs')

const healthCheck = () =>() =>
    usecase('Health', {
        request: {},
        response: Boolean,

        authorize: async () => Ok(),
        // The usecase's steps
        'Check the health': step(async (ctx) => {
        ctx.ret = true
        return Ok()
        })
    })

module.exports = healthCheck 