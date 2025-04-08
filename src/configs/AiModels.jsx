const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [
    ],
    responseMimeType: "application/json",
  };
  
export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
      ],
    });
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());


    export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in Detail on Topic :Python ,Chapter :Basics, in JSON format with the list of array with fields as title, explanation of given chapter in detail. Code Example (Code field in <precode> format) if applicable"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"Python Basics\": [\n    {\n      \"title\": \"Variables and Data Types\",\n      \"explanation\": \"Python is dynamically typed, meaning you don't need to explicitly declare variable types.  The interpreter infers the type at runtime.  Common data types include:\\n\\n* **Integers (int):** Whole numbers (e.g., 10, -5, 0).\\n* **Floating-point numbers (float):** Numbers with decimal points (e.g., 3.14, -2.5).\\n* **Strings (str):** Sequences of characters enclosed in single (' ') or double (\\\" \\\") quotes (e.g., 'Hello', \\\"Python\\\").\\n* **Booleans (bool):** Represent truth values, either True or False.\\n* **NoneType (None):** Represents the absence of a value.\",\n      \"code\": \"<precode>x = 10          # Integer\\ny = 3.14       # Float\\nname = 'Alice'  # String\\nis_active = True # Boolean\\nvalue = None    # NoneType\\nprint(type(x), type(y), type(name), type(is_active), type(value))</precode>\"\n    },\n    {\n      \"title\": \"Operators\",\n      \"explanation\": \"Python supports various operators for performing operations on data:\\n\\n* **Arithmetic operators:** + (addition), - (subtraction), * (multiplication), / (division), // (floor division), % (modulo), ** (exponentiation).\\n* **Comparison operators:** == (equal to), != (not equal to), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to).\\n* **Logical operators:** and, or, not.\\n* **Assignment operators:** =, +=, -=, *=, /=, //=, %=, **=.\\n* **Bitwise operators:** &, |, ^, ~, <<, >> (for bit manipulation).\",\n      \"code\": \"<precode>a = 10\\nb = 5\\nprint(a + b)     # Addition\\nprint(a // b)    # Floor division\\nprint(a % b)     # Modulo\\nprint(a > b)     # Comparison\\nprint(a and b)   # Logical AND\\na += 2          # Assignment</precode>\"\n    },\n    {\n      \"title\": \"Control Flow (if-else statements)\",\n      \"explanation\": \"Control flow statements alter the execution sequence of a program based on conditions.\\n\\n* **if statement:** Executes a block of code only if a condition is true.\\n* **if-else statement:** Executes one block of code if a condition is true, and another block if it's false.\\n* **elif (else if) statement:** Allows checking multiple conditions sequentially.\",\n      \"code\": \"<precode>x = 15\\nif x > 10:\\n    print('x is greater than 10')\\nelif x == 10:\\n    print('x is equal to 10')\\nelse:\\n    print('x is less than 10')</precode>\"\n    },\n    {\n      \"title\": \"Loops (for and while loops)\",\n      \"explanation\": \"Loops repeat a block of code multiple times.\\n\\n* **for loop:** Iterates over a sequence (like a list, tuple, or string) or range of numbers.\\n* **while loop:** Repeats a block of code as long as a condition is true.\",\n      \"code\": \"<precode>numbers = [1, 2, 3, 4, 5]\\nfor num in numbers:\\n    print(num)\\n\\ni = 0\\nwhile i < 5:\\n    print(i)\\n    i += 1</precode>\"\n    },\n    {\n      \"title\": \"Input and Output\",\n      \"explanation\": \"Python provides functions for interacting with the user:\\n\\n* `print()` function displays output to the console.\\n* `input()` function reads input from the user.\",\n      \"code\": \"<precode>name = input('Enter your name: ')\\nprint('Hello, ' + name + '!')</precode>\"\n    },\n    {\n      \"title\": \"Data Structures: Lists and Tuples\",\n      \"explanation\": \"Lists and tuples are used to store collections of items:\\n\\n* **Lists:** Ordered, mutable (changeable) sequences of items. Defined using square brackets `[]`.\\n* **Tuples:** Ordered, immutable (unchangeable) sequences of items. Defined using parentheses `()`.\",\n      \"code\": \"<precode>my_list = [1, 2, 'apple', 3.14]\\nmy_tuple = (1, 2, 'banana', 4.2)\\nprint(my_list[0]) # Accessing elements by index\\n# my_tuple[0] = 5 # This will raise an error because tuples are immutable</precode>\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });