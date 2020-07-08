









pic1("images/cse-department.png").then(function(url){
    console.log(url + ' displayed!')
}).catch(function(url){
    console.log(url + ' failed to display!')
}).then(function(){
    return pic2("images/cse-department.png")
}).then(function(url){
    console.log(url + ' displayed!')
}).catch(function(url){
    console.log(url + ' failed to display!')
}).then(function(){
    return pic3("images/cse-department.png")
}).then(function(url){
    console.log(url + ' displayed!')
}).catch(function(url){
    console.log(url + ' failed to display!')
})