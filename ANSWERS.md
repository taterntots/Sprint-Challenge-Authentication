 1. What is the purpose of using sessions?

Sessions help us manage a pseudo-state in HTML, which is very helpful for keeping users logged in (or persisting any data, really, like dark mode) to a website between pages.

 2. What does bcrypt do to help us store passwords in a secure manner.

The purpose of bcrypt is to hash our passwords. What this essentially means is a mathematical operation takes our normally readable password and turns it into a scrambled string that's very difficult to decrypt.

 3. What does bcrypt do to slow down attackers?

With bcrypt we can put a time limit on password requests, which makes crawling through all possible combinations take ungodly long amounts of time (into the thousands of years, even)!

 4. What are the three parts of the JSON Web Token?

The three parts of a JSON Web Token are the header, payload, and signature.