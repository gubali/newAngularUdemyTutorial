import { trigger, state, animate, transition, style } from "@angular/animations";

export const animationConfig = trigger('myAwesomeAnimation', [
    state('small', style({
        transform: 'scale(1)',
    })),
    state('large', style({
        transform: 'scale(1.2)',
    })),
    transition('small <=> large', animate('5000ms ease-in'
    )),
])