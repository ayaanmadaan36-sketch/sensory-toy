def on_gesture_logo_up():
    music.play(music.builtin_playable_sound_effect(soundExpression.hello),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_icon(IconNames.FABULOUS)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_shake():
    music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_icon(IconNames.HAPPY)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    pass
basic.forever(on_forever)
