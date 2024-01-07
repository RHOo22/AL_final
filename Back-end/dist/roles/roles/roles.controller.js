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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_service_1 = require("./roles.service");
const role_input_1 = require("./role.input");
const role_update_1 = require("./role.update");
let RolesController = class RolesController {
    constructor(service) {
        this.service = service;
    }
    async create(input) {
        if (input.idAssociation === undefined || input.idUser === undefined || input.name === undefined) {
            throw new common_1.HttpException('donnée manquante', common_1.HttpStatus.NOT_FOUND);
        }
        return this.service.create(input.idAssociation, input.idUser, input.name);
    }
    async get() {
        return this.service.get();
    }
    async getid(parameter) {
        const role = await this.service.getid(+parameter.idAssociation, +parameter.idUser);
        if (role === undefined)
            throw new common_1.HttpException('utilisateur introuvable', common_1.HttpStatus.NOT_FOUND);
        return role;
    }
    async put(parameter, input) {
        const role = await this.service.put(+parameter.idAssociation, +parameter.idUser, input.name);
        if (role === undefined)
            throw new common_1.HttpException('utilisateur introuvable', common_1.HttpStatus.NOT_FOUND);
        return role;
    }
    async delete(parameter) {
        const bool = this.service.delete(+parameter.idAssociation, +parameter.idUser);
        if (await bool === false)
            throw new common_1.HttpException('utilisateur introuvable', common_1.HttpStatus.NOT_FOUND);
        return true;
    }
};
exports.RolesController = RolesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_input_1.RoleInput]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':idUser/:idAssociation'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getid", null);
__decorate([
    (0, common_1.Put)(':idUser/:idAssociation'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, role_update_1.RoleUpdate]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)(':idUser/:idAssociation'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "delete", null);
exports.RolesController = RolesController = __decorate([
    (0, swagger_1.ApiTags)('roles'),
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
//# sourceMappingURL=roles.controller.js.map