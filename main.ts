input.onGesture(Gesture.TiltRight, function () {
    value2 += -1
    DISPLAY_SUM_VALUE()
})
input.onGesture(Gesture.TiltLeft, function () {
    value1 += -1
    DISPLAY_SUM_VALUE()
})
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
    display_text1 = "" + value1 + "+" + value2 + "=" + sum_value
    display_text2 = "" + value1 + "-" + value2 + "=" + 빼기
    display_text3 = "" + value1 + "*" + value2 + "=" + 곱하기
    display_text4 = "" + value1 + "/" + value2 + "=" + 나누기
    OLED.clear()
    OLED.writeStringNewLine(display_text1)
    OLED.writeStringNewLine("")
    OLED.writeStringNewLine(display_text2)
    OLED.writeStringNewLine("")
    OLED.writeStringNewLine(display_text3)
    OLED.writeStringNewLine("")
    OLED.writeStringNewLine(display_text4)
}
let display_text4 = ""
let display_text3 = ""
let display_text2 = ""
let display_text1 = ""
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
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        value1 += 2
        DISPLAY_SUM_VALUE()
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        value2 += 2
        DISPLAY_SUM_VALUE()
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        value1 += -2
        DISPLAY_SUM_VALUE()
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
        value1 = 0
        value2 = 0
        DISPLAY_SUM_VALUE()
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        value2 += -2
        DISPLAY_SUM_VALUE()
    }
})
