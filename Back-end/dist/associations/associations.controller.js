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
exports.AssociationsController = void 0;
const common_1 = require("@nestjs/common");
const associations_service_1 = require("./associations.service");
const associations_input_1 = require("./associations.input");
const swagger_1 = require("@nestjs/swagger");
let AssociationsController = class AssociationsController {
    constructor(service) {
        this.service = service;
    }
    async create(input) {
        if (input.idUsers === undefined || input.name === undefined) {
            throw new common_1.HttpException('donnée manquante', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.service.create(input.idUsers.map(Number), input.name);
    }
    async get() {
        return this.service.get();
    }
    async getid(parameter) {
        const association = this.service.getid(+parameter.id);
        if (association === undefined)
            throw new common_1.HttpException('association introuvable', common_1.HttpStatus.NOT_FOUND);
        return await association;
    }
    async getMembers(parameter) {
        const UserMembers = this.service.getMembers(+parameter.id);
        if (UserMembers === undefined)
            throw new common_1.HttpException('association introuvable', common_1.HttpStatus.NOT_FOUND);
        return await UserMembers;
    }
    async put(parameter, input) {
        const association = this.service.put(+parameter.id, input.idUsers, input.name);
        if (association === undefined)
            throw new common_1.HttpException('association introuvable', common_1.HttpStatus.NOT_FOUND);
        return await association;
    }
    async delete(parameter) {
        const bool = this.service.delete(+parameter.id);
        if (await bool === false)
            throw new common_1.HttpException('association introuvable', common_1.HttpStatus.NOT_FOUND);
        return true;
    }
};
exports.AssociationsController = AssociationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [associations_input_1.AssociationsInput]),
    __metadata("design:returntype", Promise)
], AssociationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AssociationsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssociationsController.prototype, "getid", null);
__decorate([
    (0, common_1.Get)(':id/members'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssociationsController.prototype, "getMembers", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AssociationsController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssociationsController.prototype, "delete", null);
exports.AssociationsController = AssociationsController = __decorate([
    (0, swagger_1.ApiTags)('associations'),
    (0, common_1.Controller)('associations'),
    __metadata("design:paramtypes", [associations_service_1.AssociationsService])
], AssociationsController);
//# sourceMappingURL=associations.controller.js.map