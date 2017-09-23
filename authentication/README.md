## Authentication
- Explain why each system fails (hacked), and how to guard against that failure when using the follwoing types of passwords:
- Commit with th comment "passwords"

- Plaintext passwords
	the reson why this sys fails because storing a plaintext password in a configuration file  allows anyone who can read the file access to the password-protected resource.
	so we have to find another way to protect our passwords than save them in a plantext file like:
	hash them or encrypted them.

- Encrypted passwords
the reson why this sys fails because anyone possessing the key can decrypt an encrypted value to obtain the original value.


- Hashed passwords

it is the best way between these three .
