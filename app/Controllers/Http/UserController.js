'use strict'

const User = use('App/Models/User'); //Importar modelo

class UserController {

    async login({ request, auth }){
        const {email, password} = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }

    async store({ request }){
        console.log(request);
        const {username, email, password, age, curp} = request.all();
        const user = await User.create({
            username,
            email,
            password,
            age,
            curp
        });
        //return user;
        return this.login(...arguments);
    };

    async index({auth}){
        //const user = await auth.getUser(); //Verificar que esté logeado (devuelve usuario)
        await auth.check(); //Verificar que esté logeado
        return await User.all();
    }

    async delete({params, auth}){
        await auth.check(); //Verificar que esté logeado
        const user = await User.findOrFail(params.id);
        await user.delete();
        return ['Usuario elimnado correctamente', 200]
    }

    async update({params, auth, request}){
        const {age} = request.all();
        await auth.check(); 
        const user = await User.findOrFail(params.id)
        user.age = age;
        await user.save();
        //return user;
        return ['Usuario actualizado correctamente', 200]
    }
}

module.exports = UserController
