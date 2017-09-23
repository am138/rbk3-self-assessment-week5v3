## Authentication
- Explain why each system fails (hacked), and how to guard against that failure when using the follwoing types of passwords:
- Commit with th comment "passwords"

- Plaintext passwords
when using plaintext passwords its easy to be hacked because anyone can predict what is the password and also if a hacker could access (hack) the system he can access every password in the system. 
we can guard our system using bcrypt.hash that uses salt and merge the password with it.


- Encrypted passwords
its good to use encrepted passwords in the data base but if a hacker could comeup with the decription criteria he can access every password in the system, so we can also use encryption with salt to merge the users password with our secret code.


- Hashed passwords
it's also like the encrypted passwords above but it is better to use the hash and encryption with each other .
