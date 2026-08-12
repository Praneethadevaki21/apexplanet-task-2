/* Show / Hide Password */

function togglePassword(inputId, button) {

    const passwordInput =
        document.getElementById(inputId);

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        button.textContent = "Hide";

    } else {

        passwordInput.type = "password";

        button.textContent = "Show";
    }
}


/* Registration */

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const password =
                document.getElementById("password").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;

            const terms =
                document.getElementById("terms").checked;

            const message =
                document.getElementById("registerMessage");


            /* Name Validation */

            if (name.length < 3) {

                message.textContent =
                    "Name must contain at least 3 characters.";

                message.className =
                    "text-danger text-center mt-3";

                return;
            }


            /* Email Validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                message.textContent =
                    "Please enter a valid email address.";

                message.className =
                    "text-danger text-center mt-3";

                return;
            }


            /* Password Validation */

            if (password.length < 6) {

                message.textContent =
                    "Password must contain at least 6 characters.";

                message.className =
                    "text-danger text-center mt-3";

                return;
            }


            /* Password Match */

            if (password !== confirmPassword) {

                message.textContent =
                    "Passwords do not match.";

                message.className =
                    "text-danger text-center mt-3";

                return;
            }


            /* Terms */

            if (!terms) {

                message.textContent =
                    "Please accept the terms and conditions.";

                message.className =
                    "text-danger text-center mt-3";

                return;
            }


            /* Success */

            message.textContent =
                "Registration successful!";

            message.className =
                "text-success text-center mt-3";


            registerForm.reset();

        }
    );

}


/* Login */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById("loginEmail").value.trim();

            const password =
                document.getElementById("loginPassword").value;

            const message =
                document.getElementById("loginMessage");


            /* Email */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                message.textContent =
                    "Please enter a valid email.";

                message.className =
                    "text-danger text-center mt-3";

                return;
            }


            /* Password */

            if (password.length < 6) {

                message.textContent =
                    "Password must contain at least 6 characters.";

                message.className =
                    "text-danger text-center mt-3";

                return;
            }


            /* Success */

            message.textContent =
                "Login successful!";

            message.className =
                "text-success text-center mt-3";

        }
    );

}
