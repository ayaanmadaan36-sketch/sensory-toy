input.onGesture(Gesture.LogoUp, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Fabulous)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Meh)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.TiltRight, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.LogoDown, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Sad)
})
