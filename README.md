# nodejs-express-typescript



# Moduły
express - framework
pug - silnik szablonów html
cookie-parser - moduł do obsługi cookies
body-parser - moduł do obsługi requestów typu POST
connect-flash - moduł do komunikatów flash w aplikacji
 

## przykład
```
const express = require('express');
const app = new express();

app.get('/', function (req, res, next) {
    res.json({
        'status': 'success 2'
    });
});

app.listen(8082, () => {
    console.log('Start');
});


```

https://www.youtube.com/channel/UC_MIaHmSkt9JHNZfQ_gUmrg/videos
https://automationrhapsody.com/build-rest-api-express-node-js-run-docker/
https://github.com/didinj/express-api-example


```

const file = __dirname + '/config/config.yml';
let s = new ConfigService();
const config = s.load(file);

console.log(config);


abstract class PersonAbstract {
    abstract get(id: string): PersonDAO;
}


class PersonDAO {
    public restProxy: string = 'test 007';
}

@Provides (PersonAbstract) // lub mozna tak : Container.bind(PersonAbstract).to(PersonService);
class PersonService implements PersonAbstract {
    private personDAO: PersonDAO;

    constructor(@Inject personDAO: PersonDAO) {
        this.personDAO = personDAO;
    }

    public get(id: string) {
        return this.personDAO;
    }
}


class UserService implements PersonAbstract {
    private personDAO: PersonDAO;

    constructor() {
        this.personDAO = new PersonDAO();
        this.personDAO.restProxy = "UserService";
    }

    public get(id: string) {
        return this.personDAO;
    }
}

class PersonController {
    @Inject
    private personService: PersonAbstract;

    public test() {
        console.log(this.personService.get("test01").restProxy);
    }
}


//Container.bind(PersonAbstract).to(PersonService);
Container.bind(PersonAbstract).to(UserService);

let con = new PersonController();
con.test();
```