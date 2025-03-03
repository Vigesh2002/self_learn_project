JavaScript String Methods Explanation

1. String Concatenation (+ Operator)

The + operator is used to join two or more strings.
Example: "Vigesh" + " " + "Viki" → "Vigesh Viki"

2. Concatenation using concat()

The .concat() method joins multiple strings together.
Example: "Vigesh".concat(" ", "Viki") → "Vigesh Viki"

3. String Append (+= Operator)

The += operator appends text to an existing string.
Example: firstName += " Web Developer" → "Vigesh Web Developer"

4. String Length (.length Property)

The .length property returns the number of characters in a string, including spaces.
Example: "Vigesh".length → 6

5. Change Case (toLowerCase() & toUpperCase())

.toLowerCase() converts all characters to lowercase.
.toUpperCase() converts all characters to uppercase.
Example: "Vigesh".toUpperCase() → "VIGESH"

6. String Slicing (slice(start, end))

.slice(start, end) extracts a portion of a string.
The end index is not included.
Example: "Vigesh".slice(0, 3) → "Vig"

7. Split & Join (split() and join())

.split("separator") converts a string into an array based on a separator.
.join("separator") joins an array back into a string.
Example: "Vigesh Web Developer".split(" ").join("-") → "Vigesh-Web-Developer"

8. Check if a String Includes a Character (includes())

.includes("substring") checks if a substring exists in the string.
Returns true if found, otherwise false.
Example: "Vigesh".includes("V") → true

9. Trim Whitespace (trim())

.trim() removes extra spaces from the beginning and end of a string.
Example: " Hello World ".trim() → "Hello World"

10. Template Literals Uses Backticks (``)

Unlike single (') or double (") quotes, template literals use backticks.
Template literals support multi-line strings directly.
No need for + operators to join strings.
Example: let str = `Hello World`;