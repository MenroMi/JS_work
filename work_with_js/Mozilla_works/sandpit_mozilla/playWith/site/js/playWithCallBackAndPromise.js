function getUsers(names) {

    names.forEach(name => {

        fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json())
        .then(data => console.log(data));
        
    }); 

}


getUsers(['MenroMi', "dnksebastian", "KarolinaBrzezinska"]);