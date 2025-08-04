input.onButtonPressed(Button.A, function () {
    value1 += 1
    DISPLAY_SUM_VALUE()
})
input.onButtonPressed(Button.AB, function () {
    value1 = 0
    value2 = 0
    DISPLAY_SUM_VALUE()
})
input.onButtonPressed(Button.B, function () {
    value2 += 1
    DISPLAY_SUM_VALUE()
})
function DISPLAY_SUM_VALUE () {
    sum_value = value1 + value2
    빼기 = value1 - value2
    곱하기 = value1 * value2
    나누기 = value1 / value2
    display_text = "" + value1 + "+" + value2 + "=" + sum_value + "      " + value1 + "-" + value2 + "=" + 빼기 + "     " + value1 + "*" + value2 + "=" + 곱하기 + "      " + value1 + "/" + value2 + "=" + 나누기
    OLED.clear()
    OLED.writeStringNewLine(display_text)
}
let display_text = ""
let 나누기 = 0
let 곱하기 = 0
let 빼기 = 0
let sum_value = 0
let value2 = 0
let value1 = 0
OLED.init(128, 64)
value1 = 0
value2 = 0
DISPLAY_SUM_VALUE()
basic.forever(function () {
	
})
