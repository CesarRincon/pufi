export const SUBSCRIBE = 'SUBSCRIBE';


const subscribe = (payload) => {
        return{
            type: SUBSCRIBE,
            payload
        }
}

export default subscribe;