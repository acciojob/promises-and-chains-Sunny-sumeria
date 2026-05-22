//your JS code here. If required.

 document.getElementById('votingForm').addEventListener('submit', function(event) {
            // Prevent the form from refreshing the page on submission
            event.preventDefault();

            // 1. Fetch values from inputs
            const nameInput = document.getElementById('name').value.trim();
            const ageInput = document.getElementById('age').value.trim();

            // 2. Validation Check
            if (!nameInput || !ageInput) {
                alert("Please enter valid details.");
                return; // Stop execution
            }

            const age = parseInt(ageInput, 10);

            // 3. Promise Logic
            const checkAgePromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age >= 18) {
                        resolve(`Welcome, ${nameInput}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${nameInput}. You aren't old enough.`);
                    }
                }, 4000); // 4-second delay
            });

            // 4. Handling Promise Resolution/Rejection
            checkAgePromise
                .then((successMessage) => {
                    alert(successMessage);
                })
                .catch((errorMessage) => {
                    alert(errorMessage);
                });
        });