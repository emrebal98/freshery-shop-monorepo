"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_cors = __toESM(require("cors"));
var import_express3 = __toESM(require("express"));
var import_logger = __toESM(require("logger"));
var import_pino_http = __toESM(require("pino-http"));

// src/routes/index.ts
var import_express2 = __toESM(require("express"));

// src/routes/user.routes.ts
var import_express = __toESM(require("express"));

// src/controllers/user.controller.ts
var import_database = require("database");
var userController = {
  getAllUsers: async (req, res) => {
    const users = await import_database.prisma.user.findMany();
    res.status(200).json(users);
  },
  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await import_database.prisma.user.findUnique({
      where: {
        id
      }
    });
    if (!user)
      return res.status(404).json({ message: "User not found" });
    return res.status(200).json(user);
  }
};
var user_controller_default = userController;

// src/routes/user.routes.ts
var router = import_express.default.Router();
router.get("/", user_controller_default.getAllUsers);
router.get("/:id", user_controller_default.getUserById);
var user_routes_default = router;

// src/routes/index.ts
var router2 = import_express2.default.Router();
router2.use("/users", user_routes_default);
var routes_default = router2;

// src/index.ts
var app = (0, import_express3.default)();
app.use(import_express3.default.json());
app.use(
  (0, import_cors.default)({
    origin: ["http://localhost:3000"]
  })
);
app.use(
  (0, import_pino_http.default)({
    logger: import_logger.default,
    customLogLevel(req, res, err) {
      if (res.statusCode >= 400 && res.statusCode < 500) {
        return "warn";
      }
      if (res.statusCode >= 500 || err) {
        return "error";
      }
      if (res.statusCode >= 300 && res.statusCode < 400) {
        return "silent";
      }
      return "info";
    },
    customSuccessMessage(req, res) {
      if (res.statusCode === 404) {
        return "resource not found";
      }
      return `${req.method} completed`;
    },
    customReceivedMessage(req, res) {
      return `request received: ${req.method}`;
    },
    customErrorMessage(req, res, err) {
      return `request errored with status code: ${res.statusCode}`;
    }
  })
);
app.use("/api/v1/", routes_default);
var PORT = process.env.API_PORT || 3333;
app.listen(PORT, () => {
  console.log(`\u{1F680} Server ready at: http://localhost:${PORT}`);
});
