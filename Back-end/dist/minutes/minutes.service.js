"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinutesService = void 0;
const common_1 = require("@nestjs/common");
const minute_entity_1 = require("./minute.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
let MinutesService = class MinutesService {
    constructor(repository, userservice) {
        this.repository = repository;
        this.userservice = userservice;
    }
    async create(content, idVoters, date, idAssociation) {
        return this.repository.save(this.repository.create({ content, idVoters, date, idAssociation }));
    }
    async get() {
        console.log(await this.repository.find({ relations: ['idVoters'] }));
        return await this.repository
            .createQueryBuilder('minute')
            .addSelect(['idVoters.id'])
            .leftJoin('minute.idVoters', 'idVoters')
            .getMany();
    }
    async getid(id) {
        const minute = await this.repository.findOne({ where: { id: (0, typeorm_2.Equal)(id) }, relations: ['idVoters'] });
        if (minute === null) {
            return undefined;
        }
        ;
        return minute;
    }
    async getVoters(id) {
        const minute = await this.getid(id);
        if (minute == undefined) {
            return undefined;
        }
        return (await this.userservice.get()).filter(user => minute.idVoters.indexOf(user.id) >= 0);
    }
    async getAssoc(id) {
        const minute = await this.get();
        if (minute == undefined) {
            return undefined;
        }
        return minute.filter(minute => minute.idAssociation === id);
    }
    async put(id, content, idVoters, date, idAssociation) {
        const minute = await this.repository.findOne({ where: { id: (0, typeorm_2.Equal)(id) } });
        if (minute !== undefined) {
            if (content !== undefined) {
                minute.content = content;
            }
            if (idVoters !== undefined) {
                minute.idVoters = idVoters;
            }
            if (date !== undefined) {
                minute.date = date;
            }
            if (idAssociation !== undefined) {
                minute.idAssociation = idAssociation;
            }
        }
        console.log(minute);
        return minute;
    }
    async delete(id) {
        return (await this.repository.delete(id)).affected !== 0;
    }
};
exports.MinutesService = MinutesService;
exports.MinutesService = MinutesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(minute_entity_1.Minute)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], MinutesService);
//# sourceMappingURL=minutes.service.js.map