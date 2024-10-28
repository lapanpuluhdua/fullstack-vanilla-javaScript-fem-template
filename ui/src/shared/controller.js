/**
 * @typedef {import('./viewBase.js').default} View
 */
export default class Controller{
    /** @type {View} */
    #view
    /**
     * 
     * @param {view: View} deps 
     */
    constructor({view}){
        this.#view = view
    }

    static init(deps){
        const controller = new Controller(deps)
        controller.#init()
        return controller
    }

    #isValid(data){
        return data.name && data.age && data.email
    }

    #onSubmit({name,age,email}){
        if(!this.#isValid({name,age,email}))
        {
            this.#view.notify({msg:'Please fill in all the fields.'})
            return
        }
        
        this.#view.addRow({name,age,email})
        this.#view.resetForm()
    }

    #init(){
        this.#view.configureFormSubmit(this.#onSubmit.bind(this))
        this.#view.configureFormClear()
        const initData = [{
            name:'Hisham Bin Kamarun Baharin',
            age:42,
            email:'lapanpupuhdua@gmail.com'
        }]       
        this.#view.render(initData)
    }
}