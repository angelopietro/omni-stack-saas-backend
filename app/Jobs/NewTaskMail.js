"use strict";
const Mail = use("Mail");
const Helpers = use("Helpers");

class NewTaskMail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency() {
    return 1;
  }

  // This is required. This is a unique key used to identify this job.
  static get key() {
    return "NewTaskMail-job";
  }

  // This is where the work is done.
  async handle({ username, email, title, file }) {
    await Mail.send(
      ["emails.new_task"],
      {
        username,
        title,
        hasAttachment: !!file
      },
      message => {
        message
          .to(email)
          .from("angelopietror@gmail.com", "Ângelo Pietro")
          .subject("Você recebeu uma nova tarefa!");

        if (file) {
          message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
            filename: file.name
          });
        }
      }
    );
  }
}

module.exports = NewTaskMail;
