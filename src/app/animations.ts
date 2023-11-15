import {
  trigger,
  transition,
  style,
  animate,
  state,
  query,
  stagger,

} from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('500ms ease-in', style({ opacity: 0 })),
  ]),
  state('void', style({ opacity: 0 })),
]);

export const slideInFromLeftAnimation = trigger('slideInFromLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-100%)' }),
    animate(
      '500ms ease-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '500ms ease-in',
      style({ opacity: 0, transform: 'translateX(-100%)' })
    ),
  ]),
  state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
]);

export const slideInFromRightAnimation = trigger('slideInFromRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(100%)' }),
    animate(
      '500ms ease-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '500ms ease-in',
      style({ opacity: 0, transform: 'translateX(100%)' })
    ),
  ]),
  state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
]);

export const slideInFromTopAnimation = trigger('slideInFromTop', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-100%)' }),
    animate(
      '500ms ease-out',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '200ms ease-in',
      style({ opacity: 0, transform: 'translateY(-100%)' })
    ),
  ]),
  state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
]);

export const slideInFromBottomAnimation = trigger('slideInFromBottom', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(100%)' }),
    animate(
      '500ms ease-out',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '500ms ease-in',
      style({ opacity: 0, transform: 'translateY(100%)' })
    ),
  ]),
  state('void', style({ opacity: 0, transform: 'translateY(100%)' })),
]);

export const textChangeAnimation = trigger('textChange', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('300ms ease-out', style({ opacity: 0 })),
  ]),
  state('void', style({ opacity: 0 })),
]);

export const slideInFromBottomFast = trigger('slideInFromBottomFast', [
  state('enter', style({ opacity: 1, transform: 'translateY(0)' })),
  state('leave', style({ opacity: 0, transform: 'translateY(100%)' })),
  transition('* => enter', [
    style({ opacity: 0, transform: 'translateY(100%)' }),
    animate('100ms ease-out'),
  ]),
  transition('* => leave', [
    animate(
      '100ms ease-in',
      style({ opacity: 0, transform: 'translateY(100%)' })
    ),
  ]),
  state('void', style({ opacity: 0, transform: 'translateY(100%)' })),
]);

export const scaleUpAnimation = trigger('scaleUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate(
      '800ms cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      style({ opacity: 1, transform: 'scale(1)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '800ms cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      style({ opacity: 0, transform: 'scale(0.8)' })
    ),
  ]),
  state('void', style({ opacity: 0, transform: 'scale(0.8)' })),
]);

export const rotateAnimation = trigger('rotate', [
  transition(':enter', [
    style({ opacity: 0, transform: 'rotate(-180deg)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'rotate(0deg)' })),
  ]),
  transition(':leave', [
    animate('500ms ease-in', style({ opacity: 0, transform: 'rotate(-180deg)' })),
  ]),
  state('void', style({ opacity: 0, transform: 'rotate(-180deg)' })),
]);

export const listItemAnimation = trigger('listItem', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        stagger(100, [
          animate('500ms ease-out', style({ opacity: 1, transform: 'none' })),
        ]),
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        stagger(100, [
          animate('500ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

// Rocket Animation Stuff
export const uploadBoxAnimation = trigger('uploadBoxAnimation', [
  state(
    'default',
    style({
      backgroundColor: '{{defaultColor}}',
    }),
    { params: { defaultColor: '#03223a' } }
  ),
  state(
    'success',
    style({
      backgroundColor: '#31D892',
    })
  ),
  transition('default => success', [animate('0.5s ease-in-out')]),
  transition('success => default', [animate('0.5s ease-in-out')]),
]);