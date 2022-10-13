// // 1. XML HTTP Request

// function userList() {
//     function pageRender(){
//         let response = this.responseText;
//         let responseData = JSON.parse(response);
//         console.log(responseData);

//         let ul = document.createElement ('ul');
//         const fragment = document.createDocumentFragment();

//         responseData.data.forEach((element) => {
//             let li = document.createElement ('li');
//             li.innerText = `${element.name} ${element.year}`;
//             fragment.appendChild(li);
//         });
        
//         ul.appendChild(fragment);
//         document.getElementById('api').appendChild(ul);
//     }

//     let requist = new XMLHttpRequest();
//     requist.addEventListener ('load', pageRender);
//     requist.open('GET', 'https://reqres.in/api/unknown');
//     requist.send();

// }

// userList();


// Fetch

fetch ('https://reqres.in/api/unknown', {
    method: 'GET'
})
.then(function(response) {
    if (response.status !=200){
        throw response.status;
    }
    return response.json();
})
.then(function(responseInfo){
    let ul = document.createElement ('ul');
    const fragment = document.createDocumentFragment();
    responseInfo.data.forEach((element) => {
        let li = document.createElement ('li');
         li.innerText = `${element.color} ${element.pantone_value}`;
         fragment.appendChild(li);
        });
    
    ul.appendChild(fragment);
    document.getElementById('api').appendChild(ul);
})
.catch(function (error){
    if (error == 404) {
        let p = document.createElement('p');
        p.innerText = 'Page not found';
        p.style.color = 'red';
        document.getElementById('api').appendChild(p);
    }
 else if (error == 500){
    let p = document.createElement('p');
    p.innerText = 'Server Error';
    p.style.color = 'red';
    document.getElementById('api').appendChild(p);
 }
})