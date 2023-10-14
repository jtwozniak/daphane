The solution is provided in the form of a function and is tested with Jest.

The input argument is an array of strings, which represents the list of lines from the input.

What is done:

* Replacing all white substrings with spaces.
* Trimming the edges of strings.
* Ignoring empty lines.
* Input validation check with Zod.
* Fully typed.
* Tests for input.
* Tests for sample input provided with the task.


I could do more tests, but I didn't see the point. 
I added Zod validation only because there was a request for production-ready code. Zod ensures that the input data is always correct, allowing the rest of the code to be edited with TypeScript safety.

Some naming conventions could be improved, etc., but I think it is good enough.

To run tests:




```
pnpm install
pnpm test
```

