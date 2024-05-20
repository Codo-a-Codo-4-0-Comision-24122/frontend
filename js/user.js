export class User {
    constructor(jsonData){
        this.lastName = jsonData['lastName'];
        this.maidenName = jsonData['maidenName'];
        this.age = jsonData['age'];
        this.gender = jsonData['gender'];
        this.email = jsonData['email'];
        this.username = jsonData['username'];
    }

    Saludo () {
        return 'Hola, soy ' + this.lastName;
    }
}
