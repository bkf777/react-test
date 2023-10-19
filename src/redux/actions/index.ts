//派发的action
//action返回一个对象，里面有一个type属性，用来区分不同的action
export const add = () => {
        return {
                type: 'add'
        }
    }