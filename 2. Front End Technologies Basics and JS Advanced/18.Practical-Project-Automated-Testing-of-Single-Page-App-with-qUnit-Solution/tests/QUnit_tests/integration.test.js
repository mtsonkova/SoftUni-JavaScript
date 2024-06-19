const baseUrl = 'http://localhost:3030/';
let user = {
    email: "",
    password: '123456'
};

let token = '';
let userId = '';

QUnit.config.reorder = false;

QUnit.module('user functionalities', () => {
    QUnit.test('regustration', async (assert) => {
        let path = 'users/register';

        let random = Math.floor(Math.random() * 10000);
        let email = `abv${random}@abv.bg`;

        user.email = email;

        let response = await fetch(baseUrl + path, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },


            body: JSON.stringify(user)
        });

        let json = await response.json();


        assert.ok(response.ok, 'successfull response');
        //assert email
        assert.ok(json.hasOwnProperty('email'), 'email exist');
        assert.equal(json['email'], user.email, 'expexted mail');
        assert.strictEqual(typeof json.email, 'string', 'Property email is a string');

        //assert password
        assert.ok(json.hasOwnProperty('password'), 'Password exists.');
        assert.equal(json['password'], user.password, 'expected password')
        assert.strictEqual(typeof json.password, 'string', 'Property password is a string.');

        //access token
        assert.ok(json.hasOwnProperty('accessToken'), 'access token exists');
        let accessToken = json['accessToken'] // get token;
        assert.strictEqual(typeof json['accessToken'], 'string', 'Property accessToken is string.');

        //id
        assert.ok(json.hasOwnProperty('_id'), 'id exists');
        let id = json['_id']; //get user id
        assert.strictEqual(typeof json['_id'], 'string', 'Property _id is a string');

        token = json['accessToken']; // get token;
        userId = json['_id']; // get userId
        sessionStorage.setItem('game-user', JSON.stringify(user)); //set token to session store in browser
    });

    QUnit.test('login', async (assert) => {
        let path = 'users/login';
        let response = await fetch(baseUrl + path, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        let json = await response.json();
        assert.ok(response.ok, 'successfull response');

        //assert email
        assert.ok(json.hasOwnProperty('email'), 'email exist');
        assert.equal(json['email'], user.email, 'expexted mail');
        assert.strictEqual(typeof json.email, 'string', 'Property email is a string');

        //assert password
        assert.ok(json.hasOwnProperty('password'), 'Password exists.');
        assert.equal(json['password'], user.password, 'expected password')
        assert.strictEqual(typeof json.password, 'string', 'Property password is a string.');

        //access token
        assert.ok(json.hasOwnProperty('accessToken'), 'access token exists');
        let accessToken = json['accessToken'] // get token;
        assert.strictEqual(typeof json['accessToken'], 'string', 'Property accessToken is string.');

        //id
        assert.ok(json.hasOwnProperty('_id'), 'id exists');
        let id = json['_id']; //get user id
        assert.strictEqual(typeof json['_id'], 'string', 'Property _id is a string');

        token = json['accessToken']; // get token;
        userId = json['_id']; // get userId
        sessionStorage.setItem('game-user', JSON.stringify(user)); //set token to session store in browser

        token = json['accessToken']; // get token;
        userId = json['_id']; // get userId
        sessionStorage.setItem('game-user', JSON.stringify(user)); //set token to session store in browser


    });
});

QUnit.module('game functionalities', () => {
    QUnit.test('get all games', async (assert) => {
        let path = 'data/games';
        let queryParams = '?sortBy=_createdOn%20desc';

        response = await fetch(baseUrl + path + queryParams);
        let json = await response.json();

        assert.ok(response.ok, 'successfull response');
        assert.true(Array.isArray(json), 'Response is an Array of objects');

        json.forEach(jsonProperty => {

            // _ownerId
            assert.ok(jsonProperty.hasOwnProperty('_ownerId'), 'Property _ownerId exists.');
            assert.strictEqual(typeof jsonProperty['_ownerId'], 'string', 'Property _ownerId is string.');

            // title
            assert.ok(jsonProperty.hasOwnProperty('title'), 'Property title exists.');
            assert.strictEqual(typeof jsonProperty['title'], 'string', 'Property title is string.');

            // category
            assert.ok(jsonProperty.hasOwnProperty('category'), 'Property category exists.');
            assert.strictEqual(typeof jsonProperty['category'], 'string', 'Property category is string.');

            // maxLevel
            assert.ok(jsonProperty.hasOwnProperty('maxLevel'), 'Property maxLevel exists.');
            assert.strictEqual(typeof jsonProperty['maxLevel'], 'string', 'Property maxLevel is string.');

            // imageUrl
            assert.ok(jsonProperty.hasOwnProperty('imageUrl'), 'Property imageUrl exists.');
            assert.strictEqual(typeof jsonProperty['imageUrl'], 'string', 'Property imageUrl is string.');

            // summary
            assert.ok(jsonProperty.hasOwnProperty('summary'), 'Property summary exists.');
            assert.strictEqual(typeof jsonProperty['summary'], 'string', 'Property summary is string.');

            // createdOn -> check if exists and if it is a num
            assert.ok(jsonProperty.hasOwnProperty('createdOn'), 'Property createdOn exists.');
            assert.strictEqual(typeof jsonProperty['createdOn'], 'number', 'Property createdOn is string.');

            // id -> check if exists and if it is string
            assert.ok(jsonProperty.hasOwnProperty('id'), 'Property id exists.')
            assert.strictEqual(typeof jsonProperty['id'], 'string', 'Property id is a string');
        }

        )
    });
});

