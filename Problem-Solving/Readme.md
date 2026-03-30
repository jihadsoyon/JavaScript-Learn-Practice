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

SAMPLE INPUT:
1500, 20
2000, 15
1200, 7
"1000", 10
2000, 17.17
500, "5"
SAMPLE OUTPUT:
1200.000
1700.000
1116.000
Invalid
1656.600
Invalid





