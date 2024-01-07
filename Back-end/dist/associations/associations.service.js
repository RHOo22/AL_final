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
exports.AssociationsService = void 0;
const common_1 = require("@nestjs/common");
const association_entity_1 = require("./association.entity");
const users_service_1 = require("../users/users.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AssociationsService = class AssociationsService {
    constructor(repository, userservice) {
        this.repository = repository;
        this.userservice = userservice;
    }
    async create(idUsers, name) {
        let assoc = this.repository.create({ name });
        assoc.Users = (await this.userservice.get()).filter(user => idUsers.indexOf(user.id) >= 0);
        return this.repository.save(assoc);
    }
    async get() {
        return await this.repository.find();
    }
    async getid(id) {
        const association = await this.repository.findOne({ where: { id: (0, typeorm_2.Equal)(id) } });
        if (association === null) {
            return undefined;
        }
        ;
        return association;
    }
    async getMembers(id) {
        const asso = await this.getid(id);
        if (asso == undefined) {
            return undefined;
        }
        return asso.Users;
    }
    async put(id, Users, name) {
        const association = await this.repository.findOne({ where: { id: (0, typeorm_2.Equal)(id) } });
        if (association !== undefined) {
            if (Users !== undefined) {
                association.Users = Users;
            }
            if (name !== undefined) {
                association.name = name;
            }
        }
        return association;
    }
    async delete(id) {
        return (await this.repository.delete(id)).affected !== 0;
    }
};
exports.AssociationsService = AssociationsService;
exports.AssociationsService = AssociationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(association_entity_1.Association)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], AssociationsService);
//# sourceMappingURL=associations.service.js.map