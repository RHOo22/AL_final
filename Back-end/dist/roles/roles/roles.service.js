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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./role.entity");
const users_service_1 = require("../../users/users.service");
const associations_service_1 = require("../../associations/associations.service");
let RolesService = class RolesService {
    constructor(repository, userservice, associationservice) {
        this.repository = repository;
        this.userservice = userservice;
        this.associationservice = associationservice;
    }
    async create(idAssociation, idUser, name) {
        const association = await this.associationservice.getid(idAssociation);
        const user = await this.userservice.getid(idUser);
        if (!association || !user) {
            throw new common_1.HttpException('association ou user inexistant', common_1.HttpStatus.NOT_FOUND);
        }
        const roleData = {
            idAssociation,
            idUser,
            name,
            user,
            association,
        };
        return this.repository.save(this.repository.create(roleData));
    }
    async get() {
        return await this.repository.find();
    }
    async getid(idAssociation, idUser) {
        const role = await this.repository.findOne({
            where: {
                idAssociation: idAssociation,
                idUser: idUser
            }
        });
        if (role === null) {
            return undefined;
        }
        ;
        return role;
    }
    async put(idAssociation, idUser, name) {
        const role = await this.getid(idAssociation, idUser);
        if (role !== undefined) {
            if (name !== undefined) {
                role.name = name;
            }
        }
        return role;
    }
    async delete(idAssociation, idUser) {
        return await (await this.repository.delete(await this.repository.findOne({
            where: { idAssociation, idUser },
        }))).affected !== 0;
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        associations_service_1.AssociationsService])
], RolesService);
//# sourceMappingURL=roles.service.js.map