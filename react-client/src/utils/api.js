export const apiCall = (url, method = "GET", apiData = {}, successCallback = ()=>{}, errorCallback= ()=>{}) => {
    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiData)
    };
    const fetchRequest = method === "GET" ? fetch(url) : fetch(url, requestOptions);
    fetchRequest.then((res) => { 
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res.json();
    }).then((data) => {
                successCallback(data);
            },
            (error) => {
                errorCallback(error);
            }
    ).catch((error) => {
        console.log("error", error);
    })
}