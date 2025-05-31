"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return JSON.stringify([
            {
                "id": 1,
                "date": "2023-11-24",
                "location": "GymA",
                "user": {
                    "name": "John",
                    "lastname": "Doe",
                    "age": 25,
                    "fee": 5
                }
            },
            {
                "id": 2,
                "date": "2023-11-25",
                "location": "GymB",
                "user": {
                    "name": "Jane",
                    "lastname": "Smith",
                    "age": 63,
                    "fee": 3
                }
            },
            {
                "id": 3,
                "date": "2023-11-26",
                "location": "GymA",
                "user": {
                    "name": "Michael",
                    "lastname": "Johnson",
                    "age": 72,
                    "fee": 7
                }
            },
            {
                "id": 4,
                "date": "2023-11-27",
                "location": "GymC",
                "user": {
                    "name": "Emily",
                    "lastname": "Brown",
                    "age": -1,
                    "fee": 4
                }
            },
            {
                "id": 5,
                "date": "2023-11-28",
                "location": "GymB",
                "user": {
                    "name": "David",
                    "lastname": "Wilson",
                    "age": -1,
                    "fee": 6
                }
            },
            {
                "id": 6,
                "date": "2023-11-29",
                "location": "GymA",
                "user": {
                    "name": "Sarah",
                    "lastname": "Miller",
                    "age": 27,
                    "fee": 2
                }
            },
            {
                "id": 7,
                "date": "2023-11-30",
                "location": "GymC",
                "user": {
                    "name": "Daniel",
                    "lastname": "Davis",
                    "age": -1,
                    "fee": 8
                }
            },
            {
                "id": 8,
                "date": "2023-12-01",
                "location": "GymB",
                "user": {
                    "name": "Olivia",
                    "lastname": "Moore",
                    "age": 74,
                    "fee": 5
                }
            },
            {
                "id": 9,
                "date": "2023-12-02",
                "location": "GymA",
                "user": {
                    "name": "William",
                    "lastname": "Taylor",
                    "age": 32,
                    "fee": 3
                }
            },
            {
                "id": 10,
                "date": "2023-12-03",
                "location": "GymC",
                "user": {
                    "name": "Sophia",
                    "lastname": "Anderson",
                    "age": 26,
                    "fee": 7
                }
            },
            {
                "id": 11,
                "date": "2023-12-04",
                "location": "GymB",
                "user": {
                    "name": "James",
                    "lastname": "Thomas",
                    "age": -1,
                    "fee": 2
                }
            },
            {
                "id": 12,
                "date": "2023-12-05",
                "location": "GymA",
                "user": {
                    "name": "Ava",
                    "lastname": "Jackson",
                    "age": 23,
                    "fee": 8
                }
            },
            {
                "id": 13,
                "date": "2023-12-06",
                "location": "GymC",
                "user": {
                    "name": "Benjamin",
                    "lastname": "White",
                    "age": -1,
                    "fee": 5
                }
            },
            {
                "id": 14,
                "date": "2023-12-07",
                "location": "GymB",
                "user": {
                    "name": "Mia",
                    "lastname": "Harris",
                    "age": 25,
                    "fee": 3
                }
            },
            {
                "id": 15,
                "date": "2023-12-08",
                "location": "GymA",
                "user": {
                    "name": "Noah",
                    "lastname": "Martin",
                    "age": 30,
                    "fee": 7
                }
            },
            {
                "id": 16,
                "date": "2023-12-09",
                "location": "GymC",
                "user": {
                    "name": "Lily",
                    "lastname": "Thompson",
                    "age": -1,
                    "fee": 2
                }
            },
            {
                "id": 17,
                "date": "2023-12-10",
                "location": "GymB",
                "user": {
                    "name": "Ethan",
                    "lastname": "Garcia",
                    "age": 68,
                    "fee": 8
                }
            },
            {
                "id": 18,
                "date": "2023-12-11",
                "location": "GymA",
                "user": {
                    "name": "Emma",
                    "lastname": "Martinez",
                    "age": 24,
                    "fee": 5
                }
            },
            {
                "id": 19,
                "date": "2023-12-12",
                "location": "GymC",
                "user": {
                    "name": "Avery",
                    "lastname": "Robinson",
                    "age": 29,
                    "fee": 3
                }
            },
            {
                "id": 20,
                "date": "2023-12-13",
                "location": "GymB",
                "user": {
                    "name": "Sofia",
                    "lastname": "Clark",
                    "age": -1,
                    "fee": 7
                }
            },
            {
                "id": 21,
                "date": "2023-12-14",
                "location": "GymA",
                "user": {
                    "name": "Isaac",
                    "lastname": "Rodriguez",
                    "age": -1,
                    "fee": 2
                }
            },
            {
                "id": 22,
                "date": "2023-12-15",
                "location": "GymC",
                "user": {
                    "name": "Charlotte",
                    "lastname": "Lewis",
                    "age": 23,
                    "fee": 8
                }
            },
            {
                "id": 23,
                "date": "2023-12-16",
                "location": "GymB",
                "user": {
                    "name": "Logan",
                    "lastname": "Lee",
                    "age": -1,
                    "fee": 5
                }
            },
            {
                "id": 24,
                "date": "2023-12-17",
                "location": "GymA",
                "user": {
                    "name": "Evelyn",
                    "lastname": "Walker",
                    "age": 25,
                    "fee": 3
                }
            }
        ]);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map