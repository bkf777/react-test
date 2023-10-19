/* */
const initState = {
        count: 0,
        loginOrRegister:true,
}
type actionType = {
        type: string
} & any
//一个reduce需要有两个参数，第一个是state，第二个是action
//action是一个对象，里面有一个type属性，用来区分不同的action
//reducer需要返回一个新的state，不能改变原来的state
export const reducer = (state = initState, action :actionType) => {
        switch (action.type) {
                case 'loginState':
                        return { ...state, loginOrRegister: action.loginState }
                case 'minus':
                        return { ...state, count: state.count - 1 }
                default:
                        return state
        }
}

