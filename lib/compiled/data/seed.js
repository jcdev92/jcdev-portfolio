"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function seedData() {
    return __awaiter(this, void 0, void 0, function () {
        var existingUser, user_1, aboutListPromises, socialsPromises, skillsPromises, projectsPromises, error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, 8, 10]);
                    return [4 /*yield*/, prisma.user.findUnique({
                            where: { email: data_1.profile.email },
                        })];
                case 1:
                    existingUser = _a.sent();
                    if (existingUser) {
                        console.log("User already exists");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                first_name: data_1.profile.firstName,
                                last_name: data_1.profile.lastName,
                                alias: data_1.profile.alias,
                                email: data_1.profile.email,
                                phone: data_1.profile.phone,
                                birth_day: data_1.profile.birthDay,
                                gender: data_1.profile.gender,
                                city: data_1.profile.city,
                                country: data_1.profile.country,
                                profile_img: data_1.profile.profileImg,
                                job_title: data_1.profile.jobTitle,
                                about_me: data_1.profile.aboutMe,
                                slogan: data_1.profile.slogan,
                            },
                        })];
                case 2:
                    user_1 = _a.sent();
                    aboutListPromises = data_1.profile.aboutList.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, prisma.aboutList.create({
                                        data: {
                                            title: item.title,
                                            description: item.description,
                                            icon: item.icon,
                                            user_id: user_1.id,
                                        },
                                    })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(aboutListPromises)];
                case 3:
                    _a.sent();
                    socialsPromises = data_1.profile.socials.map(function (social) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, prisma.social.create({
                                        data: {
                                            label: social.label,
                                            link: social.link,
                                            user_id: user_1.id,
                                        },
                                    })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(socialsPromises)];
                case 4:
                    _a.sent();
                    skillsPromises = data_1.profile.skills.map(function (skill) { return __awaiter(_this, void 0, void 0, function () {
                        var foundSkill;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, prisma.skill.findFirst({
                                        where: { label: skill.label },
                                    })];
                                case 1:
                                    foundSkill = _a.sent();
                                    if (!!foundSkill) return [3 /*break*/, 3];
                                    return [4 /*yield*/, prisma.skill.create({
                                            data: {
                                                label: skill.label,
                                                user_id: user_1.id,
                                            },
                                        })];
                                case 2:
                                    foundSkill = _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/, foundSkill];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(skillsPromises)];
                case 5:
                    _a.sent();
                    projectsPromises = data_1.profile.projects.map(function (project) { return __awaiter(_this, void 0, void 0, function () {
                        var createdProject_1, projectSkillsPromises, error_2;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, prisma.project.create({
                                            data: {
                                                title: project.title,
                                                description: project.description,
                                                categories: project.categories,
                                                cover_image: project.coverImage,
                                                link: project.link,
                                                github: project.github,
                                                user_id: user_1.id,
                                            },
                                        })];
                                case 1:
                                    createdProject_1 = _a.sent();
                                    projectSkillsPromises = project.projectSkills.map(function (_a) { return __awaiter(_this, [_a], void 0, function (_b) {
                                        var foundSkill;
                                        var skill = _b.skill;
                                        return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0: return [4 /*yield*/, prisma.skill.findFirst({
                                                        where: { label: skill.label },
                                                    })];
                                                case 1:
                                                    foundSkill = _c.sent();
                                                    if (!!foundSkill) return [3 /*break*/, 3];
                                                    return [4 /*yield*/, prisma.skill.create({
                                                            data: {
                                                                label: skill.label,
                                                                user_id: user_1.id,
                                                            },
                                                        })];
                                                case 2:
                                                    foundSkill = _c.sent();
                                                    _c.label = 3;
                                                case 3:
                                                    console.log("Creating relation between Project: ".concat(createdProject_1.title, " and Skill: ").concat(foundSkill.label));
                                                    return [4 /*yield*/, prisma.projectSkill.create({
                                                            data: {
                                                                project_id: createdProject_1.id,
                                                                skill_id: foundSkill.id,
                                                            },
                                                        })];
                                                case 4: return [2 /*return*/, _c.sent()];
                                            }
                                        });
                                    }); });
                                    return [4 /*yield*/, Promise.all(projectSkillsPromises)];
                                case 2:
                                    _a.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_2 = _a.sent();
                                    console.error("Error creating project: ".concat(project.title), error_2);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(projectsPromises)];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 7:
                    error_1 = _a.sent();
                    console.error("Error seeding data:", error_1);
                    return [3 /*break*/, 10];
                case 8: return [4 /*yield*/, prisma.$disconnect()];
                case 9:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    });
}
seedData()
    .then(function () {
    console.log("Data seeded successfully!");
})
    .catch(function (error) {
    console.error("Error seeding data:", error);
});
