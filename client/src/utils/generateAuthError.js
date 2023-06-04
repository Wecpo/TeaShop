export function generetaAuthError(message) {
     switch (message) {
          case "EMAIL_EXISTS":
               return "Пользователь с таким Email уже существует";
          default:
               return "Email или пароль введены некорректно";
     }
}
