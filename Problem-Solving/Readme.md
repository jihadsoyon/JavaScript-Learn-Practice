
Problem-01: New Price for Eid Sale
⚠️ Function Name Must be newPrice()
On the occasion of the upcoming Eid, you want to give a discount on the products in your store. But it is a hassle to calculate the new price of each product separately. So you want to create a function, which will take the original price and the discount% and return the new price.

Input :
First input: A number which is the original price. currentPrice will be Number
Second input: A number which is the discount. discount will be Number in %

Output : The function will return the new price after discount. The output can also be a decimal number. 3 places must be shown after the decimal.

Challenge 📢 : If there is no input number, or if the discount amount is less than 0 and greater than 100, then Invalid string will be returned.

Hints 💡: If the currentPrice of a product = 1500 taka and discount = 20%, then:
Find the discount amount, discount amount = (1500 * 20) / 100 = 300 taka


Problem-02: OTP Validation for Zapshift
⚠️ Function Name Must be validOtp()

Zapshift company sends OTP while delivering their product. But some people receive the product using Fraud OTP. So your job is to create a function, which will check if the OTP is correct.
The function will return a Boolean (true/false). If the input is not in the correct format, it will return Invalid.

Input: The input will be a string.

🚀 Output:
Boolean will return true or false

🚩 Challenge:
If the input is not a String (such as: Number, Array or Object), then Invalid must be returned as the output.

💡 Validation Rules:
1. OTP must be 8 characters (length).
2. OTP must start with "ph-".

Hints 💡: You can use startsWith() method.


Problem-03: BCS Final Score Calculator
⚠️ Function Name Must be finalScore()
The OMR sheet of BCS exam is checked digitally. It can calculate all the right, wrong, missed, but cannot calculate the final score. Your task is to create a function that takes an Object and calculates the final score.
Function Function: The function takes an Object as input and returns the result according to the following conditions and rules.
📥 Input:
An Object whose properties will be: { right: Number, wrong: Number, skip: Number }

Output: The final score will be a number and rounded. (Number, Rounded)

🎯 BCS Exam Rules:
Total number of questions = 100.
So, the sum of right + wrong + skip in the input must be 100.

🚩 Challenge:
If the sum of right + wrong + skip is not 100, then Invalid must be returned as output.

💡 Scoring Rules:
For each correct answer: +1 point.
For each wrong answer: -0.5 points (0.5 marks will be deducted).
For skipped questions: 0 points.

💡Hints: You can use Math.round() function to get rounded values.



Problem-04: Upcoming Gono Vote
⚠️ Function Name Must be gonoVote()
You have been given a task to analyze the results of the upcoming referendum. The vote data is stored in an Array where the voters' opinions are either "ha" or "na". Your task is to create a function that will count the votes and see if the "ha" vote is the majority or not.
Function Function: The function takes an Array as input and returns a Boolean (true/false) or equal (string) based on the number of votes.
📥 Input:
The input will be an Array. For example: ["ha", "na", "ha"]

🚀 Output:
If the number "ha" is greater than "na" → true
If the number "ha" is equal to "na" → “equal”
Otherwise → false

🚩 Challenge:
If the input is not an Array (for example: String, Number or Object), then Invalid must be returned as output.


Problem-05: Text Analyzer for an AI Company
⚠️ Function Name Must be analyzeText()
Jihad works in an AI company.
Sometimes users input very large text. It takes AI more time to work with such large text.
So Jihad wants to create a function that will help analyze large text by making it a little smaller.
You need to write a function that—
1️⃣ Takes a text (string) as input
2️⃣ Finds the largest (longest) word from that text
3️⃣ Counts the total number of characters in the entire text
➡️ Spaces will not be counted
Using this information, Jihad can create a short summary.
👉 Your task is to create a function using this logic.
Function function: The function will take a String as input and return an Object containing the largest word and the total number of characters.

📥 Input:
The input will be a String (a full sentence).

🚀 Output:
Object: { longwords:String, token: Number }
longwords → A string of the largest words (the first if the highest size word is multiple)
token → Total length of the sentence without spaces

Challenge 📢 : If the input is not a String (e.g. Number, Array or Object), then Invalid should be returned as the output.

Hints 💡: You can use split(), join() methods.