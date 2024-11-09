
export const parseConfiguration = (path) =>{
    return{
        parse: () => {
            return new Promise((resolve,reject) =>{
                fetch(path)
                .then((response)=> response.json())
                .then((json=> resolve(json)))
                .catch((error)=> reject(error));
            });
        }
    };
};