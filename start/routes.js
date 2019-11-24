"use strict";

const Route = use("Route");

Route.post("users", "UserController.store").validator("User");
Route.post("sessions", "SessionController.store").validator("Session");

Route.post("forgotpassword", "ForgotPasswordController.store").validator(
  "ForgotPassword"
);
Route.put("forgotpassword", "ForgotPasswordController.update").validator(
  "ResetPassword"
);

Route.post("/files", "FileController.store");

/*Protegendo as rotas (Somente usuário logado terá aecesso)*/
Route.group(() => {
  Route.get(")/files/:id", "FileController.show");
  Route.resource("projects", "ProjectController")
    .apiOnly()
    .validator(new Map([[["projects.store"], ["Project"]]]));
  Route.resource("projects.tasks", "TaskController")
    .apiOnly()
    .validator(new Map([[["tasks.store"], ["Task"]]]));
}).middleware(["auth"]);
