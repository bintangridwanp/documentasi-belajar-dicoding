<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Custom Error</title>
  </head>
  <body>
    <script>
      class ValidationError extends Error {
        constructor(message) {
          super(message);
          this.name = "ValidationError";
        }
      }
      let json = '{ "age": 30 }';

      try {
        let user = JSON.parse(json);

        if (!user.name) {
          throw new SyntaxError("'name' is required.");
        }

        console.log(user.name);
        console.log(user.age);
      } catch (error) {
        if (error instanceof SyntaxError) {
          console.log(`JSON Error: ${error.message}`);
        } else if (error instanceof ReferenceError) {
          console.log(error.message);
        } else {
          console.log(error.stack);
        }
      }
    </script>
  </body>
</html>
