## Authentication
- Explain why each system fails (hacked), and how to guard against that failure when using the follwoing types of passwords:
- Commit with th comment "passwords"

- Plaintext passwords
	because when the user enters their password when they log in for example and the server takes it to compare it to the one that's saved in the database and then responds, if there happened to be a middle attack and the password was taken it will be easily figured out since it's a plain text.   


- Encrypted passwords
	encrypted password are better than palin text ones but they can be decrypted so it is still not safe enough.


- Hashed passwords
	hashed passwords are safer than the two above but the problem is that they can't be unhashed to compare them to the passwords that the user enters, so if we want to save them as is we need to save the original text next to it's hased one which is impractical and useless.

using salt + hashed is the solution.