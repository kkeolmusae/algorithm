# 의존성 주입(Dependency Injection)

의존성 주입이란? 하나의 객체가 다른 객체의 의존성을 제공하는 것으로 하나의 패턴이다.

필요한 객체를 직접 생성하는 것이 아니라 외부로 부터 필요한 객체를 받아서 사용한다.

의존성 주입의 목적은 객체의 생성과 사용의 관심을 분리하는 것이다. 이는 객체간의 결합도를 줄이고 가독성과 코드 재사용성을 높혀준다.

## Dependency Injection 이란?

```javascript
//users-service.js
const User = require('./User');
const UsersRepository = require('./users-repository');

async function getUsers() {
    return UsersRepository.findAll();
}

async function addUser(userData) {
    const user = new User(userData);

    return UsersRepository.addUser(user);
}

module.exports = {
    getUsers,
    addUser
}

// 문제점
// 1. service가 특정 repository와 연결되어 있음.
// -> 다른 repository로 바꾸고 싶다면 위의 코드를 싹 다 바꿔야하기에 확장성이 떨어짐
// 2. 모듈 테스트가 힘들어짐
```

의존성 주입을 사용할 경우

```javascript
const User = require('./User');

function UserService(usersRepository) { // check here
  async function getUsers() {
    return usersRepository.findAll();
  }
  
  async function addUser(userData) {
    const user = new User(userData);
  
    return usersRepository.addUser(user);
  }
  
  return {
    getUsers,
    addUser
  };
}

module.exports = UserService

// 이제 UserService는 repository와 엮여있지 않음. 대신 usersRepository를 전달 받아야 함.
// service와 repository를 decoupleing 하여 원하는 repository로 적용이 가능해짐.
```

## Node.js에서의 Dependency injection

```javascript
// javascript
class UsersService {
    constructor({ usersRepository, mailer, logger }) {
        this.usersRepository = usersRepository;
        this.mailer = mailer;
        this.logger = logger;
    }

    async findAll() {
        return this.usersRepository.findAll();
    }

    async addUser(user) {
        await this.usersRepository.addUser(user);
        this.logger.info(`User created: ${user}`);
        await this.mailer.sendConfirmationLink(user);
        this.logger.info(`Confirmation link sent: ${user}`);
    }
}

module.exports = UsersService;

const usersService = new UsersService({
    usersRepository,
    mailer,
    logger
});
```

```typescript
// typescript
type UsersDependencies = {			// Here is all dependencies.
    usersRepository: UserRepository
    mailer: Mailer
    logger: Logger
};

export class UserService {
    constructor(
        private dependencies: UsersDependencies			// looks better isnt it?
    ) {}

    async findAll() {
        return this.dependencies.usersRepository.findAll();
    }

    async addUser(user) {
        await this.dependencies.usersRepository.addUser(user);		// more easy to access dependencies
        this.dependencies.logger.info(`User created: ${user}`);
        await this.dependencies.mailer.sendConfirmationLink(user);	// more easy to access dependencies
        this.dependencies.logger.info(`Confirmation link sent: ${user}`);
    }
}

const usersService = new UserService({
    usersRepository,
    mailer,
    logger
});

// DI(Dependency Injecction)의 단점
// - 이용하려는 의존성들을 모두 미리 세팅해야함. (UserRepository, Mailer, Logger 등등)
```