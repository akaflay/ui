export const get = () => {
        return fetch("http://nepalthinktank.com/app/students/")
            .then(response=>response.json());
}

export const create = (name, count) => {
const payload ={"firstName":name.firstName,"lastName":name.lastName};
return fetch("http://nepalthinktank.com/app/students/",
{
method :"POST",
body: JSON.stringify(payload),
headers :{"Content-Type":"application/json"}
}).then((response)=>response.json());
}
export const remove = (id = undefined) => {
    return fetch(`http://nepalthinktank.com/app/students/${id}`,
    {
    method :"DELETE",
    headers :{"Content-Type":"application/json"}
    }).then((response)=>response);
}